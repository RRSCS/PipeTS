import React, { memo } from "react";
import {
  Handle,
  useReactFlow,
  useStoreApi,
  Position,
  HandleType,
} from "./react-flow";
import { useEventManager } from "~/utils/EventManager";
import { ShowModal } from "./PipelineCreator";

const NodeHeader = ({
  title,
  variant,
}: {
  title: string;
  variant?: "green";
}) => {
  return (
    <div className="bg-primary-focus p-3 rounded-t-xl border-b-2 w-full text-center">
      <article className="prose">
        <h1 className="text-primary-content text-xs">{title}</h1>
      </article>
    </div>
  );
};

const NodeBody = ({
  children,
  header,
  handles,
}: Children & { header: React.ReactNode; handles: React.ReactNode }) => {
  return (
    <div className="w-44 h-fit flex flex-col">
      {header}
      {children}
      <div className="react-flow__node-custom">{handles}</div>
    </div>
  );
};

const NodeHandle = (props: {
  type: HandleType;
  position: Position;
  id: string;
  isConnectable: boolean;
}) => (
  <Handle
    {...props}
    style={{
      width: "0.75rem",
      height: "0.75rem",
      borderRadius: "1px",
      backgroundColor: "hsl(var(--inc) / var(--tw-bg-opacity))",
      ...(props.position === Position.Right
        ? {
            right: "-7.5px",
            top: "75px",
          }
        : {
            left: "-7.5px",
            top: "75px",
          }),
    }}
    className="bg-info-content"
  />
);

export const PipelineNode = memo(function CustomNode({
  id,
  data,
}: {
  id: any;
  data: any;
}) {
  const { eventManager } = useEventManager();

  return (
    <NodeBody
      header={<NodeHeader title="Job" />}
      handles={
        <>
          <NodeHandle
            type="source"
            position={Position.Left}
            id="input"
            isConnectable
          />
          <NodeHandle
            type="target"
            position={Position.Right}
            id="output"
            isConnectable
          />
        </>
      }
    >
      <div className="w-full bg-neutral h-28 rounded-b-md flex justify-center items-center">
        <ShowModal onClick={() => eventManager.emit("edit-click", id)}>
          Edit
        </ShowModal>
      </div>
    </NodeBody>
  );
});

export const SetupNode = memo(function CustomNode({
  id,
  data,
}: {
  id: any;
  data: any;
}) {
  const { eventManager } = useEventManager();
  return (
    <NodeBody
      header={<NodeHeader title="Setup" />}
      handles={
        <>
          <NodeHandle
            type="source"
            position={Position.Right}
            id="a"
            isConnectable
          />
        </>
      }
    >
      <div className="w-full bg-neutral h-28 rounded-b-md flex justify-center items-center">
        <ShowModal onClick={() => eventManager.emit("edit-click", id)}>
          Edit
        </ShowModal>
      </div>
    </NodeBody>
  );
});

export const CleanupNode = memo(function CustomNode() {
  return (
    <NodeBody
      header={<NodeHeader title="Cleanup" />}
      handles={
        <>
          <NodeHandle
            type="target"
            position={Position.Left}
            id="input"
            isConnectable
          />
        </>
      }
    >
      <div className="w-full bg-neutral h-28 rounded-b-md"></div>
    </NodeBody>
  );
});
