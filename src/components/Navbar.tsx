import Link from "next/link";

import MobileMenu from "./MobileMenu";
import Image from "next/image";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block">
        <Link className="font-bold text-blue-600 text-xl" href="">
          FELINE-SOCIAL
        </Link>
      </div>
      {/* CENTER */}
      <div className="hidden md:flex w-[50%] text-sm items-center justify-between">
        {/* LINKS */}
        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="HomePage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>HomePage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="HomePage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="HomePage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span>Stories</span>
          </Link>
        </div>
        <div className="hidden xl:flex p-2 bg-slate-50 items-center rounded-xl">
          <input
            type="text"
            placeholder="查找"
            className="bg-transparent outline-none"
          />
          <Image src="/search.png" alt="searchPng" width={14} height={14} />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <ClerkLoading></ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer flex justify-center gap-2">
              <Image
                src="/people.png"
                alt="peopleIcon"
                width={24}
                height={24}
              />
            </div>
            <div className="cursor-pointer flex justify-center gap-2">
              <Image
                src="/messages.png"
                alt="messageIcon"
                width={20}
                height={20}
              />
            </div>
            <div className="cursor-pointer flex justify-center gap-2">
              <Image
                src="/notifications.png"
                alt="notificationIcon"
                width={20}
                height={20}
              />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex justify-center  gap-2">
              <Image src="/login.png" alt="loginIcon" width={20} height={20} />
              <Link href="/sign-in">Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
