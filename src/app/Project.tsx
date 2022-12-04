import Image from "next/image";
import Link from "next/link";

export default function Project({
  banner,
  logo,
  name,
  desc,
  live,
  source,
}: {
  banner?: string;
  logo?: string;
  name: string;
  desc: string;
  live?: string;
  source?: string;
}): JSX.Element {
  return (
    <div className="block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-xl ring-1 ring-slate-900/5 dark:bg-[#121212] dark:ring-white">
      {banner ? (
        <Image
          src={banner}
          alt="Project banner"
          height="1000"
          width="1000"
          className="mx-auto  ring-1 ring-white"
        />
      ) : null}
      <div className="flex items-center">
        {logo ? (
          <Image
            src={logo}
            alt="Project Logo"
            height={50}
            width={50}
            className="mr-2"
          />
        ) : null}
        <h3 className="text-4xl font-semibold text-slate-900 dark:text-white">
          {name}
        </h3>
      </div>
      <p className="text-sm text-slate-500 dark:text-slate-300">{desc}</p>
      <div className="flex">
        {live ? (
          <Link href={live}>
            <Image
              src="/world.svg"
              alt="Live project"
              height={25}
              width={25}
              className="mr-2"
            />
          </Link>
        ) : null}
        {source ? (
          <Link href={source}>
            <Image src="/link.svg" alt="Source link" height={20} width={20} />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
