import React, { FC, ReactNode } from "react";
import css from "./layout.module.scss";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface layout {
  children: ReactNode;
}

const Layout: FC<layout> = ({ children }) => {
  return (
    <div className={css.layout}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
