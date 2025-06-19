"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { toast } from "sonner";

import { Button } from "@workspace/ui/components/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@workspace/ui/components/form";
import { Input } from "@workspace/ui/components/input";
import Link from "next/link";

const FormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled." })
    .email("This is not a valid email."),
});

export function NewsletterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: data.email }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      toast("Subscribed!", {
        description: "You've been added to our list.",
      });
    } catch (error: any) {
      toast("Error", {
        description: error.message,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-4 flex-1 flex-col md:flex-row"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="w-full"
                  placeholder="Enter your email"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                We care about your data in our{" "}
                <Link href="/privacy" className="underline outline-brand">
                  privacy policy
                </Link>
                .
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-fit">
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
