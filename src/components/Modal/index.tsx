import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed w-screen h-screen bg-black z-50">
      <div className="rounded-sm bg-[#F7E7CE]">
        <div>Close</div>
      </div>
    </div>
  );
};

export default Modal;
