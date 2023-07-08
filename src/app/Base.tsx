import { Source_Code_Pro } from "@next/font/google";

const coding = Source_Code_Pro({
  subsets: ["latin"],
  weight: "400",
});

export default function Bash({ text }: { text: string }): JSX.Element {
  return (
    <span
      className={`${coding.className} mx-px rounded-md bg-black p-4 text-white dark:ring-1 dark:ring-white`}
    >
      <span className="select-none font-bold text-purple-500">$ </span>
      {text}
    </span>
  );
}
