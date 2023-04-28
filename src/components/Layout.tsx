import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }: any) {
  return (
    <div className="content">
      {" "}
      <Navbar></Navbar>
      <div className="flex h-screen flex-row text-white">
        <Sidebar></Sidebar>
        {children}
      </div>{" "}
    </div>
  );
}
