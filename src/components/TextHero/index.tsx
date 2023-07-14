import ReactMarkdown from "react-markdown";

type TProps = {
  title: string;
  description: string;
};

export default function TextHero({ title, description }: TProps) {
  return (
    <div className="py-4 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      <h3 className="text-xl md:text-3xl pb-2 font-cinzel">{title}</h3>
      <div>
        <ReactMarkdown className="prose text-justify w-full max-w-none text-sm md:text-base">
          {description}
        </ReactMarkdown>
      </div>
    </div>
  );
}
