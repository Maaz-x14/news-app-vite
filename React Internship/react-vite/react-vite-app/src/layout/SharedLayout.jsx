import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
