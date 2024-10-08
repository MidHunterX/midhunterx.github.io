import { Switch } from "@headlessui/react";

type ToggleAutoHideNavProps = {
  toggleAutoHideNav: () => void;
  isAutoHideNavEnabled: boolean;
};

export const ToggleAutoHideNav = ({
  toggleAutoHideNav: toggleAutoHide,
  isAutoHideNavEnabled: isAutoHideEnabled,
}: ToggleAutoHideNavProps) => {
  return (
    <article className="flex place-items-center place-content-between gap-2">
      <p className="p-2 m-0">
        {isAutoHideEnabled
          ? "Auto-Hide Navbar (Enabled)"
          : "Auto-Hide Navbar (Disabled)"}
      </p>
      <Switch
        checked={isAutoHideEnabled}
        onChange={toggleAutoHide}
        className="group inline-flex h-6 w-11 items-center rounded-full
        bg-gray-600 dark:bg-gray-400 transition data-[checked]:bg-blue-600 dark:data-[checked]:bg-yellow-200"
        data-blobity-magnetic="false"
        data-blobity-radius="15"
      >
        <span
          className="size-4 translate-x-1 rounded-full transition
          group-data-[checked]:translate-x-6 bg-white dark:bg-black"
        />
      </Switch>
    </article>
  );
};

