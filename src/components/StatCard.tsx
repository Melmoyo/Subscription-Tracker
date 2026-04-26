import { useCurrencyContext } from "../context/CurrencyContext";
type StatCardProps = {
  title: string;
  subtitle: string;
  value: number;
  textStyle: string;
  borderStyle: string;
  variant?: "currency" | "number";
};
const StatCard = ({
  title,
  subtitle,
  value,
  textStyle,
  borderStyle,
  variant = "currency",
}: StatCardProps) => {
  const { currFormat } = useCurrencyContext();
  const displayValue = variant === "currency" ? currFormat(value) : value;
  return (
    <>
      <article
        className={`border border-border rounded-lg p-4 max-w-xs bg-bg2  border-t-${borderStyle} border-2 shadow-inner`}
      >
        <h3 className="text-text2 text-xsm uppercase font-Syne">{title}</h3>
        <p
          className={`font-Syne font-extrabold text-xl text-text  text-${textStyle}`}
        >
          {displayValue}
        </p>
        <p className="text-text2 text-sm font-Syne">{subtitle}</p>
      </article>
    </>
  );
};
export default StatCard;
