import HomePage from "./pages/HomePage";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AnalyticsPage from "./pages/AnalyticsPage";
import NewSubscriptions from "./pages/NewSubscriptions";
import Settings from "./pages/Settings";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import { FilterContextProvider } from "./context/FilterContext";
import { StatContextProvider } from "./context/StatsContext";
import { CurrencyContextProvider } from "./context/CurrencyContext";
import { ThemeContextProvider } from "./context/ThemeContext";
import { NotificationContextProvider } from "./context/NotificationContext";
function App() {
  return (
    <>
      <ThemeContextProvider>
        <SubscriptionProvider>
          <FilterContextProvider>
            {" "}
            <StatContextProvider>
              <CurrencyContextProvider>
                <NotificationContextProvider>
                  {" "}
                  <Routes>
                    <Route
                      path="/"
                      element={<Navigate to="/dashboard" replace />}
                    />
                    <Route path="/dashboard" element={<HomePage />}>
                      <Route index element={<Dashboard />} />
                      <Route path="analytics" element={<AnalyticsPage />} />
                      <Route
                        path="addsubscription/:id?"
                        element={<NewSubscriptions />}
                      />
                      <Route path="settings" element={<Settings />} />
                    </Route>
                  </Routes>
                </NotificationContextProvider>
              </CurrencyContextProvider>
            </StatContextProvider>
          </FilterContextProvider>
        </SubscriptionProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
