import EventCard from "@/components/EventCard";
import InviteHeader from "@/components/InviteHeader";
import { TParams } from "@/types";

const data = {
  metadata: {
    title: "#KRAIzy4INGRID",
    description: "Join us in celebrating Krai & Ingrid's Wedding!",
  },
  header: {
    title: "Krai & Ingrid",
    date: new Date("October 13, 2023 1:30 pm").toString(),
    showDate: true,
  },
  events: [
    {
      id: "1",
      name: "Ceremony",
      venue: "St Benedict Parish Church",
      location: "Ayala Westgrove Heights, South Blvd, Silang, Cavite",
      date: new Date("October 13, 2023 1:30 pm").toString(),
      showDate: false,
      showTime: true,
    },
    {
      id: "2",
      name: "Reception",
      venue: "Farm Hills Garden",
      location: "Brgy. Ulat, Silang, Cavite",
      date: new Date("October 13, 2023 5:30 pm").toString(),
      showDate: false,
      showTime: true,
    },
  ],
};

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
};

export default function InviteHomePage({ params }: { params: TParams }) {
  return (
    <div className="w-full text-center py-20 px-5">
      <InviteHeader details={data.header} />
      {data?.events.map((event) => (
        <EventCard key={event.id} details={event} />
      ))}
    </div>
  );
}
