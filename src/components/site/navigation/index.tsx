import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/global/mode-toggle";
import React from "react";
import { User } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import { menuItems } from "@/lib/constants";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex item-center gap-2">
        <Image
          src={"./assets/plura-logo.svg"}
          alt="Plura Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold">Plura.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-y-[-50%] translate-x-[-50%]">
        <ul className="flex items-center gap-8 justify-center">
          {menuItems.map((item) => (
            <Link key={item.id} href={"#"}>
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        <Link
          href={"/agency"}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  );
};

export default Navigation;
