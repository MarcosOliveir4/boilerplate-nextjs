import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen bg-amber-50 flex flex-col justify-center items-center">
      <h1 className="text-black text-2xl">Boilerplate</h1>
      <Image
        src="next.svg"
        alt="Picture of the author"
        width={250}
        height={250}
      />
    </main>
  );
}
