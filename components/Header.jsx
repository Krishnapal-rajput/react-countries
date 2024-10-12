import UseTheme from "../Hooks/UseTheme";

export default function Header() {
  const [isDark, setIsDark] = UseTheme();
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
          className="theme-changer"
        >
          <i class={`fa-solid fa-${isDark ? "sun" : "moon"}`}></i>&nbsp;&nbsp;
          {`${isDark ? "Light Mode" : "Dark Mode"}`}
        </p>
      </div>
    </header>
  );
}
