import { useCurrencyContext } from "../context/CurrencyContext";
import { useSubscriptionContext } from "../context/SubscriptionContext";

type SubscriptionProps = {
  id: string;
  name: string;
  amount: number;
  billingCycle: string;
  category: string;
  renewalDate: string;
  color?: string;
  logo: string;
  notes: string;
};

const SubscriptionCard = ({ data }: { data: SubscriptionProps }) => {
  const { setSelectedSub } = useSubscriptionContext();
  const { currFormat } = useCurrencyContext();
  return (
    <>
      <article
        onClick={() => {
          setSelectedSub(data.id);
        }}
        style={{ borderTopColor: data.color ?? "#2dd4bf" }}
        className={`border border-border rounded-lg p-4 max-w-xs bg-bg2  transition-transform duration-300 ease-in-out hover:translate-y-2   border-2 shadow-inner`}
      >
        <div className="flex gap-4">
          <span className="w-6 h-6">{data.logo} </span>
          <div>
            <h3 className="text-text text-md uppercase font-Syne font-bold">
              {data.name}
            </h3>
            <p className="font-Syne  text-xs text-text2 uppercase">
              {data.category}
            </p>
          </div>
        </div>

        <p className="font-Syne font-extrabold text-xl text-text uppercase">
          {currFormat(data.amount)}
        </p>
        <p className="text-text2 text-sm font-Syne">{data.billingCycle}</p>
        <div className="bg-border border-border h-1" />
        <div className="flex justify-between text-text2 mt-4">
          <p className=" border border-border p-2 rounded-lg">
            {data.renewalDate}
          </p>
        </div>
      </article>
    </>
  );
};
export default SubscriptionCard;
