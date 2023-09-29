import { Link } from "@remix-run/react";

export const SideBarControlButton = () => {
  return (
    <span
      className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      data-tip="Menu"
    >
      <label
        htmlFor="drawer"
        className="btn btn-square btn-ghost drawer-button "
      >
        <svg
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
    </span>
  );
};

export const SideBar = ({ children }: { children: React.ReactNode }) => (
  <div className="drawer">
    <input id="drawer" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col">{children}</div>
    <div className="drawer-side">
      <label htmlFor="drawer" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">content</ul>
    </div>
  </div>
);
