import { PipelineNode, SetupNode, CleanupNode } from "./PipelineNodes";
import {
  PipelineNode as PipelineNodeADT,
  Pipeline as PipelineADT,
  SetupNode as SetupNodeADT,
} from "@rr-consult/pipets-utils";

export const nodeTypes = {
  PipelineNode,
  SetupNode,
  CleanupNode,
};

type UICreatePipeline = PipelineNodeADT | SetupNodeADT | undefined;

export type UiNodes = {
  id: string;
  type: keyof typeof nodeTypes;
  position: { x: number; y: number };
  data: UICreatePipeline;
};

export const initialNodes = [
  {
    id: "1",
    type: "SetupNode",
    position: { x: -500, y: 0 },
    data: undefined,
  },
  {
    id: "2",
    type: "PipelineNode",
    position: { x: 0, y: 0 },
    data: undefined,
  },
  {
    id: "3",
    type: "CleanupNode",
    position: { x: 500, y: 0 },
    data: undefined,
  },
] satisfies Array<UiNodes>;

export const initialEdges = [
  { id: "e1-2", source: "1", target: "2", label: "this is an edge label" },
];
