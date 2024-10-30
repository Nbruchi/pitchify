import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" className="search-form" scroll={false}>
      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search startups"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button className="text-white search-btn" type="submit">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}
