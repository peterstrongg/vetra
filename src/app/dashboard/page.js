import Link from "next/link";
import Sidebar from "./sidebar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-neutral-100 text-gray-900">
      <main className="ml-64 flex-1 py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">🧭 Vetra Dashboard</h1>
      </main>
    </div>
  );
}
