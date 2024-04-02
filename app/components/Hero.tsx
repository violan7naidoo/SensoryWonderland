import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  const data = await client.fetch(query);

  return data;
}

console.log("hello");

export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-1 ">
          <h1 className="mb-4 text-4xl  justify-center font-bold text-black sm:text-5xl md:mb-8 md:text-6xl bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg shadow-lg p-6 transition-all duration-1000 ease-in-out animate-gradient">
            Welcome to our shop!
          </h1>

          <p className="max-w-md leading-relaxed text-black-500 xl:text-lg  bg-gradient-to-r from-blue-200 to-blue-400 rounded-lg shadow-lg p-6 transition-all duration-1000 ease-in-out animate-gradient">
            Dear Loving Parents, Guardians, Caregivers and Supporters <br /> We
            at Sensory Wonderland, understand you have a hectic schedule. Just a
            personal note: From the Founder I know things change everyday, we
            cannot do everything on our own. Do not feel ashamed or guilty,
            instead BE PROUD!!! God will never give you more then you can
            handle. No diagnosis is different just because of the severity, as
            not all diagnosis can be seen. Non-Verbal or on the spectrum and
            even though they cannot say I love you out aloud. I am sure those
            tight bear hugs, and kisses shows you that appreciation and love.
            Actions over words?! Take each day as it comes. Jeremiah 29:11. Love
            K.
          </p>
        </div>

        <div className="mb-12 flex flex-col items-center w-full md:mb-16 lg:w-2/3">
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full max-w-md mb-4 md:mb-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg w-full max-w-md">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-full divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Occupational"
            className="flex w-1/3 items-center justify-center text-black-500 transition duration-100 hover:bg-blue-100 active:bg-gray-200"
          >
            Occupational
          </Link>
          <Link
            href="/Toys"
            className="flex w-1/3 items-center justify-center text-black-500 transition duration-100 hover:bg-blue-100 active:bg-gray-200"
          >
            Toys
          </Link>
          <Link
            href="/Products"
            className="flex w-1/3 items-center justify-center text-black-500 transition duration-100 hover:bg-blue-100 active:bg-gray-200"
          >
            Products
          </Link>
        </div>
      </div>
    </section>
  );
}
