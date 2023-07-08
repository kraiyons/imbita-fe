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
      <div>
        {!!!event.locationUrl ? (
          event.location
        ) : (
          <a
            href={event.locationUrl}
            target="_blank"
            className="border-b border-dashed pb-[2px]"
          >
            {event.location}
          </a>
        )}
      </div>
      <div>
        {event.showDate && moment(event.date).format("MMMM Do YYYY")}
        {event.showTime && moment(event.date).format("hh:mm A")}
      </div>
      <div></div>
    </div>
  );
}
