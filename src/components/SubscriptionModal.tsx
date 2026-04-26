import { useCurrencyContext } from "../context/CurrencyContext";
import { useSubscriptionContext } from "../context/SubscriptionContext";
import { useNotificationContext } from "../context/NotificationContext";
import { useNavigate } from "react-router-dom";
const SubscriptionModal = () => {
  const { subscriptions, selectedSub, setSelectedSub, setSubscriptions } =
    useSubscriptionContext();
  const { showNotification } = useNotificationContext();
  const sub = subscriptions.find((sub) => sub.id === selectedSub);
  const { currFormat } = useCurrencyContext();
  const annualSpend = sub ? sub.amount * 12 : 0;
  const handleDelete = (id: string) => {
    setSubscriptions((prev) => prev.filter((sub) => sub.id !== id));
    setSelectedSub(null);
    showNotification({
      message: "Subscription deleted",
      type: "success",
    });
  };
  const navigate = useNavigate();
  return (
    <>
      <section
        onClick={() => setSelectedSub(null)}
        className="px-4 py-6 fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="max-w-lg w-full border border-border border-2 rounded-lg"
        >
          <div className="bg-bg2 flex flex-col gap-10 p-6">
            <div>
              <div className="flex gap-8 mb-4">
                <span className="w-10 h-10 bg-bg3 p-2 rounded-lg">
                  {sub?.logo}
                </span>
                <div>
                  <h3 className="text-text text-md uppercase font-Syne font-bold">
                    {sub?.name}
                  </h3>
                  <p className="font-Syne  text-xs text-text2 uppercase">
                    {sub?.category}
                  </p>
                </div>
              </div>
              <div className="bg-border h-[1px]" />
              <div>
                <p className="font-Syne font-extrabold text-2xl text-accent uppercase">
                  {sub?.amount ? currFormat(sub.amount) : "0.00"}
                </p>
                <p className="text-text2 text-sm font-Syne">
                  {sub?.billingCycle}
                </p>
                <div className="grid grid-cols-2 gap-5 mt-4">
                  <div className="p-2 border border-border rounded-lg bg-bg3">
                    <h3 className="uppercase text-sm text-text2">
                      Renewal Date
                    </h3>
                    <p>{sub?.renewalDate}</p>
                  </div>
                  <div className="p-2 border border-border rounded-lg bg-bg3">
                    <h3 className="uppercase text-sm text-text2">
                      Monthly Cost
                    </h3>
                    <p> {sub?.amount ? currFormat(sub.amount) : "0.00"}</p>
                  </div>
                  <div className="p-2 border border-border rounded-lg bg-bg3">
                    <h3 className="uppercase text-sm text-text2">
                      Annual Cost
                    </h3>
                    <p>{currFormat(annualSpend)}</p>
                  </div>
                  <div className="p-2 border border-border rounded-lg bg-bg3">
                    <h3 className="uppercase text-sm text-text2">
                      Days until renewal
                    </h3>
                    <p>{sub?.renewalDate}</p>
                  </div>
                </div>
                <p className="p-2 border border-border rounded-lg bg-bg3 mt-4">
                  {sub?.notes}
                </p>
                <div className="grid grid-cols-2 gap-5 w-full mt-4">
                  <button
                    onClick={() => navigate(`/addsubscription/${sub?.id}`)}
                    className="p-2 border border-border rounded-lg bg-bg3"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => sub?.id && handleDelete(sub.id)}
                    className="p-2 border border-red bg-red/5 text-red rounded-lg bg-bg3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SubscriptionModal;
