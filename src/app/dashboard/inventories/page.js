"use client";

import Link from "next/link";
import Sidebar from "../sidebar";
import { useState, useEffect } from "react";

export default function Inventories() {
  const [inventories, setInventories] = useState([
    {
      name: "prod-web-servers",
      hosts: 12,
      type: "Static",
      lastUpdated: "2025-07-29",
    },
    {
      name: "dev-database",
      hosts: 5,
      type: "Dynamic",
      lastUpdated: "2025-07-30",
    },
    {
      name: "qa-env",
      hosts: 8,
      type: "Static",
      lastUpdated: "2025-07-25",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-neutral-100 text-gray-900">
      <main className="ml-64 flex-1 py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">📦 Inventories</h1>

        <div className="max-w-4xl mx-auto mb-4 flex justify-between items-center">
          <Link href="/dashboard/inventories/create">
          <span
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Create Inventory
          </span>
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Hosts</th>
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">Last Updated</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventories.map((inv) => (
                <tr key={inv.name} className="hover:bg-gray-100">
                  <td className="px-4 py-2">{inv.name}</td>
                  <td className="px-4 py-2">{inv.hosts}</td>
                  <td className="px-4 py-2">{inv.type}</td>
                  <td className="px-4 py-2">{inv.lastUpdated}</td>
                  <td className="px-4 py-2">
                    <Link href={`/inventory/${encodeURIComponent(inv.name)}`}>
                      <span className="text-blue-600 hover:underline">Modify</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
