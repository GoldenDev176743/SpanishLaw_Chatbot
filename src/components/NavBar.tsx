"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.png";

const NavItems = [
  { title: "HOME", path: "/" },
  { title: "SERVICE", path: "/service" },
  { title: "PRICING", path: "/pricing" },
  { title: "ABOUT US", path: "/about" },
  { title: "FAQ", path: "/document" },
  { title: "CONTACT", path: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={`flex w-full h-[80px] z-50 bg-black ${
        pathname === "/service"
          ? "border-b border-b-zinc-900 hidden"
          : "bg-black visible"
      }`}
    >
      <div className="flex container mx-auto justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="logo" height={50} priority />
        </Link>
        <div className="flex flex-row gap-7 justify-between">
          {NavItems.map((item) => (
            <button
              key={item.title}
              onClick={() => router.push(item.path)}
              className={`font-oswald font-medium pt-1 pb-2 ${
                pathname === item.path
                  ? "text-yellow-600 border-b z-0 border-b-yellow-600"
                  : "text-white hover:text-yellow-600"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
