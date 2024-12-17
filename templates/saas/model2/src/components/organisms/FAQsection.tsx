import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atom/accordion";
import { Textarea } from "../atom/textarea";
import { ArrowRightCircleIcon } from "lucide-react";
import MotionIconButton from "../molecule/buttons/MotionIconButton";

const FAQsection = () => {
  return (
    <section
      id="faq"
      className="relative border-2 border-primary mx-auto flex flex-col items-center justify-center gap-14 pt-[86px] pb-32 lg:pb-80 px-6"
    >
      <div className="text-center space-y-3">
        <h2 className="font-bold text-5xl">FAQ's</h2>
        <p className="font-normal text-black/60 text-lg">
          Providing answers to your questions
        </p>
      </div>

      <div className="max-w-[543px] space-y-7">
        <Accordion type="single" collapsible>
          <AccordionItem
            className="bg-[#111204] mb-7 text-white px-9 py-2 text-lg w-full rounded-2xl"
            value="item-1"
          >
            <AccordionTrigger>
              Do you have specific princing plans to show?
            </AccordionTrigger>
            <AccordionContent>
              Do you have specific princing plans to show?
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-[#111204] mb-7 text-white px-9 py-2 text-lg w-full rounded-2xl"
            value="item-2"
          >
            <AccordionTrigger>
              How many years of experience do you have?
            </AccordionTrigger>
            <AccordionContent>
              Donec rutrum, mauris at blandit convallis, orci nulla volutpat sapien,
              id pulvinar leo ligula eget nunc. In quis magna magna. Nullam mattis
              eget.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-[#111204] mb-7 text-white px-9 text-lg w-full rounded-2xl"
            value="item-3"
          >
            <AccordionTrigger>What companies have you worked with?</AccordionTrigger>
            <AccordionContent>What companies have you worked with?</AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-[#111204] text-white px-9 py-2 w-full text-lg rounded-2xl"
            value="item-4"
          >
            <AccordionTrigger>
              Am I safe leaving my company in your hands?
            </AccordionTrigger>
            <AccordionContent>
              Am I safe leaving my company in your hands?
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Textarea
          placeholder="Ask us what you want to know..."
          rows={5}
          className="w-full resize-none border-[1.5px] border-[#111204] rounded-xl"
        />

        <div className="flex justify-between gap-28 items-center">
          <span className="text-[#11120499]">
            We will answer your questions via email within 48 hours.
          </span>

          <MotionIconButton
            className="rounded-full"
            icon={
              <ArrowRightCircleIcon className="size-5 fill-[#111204] text-[#B9FD50]" />
            }
            iconX={-25}
          >
            Send
          </MotionIconButton>
        </div>
      </div>

      <div className="w-full sm:w-[90%] lg:h-[424px] lg:max-w-[calc(100vw-200px)] p-6 bg-[#1E2008] rounded-3xl lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:bottom-0 lg:translate-y-1/2">
        <div className="w-[75%] gap-6 lg:gap-12 flex flex-col lg:justify-center lg:items-center h-full lg:max-w-[640px] lg:mx-auto">
          <div className="text-white lg:text-center space-y-5">
            <h1 className="font-bold text-4xl lg:text-[64px] lg:leading-[65px] tracking-tight">
              Become part of the design revolution
            </h1>
            <p className="font-normal text-lg lg:w-[50%] mx-auto">
              Jump on a membership and start requesting designs right away!
            </p>
          </div>

          <MotionIconButton
            icon={
              <ArrowRightCircleIcon className="size-5 fill-[#111204] text-[#B9FD50] -rotate-45" />
            }
          >
            See pricing
          </MotionIconButton>
        </div>
      </div>
    </section>
  );
};

export default FAQsection;
