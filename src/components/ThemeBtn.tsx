import { useTheme } from "../hooks/useTheme";

function ThemeBtn() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={toggleTheme}
        checked={darkMode}
      />

      <div
        className="
          w-11 h-6 bg-gray-200 rounded-full
          peer dark:bg-gray-700
          peer-checked:bg-blue-600
          after:content-['']
          after:absolute
          after:top-[2px]
          after:left-[2px]
          after:bg-white
          after:border-gray-300
          after:border
          after:rounded-full
          after:h-5
          after:w-5
          after:transition-all
          peer-checked:after:translate-x-full
        "
      ></div>

      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </span>
    </label>
  );
}

export default ThemeBtn;
