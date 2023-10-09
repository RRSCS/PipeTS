import { defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Table, { Row } from "~/components/finder/table";
import Suspended from "~/components/suspense";
import mongoWrapper from "~/utils/mongoWrapper";
import utils from "~/utils/pipeTSUtils.server";

export const loader = () => {
  const pipelines = mongoWrapper(utils.PipelineModel.find());

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
          {data.map((pipeline: PipelineAQSW) => (
              <Row />
            ))}
          </Table>
        );
      }}
    />
  );
}
