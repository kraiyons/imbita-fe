import { TEvent } from "@/types";
import moment from "moment";

type TProps = {
  details: TEvent;
};

export default function EventCard(props: TProps) {
  const event = props.details;
  return (
    <div className="py-5">
      <div className="text-2xl">{event.venue}</div>
      <div>{event.location}</div>
      <div>
        {event.showDate && moment(event.date).format("MMMM Do YYYY")}
        {event.showTime && moment(event.date).format("hh:mm A")}
      </div>
      <div></div>
    </div>
  );
}
