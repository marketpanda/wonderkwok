import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100">
       <div className="flex flex-col gap-2">
        
          <div className="rounded overflow-hidden">
            <Image src="https://wonderwokbucket.s3.ap-southeast-1.amazonaws.com/wok.jpg" width={200} height={200} alt='Recipes' />
          </div>
            
          
          <Link href='/recipes' className="flex justify-center rounded text-white bg-lime-500 px-3 py-2">

          Wonderwok
          </Link>
       </div>
    </main>
  );
}
