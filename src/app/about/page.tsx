"use client";

import Image from "next/image";

import styles from "./styles.module.css";
import Person1 from "@/assets/team1.png";
import Person2 from "@/assets/team2.png";
import Person3 from "@/assets/team3.png";

const About = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 bg-neutral-800 overflow-y-scroll flex justify-center text-zinc-100">
        <div className="relative flex flex-col max-w-[1400px] w-full mt-36 md:px-24 sm:px-10 px-5 text-center">
          <div className="text-5xl font-semibold text-center font-oswald text-zinc-100">
            Ab
            <span className="md:decoration-yellow-600 md:decoration-2 md:underline md:underline-offset-[15px]">
              out
            </span>{" "}
            US
          </div>
          <div className="mt-16 font-playpen_sans font-bold text-[20px] text-yellow-600 drop-shadow">
            IA-LEX está creado por Cristina Cortés abogada laboralista y Fukuda
            Yukio programador.
          </div>
          <div className="mt-5 font-playpen_sans text-[15px]">
            Cristina llevaba tiempo haciendo sus bots en chatgpt y había estado
            buscando activamente alguien para que se lo desarrollará, pero nadie
            entendía la utilidad de esta herramienta y no encontraba nadie que
            le quisiera desarrollar el proyecto, por casualidad, encontró a
            Fukuda programador en Japón que vio el potencial de IA-LEX. Juntos
            han creado esta potente y maravillosa herramienta de trabajo ya
            imprescindible para cualquier abogado/a.
          </div>
          <div className="absolute lg:flex self-center items-center scale-[0.8] translate-y-[200px]">
            <div className={`${styles.container}`}>
              <Image src={Person1} alt="person1" priority />
              <div className={`${styles.overlay} flex flex-col`}>
                <div className="font-oswald text-[40px] text-white">
                  Sara Bernshtein
                </div>
                <div className="mt-2 mb-5 font-oswald text-[30px] text-yellow-600">
                  Frontend Developer
                </div>
              </div>
            </div>
            <div className={`${styles.container}`}>
              <Image src={Person2} alt="person2" priority />
              <div className={`${styles.overlay} flex flex-col`}>
                <div className="font-oswald text-[40px] text-white">
                  George Smith
                </div>
                <div className="mt-2 mb-5 font-oswald text-[30px] text-yellow-600">
                  Lawyer
                </div>
              </div>
            </div>
            <div className={`${styles.container}`}>
              <Image src={Person3} alt="person3" priority />
              <div className={`${styles.overlay} flex flex-col`}>
                <div className="font-oswald text-[40px] text-white">
                  Amanda Doe
                </div>
                <div className="mt-2 mb-5 font-oswald text-[30px] text-yellow-600">
                  Backend Developer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
