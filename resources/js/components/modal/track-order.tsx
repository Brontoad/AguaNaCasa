import ModalLayout from "@/layouts/modal-layout";
import { ORDER_STATUS } from "@/pages/config";
import { Order } from "@agc/model";
import { router } from "@inertiajs/react";
import "../../../css/order/track-order.css";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef } from "react";

export default function TrackOrderModal({ order, closeModal }: { order: Order; closeModal(): void }) {
    function pickUpOrder() { router.put(`/order/pick_up/${order.id}`); }
    function deliverOrder() { router.put(`/order/deliver/${order.id}`); }

    const mapRef = useRef<L.Map | null>(null);
    const routeLayerRef = useRef<L.Polyline | null>(null);
    const markerRef = useRef<L.Marker | null>(null);
    const lastPosRef = useRef<{ x: number; y: number } | null>(null);

    useEffect(() => {
        if (mapRef.current || !order?.destination_address) return;
        const timer = setTimeout(() => {
            const el = document.getElementById("map");
            if (!el) return;
            mapRef.current = L.map(el).setView([order.destination_address.y, order.destination_address.x], 13);
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "&copy; OpenStreetMap contributors"}).addTo(mapRef.current);
            L.marker([order.destination_address.y, order.destination_address.x]).addTo(mapRef.current);
        }, 150);
        return () => clearTimeout(timer);
    }, [order]);

    async function fetchRoute(fromLat: number, fromLng: number, toLat: number, toLng: number) {
        const res = await fetch(`https://router.project-osrm.org/route/v1/driving/` + `${fromLng},${fromLat};${toLng},${toLat}?overview=full&geometries=geojson`);
        const data = await res.json();
        console.log("data route: ", data);
        const coords = data.routes[0].geometry.coordinates;
        return coords.map((c: number[]) => [c[1], c[0]] as [number, number]);
    }

    async function drawRoute(fromLat: number, fromLng: number) {
        if (!mapRef.current) return;
        const toLat = order.destination_address.y;
        const toLng = order.destination_address.x;
        const route = await fetchRoute(fromLat, fromLng, toLat, toLng);
        if (routeLayerRef.current && mapRef.current) { mapRef.current.removeLayer(routeLayerRef.current); }
        routeLayerRef.current = L.polyline(route, { color: "#2ecc71", weight: 5 }).addTo(mapRef.current);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            navigator.geolocation.getCurrentPosition((pos) => {
                const { latitude, longitude } = pos.coords;
                if (!mapRef.current) return;
                const movedEnough = !lastPosRef.current || Math.abs(lastPosRef.current.x - latitude) > 0.0003 || Math.abs(lastPosRef.current.y - longitude) > 0.0003;

                if (movedEnough) { drawRoute(latitude, longitude); lastPosRef.current = { x: latitude, y: longitude }; }

                if (!markerRef.current) { markerRef.current = L.marker([latitude, longitude]).addTo(mapRef.current); } 
                else { markerRef.current.setLatLng([latitude, longitude]); }
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [order]);

    return (
        <ModalLayout
            title="Track Order"
            handleClose={() => closeModal()}
            actionButtons={[
                order.status === ORDER_STATUS.TO_PICK_UP && (<button className="save-btn to-pick-up" key="pick-btn" onClick={pickUpOrder}>Pick-up Order</button>),
                order.status === ORDER_STATUS.ON_DELIVERY && (<button className="save-btn delivery" key="deliver-btn" onClick={deliverOrder}>Deliver Order</button>)
            ]}
        >
            <div className="map-wrapper"><div id="map" className="map-container" /></div>
        </ModalLayout>
    );
}