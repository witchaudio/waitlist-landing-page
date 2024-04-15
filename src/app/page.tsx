import Hero from "../components/hero";
import { Cta } from "@/components/cta";
import { FAQ } from "@/components/faq";
 
export default function Home() {
  return (
    <div>
      <Hero />
      <Cta />
      <FAQ />
    </div>
  );
}
