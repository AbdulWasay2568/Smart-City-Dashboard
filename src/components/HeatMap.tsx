import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import L from "leaflet";

const heatmapData: [number, number, number?][] = [
  [33.6844, 73.0479, 0.8], // Islamabad
  [31.5204, 74.3587, 0.6], // Lahore
  [24.8607, 67.0011, 1.0], // Karachi
  [34.0151, 71.5249, 0.5], // Peshawar
  [30.1575, 71.5249, 0.3], // Multan
];

const HeatLayer = () => {
  const map = useMap();

  React.useEffect(() => {
    const heatLayer = L.heatLayer(heatmapData, {
      radius: 25,
      blur: 20,
      maxZoom: 17,
      gradient: {
        0.1: "#00f",
        0.3: "#0ff",
        0.5: "#0f0",
        0.7: "#ff0",
        1.0: "#f00",
      },
    }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map]);

  return null;
};

const Heatmap = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow h-full">
      <h3 className="text-lg font-semibold mb-2">🔥 Issue Density Heatmap</h3>
      <div className="h-64 rounded overflow-hidden">
        <MapContainer
          center={[30.3753, 69.3451]} // Center of Pakistan
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <HeatLayer />
        </MapContainer>
      </div>
    </div>
  );
};

export default Heatmap;
