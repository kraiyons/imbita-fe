type TProps = {
  media: string;
};
export default function VideoHeader({ media }: TProps) {
  return (
    <div className="flex items-center justify-center mb-10 -rotate-2">
      <div className="h-fit w-[300px] shadow-2xl rounded-lg bg-white p-4">
        <video controls autoPlay muted playsInline loop>
          <source src={media} type="video/mp4" />
          Your browser does not support the videos.
        </video>
      </div>
    </div>
  );
}
