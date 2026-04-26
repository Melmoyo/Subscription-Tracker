import { useLocation } from "react-router-dom";
import { useStatContext } from "../context/StatsContext";
import { useCurrencyContext } from "../context/CurrencyContext";
import { useThemeContext } from "../context/ThemeContext";

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
  const { toggleTheme, theme } = useThemeContext();

  return (
    <>
      <section className="bg-bg2 text-text px-4 py-4 border-b-2 border-border">
        <div>
          <div className="flex gap-20 justify-between">
            <h1 className="font-Syne text-2xl font-bold">{getTitle()}</h1>
            <div className="ml-auto flex  gap-10">
              <div>
                <h4 className="font-Syne uppercase text-xs text-text3">
                  Monthly Spend
                </h4>
                <p className="text-accent font-bold">
                  {currFormat(monthlySpend)}
                </p>
              </div>
              <div className="w-px bg-border h-full"></div>
              <div>
                <h4 className="font-Syne uppercase text-xs text-text3">
                  Annual{" "}
                </h4>
                <p className="text-accent font-bold">
                  {currFormat(annualSpend)}
                </p>
              </div>

              <div className="w-px bg-border h-full"></div>
              <button
                onClick={cycleCurrency}
                className=" flex gap-2 border border-border justify-center items-center p-2 rounded-lg hover:border-accent hover:text-accent text-sm font-bold"
              >
                <span> {symbol}</span>
                <span>{currency}</span>
              </button>
              <button onClick={toggleTheme}> {theme}</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Topbar;
