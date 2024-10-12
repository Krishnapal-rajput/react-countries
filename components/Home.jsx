import { useState } from "react";
import CountriesContainer from "./CountriesContainer";
import Filter from "./Filter";
import Search from "./Search";
// import { useOutletContext } from "react-router-dom";
// import { ThemeContext } from "../contexts/ThemeContext";
import UseTheme from "../Hooks/UseTheme";

export default function App() {
  const [query, setQuery] = useState("");
  // const [isDark] = useOutletContext()
  // const [isDark] = useContext(ThemeContext)
  const [isDark] = UseTheme();

  return (
    <>
      <main className={`${isDark ? "dark" : ""}`}>
        <div className="search-filter-container">
          <Search setQuery={setQuery} />
          <Filter setQuery={setQuery} />
        </div>
        <CountriesContainer query={query} />
      </main>
    </>
  );
}
