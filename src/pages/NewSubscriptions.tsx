import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSubscriptionContext } from "../context/SubscriptionContext";
import { useNotificationContext } from "../context/NotificationContext";
import { useNavigate } from "react-router-dom";

const NewSubscriptions = () => {
  const initialFormData = {
    name: "",
    amount: "",
    billingCycle: "",
    renewalDate: "",
    notes: "",
    category: "",
    logo: "",
  };
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState(initialFormData);

  const { setSubscriptions, subscriptions } = useSubscriptionContext();
  const { showNotification } = useNotificationContext();
  useEffect(() => {
    if (id) {
      const existing = subscriptions.find((sub) => sub.id === id);

      if (existing) {
        setFormData({
          name: existing.name,
          amount: String(existing.amount),
          billingCycle: existing.billingCycle,
          renewalDate: existing.renewalDate,
          notes: existing.notes,
          category: existing.category,
          logo: existing.logo,
        });
      }
    }
  }, [id, subscriptions]);
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.amount) {
      showNotification({
        message: "Please enter amount and service name",
        type: "error",
      });
      console.log("error triggered");
      return;
    }
    if (id) {
      // EDIT MODE
      setSubscriptions((prev) =>
        prev.map((sub) =>
          sub.id === id
            ? { ...sub, ...formData, amount: Number(formData.amount) }
            : sub,
        ),
      );
      showNotification({
        message: "Subscription updated",
        type: "success",
      });
    } else {
      // ADD MODE
      setSubscriptions((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          ...formData,
          amount: Number(formData.amount),
        },
      ]);

      showNotification({
        message: "Subscription added",
        type: "success",
      });
    }

    setFormData(initialFormData);
    navigate("/dashboard");
  };
  return (
    <>
      <section className="px-4 py-6">
        <div>
          <div className="text-text2 font-Syne">
            <h1 className="text-xl text-text font-extrabold font-Syne">
              Add Subscription
            </h1>
            <p className="text-text2 font-JetB">Track new recussing payment</p>
            <form onSubmit={handleAdd} className="max-w-2xl space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="service-name" className="uppercase text-sm">
                    Service Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    placeholder="e.g. Netflix"
                    className="border rounded-lg border-border p-2 bg-bg2 text-text focus:outline-none focus:ring-1 focus:ring-accent "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="amount" className="uppercase text-sm">
                    Amount
                  </label>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        amount: e.target.value,
                      }))
                    }
                    placeholder="15.99"
                    className="border rounded-lg border-border p-2 bg-bg2 text-text focus:outline-none focus:ring-1 focus:ring-accent "
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="billing-cycle" className="uppercase text-sm">
                    Billing Cycle
                  </label>
                  <select
                    value={formData.billingCycle}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        billingCycle: e.target.value,
                      }))
                    }
                    className="border rounded-lg border-border p-2 bg-bg2 focus:outline-none focus:ring-1 focus:ring-accent text-text"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="annual">Annual</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="category" className="uppercase text-sm">
                    Category{" "}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        category: e.target.value,
                      }))
                    }
                    className="border rounded-lg border-border p-2 bg-bg2 focus:outline-none focus:ring-1 focus:ring-accent text-text"
                  >
                    <option value="entertainment">Entertainment</option>
                    <option value="productivity">Productivity</option>
                    <option value="health">Health</option>
                    <option value="finance">Finace</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label htmlFor="renewal-date" className="uppercase text-sm">
                    Renewal Date{" "}
                  </label>
                  <input
                    type="date"
                    value={formData.renewalDate}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        renewalDate: e.target.value,
                      }))
                    }
                    defaultValue={new Date().toISOString().split("T")[0]}
                    className="border rounded-lg border-border p-2 bg-bg2 text-text focus:outline-none focus:ring-1 focus:ring-accent text-text"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="emoji" className="uppercase text-sm">
                    Pick Emoji{" "}
                  </label>
                  <div>
                    <button></button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="notes" className="uppercase text-sm">
                  Notes (Optional){" "}
                </label>
                <input
                  type="text"
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      notes: e.target.value,
                    }))
                  }
                  className="border rounded-lg bg-bg2 p-2 text-text focus:outline-none focus:ring-1 focus:ring-accent "
                  placeholder="Family plan, shared with..."
                />
              </div>
              <div className="flex gap-10">
                <button className="bg-accent rounded-lg p-2 text-bg font-Syne font-bold">
                  {id ? "Update subscription" : "Add subscription"}
                </button>
                <Link
                  to="/dashboard"
                  className="bg-bg2 rounded-lg p-2 font-Syne"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewSubscriptions;
