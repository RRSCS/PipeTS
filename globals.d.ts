type PipelineNode = {
  cmd: Array<string>;
};

type Pipeline = PipelineNode | Array<Pipeline>;

type EnvVar = {
  name: string;
  value: unknown;
};

type SavedPipeline = {
  envVars: Array<EnvVar>;
  cliDependencies: Array<string>;
  pipeline: Array<Pipeline>;
};
