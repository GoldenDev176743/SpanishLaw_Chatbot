import Image from "next/image";
import Link from "next/link";

import BackGround from "@/assets/background2.jpg";
import LogoIcon from "@/assets/logo-slider.png";

export default function Home() {
  return (
    <div className="relative h-full">
      <Image
        src={BackGround}
        alt="background"
        fill
        style={{
          objectFit: "cover",
        }}
        priority
      />
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="flex flex-col gap-3 text-center">
          <div className="text-white font-oswald font-medium text-[25px]">
            IA-LEX es un bot especializado en derecho español.
          </div>
          <div className="text-yellow-600 font-oswald font-bold text-[70px]">
            Realiable Legal Solution
          </div>
          <div className="font-oswald text-[18px] mb-5 text-white">
            IA-LEX es un bot que funciona como asistente legal, especializado en
            derecho español.
          </div>
          <Image
            src={LogoIcon}
            alt="logo-icon"
            width={180}
            style={{ alignSelf: "center" }}
          />
          <div className="flex mt-5 border border-yellow-600 items-center justify-center self-center bg-black w-[150px] h-[45px]">
            <Link
              href={"/service"}
              className="pt-1 duration-300 text-black bg-yellow-600 hover:bg-black hover:text-white font-oswald font-medium w-[142px] h-[36px]"
            >
              START FOR FREE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
