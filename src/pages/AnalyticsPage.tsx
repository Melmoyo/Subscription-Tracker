import { useCurrencyContext } from "../context/CurrencyContext";
import { useSubscriptionContext } from "../context/SubscriptionContext";

const AnalyticsPage = () => {
  const { subscriptions } = useSubscriptionContext();
  const { currFormat } = useCurrencyContext();
  const Spend = subscriptions.reduce(
    (acc, sub) => {
      acc[sub.category] = (acc[sub.category] || 0) + sub.amount;
      return acc;
    },
    {} as Record<string, number>,
  );
  console.log(Spend);
  const totalSpend = subscriptions.reduce((acc, sub) => acc + sub.amount, 0);
  const categories = Object.entries(Spend).map(([name, amount]) => {
    const sample = subscriptions.find((s) => s.category === name);

    return {
      name,
      amount,
      percentage: (amount / totalSpend) * 100,
      color: sample?.color || "bg-gray-500",
    };
  });
  const topSubscriptions = subscriptions
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6);
  const annualSubscriptions = subscriptions
    .filter((sub) => sub.billingCycle === "annual")
    .map((sub) => ({
      name: sub.name,
    }));
  console.log(annualSubscriptions);
  return (
    <>
      <section className="px-4 py-6">
        <div className="max-w-6xl">
          <div className="grid grid-cols-2 gap-20 text-text2  ">
            <div className="border rounded-lg  bg-bg2 px-4 py-6">
              <h3 className="uppercse mb-4">Spend by Category</h3>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex items-center gap-4">
                    {/* label */}
                    <p className="capitalize w-24">{cat.name}</p>

                    {/* progress bar */}
                    <div className="flex-1 bg-bg4 h-2 rounded overflow-hidden">
                      <div
                        className="h-2 rounded"
                        style={{
                          width: `${cat.percentage}%`,
                          backgroundColor: cat.color,
                        }}
                      />
                    </div>

                    {/* amount */}
                    <p className="w-24 text-right font-bold">
                      {currFormat(cat.amount)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-2  bg-bg2 px-4 py-6">
              <h3 className="uppercse mb-4">Top Subscriptions</h3>
              <div className="w-full ">
                <ul className="flex flex-col justify-center  gap-6">
                  {topSubscriptions.map((sub, index) => (
                    <li className="flex gap-6" key={sub.id}>
                      <span>#{index + 1}</span>
                      <span>{sub.logo}</span>
                      <div>
                        <p className="text-white font-bold text-sm">
                          {sub.name}
                        </p>
                        <p>{sub.category}</p>
                      </div>
                      <div className="ml-auto">
                        <p className="font-bold text-accent">
                          {currFormat(sub.amount)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border rounded-lg p-2  bg-bg2">
              <h3 className="uppercse mb-4">Billing Breakdown</h3>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col bg-bg2 border border-border rounded-lg px-2 py-2">
                  <p className="text-center">Monthly</p>
                  <p className="text-center">13</p>
                  <p className="text-center">R11226.80 /mo</p>
                </div>
                <div className="flex flex-col bg-bg2 border border-border rounded-lg px-2 py-2">
                  <p className="text-center">Monthly</p>
                  <p className="text-center">13</p>
                  <p className="text-center">R11226.80 /mo</p>
                </div>
                <div className="flex flex-col bg-bg2 border border-border rounded-lg px-2 py-2">
                  <p className="text-center">Monthly</p>
                  <p className="text-center">13</p>
                  <p className="text-center">R11226.80 /mo</p>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-2  bg-bg2">
              <h3 className="uppercse mb-4">Monthly vs Annual savings</h3>
              <div>
                <p>
                  You have{" "}
                  <span className="text-accent font-bold font-Syne">
                    {" "}
                    {annualSubscriptions.length} annual subscription
                  </span>
                </p>
                <p>
                  Paying annually instead of monthly typically saves 15–20%.
                </p>
                {annualSubscriptions.map((sub) => (
                  <p key={sub.name}>Annual subs: {sub.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AnalyticsPage;
