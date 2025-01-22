import * as React from "react";

import { Button } from "@/components/atom/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atom/card";
import { Input } from "@/components/atom/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/atom/select";
import { Textarea } from "@/components/atom/textarea";

import { MoveRightIcon, Phone, Mail } from "lucide-react";

import { cn } from "@/lib/utils";

interface notification {
  title: string;
  description: string;
}

function ContactCard() {
  const notifications: notification[] = [
    {
      title: "Your call has been confirmed.",
      description: "1 hour ago",
    },
    {
      title: "You have a new message!",
      description: "1 hour ago",
    },
    {
      title: "Your subscription is expiring soon!",
      description: "2 hours ago",
    },
  ];

  return (
      <div className="flex md:flex-nowrap flex-wrap-reverse justify-center md:space-x-6 mx-auto px-6 rounded-xl shadow-2xl lg:w-auto md:max-w-4xl sm:border sm:max-w-xl max-w-md lg:max-w-7xl bg-white p-6">
        <div className="lg:w-2/5 w-full">
          <CardDemo notifications={notifications} />
        </div>
        <div className="lg:w-3/5 w-full md:border-l md:px-4">
          <Card className="w-full border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-2xl">Just say 👋 Hi</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4 mt-2">
                  <div className="flex lg:flex-nowrap flex-wrap justify-start gap-6">
                    <div className="lg:w-1/2 w-full">
                      <Input id="name" placeholder="Full Name" />
                    </div>
                    <div className="lg:w-1/2 w-full">
                      <Input id="name" placeholder="Email Adress" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 w-full">
                    <Input id="name" placeholder="Name of your project" />
                  </div>

                  <div className="flex lg:flex-nowrap flex-wrap justify-start gap-6">
                  <div className="lg:w-1/2 w-full">
                  <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Services" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">One</SelectItem>
                          <SelectItem value="sveltekit">Two</SelectItem>
                          <SelectItem value="astro">Three</SelectItem>
                          <SelectItem value="nuxt">Four</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="lg:w-1/2 w-full">
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Budgets" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="next">One</SelectItem>
                          <SelectItem value="sveltekit">Two</SelectItem>
                          <SelectItem value="astro">Three</SelectItem>
                          <SelectItem value="nuxt">Four</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Textarea placeholder="Message" className="h-[150px]" />
                </div>
              </form>
            </CardContent>
            <CardFooter className="">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 p-9 rounded-2xl text-lg shadow-none"
              >
                Send Message
                <MoveRightIcon className="mr-2 h-6 w-10" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
  );
}

// type CardProps = React.ComponentProps<typeof Card>

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  notifications: notification[];
}

export function CardDemo({ className, notifications, ...props }: CardProps) {
  return (
    <Card
      className={cn("w-full border-none shadow-none", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle className="text-[22px]">
          Have a project or question in mind? Just send me a message.
        </CardTitle>
        <CardDescription className="mt-3 text-md text-slate-700">
          Do you fancy saying hi to me or do you want to get started with your
          project and you need my help? Feel free to contact me. I will reply
          within 48 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="space-y-4 mt-2">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-4 rounded-lg">
              <Phone className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Call me now</div>
              <div className="font-normal">+1-202-555-0190</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-4 rounded-lg">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-sm text-slate-600">Chat with me</div>
              <div className="font-normal">kevin.gilbert@gmail.com</div>
            </div>
          </div>
        </div>

        <Card className="bg-purple-100 border-none shadow-none p-4 mt-3 w-full">
          <CardContent className="lg:p-6 md:p-4 p-0">
            <h3 className="font-normal mb-4">Follow me on social media</h3>
            <div className="flex flex-wrap gap-4 text-purple-500">
              <hr className="md:w-9 w-4 h-1 bg-purple-400 my-auto" />
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                <svg
                  className="md:w-6 md:h-6 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                <svg
                  className="md:w-6 md:h-6 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                <svg
                  className="md:w-6 md:h-6 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                <svg
                  className="md:w-6 md:h-6 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02c0-1.5-.47-2.7-1.3-3.54a4.82 4.82 0 0 0-3.54-1.25zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98z" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full hover:bg-purple-600 hover:text-white transition-colors"
              >
                <svg
                  className="md:w-6 md:h-6 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.95 17.657h-3.46c-.792 0-1.425-.634-1.425-1.426v-3.42h4.885v-3.42H12.06V6.976h3.46c.792 0 1.425.634 1.425 1.426v3.42h-4.885v3.42h4.885v2.415z" />
                </svg>
              </a>
            </div>
          </CardContent>
        </Card>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default ContactCard;
