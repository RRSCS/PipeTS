type PipelineNode = {
  objectID: string;
  cmd: Array<string>;
  logs: Array<string>;
  status: "failed" | "completed" | "dead" | "active";
};

type PipelineNodes = PipelineNode | Array<PipelineNodes>;

type EnvVar = {
  name: string;
  value: unknown;
};

type Pipeline = {
  envVars: Array<EnvVar>;
  clis: Array<string>;
  nodes: Array<PipelineNodes>;
};

type StoredPipelines = Array<Pipeline>;

type StoredPipelineRef = string;

type ActivePipelines = Array<StoredPipelineRef>;
type PreviousPipelines = Array<StoredPipelineRef>;

type NodeRef = string;

//from ui cluster to cmd cluster to boot pipeline
type NewPipelinePayload = StoredPipelineRef;

//from ui cluster back to ui, on init
type NetworkPayload =
  | {
      type: "state-change";
      activeNodes: Array<PipelineNode>;
    }
  | {
      type: "log-strean";
      logs: Array<{ node: NodeRef; data: string }>;
    };
