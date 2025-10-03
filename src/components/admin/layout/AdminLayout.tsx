import { ReactNode } from "react";
import AdminPage from "@/components/admin/layout/AdminPage";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex" }}>
      <AdminPage />
      <main style={{ flex: 1, padding: "20px" }}>{children}</main>
    </div>
  );
}
