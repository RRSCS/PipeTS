import { Pipeline } from "@magnusreeves/pipets-utils";
import { defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Table, { Row } from "~/components/finder/table";
import Suspended from "~/components/suspense";
import deferWrapper from "~/utils/deferWrapper";
import utils from "~/utils/pipeTSUtils.server";

export const loader = () => {
  const pipelines = deferWrapper(utils.PipelineModel.find());

  return defer({
    pipelines,
  });
};

export default function Pipelines() {
  const { pipelines } = useLoaderData();

  return (
    <Suspended
      promise={pipelines}
      Render={(data: Array<Pipeline>) => {
        return (
          <Table>
            {data.map((pipeline: Pipeline) => (
              <Row name={pipeline.details.name} status={pipeline.} type={"pipeline"} />
            ))}
          </Table>
        );
      }}
    />
  );
}
