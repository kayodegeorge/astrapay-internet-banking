import Image from "next/image";
import Link from "next/link";

import CustomHead from "@/components/CustomHead";
import LoginComponent from "@/components/LoginComponent";

export default function Login() {
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
        <div className="flex w-full items-center justify-center bg-white md:w-[35rem]">
          <div className="min-w-[75%]">
            <div className="mb-4 flex justify-center">
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
              <h1 className="mb-4 flex justify-center text-lg font-semibold">
                Welcome Back!
              </h1>
            </div>

            <LoginComponent />

            <div className="mt-4 flex justify-center">
              <p>
                Yet to register?{" "}
                <Link className="text-astra-blue" href="/register">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
