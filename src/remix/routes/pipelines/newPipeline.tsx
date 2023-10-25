import { LoaderFunction, defer } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  Pipeline,
  SavedPipeline,
  getSubDirectories,
} from "@rr-consult/pipets-utils";
import CodeView from "~/components/code-view/CodeView";
import { PipelineNodeModal } from "~/components/pipeline-editor/components/PipelineCreator";
import { PipelineCreator } from "~/components/pipeline-editor/pipelineEditors";
import createModal from "~/components/view/Modal";
import deferWrapper from "~/utils/deferWrapper";


export const loader: LoaderFunction = async () => {
  // const allDirectories = deferWrapper(getSubDirectories("/"));

  return defer({
    allDirectories: {},
  });
};


export default function NewPipeline() {
  const { allDirectories } = useLoaderData<typeof loader>();

  const newPipeline = {} as Pipeline;
  return (
    <>
      <article className="prose max-w-full px-16 pt-20">
        <h1 className="text-xl">Create a new pipeline</h1>
      </article>

      {/* <CodeView /> */}
      <div className="h-4/5 w-full">
        <PipelineCreator />
      </div>
    </>
  );
}
