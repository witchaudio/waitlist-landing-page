'use client'
import Link from "next/link"
import Image from "next/image";
import AnimationComponent from "@/components/animation";

export default function Signup() {
  return (
    <section className="w-full h-screen flex items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:gap-8 md:px-6">
        <div className="space-y-3 max-w-[600px]">
        <AnimationComponent />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Join Our Beta?</h2>
          <p className="text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
          Scan this QR code to get started.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full items-center"> 
          <div className="inline-flex items-center justify-center border border-gray-200 rounded-lg p-2 sm:p-4 dark:border-gray-800">
            <Image src="/qr-code.png" alt="QR Code" width={200} height={200} className="bg-white rounded-md overflow-hidden" />
          </div>
          <Link className="inline-block text-sm underline underline-offset-2 hover:no-underline" href="https://beta.output.com/waitlist">
            Or access the waitlist link directly
          </Link>
        </div>
      </div>
    </section>
  );
}
