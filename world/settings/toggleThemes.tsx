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

import { Radio, RadioGroup } from "@headlessui/react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const plans = [
  {
    value: "system",
    name: "System Theme",
    desc: "Based on your system/browser settings",
  },
  { value: "light", name: "Light Mode", desc: "Prepare to blow your eyes out" },
  { value: "dark", name: "Dark Mode", desc: "Finally, comfort in the dark" },
];

export function ThemeSwitchRadio() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <RadioGroup value={theme} onChange={(e) => setTheme(e)} aria-label="Themes">
      <h5 className="mt-4">Themes</h5>
      {plans.map((plan) => (
        <Radio
          key={plan.value}
          value={plan.value}
          className="group relative flex cursor-pointer rounded-lg bg-white/5 my-2 py-3 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/20"
        >
          <div className="flex w-full items-center justify-between">
            <div>
              <p className="m-0 font-bold group-data-[checked]:text-blue-800 dark:group-data-[checked]:text-yellow-200">
                {plan.name}
              </p>
              <p className="text-xs m-0">{plan.desc}</p>
            </div>
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="size-6 text-blue-800 dark:text-yellow-200 opacity-0 transition group-data-[checked]:opacity-100"
            />
          </div>
        </Radio>
      ))}
    </RadioGroup>
  );
}
