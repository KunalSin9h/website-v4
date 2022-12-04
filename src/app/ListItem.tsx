import Link from "next/link";
import Image from "next/image";

export default function ListItems({
  url,
  src,
  alt,
}: {
  url: string;
  src: string;
  alt: string;
}) {
  return (
    <li className="mx-2">
      <Link href={url}>
        <Image src={src} alt={alt} height="40" width="40" />
      </Link>
    </li>
  );
}
