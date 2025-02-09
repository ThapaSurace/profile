"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      setLoading(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      toast({
        description: "Message sent successfully!",
      });
      form.current.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container space-y-10">
      <div>
        <h1 className="mb-4">Contact Me</h1>
        <p className="">
          Reach out to me over email or fill up this contact form. I will get
          back to you ASAP - I promise.
        </p>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <Input type="text" placeholder="Full Name" />
            <Input type="email" placeholder="Email" />
          </div>
          <Textarea placeholder="Type your message here." rows={10} />

          <div>
            <Button
              disabled={loading}
              className="w-full text-white dark:text-slate-900"
            >
              {loading ? "Sending..." : "Submit"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
