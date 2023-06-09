"use client";

import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Container from "../utility/Container";
import Image from "next/image";
import Slider from "./Slider";

export default function About() {
   return (
      <div className="relative">
         <Container className="py-5 mb-12">
            <div className="flex flex-col justify-between gap-16 px-5 mb-10 text-center lg:flex-row md:text-left">
               <div>
                  <h1
                     className={`${playfairDisplay.className} py-5 text-3xl md:text-6xl mt-12 md:mt-0 font-bold text-white text-center lg:text-left`}
                  >
                     About the club
                  </h1>
                  <p className="mb-5 text-sm text-white md:text-base">
                     Nestled amidst 120 acres of enchanting
                     parkland, where serenity meets
                     grandeur, lies the illustrious Preston
                     Golf Club. A beacon of warmth and
                     camaraderie, this cherished
                     establishment graciously welcomes all
                     who seek solace in its verdant embrace.
                     Dating back to the hallowed year of
                     1892, our resplendent 18-hole,
                     6,278-yard masterpiece beckons with an
                     unrivaled allure, its design inspired
                     by the ingenious minds of golfing
                     legends like James Braid, Harry Vardon,
                     Alistair Mackenzie, and Sandy Herd.
                     Prepare to be captivated by the
                     kaleidoscope of holes that await, each
                     one an eloquent testament to the
                     artistry of the game. But it is the
                     meticulously crafted USGA greens that
                     truly elevate the experience,
                     challenging both novices and virtuosos
                     alike. Renowned as a coveted
                     destination for both social gatherings
                     and spirited competitions.
                  </p>
                  <p className="text-sm text-white md:text-base">
                     Preston Golf Club boasts a plethora of
                     enticing packages tailored for society
                     events, corporate golf days, or simply
                     indulging in the leisurely pursuit of
                     this noble sport. Join us on our proud
                     journey as we stand as hosts for the
                     prestigious English Senior Ladies
                     Strokeplay Championship in June 2023,
                     an occasion that shall etch itself into
                     the annals of golfing glory.
                  </p>
               </div>
               <div className="flex flex-col items-center justify-end">
                  <Image
                     src={"/images/about-b.jpg"}
                     width={3500}
                     height={1000}
                     alt="Golf Course Green"
                     draggable={false}
                     className="shadow-lg rounded-3xl object-cover h-[400px] shadow-black/30"
                  />
               </div>
            </div>
            {/* <Carousel /> */}
            <Slider />
         </Container>
      </div>
   );
}
