import Image from "next/image";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";

export default function Home() {
  return (
    <div
      data-testid="home"
      className="relative h-screen flex items-center justify-center overflow-x-hidden"
    >
      <div className="container pt-20 max-w-7xl w-full mx-auto h-full">
        <div className="flex-col md:flex-row h-full flex items-start  lg:justify-center md:items-center">
          <div className="pt-10 w-full md:w-2/5 text-left">
            <LargeHeading size="lg" className=" text-gray-700 mb-2">
              Sky{" "}
              <span className="text-primary2  dark:text-primary-light">
                Blog
              </span>
            </LargeHeading>

            <Paragraph className="max-w-xl lg:text-left">
              Developer portal for quality content with latest data and updates.
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
              src="/cloud.png"
              alt="cloud"
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
