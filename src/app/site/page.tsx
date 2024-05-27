import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { pricingCards } from "@/lib/constants";

export default function Home() {
  return (
    <div className="mx-4">
      <section className="flex flex-col justify-center items-center pt-20">
        <div className="absolute w-full bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#94b8a3_1px,transparent_1px),linear-gradient(to_bottom,#94b8a3_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_0%,transparent_110%)] -z-10" />
        <p className="text-center">Run your agency, in one place</p>

        <div className="grid">
          <div className="self-end bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text -z-10">
            <h1 className="text-heading-clamp font-bold text-center text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              Plura
            </h1>
          </div>
          <div className="flex justify-center relative w-full">
            <Image
              src={"/assets/preview.png"}
              alt="banner image"
              height={950}
              width={950}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted relative"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background  rounded-tl-2xl rounded-tr-2xl" />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center flex-col gap-4 mt-4 pb-20 lg:pb-32">
        <h2 className="text-4xl text-center text-balance">
          Choose what fits you right
        </h2>
        <p className="text-muted-foreground text-center text-pretty">
          Our straightforward pricing plans are tailored to meet your needs. If
          {"you're"} not ready to commit you can get started for free.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            //WIP
            <Card
              key={card.title}
              className={clsx("w-[300px] flex flex-col justify-between", {
                "border-2 border-primary": card.title === "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent className="text-4xl font-bold">
                {card.price}
                {card.price !== "Free" && (
                  <span className="text-muted-foreground">/m</span>
                )}
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <ul>
                  {card.features.map((feature) => (
                    <li className="flex gap-2 items-center" key={feature}>
                      <Check className="text-muted-foreground" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`agency?plan=${card.priceId}`}
                  className={clsx(
                    "w-full text-center bg-primary p-2 rounded-md text-tremor-background-muted",
                    {
                      "!bg-muted-foreground": card.title !== "Unlimited Saas",
                    }
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
