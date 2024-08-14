import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const ThemeSwitchSelect = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="system">System</option>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";

export const ThemeSwitchNav = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const nextTheme =
    theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
  const nextIcon =
    nextTheme === "light" ? faSun : nextTheme === "dark" ? faMoon : faDesktop;

  return (
    <button
      className="text-white m-0 rounded py-2 px-2 sm:px-4 text-[12px] sm:text-[14px] md:py-1 md:px-4"
      onClick={() => setTheme(nextTheme)}
      // data-blobity-tooltip={`Switch to ${nextTheme} theme`}
      data-blobity-magnetic="false"
    >
      <FontAwesomeIcon icon={nextIcon} />
    </button>
  );
};
