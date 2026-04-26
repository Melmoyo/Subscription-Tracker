import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <section className="homepage">
        <div className="sidebar ">
          <Sidebar />
        </div>
        <div className="topbar">
          <Topbar />
        </div>
        <div className="main">
          <Outlet />
        </div>
      </section>
    </>
  );
};
export default HomePage;
