/**
 * A React component that displays a carousel of recent projects.
 * 
 * The component uses the `useProject` hook to fetch the project data, and then renders a carousel with the project cards.
 * The carousel is implemented using the `Carousel` component from the `@/components/atom/carousel` module.
 * The component also includes navigation buttons to move between the carousel items.
 */
import useProject from "@/hooks/useProject";
import { PojectCard } from "../molecules/cards/ProjectCard";
import { Title } from "../molecules/Titles";
import { useState } from "react";
import { CarouselApi } from "@/components/atom/carousel";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atom/carousel";

const Projects = () => {
  const { projects } = useProject();

  const [api, setApi] = useState<CarouselApi>();

  {
    if (!projects) {
      throw new Error("No projects found");
    } else {
      return (
        <>
          <Title id="project" children="Recent Projects" alignment={"center"} size={"lg"} />

          <div className="relative flex justify-end w-screen -mr-2 bg-gradient-to-t from-[#132238]/5 to-transparent lg:pb-32 md:pb-20 pb-12">
            <Carousel
              setApi={setApi}
              className="w-full w-10/12"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 ms-6 mx-3"
                  >
                    <PojectCard
                      image={project.image}
                      categories={project.categories}
                      title={project.title}
                      description={project.description}
                      link={project.link}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>

              <div className="flex items-center justify-center lg:-translate-x-52 md:-translate-x-44 gap-4 lg:mt-16">
                <CarouselPrevious
                  className="relative inset-0 translate-y-0 h-16 w-16 rounded-full bg-white duration-300 ease-in hover:bg-purple-600 hover:border-purple-600" />
                <CarouselNext className="relative inset-0 translate-y-0 h-16 w-16 rounded-full bg-white duration-300 ease-in hover:bg-purple-600 hover:border-purple-600" />
              </div>
            </Carousel>
          </div>
        </>
      );
    }
  }
};

export default Projects;
