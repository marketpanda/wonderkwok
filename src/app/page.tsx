import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
       <div className="flex flex-col">
        <div><Image src="https://wonderwokbucket.s3.ap-southeast-1.amazonaws.com/wok.jpg" width={100} height={100} alt='Recipes' /></div>
        <Link href='/recipes' className="rounded text-white bg-lime-500 px-3 py-2">

          Wonderwok
        </Link>
       </div>
    </main>
  );
}
