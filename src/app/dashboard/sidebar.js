import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 fixed h-full top-0 left-0 shadow-md">
      <div className="p-6 text-xl font-bold border-b border-gray-700">Vetra Console</div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link href="/dashboard"><span className="hover:bg-gray-700 px-4 py-2 rounded">Home</span></Link>
        <Link href="/dashboard/playbooks"><span className="hover:bg-gray-700 px-4 py-2 rounded">Playbooks</span></Link>
        <Link href="/dashboard/hosts"><span className="hover:bg-gray-700 px-4 py-2 rounded">Hosts</span></Link>
        <Link href="/dashboard/inventories"><span className="hover:bg-gray-700 px-4 py-2 rounded">Inventories</span></Link>
        <Link href="/dashboard/ansible-galaxy"><span className="hover:bg-gray-700 px-4 py-2 rounded">Galaxy Management</span></Link>
        <Link href="/dashboard/schedules"><span className="hover:bg-gray-700 px-4 py-2 rounded">Schedules</span></Link>
        <Link href="/dashboard/logs"><span className="hover:bg-gray-700 px-4 py-2 rounded">Logs</span></Link>
      </nav>
    </aside>
  );
}