import Image from "next/image";
import BpiQR from "./BpiQR";
import GCashQR from "./GCashQR";
import PayNowQR from "./PayNowQR";
import Modal from "../Modal";
import { ReactNode, useState } from "react";

type QRObject = {
  label: string;
  svg: ReactNode;
  png: string;
};
export default function QRCode() {
  const [activeQr, setActiveQr] = useState<QRObject | null>(null);

  const QRWrapper = ({
    children,
    onClick,
  }: {
    children: ReactNode;
    onClick: () => void;
  }) => (
    <div
      className="flex flex-col items-center cursor-zoom-in"
      onClick={onClick}
    >
      {children}
    </div>
  );

  const qrs = [
    {
      label: "BPI",
      svg: <BpiQR />,
      png: "/qr/bpi.png",
    },
    {
      label: "GCash",
      svg: <GCashQR />,
      png: "/qr/bpi.png",
    },
    {
      label: "PayNow",
      svg: <PayNowQR />,
      png: "/qr/paynow.png",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-10 py-4">
      {qrs.map((e, key) => {
        return (
          <QRWrapper key={key} onClick={() => setActiveQr(e)}>
            {e.svg}
            <div>{e.label}</div>
          </QRWrapper>
        );
      })}
      {activeQr && (
        <Modal onClose={() => setActiveQr(null)}>
          <div className="flex flex-col items-center justify-center py-5">
            <h2 className="font-cinzel text-primary">{activeQr.label}</h2>
            <div className="w-[300px] h-[300px] max-w-screen">
              {activeQr.svg}
            </div>
            <div className="py-5 font-raleway text-primary">
              <a href={activeQr.png} download={true}>
                Download
              </a>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
