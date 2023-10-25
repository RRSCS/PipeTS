import { EnvVariable } from "@rr-consult/pipets-utils";
import { Icon } from "@rr-consult/tailwind-mux-ui";
import { useRef, useState } from "react";
import { SetupNode } from "@rr-consult/pipets-utils";
import CodeView from "~/components/code-view/CodeView";

const EnvVar = ({ id }: { id?: string }) => {
  return (
    <div className="flex flex-row gap-3 w-fit items-end">
      <div className="form-control w-64 max-w-xs">
        <label className="label">
          <span className="label-text">Key</span>
        </label>
        <input
          disabled={id ? true : false}
          type="text"
          placeholder="e.g. CLIENT_TOKEN"
          className="input input-bordered w-full max-w-xs"
          value={id ?? undefined}
        />
      </div>
      <div className="form-control w-96 max-w-xs">
        <label className="label">
          <span className="label-text">Key</span>
        </label>
        <input
          type="text"
          placeholder="e.g. CLIENT_TOKEN"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export const SetUpNodeForm = () => {
  const formRef = useRef(null);
  const [envVar, setEnvVar] = useState(new Map<string, EnvVariable>());
  const [envNum, setEnvNum] = useState(1);

  return (
    <article className="prose w-fit flex flex-col justify-center p-10">
      <h1 className="text-center">Setup Node</h1>

      <div>
        <h4 className="text-left pb-2">Shell </h4>
        <CodeView />
      </div>
      <div>
        <h4 className="text-left pb-2">Enviroment variables</h4>
        <form ref={formRef} className="w-fit">
          <div className="flex flex-col gap-1">
            {Array.from(new Array(envNum), (_, i) => (
              <EnvVar key={i} />
            ))}
          </div>
          <div className="flex flex-row gap-2">
            <button
              className="btn btn-circle btn-outline mt-5"
              onClick={(e) => {
                e.preventDefault();
                setEnvNum((oldEnv) => ++oldEnv);
              }}
            >
              <Icon>add</Icon>
            </button>
            <button
              className="btn btn-circle btn-outline mt-5"
              onClick={(e) => {
                e.preventDefault();
                if (envNum > 1) {
                  setEnvNum((oldEnv) => --oldEnv);
                }
              }}
            >
              <Icon>remove</Icon>
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};
