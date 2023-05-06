// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { buttonVariants } from "./ui/Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = async () => {
  return (
    <header className="fixed backdrop-blur-sm bg-white dark:bg-slate-900/75 z-50 top-0 left-0 right-0 h-16 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <Link
          href="/"
          className={cn(buttonVariants({ variant: "link" }), "pl-0")}
        >
          <div className="flex justify-center items-center">
            <div className="">R-BLOG</div>
            <div className=" w-10 aspect-square flex justify-center items-center relative text-right sm:mt-0">
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
          </div>
        </Link>
        <Link href="/blog" className={buttonVariants({ variant: "link" })}>
          Blog
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
