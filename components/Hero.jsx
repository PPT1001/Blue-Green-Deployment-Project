import Link from "next/link";
import { Button } from "./ui/button-copy";
import { Download, Send } from "lucide-react";
import { SparklesCore } from "./ui/sparkles.tsx";
import { BackgroundBeams } from "./ui/background-beams";

import {
  RiBriefCase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

//Components
import DevImg from "./DevImg";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        {/* <div className="w-full absolute z-[-1] inset-0 h-[700px]">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div> */}
        <div className="flex justify-between gap-x-8">
          {/* Text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto text-center">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Software Engineer | DevOps Engineer
            </div>
            <h1 className="h1 mb-4">Hi, I'm Pragash Sasitharan</h1>
            <p className="subtitle max-w-[490px] mx-auto">
              I'm a passionate software engineer with a focus on building
              scalable and maintainable applications.
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Link href="https://drive.google.com/uc?export=download&id=1QaTSnOflv_h1GKW_z4dCx4HH2l4S4UOS">
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
            {/* Socials */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all cursor-pointer"
            />
          </div>
          {/* Image */}
          <div className="hidden">
            <div className="bg bg-hero_shape_2_light dark:bg-hero_shape_2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                className="bg-blend-multiply"
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/developer.png"
              />
            </div>
          </div>
        </div>
        {/* <div className=" hidden md:flex absolute left-2/4 bottom-44 xl:bottom-18 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div> */}
      </div>
      {/* <BackgroundBeams className="z-[-1]" /> */}
    </section>
  );
};

export default Hero;
