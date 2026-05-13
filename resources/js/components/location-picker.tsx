import React, { useEffect, useState } from 'react';
import {
    MapContainer,
    TileLayer,
    Marker,
    useMapEvents,
    useMap
} from 'react-leaflet';

import L from 'leaflet';

export interface LeafletAddress {
    label: string,
    x: number,
    y: number,
    location: string
}

interface LocationPickerProps {
    onAddressSelect(address: LeafletAddress): void;
    initialPosition?: [number, number];
}

interface NominatimResponse {
    display_name: string;
    address: {
        road?: string;
        city?: string;
        suburb?: string;
        county?: string;
        country?: string;
    };
}

const DEFAULT_POSITION: [number, number] = [6.9214, 122.0790];

function RecenterMap({ position }: { position: [number, number] }) {
    const map = useMap();

    useEffect(() => {
        map.setView(position, 13);
    }, [position, map]);

    return null;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
    onAddressSelect,
    initialPosition
}) => {

    const [mapPosition, setMapPosition] = useState<[number, number]>(
        initialPosition ?? DEFAULT_POSITION
    );

    const [position, setPosition] = useState<L.LatLng | null>(
        new L.LatLng(
            (initialPosition ?? DEFAULT_POSITION)[0],
            (initialPosition ?? DEFAULT_POSITION)[1]
        )
    );

    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        if (!initialPosition && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (currentPosition) => {
                    const lat = currentPosition.coords.latitude;
                    const lng = currentPosition.coords.longitude;

                    setMapPosition([lat, lng]);
                    setPosition(new L.LatLng(lat, lng));

                    reverseGeocode(lat, lng);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        }
    }, []);

    const reverseGeocode = async (
        lat: number,
        lng: number
    ): Promise<void> => {

        setIsFetching(true);

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data: NominatimResponse = await response.json();

            const selectedAddress: LeafletAddress = {
                label:
                    data.address.road ||
                    data.address.suburb ||
                    "Selected Location",

                x: +lng.toFixed(6),
                y: +lat.toFixed(6),
                location: data.display_name,
            };

            onAddressSelect(selectedAddress);

        } catch (error) {
            console.error("Geocoding failed:", error);
        } finally {
            setIsFetching(false);
        }
    };

    const MapEventsHandler: React.FC = () => {
        useMapEvents({
            click(e: L.LeafletMouseEvent) {
                const { lat, lng } = e.latlng;

                setPosition(e.latlng);
                setMapPosition([lat, lng]);

                reverseGeocode(lat, lng);
            },
        });

        return null;
    };

    const loadingStyle: React.CSSProperties = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '5px 15px',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#19A7CE'
    };

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            {isFetching && (
                <div style={loadingStyle}>
                    <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                    ></span>

                    Loading Address...
                </div>
            )}

            <MapContainer
                center={mapPosition}
                zoom={13}
                style={{
                    height: '450px',
                    width: '100%',
                    borderRadius: '8px',
                    zIndex: 0
                }}
            >
                <RecenterMap position={mapPosition} />

                <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

                <MapEventsHandler />

                {position && (
                    <Marker position={position} />
                )}
            </MapContainer>
        </div>
    );
};

export default LocationPicker;