import Image from "next/image";
import Link from "next/link";
import { AiFillBank } from "react-icons/ai";

import GoBackComponent from "@/components/GoBackComponent";
import CustomHead from "@/components/CustomHead";

export default function Register() {
  return (
    <>
      <CustomHead />

      <div className="flex h-screen w-screen">
        {/* left */}
        <div className="relative hidden h-full items-center justify-center bg-zinc-600 p-4 md:flex md:w-[calc(100vw-35rem)]">
          <Image
            fill
            className="object-cover"
            src="/people-at-bank.jpeg"
            alt="Astra bank"
          />
        </div>

        {/* right */}
        <div className="w-full bg-white p-5 md:w-[35rem]">
          <div className="min-w-[75%]">
            <Link href={"/"}>
              <GoBackComponent />
            </Link>

            <div className="mb-4 mt-24 flex justify-center">
              <div className="relative h-[89px] w-72">
                <Image
                  src="/astra-logo.svg"
                  alt="Astra pay Logo"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="">
              <h1 className="flex justify-center text-lg font-semibold">
                Let&apos;s get started
              </h1>
              <p className="text-center">
                Do you have an existing account?{" "}
                <Link className="text-astra-blue" href="/login">
                  Login
                </Link>
              </p>
            </div>

            <div className="mt-10 flex justify-between gap-3">
              <Link href={"/register/account"}>
                <div className="flex flex-col items-center rounded-lg bg-astra-blue p-3 text-center  text-astra-orange hover:animate-pulse">
                  <AiFillBank size={100} />
                  <p>I have an Astrapolaris account</p>
                </div>
              </Link>

              <Link href={"/register/no-account"}>
                <div className="flex flex-col items-center rounded-lg bg-astra-blue p-3 text-center  text-astra-orange hover:animate-pulse">
                  <AiFillBank size={100} />
                  <p>I don&apos;t have an Astrapolaris account</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
