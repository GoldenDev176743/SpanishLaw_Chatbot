"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

type AccordionpProps = {
  children: React.ReactNode;
  title: string;
  id: number;
  selNo: number;
  setSelNo: Dispatch<SetStateAction<number>>;
};

export default function Accordion({
  children,
  title,
  id,
  selNo,
  setSelNo,
}: AccordionpProps) {
  useEffect(() => {
    setSelNo(0);
  }, []);

  return (
    <div className="py-2">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={(e) => {
            e.preventDefault();
            setSelNo(id);
          }}
          aria-expanded={id == selNo}
          aria-controls={`accordion-text-${id}`}
        >
          <span
            className={`text-[23px] font-extrabold drop-shadow-md ${
              id == selNo ? "text-yellow-700" : "text-black"
            }`}
          >
            {title}
          </span>
          <svg
            className="fill-yellow-600 shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                id == selNo && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                id == selNo && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
          id == selNo
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-3 text-[15px] font-playpen_sans">{children}</p>
        </div>
      </div>
    </div>
  );
}
