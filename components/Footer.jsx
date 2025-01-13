import Socials from "./Socials";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Socials
            containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4"
            iconStyles="text-primary dark:text-white/70 text-[25px] hover:text-white dark:hover:text-primary transition-all duration-300"
          />
          <div className="text-muted-foreground">
            Copyright &copy; <Link href="/">Pragash Sasitharan.</Link> All
            rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
