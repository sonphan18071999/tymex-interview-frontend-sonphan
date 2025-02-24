"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative w-full bg-black text-white py-20">
      <div className="relative w-full h-40 sm:h-60 md:h-80 lg:h-96 xl:h-[500px]">
        <Image
          src="/assets/images/banner_footer_bg.svg"
          alt="Background"
          quality={100}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
};

export default Banner;
