import { createContext, useContext } from "react";

const CloseModal =
  (id: string) =>
  ({ children }: Children) =>
    (
      <label htmlFor={id} className="btn">
        {children}
      </label>
    );

const Modal =
  (id: string) =>
  ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <input type="checkbox" id={id} className="modal-toggle" />
        <div className="modal">
          <div className="modal-box max-w-none w-fit">{children}</div>
        </div>
      </>
    );
  };

const ShowModal =
  (id: string) =>
  ({ children, onClick }: Children & { onClick: () => void }) => {
    return (
      <label
        onClick={() => onClick()}
        htmlFor={id}
        className="btn btn-outline btn-info"
      >
        {children}
      </label>
    );
  };

export default function createModal(name: string) {
  return {
    Modal: Modal(name),
    CloseModal: CloseModal(name),
    ShowModal: ShowModal(name),
  };
}
