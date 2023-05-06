import Image from "next/image";
import Link from "next/link";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Store",
  description:
    "Find and discover best seller books. Most readers favorite book site.",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-20 max-w-7xl w-full mx-auto h-full">
        <div className="flex-col md:flex-row h-full flex items-start  lg:justify-center md:items-center">
          <div className="pt-10 w-full md:w-2/5 text-left">
            <LargeHeading
              size="lg"
              className="three-d text-black dark:text-primary-light"
            >
              Random{" "}
              <span className="text-light-secondary dark:text-dark-secondary">
                Blog
              </span>
            </LargeHeading>

            <Paragraph className="max-w-xl lg:text-left">
              I don&apos;t know which content will be add tomorrow maybe
              it&apos;s about dolphin or about clothes.
            </Paragraph>
          </div>
          <div className="w-full aspect-square flex justify-center items-center relative md:w-3/5 text-right mt-8 sm:mt-0">
            {/* <div className="bg-red-500 w-full h-full">Book Image</div> */}
            <Image
              priority
              className="img-shadow rounded-md"
              quality={50}
              style={{ objectFit: "contain" }}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              src="/dice.png"
              alt="dice"
            />
          </div>

          {/* <div className="relative w-full max-w-xl lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className="img-shadow "
              quality={50}
              style={{ objectFit: "contain" }}
              fill
              src="/stack-of-books.png"
              alt="stack-of-books"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
