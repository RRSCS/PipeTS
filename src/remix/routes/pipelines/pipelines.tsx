import { Pipeline, PipelineNode } from "@rr-consult/pipets-utils";
import { defer } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import Suspended from "~/components/suspense";
import deferWrapper from "~/utils/deferWrapper";
//import utils from "~/utils/pipeTSUtils.server";

export const loader = () => {
  //const pipelines = deferWrapper(utils.PipelineModel.find());

  // return defer({
  //   pipelines,
  // });
  return new Response();
};

export default function Pipelines() {
  const { pipelines } = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <div>
      <Suspended
        promise={pipelines}
        Render={(data: Array<Pipeline>) => {
        
          return (
            // <Table>
            //   {data.map((pipeline: Pipeline) => (
            //     <Row
            //       name={pipeline.details.name}
            //       status={pipeline.details}
            //       type={"pipeline"}
            //     />
            //   ))}
            // </Table>
            <></>
          );
        }}
      />
      <div></div>
    </div>
  );
}
