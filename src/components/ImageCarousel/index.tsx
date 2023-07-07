import ImageWrapper from "./ImageWrapper";
const data = [
  {
    path: "/media/bridge.jpg",
    alt: "Krai & Ingrid @ One of Melbourne's Shores",
  },
];
export default function ImageCarousel() {
  return (
    <div className="flex items-center justify-center">
      {data.map((e, idx) => (
        <ImageWrapper key={idx} path={e.path} alt={e.alt} />
      ))}
    </div>
  );
}
