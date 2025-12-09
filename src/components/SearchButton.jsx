import { useState } from "react";
import { LinkButton } from "./LinkButton";

function SearchButton({ queryText }) {
  const [query, setQuery] = useState("");

  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(queryText || query)}`;

  const label = queryText ? "Know More!" : "Search";

  return (
    <div>
      {!queryText && <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search text"
      />}
      <LinkButton url={searchUrl} label={label} />
    </div>
  );
}

export { SearchButton };
