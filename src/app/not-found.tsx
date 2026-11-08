import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { Doodle } from "@/components/ui/Doodle";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col items-start justify-center px-5 py-20 sm:px-8">
      <span className="text-electric">
        <Doodle name="magnifier" animate className="block size-16" />
      </span>
      <p className="eyebrow mt-6 text-electric">404 · page not found</p>
      <h1 className="display mt-4 max-w-3xl text-5xl sm:text-7xl">
        That page went off to <span className="text-electric italic">investigate</span> something else.
      </h1>
      <p className="hand mt-5 text-3xl text-ember">can&apos;t blame it, honestly</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href="/" className="btn btn-solid">
          Back to the start <Arrow />
        </Link>
        <Link href="/work" className="btn btn-line">
          Explore My Work
        </Link>
      </div>
    </section>
  );
}
