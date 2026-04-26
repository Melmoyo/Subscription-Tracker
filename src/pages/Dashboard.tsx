import SearchInput from "../components/SearchInput";
import StatCard from "../components/StatCard";
import SubscriptionCard from "../components/SubscriptionCard";
import { useSubscriptionContext } from "../context/SubscriptionContext";
import SubscriptionModal from "../components/SubscriptionModal";
import { useFilterContext } from "../context/FilterContext";
import { useStatContext } from "../context/StatsContext";
const Dashboard = () => {
  const { selectedSub, subscriptions } = useSubscriptionContext();
  const { filteredsub, setFilters, filters } = useFilterContext();
  const { annualSpend, monthlySpend, renewingSoon, averagePerSub } =
    useStatContext();

  return (
    <>
      <section className="px-4 py-4">
        <div className="text-white ">
          <h3 className="text-text2 uppercase text-xs font-Syne mb-4">
            Renewing soon
          </h3>
          <div className="flex gap-8 font-Syne font-bold text-xs">
            <button className="bg-red-400/5 border border-red rounded-lg p-2">
              Gym <span className="text-red">Tomorrow</span>
            </button>
            <button className="bg-red-400/5 border border-red rounded-lg p-2">
              Notion <span className="text-red">in 3 days</span>
            </button>
            <button className="bg-red-400/5 border border-red rounded-lg p-2">
              Netflix <span className="text-red">in 5 days</span>
            </button>
            <button className="bg-red-400/5 border border-red rounded-lg p-2">
              Adobe CC <span className="text-red">in 6 days</span>
            </button>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-10 ">
            <StatCard
              title="Monthly Spend"
              subtitle={`${subscriptions.length} active subscriptions`}
              value={monthlySpend}
              textStyle="accent"
              borderStyle="accent"
              variant="currency"
            />
            <StatCard
              title="Annual Spend"
              subtitle="projected this year"
              value={annualSpend}
              textStyle="orange"
              borderStyle="orange"
              variant="currency"
            />
            <StatCard
              title="Avg per sub "
              subtitle="per month"
              value={averagePerSub}
              textStyle="purple"
              borderStyle="purple"
              variant="currency"
            />
            <StatCard
              title="Renewing Soon "
              subtitle="within 7 days"
              value={renewingSoon.length}
              textStyle="red"
              borderStyle="red"
              variant="number"
            />
          </div>
          <div className="flex gap-4 mt-4 text-text2 text-sm">
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: "all",
                }))
              }
              className={
                filters.category === "all"
                  ? " border border-accent text-accent  p-2 rounded-lg bg-accent-dim"
                  : "border border-border p-2 rounded-lg hover:text-white hover:border-border2"
              }
            >
              All
            </button>
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: "entertainment",
                }))
              }
              className={
                filters.category === "entertainment"
                  ? " border border-accent text-accent  p-2 rounded-lg bg-accent-dim"
                  : "border border-border p-2 rounded-lg hover:text-white hover:border-border2"
              }
            >
              Entertainment
            </button>
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: "productivity",
                }))
              }
              className={
                filters.category === "productivity"
                  ? " border border-accent text-accent  p-2 rounded-lg bg-accent-dim"
                  : "border border-border p-2 rounded-lg hover:text-white hover:border-border2"
              }
            >
              Productivity
            </button>
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: "health",
                }))
              }
              className={
                filters.category === "health"
                  ? " border border-accent text-accent  p-2 rounded-lg bg-accent-dim"
                  : "border border-border p-2 rounded-lg hover:text-white hover:border-border2"
              }
            >
              Health
            </button>
            <button
              onClick={() =>
                setFilters((prev) => ({
                  ...prev,
                  category: "other",
                }))
              }
              className={
                filters.category === "other"
                  ? " border border-accent text-accent  p-2 rounded-lg bg-accent-dim"
                  : "border border-border p-2 rounded-lg hover:text-white hover:border-border2"
              }
            >
              Other
            </button>
          </div>
          <div>
            <SearchInput />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-10">
            {filteredsub.map((sub) => (
              <SubscriptionCard key={sub.id} data={sub} />
            ))}
          </div>
          {selectedSub && <SubscriptionModal />}
        </div>
      </section>
    </>
  );
};
export default Dashboard;
