"use client";

import { useState } from "react";
import Image from "next/image";

import Accordion from "@/components/Accordion";
import BackImage from "@/assets/parallax1.jpg";
import PenImage from "@/assets/pen1.png";

const faqs = [
  {
    title: "What are the advantages of your service?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    title:
      "Are there any fees or commissions in addition to the monthly subscription?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    title: "You really don't charge per user? Why not?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    title: "What happens when I go over my monthly active limit?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    title: "Can your service help me understand how to work with my product?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
  {
    title: "Which third-party application do you integrate with?",
    text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
  },
];

const Document = () => {
  const [selectionNo, setSeletionNo] = useState<number>(0);

  return (
    <div className="relative min-h-screen">
      <Image
        src={BackImage}
        alt="background"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
      />
      <div className="fixed inset-0 overflow-y-scroll">
        <div className="relative flex flex-col mt-36 text-center">
          <div className="text-5xl font-semibold text-center font-oswald text-zinc-900">
            Frequently{" "}
            <span className="md:decoration-yellow-600 md:underline md:underline-offset-[15px] md:decoration-2">asked</span>{" "}
            questions
          </div>
          <div className="w-full max-w-2xl mx-auto px-4 md:px-6 mt-16 divide-y font-oswald text-start divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                id={index}
                selNo={selectionNo}
                setSelNo={setSeletionNo}
              >
                {faq.text}
              </Accordion>
            ))}
          </div>
          <div className="flex justify-end -translate-y-5 -translate-x-16 overflow-hidden -z-10">
            <Image src={PenImage} alt="pen" height={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
