import { useLocation } from "react-router-dom";
import { useStatContext } from "../context/StatsContext";
import { useCurrencyContext } from "../context/CurrencyContext";
import { useTheme } from "../context/ThemeContext";

const Topbar = () => {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/analytics":
        return "Analytics";
      case "/settings":
        return "Settings";
      case "/addsubscription":
        return "Add Subscription";
      default:
        return "Dashboard";
    }
  };
  const { monthlySpend, annualSpend } = useStatContext();
  const { currFormat, cycleCurrency, currency, symbol } = useCurrencyContext();
  const { toggleTheme, theme } = useTheme();

  return (
    <>
      <section className="bg-bg2 text-text px-4 py-4 border-b-2 border-border ">
        <div className="flex gap-20 justify-between">
          <h1 className="font-Syne text-2xl font-bold">{getTitle()}</h1>
          <div className="ml-auto flex gap-4 items-center md:gap-10">
            {/*Monthly + Annual -hidden on mobile*/}
            <div className="hidden md:block">
              <h4 className="font-Syne uppercase text-xs text-text3">
                Monthly Spend
              </h4>
              <p className="text-accent font-bold">
                {currFormat(monthlySpend)}
              </p>
            </div>
            <div className="w-px bg-border h-full hidden md:block"></div>
            <div className="hidden md:block">
              <h4 className="font-Syne uppercase text-xs text-text3">
                Annual{" "}
              </h4>
              <p className="text-accent font-bold">{currFormat(annualSpend)}</p>
            </div>

            <div className="w-px bg-border h-full hidden md:block"></div>
            {/*Currency + Theme*/}
            <button
              onClick={cycleCurrency}
              className=" flex gap-2 border border-border justify-center items-center p-2 rounded-lg hover:border-accent hover:text-accent text-sm font-bold"
            >
              <span> {symbol}</span>
              <span>{currency}</span>
            </button>
            <button onClick={toggleTheme}>
              {" "}
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Topbar;
