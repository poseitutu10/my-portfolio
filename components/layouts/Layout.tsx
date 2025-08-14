import { ChildrenProps } from "@/interfaces";
import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="px-5 py-5 md:px-[10%] ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
