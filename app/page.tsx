import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center flex-col 
      overflow-hidden mx-auto px-5 sm:px-10"
    >
      <div className="max-w-7xl w-full">
        <Hero />
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
      </div>
    </main>
  );
}
