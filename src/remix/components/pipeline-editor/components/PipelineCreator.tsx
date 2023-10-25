import React, {
  LegacyRef,
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  OnInit,
  OnConnect,
  Node,
  BackgroundVariant,
  useReactFlow,
  ControlButton,
} from "./react-flow";
import createModal from "~/components/view/Modal";
import {
  PipelineNode as PipelineNodeADT,
  Pipeline as PipelineADT,
} from "@rr-consult/pipets-utils";
import { initialNodes, initialEdges, nodeTypes, UiNodes } from "./Utils";
import { useEventManager } from "~/utils/EventManager";
import Conditional from "~/components/view/ConditionalRender";
import { SetUpNodeForm } from "./NodeEditors";

export const { Modal, CloseModal, ShowModal } = createModal(
  "view-pipeline-details"
);

export const PipelineNodeModal = () => {
  const { eventManager } = useEventManager();
  const [currentNode, setCurrentNode] = useState<undefined | UiNodes>();

  useEffect(() => {
    const listener = ({ id, nodes }: { id: string; nodes: Array<UiNodes> }) => {
      const node = nodes.find((node) => node.id === id);
      setCurrentNode(node);
    };

    eventManager.addListener("edit-payload", listener);
    return () => {
      eventManager.removeListener("edit-payload");
    };
  }, [currentNode]);

  return (
    <Modal>
      <Conditional condition={currentNode?.type === "SetupNode"}>
        <SetUpNodeForm />
      </Conditional>
    </Modal>
  );
};

export default function PipelineCreator() {
  const { eventManager } = useEventManager();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { project } = useReactFlow();

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  const onInit: OnInit<any, any> = (reactFlowInstance) => {
    reactFlowInstance.fitView({ padding: 0.1 });
  };

  const createNode = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const newNode: UiNodes = {
      id: (parseInt(nodes[nodes.length - 1].id as string) + 1).toString(),
      position: project({
        x: 100,
        y: 100,
      }),
      data: undefined,
      type: "PipelineNode",
    };
    //@ts-ignore
    setNodes((nds) => nds.concat(newNode));
  };

  useEffect(() => {
    const listener = (id: string) => {
      eventManager.emit("edit-payload", { id, nodes });
    };

    eventManager.addListener("edit-click", listener);
    return () => {
      eventManager.removeListener("edit-click");
    };
  }, []);

  return (
    <>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onInit={onInit}
        attributionPosition="top-right"
        nodeTypes={nodeTypes}
        className="bg-base-200 rounded-xl"
      >
        <div className="absolute z-10 right-0 p-10">
          <button className="btn btn-outline btn-primary" onClick={createNode}>
            new node
          </button>
        </div>
        <MiniMap
          style={{
            height: 120,
          }}
          zoomable
          pannable
        />
        <Controls />
      </ReactFlow>
    </>
  );
}
