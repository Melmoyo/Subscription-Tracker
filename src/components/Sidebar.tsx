import { NavLink } from "react-router-dom";
import { useStatContext } from "../context/StatsContext";
const Sidebar = () => {
  const { renewingSoon } = useStatContext();
  console.log(renewingSoon);
  return (
    <>
      <section className="bg-bg2 p-4 border-r-2 border-border fixed">
        <div className="max-w-md w-full ">
          <div className="flex flex-col gap-10 min-h-screen   ">
            {/*HEADER*/}
            <div>
              <h1 className="text-xl text-accent font-Syne font-extrabold ">
                SubTrack
              </h1>
              <p className="text-text3 text-xs">subscription manager</p>
            </div>
            {/*NAVIGATION*/}
            <div className="">
              <h2 className="text-xs uppercase text-text3 font-Syne">Menu</h2>
              {/*NAV-LINKS*/}
              <nav className="flex flex-col mt-4 ">
                <NavLink
                  to="/dashboard"
                  end
                  className={({ isActive }) =>
                    `py-1 px-2 text-sm font-syne font-bold rounded-lg hover:bg-bg3 ${
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
                    `py-1 px-2 text-sm font-syne font-bold rounded-lg hover:bg-bg3 ${
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
                    `py-1 px-2 text-sm font-syne font-bold rounded-lg hover:bg-bg3 ${
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
                    `py-1 px-2 text-sm font-syne font-bold rounded-lg hover:bg-bg3 ${
                      isActive
                        ? "text-accent bg-accent-dim border border-accent"
                        : "text-text3"
                    }`
                  }
                >
                  Settings
                </NavLink>
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
              </nav>
            </div>
            {/*FOOTER*/}
            <div className="mt-auto mb-8">
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
