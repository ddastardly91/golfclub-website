import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700", "800", "900"],
});

import Image from "next/image";
import Container from "../utility/Container";

export default function Hero() {
   return (
      <Container hero className="relative md:pt-0">
         <div className="relative">
            <Image
               src={"/images/championship.png"}
               width={120}
               height={120}
               alt="England Golf Championship Venue"
               draggable={false}
               className="absolute z-10 hidden p-3 bg-white border-2 rounded-full lg:block border-black/50 right-52 top-16"
            />
            <Image
               src="/images/hero-a.jpg"
               width="1920"
               height="500"
               alt="hero image"
               className="w-full max-h-[900px] object-cover"
            />
            <div className="absolute top-0 left-0 flex flex-row w-full h-full bg-gradient-to-r from-slate-900 via-transparent to-slate-900">
               <div className="flex flex-col items-center justify-center w-full h-full px-7 2xl:max-w-7xl 2xl:mx-auto">
                  <Image
                     src={"/images/pgclogo.png"}
                     width={160}
                     height={160}
                     alt="Preston Golf Club"
                     draggable={false}
                     style={{
                        filter:
                           "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.45))",
                     }}
                     className="z-10 lg:block md:block w-[140px] lg:[160px]"
                  />

                  <h1
                     style={{
                        filter:
                           "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.45))",
                     }}
                     className={`${playfairDisplay.className} hidden lg:block md:block z-10 text-center text-white mb-5 text-5xl font-extrabold lg:text-[120px] md:text-7xl`}
                  >
                     Welcome to
                     <br />
                     Preston Golf Club
                  </h1>
                  <p
                     style={{
                        filter:
                           "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.45))",
                     }}
                     className="z-10 hidden text-white md:block sm:text-sm lg:text-xl"
                  >
                     A stunning parkland course situated in
                     the heart of Preston, Lancashire
                  </p>
                  <div className="z-10 mt-6">
                     <button
                        className={`${playfairDisplay.className} px-6 py-3 mt-0 md:mt-5 text-white border-2 rounded-xl bg-gradient-to-br from-green-500 to-green-700 border-white/70 hover:from-green-600 hover:to-green-800 font-semibold`}
                     >
                        Book a Tee Time
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute bottom-0 z-auto w-full h-40 bg-gradient-to-t from-slate-900 to-transparent" />
      </Container>
   );
}
