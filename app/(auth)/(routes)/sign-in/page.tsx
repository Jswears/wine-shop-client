"use client";
import { AuthContext } from "@/context/auth.context";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useContext } from "react";
import { AuthContextType } from "@/types";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const SigninPage = () => {
  const { authenticateUser, storeToken } = useContext(
    AuthContext
  ) as AuthContextType;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:5005/auth/login",
        values
      );
      if (response.status === 200) {
        toast.success("User logged in");
        storeToken(response.data.authToken);
        authenticateUser();
        window.location.assign("/shop/wines");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  }
  return (
    <>
      <Toaster />
      <div className="container-left w-2/4 h-full bg-black">hi</div>
      <div className="container-right w-2/4 flex justify-center items-center">
        {" "}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-72"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} type="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Log In</Button>
            <p>You dont have an account?</p>
            <Link href={"/sign-up"}>
              <Button variant={"link"}>Sign Up here</Button>
            </Link>
          </form>
        </Form>
      </div>
    </>
  );
};

export default SigninPage;
