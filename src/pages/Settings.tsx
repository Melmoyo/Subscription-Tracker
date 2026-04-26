import { useState } from "react";
import { useCurrencyContext } from "../context/CurrencyContext";
import { useTheme } from "../context/ThemeContext";
import { useNotificationContext } from "../context/NotificationContext";
const Settings = () => {
  const { setCurrency, currency } = useCurrencyContext();
  const [toggleNotif, setToggleNotif] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const { notificationsEnabled, toggleNotifications } =
    useNotificationContext();
  return (
    <>
      <section className="px-4 py-6">
        <div>
          <div>
            <h1 className="text-xl text-text font-extrabold font-Syne">
              Settings
            </h1>
            <p className="text-text2 font-JetB">App preferences</p>
            <div className="grid grid-cols-1 gap-5">
              <div className=" border border-border bg-bg2 p-4 max-w-xl rounded-lg">
                <h2 className="text-sm text-text font-extrabold font-Syne">
                  Currency
                </h2>
                <p className="text-text2">
                  Choose how amounts are displayed across the app
                </p>
                <div className="flex gap-5 mt-4">
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`border  p-2  rounded-lg hover:border-border2 ${currency === "USD" ? "border-accent bg-accent-dim text-accent" : "border-border text-text2"} `}
                  >
                    $ USD
                  </button>
                  <button
                    onClick={() => setCurrency("EUR")}
                    className={`border  p-2  rounded-lg hover:border-border2 ${currency === "EUR" ? "border-accent bg-accent-dim text-accent" : "border-border text-text2"} `}
                  >
                    $ EUR
                  </button>
                  <button
                    onClick={() => setCurrency("GBP")}
                    className={`border  p-2  rounded-lg hover:border-border2 ${currency === "GBP" ? "border-accent bg-accent-dim text-accent" : "border-border text-text2"} `}
                  >
                    $ GBP
                  </button>
                  <button
                    onClick={() => setCurrency("ZAR")}
                    className={`border  p-2  rounded-lg hover:border-border2 ${currency === "ZAR" ? "border-accent bg-accent-dim text-accent" : "border-border text-text2"} `}
                  >
                    R ZAR
                  </button>
                </div>
              </div>

              <div className=" border border-border bg-bg2 p-4 max-w-xl rounded-lg">
                <h2 className="text-sm text-text font-extrabold font-Syne">
                  Notifications
                </h2>
                <p className="text-text2">
                  Get reminded before subscriptions renew
                </p>
                <div className="flex justify-between">
                  <p>Renewal reminders</p>
                  <div>
                    <div
                      onClick={toggleNotifications}
                      className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition
        ${notificationsEnabled ? "bg-accent" : "bg-purple/5 border-[1px] border-purple"}`}
                    >
                      <div
                        className={`w-6 h-6  rounded-full shadow-md transform transition
          ${notificationsEnabled ? "translate-x-6 bg-black" : "translate-x-0 bg-purple "}`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" border border-border bg-bg2 p-4 max-w-xl rounded-lg flex-flex-col  ">
                <h2 className="text-sm text-text font-extrabold font-Syne">
                  Theme
                </h2>
                <p className="text-text2">Switch between dark and light mode</p>
                <div className=" flex justify-between flex-1">
                  <p className="font-Syne text-text2 ">Dark Mode</p>
                  <div
                    onClick={toggleTheme}
                    className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition
        ${theme === "light" ? "bg-accent" : "bg-purple/5 border-[1px] border-purple"}`}
                  >
                    <div
                      className={`w-6 h-6  rounded-full shadow-md transform transition
           ${theme === "light" ? "translate-x-6 bg-black" : "translate-x-0 bg-purple"}`}
                    />
                  </div>
                </div>
              </div>

              <div className=" border border-border bg-bg2 p-4 max-w-xl rounded-lg ">
                <h2 className="text-sm text-text font-extrabold font-Syne">
                  Data
                </h2>
                <p className="text-text2">
                  Reset subscriptions back to the default mock data
                </p>
                <div>
                  <div>
                    <button className=" cursor-pointer p-2 border border-border bg-bg2 rounded-lg text-text2 font-bold font-Syne">
                      Reset to Mock data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Settings;
