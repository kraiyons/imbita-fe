import { TInviteHeader } from "@/types";
import moment from "moment";

type TProps = {
  details: TInviteHeader;
};
export default function Header(props: TProps) {
  const header = props.details;
  return (
    <>
      <div className="text-4xl">{header.title}</div>
      {header.showDate && (
        <div>{moment(header.date).format("MMMM D, YYYY")}</div>
      )}
    </>
  );
}
