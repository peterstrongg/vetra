import Link from "next/link";
import Sidebar from "../sidebar";

export default function Playbooks() {
  const playbooks = [
    { name: "deploy_web.yml", uploaded: "2025-07-24", lastRun: "2025-07-25", status: "success" },
    { name: "restart_services.yml", uploaded: "2025-07-20", lastRun: "2025-07-25", status: "pending" },
    { name: "update_nodes.yml", uploaded: "2025-07-18", lastRun: "2025-07-23", status: "failed" },
  ];

  return (
    <div className="flex min-h-screen bg-neutral-100 text-gray-900">
      {/* 📊 Main Content */}
      <main className="ml-64 flex-1 py-10 px-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-6 text-center">🧭 Vetra Dashboard</h1>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-200 text-gray-600">
              <tr>
                <th className="px-4 py-2">Playbook</th>
                <th className="px-4 py-2">Uploaded</th>
                <th className="px-4 py-2">Last Run</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {playbooks.map((pb) => (
                <tr key={pb.name} className="hover:bg-gray-100">
                  <td className="px-4 py-2">
                    <Link href={`/playbook/${encodeURIComponent(pb.name)}`}>
                      <span className="text-gray-700 hover:text-gray-700">{pb.name}</span>
                    </Link>
                  </td>
                  <td className="px-4 py-2">{pb.uploaded}</td>
                  <td className="px-4 py-2">{pb.lastRun}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded font-semibold text-white
                      ${pb.status === "success"
                        ? "bg-green-500"
                        : pb.status === "failed"
                        ? "bg-red-500"
                        : "bg-yellow-500"
                      }`}>
                      {pb.status}
                    </span>
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
