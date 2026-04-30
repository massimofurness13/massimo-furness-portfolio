import { Masthead } from "@/components/Masthead";
import { Gallery } from "@/components/Gallery";
import { Colophon } from "@/components/Colophon";

export default function Home() {
  return (
    <main className="px-6 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-[1320px]">
        <Masthead />
        <Gallery />
        <Colophon />
      </div>
    </main>
  );
}
