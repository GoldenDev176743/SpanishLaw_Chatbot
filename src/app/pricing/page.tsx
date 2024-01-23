"use client";

import { useState } from "react";
import Image from "next/image";

import FreeIcon from "@/assets/ic1.png";
import BeginnerIcon from "@/assets/ic2.png";
import ProIcon from "@/assets/ic3.png";
import PremiumIcon from "@/assets/ic4.png";
import { IconCheck } from "@/components/Icons";
import { useRouter } from "next/navigation";

const PricingPlan = [
  {
    title: "Free",
    monthly: 0,
    yearly: 0,
    condition: ["condition1", "condition2", "condition3"],
    icon: FreeIcon,
  },
  {
    title: "Beginner",
    monthly: 10,
    yearly: 80,
    condition: ["condition1", "condition2", "condition3"],
    icon: BeginnerIcon,
  },
  {
    title: "Professional",
    monthly: 20,
    yearly: 120,
    condition: ["condition1", "condition2", "condition3", "condition4"],
    icon: ProIcon,
  },
  {
    title: "Premium",
    monthly: 30,
    yearly: 150,
    condition: [
      "condition1",
      "condition2",
      "condition3",
      "condition4",
      "condition5",
    ],
    icon: PremiumIcon,
  },
];

const Pricing = () => {
  const router = useRouter();

  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  return (
    <div className="bg-neutral-800 items-center flex flex-col h-full text-zinc-100">
      <div className="mt-36 text-5xl font-semibold font-oswald">
        Pr
        <span className="md:decoration-yellow-600 md:underline md:underline-offset-[15px] md:decoration-2">
          ici
        </span>
        ng
      </div>
      <div className="mt-5 font-playpen_sans">
        Get 2 months for free by subscribing yearly!
      </div>
      <div className="mt-12 bg-neural-800 rounded-xl px-2 py-2 flex gap-3 border duration-300 font-semibold font-playpen_sans drop-shadow-md border-zinc-700 ">
        <div
          className={`px-3 py-1 rounded-md duration-300 ${
            isMonthly ? "bg-yellow-600 shadow-md shadow-neutral-900" : ""
          }`}
        >
          <input
            type="radio"
            id="monthly"
            name="tab"
            className="hidden"
            checked={isMonthly}
            onChange={() => setIsMonthly((value) => !value)}
          />
          <label
            htmlFor="monthly"
            className={`z-[1] cursor-pointer duration-300 ${
              isMonthly ? "text-black" : "text-zinc-400"
            }`}
          >
            Monthly
          </label>
        </div>
        <div
          className={`py-1 px-5 rounded-md duration-300 ${
            !isMonthly ? "bg-yellow-600 shadow-md shadow-neutral-900" : ""
          }`}
        >
          <input
            type="radio"
            id="yearly"
            name="tab"
            className="hidden"
            checked={!isMonthly}
            onChange={() => setIsMonthly((value) => !value)}
          />
          <label
            htmlFor="yearly"
            className={`z-[1] cursor-pointer duration-300 ${
              !isMonthly ? "text-black" : "text-zinc-400"
            }`}
          >
            Yearly
          </label>
        </div>
      </div>
      <div className="relative flex flex-row w-full mt-16 justify-center gap-10">
        {PricingPlan.map((plans, index) => (
          <div
            key={index}
            className="flex flex-col w-[300px] h-[450px] hover:scale-105 rounded shadow-lg hover:text-yellow-600 text-zinc-100 shadow-neutral-900 duration-300 border border-neutral-800 hover:border-yellow-600 font-oswald"
          >
            <div className="flex mt-5 pl-5 gap-5">
              <Image src={plans.icon} alt={plans.title} priority />
              <div className="font-semibold text-[30px] border-b border-b-zinc-500 z-10">
                {plans.title}
              </div>
            </div>
            <div className="mt-5 text-[40px] font-extrabold pl-10 font-playpen_sans">
              $ {isMonthly ? plans.monthly : plans.yearly}
            </div>
            <div className="flex flex-col pl-5 gap-3 mt-5">
              {plans.condition.map((items, index) => (
                <div key={index} className="flex gap-3 font-playpen_sans">
                  <IconCheck className="w-5 h-5" />
                  {items}
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                if (index == 0) router.push("/service");
              }}
              className="bg-neutral-700 hover:bg-yellow-600 hover:text-black hover:font-semibold absolute bottom-8 text-[20px] self-center rounded-md py-2 px-10 font-semibold"
            >
              {index == 0 ? "Start for free" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
