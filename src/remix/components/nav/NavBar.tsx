import { SideBarControlButton } from "./Sidebar";
import { Link } from "@remix-run/react";
export default function NavBar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <SideBarControlButton />
        <a className="btn btn-ghost normal-case text-xl">PipeTS</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/pipelines">Pipelines</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Account</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Login</a>
                </li>
                <li>
                  <a>Register</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
