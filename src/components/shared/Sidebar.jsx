import { LinkList, HeaderIcons } from "./sidebar-comps";

const Sidebar = ({isSidebarOpen, setIsSidebarOpen}) => {
  return (
    <aside
      className={`w-full h-full fixed z-50 top-0 left-0 bg-black p-6 transition-all ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <HeaderIcons
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <LinkList
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
    </aside>
  );
};

export default Sidebar;
