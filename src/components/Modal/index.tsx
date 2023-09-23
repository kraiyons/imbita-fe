import { ReactNode } from "react";

const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div id="modal" className="fixed top-0 left-0 w-screen h-screen">
      <div className="absolute top-0 left-0  h-full w-full  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 opacity-40 z-0"></div>
      <div className="relative rounded-sm bg-[#fff] z-10 w-full md:w-[600px] mx-auto mt-10">
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={onClose}
        >
          Close
        </div>
        <div className="min-h-[200px]">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
