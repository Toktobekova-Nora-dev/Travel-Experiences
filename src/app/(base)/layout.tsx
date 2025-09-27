import Layout from "@/components/layout/Layout";
import React, { FC, ReactNode } from "react";

interface ILayout {
  children: ReactNode;
}

const layout: FC<ILayout> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default layout;
