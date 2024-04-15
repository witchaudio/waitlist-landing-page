import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Cta() {
  return (
    <div
      id="cta"
      className="bg-black text-white flex justify-center items-center"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold leading-tight">
            Want To Be In The Beta?
          </h2>
          <Link href="/signup" legacyBehavior>
          <a className="bg-white text-black mt-8 inline-block px-6 py-2 text-sm font-medium leading-6 text-center transition border border-transparent rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 custom-hover">
              Sign up for access
            </a>
          </Link>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <h3 className="text-sm uppercase font-semibold opacity-50">
            Help Us Build The Future of Music
          </h3>
          <blockquote className="mt-8 w-full max-w-2xl text-center">
            <p className="text-xl leading-relaxed">
              Get early access to new features, products and insights from our
              team. Help shape the future of music creation and collaboration.
              As a beta tester you&apos;ll provide valuable feedback to help us
              build the best tools for musicians.
            </p>
            <footer className="mt-4">
              <p className="font-semibold">- Output Team</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
