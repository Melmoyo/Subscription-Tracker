import { useFilterContext } from "../context/FilterContext";
import type { Filters } from "../context/FilterContext";
const SearchInput = () => {
  const { filters, setFilters } = useFilterContext();
  return (
    <>
      <section className="mt-4">
        <div className="max-w-6xl">
          <div className="flex gap-20 w-full">
            <input
              type="text"
              value={filters.searchInput}
              onChange={(e) =>
                setFilters((prev) => ({ ...prev, searchInput: e.target.value }))
              }
              placeholder="Search subscriptions"
              className="border border-border rounded-lg w-full p-2 bg-bg2"
            />
            <select
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  sortBy: e.target.value as Filters["sortBy"],
                }))
              }
              className="border border-border rounded-lg max-w-xl p-2 text-text2 bg-bg2"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
              <option value="highlow">Price high-low </option>
              <option value="lowhigh">Price low-high</option>
              <option value="az">A-Z</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};
export default SearchInput;
