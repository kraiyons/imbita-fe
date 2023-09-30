"use client";

import { useState } from "react";
import CaretDown from "./CaretDown";
import Swirl from "./Swirl";
import Markdown from "markdown-to-jsx";
import MarkdownLink from "../MarkdownLink";
import Schedule from "../Schedule";
import QRCode from "../QRCode";
import { ReactNode } from "react";
type TProps = {
  title: string;
  description: string;
};

export default function TextHero({ title, description }: TProps) {
  const [show, setShow] = useState(false);
  const Div = ({ children }: { children: ReactNode | string }) => (
    <span className="block py-1">{children}</span>
  );
  return (
    <div className="py-4 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      <h3
        className="text-xl md:text-3xl font-cinzel cursor-pointer flex justify-center items-center"
        onClick={() => setShow((pState) => !pState)}
      >
        <div className="w-fit">{title}</div>
        <div
          className={`h-6 w-6 duration-500 transition-transform ${
            show ? "rotate-0" : "rotate-180"
          }`}
        >
          <CaretDown />
        </div>
      </h3>
      <div
        className={`max-h-0 text-ellipsis overflow-hidden transition-max-height pt-5 duration-500 ease-in-out ${
          show && "max-h-[800px]"
        }`}
      >
        <div className="prose text-justify w-full max-w-none text-sm md:text-base text-primary">
          <Markdown
            options={{
              overrides: {
                a: {
                  component: MarkdownLink,
                },
                Schedule: {
                  component: Schedule,
                },
                QRCode: {
                  component: QRCode,
                },
                p: {
                  component: Div,
                },
                strong: {
                  props: {
                    className: "text-primary",
                  },
                },
              },
            }}
          >
            {description}
          </Markdown>
        </div>
        <div className={"flex justify-center"}>
          <div className="w-40 text-[#fad6a5] py-5">
            <Swirl />
          </div>
        </div>
      </div>
    </div>
  );
}
