import Image from "next/image";

type TProps = {
  path: string;
  alt: string;
};
export default function ImageWrapper({ path, alt }: TProps) {
  return (
    <div className="p-4 shadow-2xl rounded-lg md:w-[200px] bg-white rotate-2">
      <Image
        src={path}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
