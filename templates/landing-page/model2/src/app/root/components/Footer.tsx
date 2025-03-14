import Typography from "@/components/atoms/Typography";
import Image from "@rasenganjs/image";
import profil_1 from "@/assets/images/profil_1.png";
import profil_2 from "@/assets/images/profil_2.png";
import profil_3 from "@/assets/images/profil_3.png";
import profil_4 from "@/assets/images/profil_4.png";
import play from "@/assets/play_white.svg";
import money from "@/assets/money.svg";
import Input from "@/components/atoms/input";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-footer text-footer-foreground p-8 lg:p-32">
      <div className="max-lg:flex-col flex flex-grow gap-16">
        <div className="flex flex-1 flex-col gap-8">
          <Typography
            className="max-xl:text-3xl text-5xl"
            weight="bold"
            text="People are Saying About DoWhith"
          />
          <Typography
            className="text-lg text-[#A6A6A6]"
            text="Everything you need to accept to payment and grow your money of manage anywhere on planet"
          />

          <span className="text-gray-400 text-9xl font-bold leading-none">
            "
          </span>

          <Typography
            className="text-lg text-[#A6A6A6]"
            text="I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍"
          />
          <Typography
            className="text-lg text-[#A6A6A6]"
            text="_ Aria Zinanrio"
          />
          <div className="flex gap-4">
            <Image src={profil_1} alt="profil_1" className="rounded-xl" />
            <Image src={profil_2} alt="profil_2" className="rounded-xl" />
            <Image src={profil_3} alt="profil_3" className="rounded-xl" />
            <Image src={profil_4} alt="profil_4" className="rounded-xl" />
            <Image
              src={play}
              alt="play"
              className="rounded-xl w-[66px] h-[66px]"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col bg-[#222938] py-12 rounded-2xl justify-center items-center">
          <form className="flex flex-col max-sm:px-12 lg:px-12 justify-center items-center">
            <Image src={money} alt="money" />
            <Typography className="text-3xl mt-2 mb-4" text="Get Started" />
            <Input label="Email" placeholder="Enter your email" />
            <Input
              label="Message"
              placeholder="What are you say ?"
              isTextArea
            />
            <button className="w-full py-4 bg-primary rounded-[10px]">
              Request Demo
            </button>
            <p className="w-full flex justify-end mt-2 text-sm gap-1">
              <span className="text-[#A6A6A6]">or</span>Start Free Trial
            </p>
          </form>
        </div>
      </div>

      <div className="max-lg:flex-col flex flex-grow gap-16 mt-16">
        <div className="flex flex-1 flex-col gap-8">
          <Typography
            text="Biccas"
            weight="bold"
            className="text-4xl text-primary"
          />
          <Typography
            className="text-lg text-[#A6A6A6]"
            text="Get started now try our product"
          />
          <div className="border-2 border-[#A6A6A6] rounded-full flex items-center p-2 justify-between bg-transparent">
            <input
              className="border-none bg-footer w-full"
              placeholder="Enter your email here"
            />
            <div className="bg-primary rounded-full w-10 h-10 p-2 text-center">
              -{">"}
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col md:flex-row items-center justify-between gap-16">
          <ul className="flex flex-col text-lg gap-6">
            <li className="">Support</li>
            <li className="text-[#A6A6A6]">Help centre</li>
            <li className="text-[#A6A6A6]">Account information</li>
            <li className="text-[#A6A6A6]">About</li>
            <li className="text-[#A6A6A6]">Contact us</li>
          </ul>
          <ul className="flex flex-col text-lg gap-6">
            <li className="">Help and Solution</li>
            <li className="text-[#A6A6A6]">Talk to support</li>
            <li className="text-[#A6A6A6]">Support docs</li>
            <li className="text-[#A6A6A6]">System status</li>
            <li className="text-[#A6A6A6]">Covid responde</li>
          </ul>
          <ul className="flex flex-col text-lg gap-6">
            <li className="">Product</li>
            <li className="text-[#A6A6A6]">Update</li>
            <li className="text-[#A6A6A6]">Security</li>
            <li className="text-[#A6A6A6]">Beta test</li>
            <li className="text-[#A6A6A6]">Pricing product</li>
          </ul>
        </div>
      </div>

      <div className="max-lg:flex-col flex  justify-between items-center mt-16">
        <Typography
          text="© 2025 Rasengan Labs. all rights reserved"
          className="text-center"
        />
        <Typography
          text="Terms and Condtions - Privacy Policy"
        />
      </div>
    </footer>
  );
}
