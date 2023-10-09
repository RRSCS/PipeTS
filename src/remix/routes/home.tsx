import { LoaderFunction, defer } from "@remix-run/node";
import Table, { Row } from "~/components/finder/table";
import utils from "../utils/pipeTSUtils.server";
import { Await, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";
import type { Directory } from "@magnusreeves/pipets-utils";

export const loader: LoaderFunction = async () => {
  const rootDirectories = new Promise((res, rej) =>
    utils.getSubDirectories("/").then(res).catch(rej)
  );

  return defer({
    rootDirectories,
  });
};

export default function Home() {
  const { rootDirectories } = useLoaderData();

  return (
    <div className="w-4/5">
      <article className="prose lg:prose-xl max-w-full pt-10">
        <h1>Home</h1>
      </article>
      <div className="pt-8">
        {/* <Suspense
          fallback={<span className="loading loading-spinner loading-lg" />}
        >
          <Await resolve={rootDirectories}>
            {(directories: Array<Directory>) => {
              return <Table Row={(data: ) => <Row name="" status="" />} />;
            }}
          </Await>
        </Suspense> */}
      </div>
    </div>
  );
}
