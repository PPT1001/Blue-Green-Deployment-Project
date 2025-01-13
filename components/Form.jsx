"use client";

import { Button } from "./ui/button-copy";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const Form = () => {
  const form = useRef();
  const [alert, setAlert] = useState({
    show: false,
    variant: "",
    title: "",
    description: "",
  });
  //Refresh the page after the form is submitted

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4jpf04h", "template_b7ckbcb", form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setAlert({
            show: true,
            variant: "success",
            title: "Successfully Sent",
            description:
              "You message has been successfully sent. I will get back to you.",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlert({
            show: true,
            variant: "destructive",
            title: "Failed to Send",
            description: "Your message has failed to send. Please try again.",
          });
        }
      );

    form.current.reset();
  };

  return (
    <div>
      <form ref={form} className="flex flex-col gap-y-4" onSubmit={sendEmail}>
        <div className="relative flex items-center">
          <Input name="user_name" type="name" id="name" placeholder="Name" />
          <User size={24} className="absolute right-6 text-primary" />
        </div>
        <div className="relative flex items-center">
          <Input
            name="user_email"
            type="email"
            id="email"
            placeholder="Email"
          />
          <MailIcon size={24} className="absolute right-6 text-primary" />
        </div>
        <div className="relative flex items-center">
          <Textarea name="message" placeholder="Type Your Message Here" />
          <MessageSquare
            size={24}
            className="absolute top-4 right-6 text-primary"
          />
        </div>
        <Button
          type="submit"
          value="Send"
          className="max-w-40 flex items-center gap-x-1 self-end"
        >
          Contact Me
          <ArrowRightIcon size={24} className="ml-2" />
        </Button>
        {alert.show && (
        <div className="border-white">
          <Alert variant={alert.variant}>
            {alert.variant === "success" ? (
              <Terminal className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertDescription>{alert.description}</AlertDescription>
          </Alert>
        </div>
      )}
      </form>
      
    </div>
  );
};

export default Form;
