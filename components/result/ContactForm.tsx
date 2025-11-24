"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { contactSchema, ContactSchemaType } from "@/lib/schemas/contactSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  getFromCookies,
  getSkinTone,
  getUnderTone,
  saveToCookies,
} from "@/lib/utils/cookies";

const ContactForm = () => {
  const router = useRouter();

  const form = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      nohp: "",
    },
  });

  const onSubmit = async (data: ContactSchemaType) => {
    saveToCookies("contact-data", data);

    const depth_levels = getSkinTone();
    const undertone_color = getUnderTone();
    const contact = getFromCookies<ContactSchemaType>("contact-data");

    const lat = localStorage.getItem("user_lat") || "";
    const long = localStorage.getItem("user_long") || "";

    const payload = {
      depth_levels: depth_levels || "",
      undertone_color: undertone_color || [],
      data: {
        name: contact?.name || "",
        email: contact?.email || "",
        phone: contact?.nohp || "",
        lat,
        long,
      },
    };

    try {
      const res = await fetch("/api/personalcolor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      console.log("Response API:", result);

      if (result.success && result.trx) {
        console.log("TRX:", result.trx);

        router.push(`/result/${result.trx}`);
      } else {
        console.error("Response tidak valid:", result);
      }
    } catch (err) {
      console.error("FETCH ERROR:", err);
    }
  };

  return (
    <div className="p-6 backdrop-blur-xl rounded-xl shadow-md  mt-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Masukkan nama" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="nohp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>No HP</FormLabel>
                <FormControl>
                  <Input placeholder="08xxxxxx" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full berl-btn text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
