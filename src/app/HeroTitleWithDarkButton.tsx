import DarkThemeButton from "./DarkThemeButton";

export default function HeroTitleWithDarkButton({ text }: { text: string }) {
  return (
    <div className="m-4 flex flex-col items-center justify-center">
      <p className="text-5xl font-extrabold dark:text-white  md:text-7xl">
        {text}
      </p>
      <DarkThemeButton />
    </div>
  );
}
