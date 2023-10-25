import { ReactFlowProvider } from "reactflow";
import PipelineCreatorComponent from "./components/PipelineCreator";
import { ClientOnly } from "remix-utils/client-only";

export const PipelineCreator = () => (
  <ClientOnly>
    {() => (
      <ReactFlowProvider>
        <PipelineCreatorComponent />
      </ReactFlowProvider>
    )}
  </ClientOnly>
);
