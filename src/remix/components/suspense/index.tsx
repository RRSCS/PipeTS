import { Await } from "@remix-run/react";
import { Suspense } from "react";

export default function Suspended({
  promise,
  Render,
}: {
  promise: Promise<unknown>;
  Render: (data: any) => React.ReactNode;
}) {
  return (
    <Suspense
      fallback={<span className="loading loading-spinner loading-lg" />}
    >
      <Await resolve={promise}>{Render}</Await>
    </Suspense>
  );
}
