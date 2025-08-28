import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Bikin custom icon biar gak error default icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapEmbed() {
  // Lokasi Villa Hamsa (contoh dari link Google Maps kamu)
  const position: [number, number] = [-7.908608851605425, 112.5717496855844];

  return (
    <div className="w-full h-50 rounded-xl overflow-hidden shadow-md">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            📍 Villa Hamsa <br /> Batu, Malang
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
