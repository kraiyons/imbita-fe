import Image from "next/image";
import BpiQR from "./BpiQR";
import GCashQR from "./GCashQR";
import PayNowQR from "./PayNowQR";
import Modal from "../Modal";
import { ReactNode } from "react";

export default function QRCode() {
  const QRWrapper = ({ children }: { children: ReactNode }) => (
    <div className="flex flex-col items-center">{children}</div>
  );
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-10 py-4">
      <QRWrapper>
        <BpiQR />
        <div>BPI</div>
      </QRWrapper>
      <QRWrapper>
        <GCashQR />
        <div>GCash</div>
      </QRWrapper>
      <QRWrapper>
        <PayNowQR />
        <div>PayNow</div>
      </QRWrapper>
      <Modal>Hello</Modal>
    </div>
  );
}
