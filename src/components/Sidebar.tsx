import { NavLink } from "react-router-dom";
import { useStatContext } from "../context/StatsContext";
const Sidebar = () => {
  const { renewingSoon } = useStatContext();

  return (
    <>
      <section className="bg-bg2 p-4 border-r-2 border-border  sticky">
        <div className="max-w-md w-full ">
          <div className="flex flex-col gap-10 md:min-h-screen   ">
            {/*HEADER*/}
            <div className="hidden md:block">
              <h1 className="text-xl text-accent font-Syne font-extrabold ">
                SubTrack
              </h1>
              <p className="text-text3 text-xs">subscription manager</p>
            </div>
            {/*NAVIGATION*/}
            <div>
              <h2 className="text-xs uppercase text-text3 font-Syne hidden md:block">
                Menu
              </h2>
              {/*NAV-LINKS*/}
              <nav className="flex flex-row md:flex-col mt-0 md:mt-4 justify-around md:justify-start gap-1">
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `py-1 px-2 md:text-sm md:text-left font-syne font-bold rounded-lg hover:bg-bg3 ${
                      isActive
                        ? "text-accent bg-accent-dim border border-accent"
                        : "text-text3"
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/dashboard/analytics"
                  className={({ isActive }) =>
                    `py-1 px-2  text-xs md:text-sm md:text-left font-syne font-bold rounded-lg hover:bg-bg3 ${
                      isActive
                        ? "text-accent bg-accent-dim border border-accent"
                        : "text-text3"
                    }`
                  }
                >
                  Analytics
                </NavLink>
                <NavLink
                  to="/dashboard/addsubscription"
                  className={({ isActive }) =>
                    `py-1 px-2 text-xs md:text-sm md:text-left font-syne font-bold rounded-lg hover:bg-bg3 ${
                      isActive
                        ? "text-accent bg-accent-dim border border-accent"
                        : "text-text3"
                    }`
                  }
                >
                  Add New
                </NavLink>
                <NavLink
                  to="/dashboard/settings"
                  className={({ isActive }) =>
                    `py-1 px-2 text-xs md:text-sm md:text-left font-syne font-bold rounded-lg hover:bg-bg3 ${
                      isActive
                        ? "text-accent bg-accent-dim border border-accent"
                        : "text-text3"
                    }`
                  }
                >
                  Settings
                </NavLink>
                <div className="hidden md:block;">
                  <h2 className="text-xs uppercase text-text3 font-Syne my-4">
                    Upcoming
                  </h2>
                  <button
                    className="
                    py-1 px-2 text-sm text-text2 font-syne font-bold rounded-lg hover:bg-bg3 flex justify-between items-center ${
                      "
                  >
                    Renewals{" "}
                    <span className="bg-red text-white rounded-full w-4  h-4 flex items-center justify-center">
                      {renewingSoon.length}
                    </span>
                  </button>
                </div>
              </nav>
            </div>
            {/*FOOTER*/}
            <div className="mt-auto mb-8 hidden md:block">
              <div className="bg-border h-[1px] w-full mb-4"></div>
              <NavLink
                to="/addsubscription"
                className="bg-accent px-4 py-2 rounded-lg font-Syne font-bold"
              >
                Add Subscription
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sidebar;
