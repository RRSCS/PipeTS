import { SideBarControlButton } from "./Sidebar";
import { Link } from "@remix-run/react";
export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <SideBarControlButton />
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">PipeTS</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/"/>
          </li>
          <li>
            <a>Link</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
