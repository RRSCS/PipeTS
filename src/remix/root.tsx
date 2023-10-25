import {
  json,
  type LinksFunction,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { Techincal } from "@rr-consult/tailwind-mux-ui";
import getSideBarContent from "./utils/routeContent";
import reactFlowStyles from "reactflow/dist/style.css";
import stylesheet from "~/tailwind.css";
import { EventProvider } from "./utils/EventManager";
import { PipelineNodeModal } from "~/components/pipeline-editor/components/PipelineCreator";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: reactFlowStyles },

  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0",
  },
];

export const loader: LoaderFunction = ({ request }) => {
  return json({
    url: request.url,
  });
};

export default function App() {
  const { url } = useLoaderData<typeof loader>();
  const sideBarContent = getSideBarContent(new URL(url));

  return (
    <html lang="en" data-theme="synthwave">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <EventProvider>
        <body className="m-0">
          <Techincal
            navbarItems={
              <>
                <li>
                  <Link to="/pipelines">Pipelines</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
              </>
            }
            sideBarItems={sideBarContent.map((item: aTagItem, i: number) => (
              <li key={i}>
                {item.href ? (
                  <Link to={item.href}>{item.display}</Link>
                ) : (
                  <a>{item.display}</a>
                )}
              </li>
            ))}
            title="PipeTS"
          >
            <Outlet />
          </Techincal>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
          <PipelineNodeModal />
        </body>
      </EventProvider>
    </html>
  );
}
