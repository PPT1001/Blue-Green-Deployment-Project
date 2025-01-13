import Form from "@/components/Form";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 mb-20 pt-12 xl:h-[480px]">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Say Hello👋</div>
            </div>
            <h1 className="h1 max-w-md mb-8">Wondering How to Contact?</h1>
          </div>
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* Info Text and Forms */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* Info  */}
          <div className=" flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* Mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={24} className="text-primary" />
              <div>Pragash1001@gmail.com</div>
            </div>
            {/* Address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={24} className="text-primary" />
              <div>Colombo, Sri Lanka</div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={24} className="text-primary" />
              <div>+94 77 972 4396</div>
            </div>
          </div>
          {/* Form */}
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
