import DarkThemeButton from "./DarkThemeButton";
import { Righteous } from "@next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroTitleWithDarkButton({ text }: { text: string }) {
  return (
    <div className="m-4 flex flex-col items-center justify-center">
      <p
        className={`${righteous.className} text-5xl font-extrabold dark:text-white  md:text-7xl`}
      >
        {text}
      </p>
      <DarkThemeButton />
    </div>
  );
}
