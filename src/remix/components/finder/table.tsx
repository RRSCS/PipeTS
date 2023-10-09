import pipeline from "../../media/pipe-icon.png";

export const Row = ({
  name,
  status,
  type,
}: {
  name: string;
  status: string;
  type: "pipeline" | "folder";
}) => {
  return (
    <tr>
      <th className="w-4">
        {type === "folder" ? (
          <span className="material-symbols-outlined">folder</span>
        ) : (
          <img src={pipeline} />
        )}
      </th>
      <td>{name}</td>
      <td>{status}</td>
      <th>
        <button className="btn btn-ghost btn-xs">View</button>
      </th>
    </tr>
  );
};

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Job Name</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
