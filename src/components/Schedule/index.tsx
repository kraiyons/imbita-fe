import RingsSVG from "./Rings";
import PartySVG from "./Party";
import CocktailSVG from "./Cocktail";
import DinnerSVG from "./Dinner";
type TScheduleItem = {
  imgPos: "top" | "bottom";
  img?: any;
  event: string;
  time: string;
};
const ScheduleItem = (props: TScheduleItem) => (
  <div
    className={`flex items-center ${
      props.imgPos === "bottom" ? "flex-col-reverse" : "flex-col"
    }`}
  >
    {props.img && (
      <div>
        <div className="h-8 w-8">{props.img}</div>
      </div>
    )}
    <div
      className={`flex   ${
        props.imgPos === "top" ? "flex-col-reverse" : "flex-col"
      }`}
    >
      <div>
        <div className="text-xs font-bold">{props.time}</div>
        <div className="font-cinzel text-ellipsis">{props.event}</div>
      </div>
      <div
        className={`w-0.5 h-4 bg-primary self-center ${
          props.imgPos === "top" ? "pt-4 mt-6 md:mt-4" : "pb-4 mb-6 md:mb-4"
        }`}
      ></div>
    </div>
  </div>
);
export default function Schedule() {
  return (
    <div className="w-full lg:w-[500px] text-[0.5rem] lg:text-xs">
      <div className="flex gap-2 items-center justify-between w-full relative ">
        <div className="absolute w-full h-0.5 bg-primary"></div>
        <div className="w-3 h-3 rounded-full border-2 bg-white z-10 border-primary"></div>
        <div className="flex flex-col">
          <div className="font-cinzel">Assembly</div>
          <div className="mt-4 flex flex-col items-center">
            <div className="w-0.5 h-4 bg-primary self-center"></div>
            <div className="text-xs font-bold">1:30 pm</div>
          </div>
        </div>
        <ScheduleItem
          imgPos="top"
          img={<RingsSVG />}
          event="Ceremony"
          time="2:00 pm"
        />
        <ScheduleItem
          imgPos="bottom"
          img={<CocktailSVG />}
          event="Cocktail Hour"
          time="4:00 pm"
        />
        <ScheduleItem
          imgPos="top"
          img={<DinnerSVG />}
          event="Reception"
          time="5:30 pm"
        />
        <ScheduleItem
          imgPos="bottom"
          img={<PartySVG />}
          event="After Party"
          time="10:00 pm"
        />
        <div className="w-3 h-3 rounded-full border-2 bg-white z-10 border-primary"></div>
      </div>
    </div>
  );
}
