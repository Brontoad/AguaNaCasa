import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import { Address } from '@agc/model';


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

const LocationPicker: React.FC<LocationPickerProps> = ({ 
    onAddressSelect, 
    initialPosition = [6.9214, 122.0790] 
}) => {
    const [position, setPosition] = useState<L.LatLng | null>(
        new L.LatLng(initialPosition[0], initialPosition[1])
    );
    const [isFetching, setIsFetching] = useState<boolean>(false);

    const reverseGeocode = async (lat: number, lng: number): Promise<void> => {
        setIsFetching(true);
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`);
            if (!response.ok) throw new Error('Network response was not ok');
            const data: NominatimResponse = await response.json();
            const selectedAddress: LeafletAddress = {
                label: data.address.road || data.address.suburb || "Selected Location",
                x: +lng.toFixed(6),
                y: +lat.toFixed(6),
                location: data.display_name,
            };
            onAddressSelect(selectedAddress);
        } catch (error) {console.error("Geocoding failed:", error);} 
        finally {setIsFetching(false);}
    };

    const MapEventsHandler: React.FC = () => {
        useMapEvents({
            click(e: L.LeafletMouseEvent) {
                const { lat, lng } = e.latlng;
                setPosition(e.latlng);
                reverseGeocode(lat, lng);
            },
        });
        return null;
    };

    // Custom CSS for the loading indicator to replace Tailwind's animate-pulse
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
                    <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                    Loading Address...
                </div>
            )}
            
            <MapContainer 
                center={initialPosition} 
                zoom={13} 
                style={{ height: '450px', width: '100%', borderRadius: '8px', zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEventsHandler />
                {position && <Marker position={position} />}
            </MapContainer>
        </div>
    );
};

export default LocationPicker;