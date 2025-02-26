"use client";

import { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";

const branches = [
  {
    name: "Vesse esindus",
    address: "Vesse 4, Lasnamäe, 11415, Tallinn",
    distance: "2,1 km",
    closesAt: "18:00",
  },
  {
    name: "Vesse esindus",
    address: "Vesse 4, Lasnamäe, 11415, Tallinn",
    distance: "2,1 km",
    closesAt: "18:00",
  },
  {
    name: "Vesse esindus",
    address: "Vesse 4, Lasnamäe, 11415, Tallinn",
    distance: "2,1 km",
    closesAt: "18:00",
  },
  {
    name: "Vesse esindus",
    address: "Vesse 4, Lasnamäe, 11415, Tallinn",
    distance: "2,1 km",
    closesAt: "18:00",
  },
];

export default function BranchList() {
  const [selected, setSelected] = useState("Kõik");
  const filters = ["Kõik", "Tallinn", "Harjumaa", "Narva"];

  return (
    <div className="p-4 max-w-md mx-auto bg-white">
      <h1 className="text-2xl font-bold mb-4">Meie esindused</h1>
      <div className="flex space-x-4 mb-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={`px-4 py-1 rounded-full border ${
              selected === filter ? "border-orange-500 text-orange-500" : "border-transparent"
            } font-medium`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="divide-y">
        {branches.map((branch, index) => (
          <div key={index} className="py-4 flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{branch.name}</h2>
              <p className="text-sm text-gray-600">{branch.address}</p>
              <p className="text-sm text-green-600">🟢 Closes {branch.closesAt}</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-orange-500" size={16} />
              <span className="text-sm">{branch.distance}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg flex justify-center items-center space-x-2">
        <span>Vaata kaardil</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
