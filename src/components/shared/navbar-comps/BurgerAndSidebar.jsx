"use client";
import { BurgerIcon } from "../../../../public/assets";
import { Sidebar } from "..";
import { useState, useEffect } from "react";

const BurgerAndSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //
  useEffect(() => {
    isSidebarOpen
      ? (document.documentElement.style.overflowY = "hidden")
      : (document.documentElement.style.overflowY = "auto");
  },[isSidebarOpen])
  //
  return (
    <div className="tab:hidden">
      <div onClick={() => setIsSidebarOpen(true)}>
        <BurgerIcon className="cursor-pointer" />
      </div>
      <Sidebar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
};

export default BurgerAndSidebar;
