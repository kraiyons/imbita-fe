import { TInviteHeader } from "@/types";
import moment from "moment";

type TProps = {
  details: TInviteHeader;
};
export default function Header(props: TProps) {
  const header = props.details;
  return (
    <>
      <div className="text-5xl font-cinzel">{header.title}</div>
      {header.showDate && (
        <div className="text-3xl py-2 font-cinzel">
          {moment(header.date).format("MMMM D, YYYY")}
        </div>
      )}
    </>
  );
}
