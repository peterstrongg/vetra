import Sidebar from "./sidebar";

export default function RootLayout({ children }) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}