export default function BoxGradient({ text }: { text: string }): JSX.Element {
  return (
    <span className="bg-gradient-to-r from-cyan-600 to-green-500 box-decoration-clone px-2 text-white dark:from-indigo-600 dark:to-pink-500">
      {text}
    </span>
  );
}
