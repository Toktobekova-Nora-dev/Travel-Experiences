import React from "react";
import scss from "./AdminPage.module.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div className={scss.wrapper}>
      {/* Sidebar */}
      <div className={scss.sidebar}>
        <h2>Travel Admin</h2>
        <nav>
          <ul>
            <li>
              <Link href="/admin/dashboard">📊 Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/media">🖼 Media</Link>
            </li>
            <li>
              <Link href="/admin/news">📰 News</Link>
            </li>
            <li>
              <Link href="/admin/settings">⚙️ Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AdminPage;
