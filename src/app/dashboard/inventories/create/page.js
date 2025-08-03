"use client";

import Link from "next/link";
import Sidebar from "../../sidebar";
import { API_URL } from "@/lib/config";
import { useState } from "react";

export default function CreateInventory() {
  const [inventoryName, setInventoryName] = useState("");
  const [tags, setTags] = useState("");
  const [hostsText, setHostsText] = useState("");

  const handleHostsChange = (e) => {
    setHostsText(e.target.value);
  };

  const handleHostsKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const { selectionStart, selectionEnd } = e.target;
      const tabCharacter = "  ";
      const newValue =
        hostsText.substring(0, selectionStart) +
        tabCharacter +
        hostsText.substring(selectionEnd);
      setHostsText(newValue);
      setTimeout(() => {
        e.target.selectionStart = e.target.selectionEnd = selectionStart + tabCharacter.length;
      }, 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inventoryName.trim() || !hostsText.trim()) return;

    const payload = {
      name: inventoryName,
      tags: tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      inventoryYaml: hostsText,
    };

    fetch(`${API_URL}/api/v1/create-inventory`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify(payload),
    }).then((res) => {
      if (!res.ok) throw new Error("Failed to submit inventory");
      return res.json();
    }).then((data) => {
      console.log("Inventory created:", data);
    }).catch((error) => {
      console.error("Error creating inventory:", error);
    });
  };

  return (
    <div className="flex min-h-screen bg-neutral-100 text-gray-900">
      <main className="ml-64 flex-1 py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          ➕ Create Inventory
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Inventory Name
              </label>
              <input
                type="text"
                value={inventoryName}
                onChange={(e) => setInventoryName(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
                placeholder="e.g., prod-cluster"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded text-sm"
                placeholder="backend, nginx, database"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Hosts (YAML format)
              </label>
              <textarea
                value={hostsText}
                onChange={handleHostsChange}
                onKeyDown={handleHostsKeyDown}
                spellCheck="false"
                className="w-full px-3 py-2 rounded text-sm h-48 border border-gray-300"
                placeholder={`all:\n  hosts:\n    web-node:\n      ansible_host: 10.0.0.10`}
              />
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                ✅ Submit Inventory
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
