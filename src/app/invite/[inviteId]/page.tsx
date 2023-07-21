import EventCard from "@/components/EventCard";
import InviteHeader from "@/components/InviteHeader";
import ImageCarousel from "@/components/ImageCarousel";
import SplashScreen from "@/components/SplashScreen";
import VideoHeader from "@/components/VideoHeader";
import TextHero from "@/components/TextHero";

import { TParams } from "@/types";

// Temporarily get the data from a constant
import data from "@/data";

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
};

export default function InviteHomePage({ params }: { params: TParams }) {
  return (
    <div className="w-full text-center py-20 px-5 bg-[#ffec9e]/10">
      <VideoHeader media={data.header.media} />
      <InviteHeader details={data.header} />
      {data?.events.map((event) => (
        <EventCard key={event.id} details={event} />
      ))}

      <div className="flex flex-col items-center">
        {data?.textSections.map((item, key) => (
          <TextHero
            title={item.title}
            description={item.description}
            key={key}
          />
        ))}
      </div>

      <ImageCarousel />
      {/* <SplashScreen media={data.splashscreen.media} /> */}

      <div className="py-2 font-bold">{data.hashtag}</div>
    </div>
  );
}
