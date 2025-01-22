import bio from "@/assets/bio.png";
import socialMedia from "@/assets/sm.png";

import { Badge } from "@/components/atom/badge";
import { Button } from "@/components/atom/button";
import { Download } from "lucide-react";

const Bio = () => {
  return (
    <div className=" mx-auto py-16 container" id="about">
      <div className="grid gap-0 md:grid-cols-5 lg:grid-cols-5 lg:gap-7 md:gap-7 gap-y-7 items-center">
        <div className="relative w-full mx-auto h-full col-span-3">
          <div className="inset-0 relative overflow-hidden h-full w-full px-3">
            <div className="absolute z-99 lg:bottom-12 md:bottom-64 bottom-6 lg:left-32 md:left-32 left-24 w-4/5">
              <Follow />
            </div>
            <img
              src={bio}
              alt="Professional portrait"
              className="h-full w-full object-contain"
            />
          </div>
        </div>

        <div className="space-y-6 col-span-2 lg:text-start md:text-start text-center flex flex-col lg:items-start md:items-start items-center mt-5 relative">
          <div className="flex flex-wrap lg:justify-start md:justify-start justify-center space-x-3 lg:text-lg md:text-md text-xs">
            <Badge variant="designer" className="p-0">
              🔥 Designer
            </Badge>
            <Badge variant="instructor">👨‍🏫 Instructor</Badge>
            <Badge variant="podcaster">🎙️ Podcaster</Badge>
          </div>

          {/* <div className="overflow-hidden ring"> */}
            <div className="absolute lg:inline hidden z-0 -right-52 rounded-full blur-container blur-2xl w-96 h-96 bg-blue-50/70"></div>
          {/* </div> */}

          <h1 className="sticky z-10 text-3xl md:text-4xl font-semibold text-gray-900 w-11/12">
            I'm a Professional UI/UX Designer Based on Tokyo.
          </h1>

          <div className="sticky z-10 space-y-4 text-gray-600 lg:text-lg md:text-xl text-sm leading-normal w-11/12">
            <p className="relative">
              Aliquam interdum vehicula ornare. Donec condimentum gravida purus
              sit amet lobortis.
            </p>
            <p className="relative items-center">
              Proin a dui ac augue pulvinar malesuada. Quisque ac velit non
              ligula gravida elementum a vel ex. Vivamus finibus ex in venenatis
              pellentesque. Phasellus nec porta enim. Donec id purus id est
              efficitur pulvinar. Duis nec tempus ligula.
            </p>
          </div>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 p-9 lg:text-xl md:text-lg text-md shadow-lg shadow-purple-500/25 rounded-2xl"
          >
            <Download className="mr-2 h-6 w-10" />
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bio;

const Follow = () => {
  return (
    <div className="pt-6 border-[3px] border-white w-2/3 lg:p-8 md:p-6 p-4 rounded-xl bg-white/60 backdrop-blur-2xl">
      <div className="mb-3 lg:text-xl md:text-md text-sm text-gray-600">
        🌎 Follow me social media
      </div>
      <img src={socialMedia} className="w-full cursor-pointer" />

      {/* <div className="flex gap-4">
                    <Link
                      to="#"
                      className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Facebook className="h-5 w-5 text-blue-600" />
                    </Link>
                    <Link
                      to="#"
                      className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Twitter className="h-5 w-5 text-blue-400" />
                    </Link>
                    <Link
                      to="#"
                      className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Linkedin className="h-5 w-5 text-blue-700" />
                    </Link>
                    <Link
                      to="#"
                      className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <Instagram className="h-5 w-5 text-pink-600" />
                    </Link>
                    <Link
                      to="#"
                      className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-pink-500"
                        fill="currentColor"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 6.63 0 12-5.37 12-12C24 5.37 18.63 0 12 0zm5.5 7.5c.46.46.93.93 1.39 1.39-.46.46-.93.93-1.39 1.39-.46-.46-.93-.93-1.39-1.39.46-.46.93-.93 1.39-1.39zM12 20.5c-4.69 0-8.5-3.81-8.5-8.5 0-4.69 3.81-8.5 8.5-8.5 4.69 0 8.5 3.81 8.5 8.5 0 4.69-3.81 8.5-8.5 8.5z" />
                      </svg>
                    </Link>
                    <Link
                      to="#"
                      className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-blue-500"
                        fill="currentColor"
                      >
                        <path d="M18.75 9c0-5.385-4.365-9.75-9.75-9.75S-.75 3.615-.75 9c0 4.91 3.615 8.99 8.33 9.705v-6.875H5.625V9h1.955V7.03c0-1.93 1.145-2.995 2.905-2.995.845 0 1.73.15 1.73.15v1.895h-.975c-.96 0-1.26.6-1.26 1.215V9h2.145l-.345 2.23h-1.8v6.875c4.715-.715 8.33-4.795 8.33-9.705z" />
                      </svg>
                    </Link>
                  </div> */}
    </div>
  );
};
