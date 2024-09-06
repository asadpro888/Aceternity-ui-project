import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="App">
      <Link href={'/card'}>Card</Link>
      <Link href={'/hover'}>card</Link>
      <Link href={'/Gra'}>Hover</Link>
      <Link href={'/glare'}>glare card</Link>
      <Link href={'/hero'}>backdrop</Link>

    </div>
  );
}
