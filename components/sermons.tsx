import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

const Sermons = () => {
  return (
    <div className="p-4 md:p-8 bg-red rounded-3xl flex flex-col md:flex-row">
      {/* Image with play button overlay */}
      <div className="relative">
        <Image
          src="/images/hero-church.png"
          alt="Outdoor church gathering"
          height={500}
          width={500}
          className="object-cover rounded-2xl w-full h-full max-w-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-full border-lightYellow border-2 bg-opacity-80 p-5 cursor-pointer">
            <Play className="text-lightYellow w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="max-w-2xl mx-auto py-4 md:p-8 flex flex-col justify-center">
        <h2 className="text-lightYellow text-3xl font-bold md:text-4xl font-serif mb-6">
          Sermons
        </h2>

        <p className="text-white text-xl lg:text-2xl mb-10">
          Access previous recordings of sermons preached at Gracepointe Church
          in Ocala, FL.
        </p>

        <div className="flex justify-end">
          <Link
            href="/sermons/all"
            className="inline-flex items-center border-2 border-lightYellow text-lightYellow hover:bg-lightYellow hover:text-rust px-8 py-3 rounded-full transition-colors text-lg hover:text-red font-bold"
          >
            <Play className="h-6 w-6 mr-2" />
            Listen Online
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sermons;
