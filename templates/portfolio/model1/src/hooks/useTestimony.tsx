import { Testimonial } from '@/entities/Testimonial'

import Testimony1Img from '@/assets/testimonials/testimonial1.png'
import Testimony2Img from '@/assets/testimonials/testimonial2.png'
import Testimony3Img from '@/assets/testimonials/testimonial3.png'

const Testimonials: Testimonial[] = [
     {
       quote: "Kevin is very hard and great worker. He thinks about prolem, find solution and has a awesome working morale",
       author: "Esther Howard",
       position: "Chief Executive Officer",
       company: "GIGL",
       image: Testimony1Img
     },
     {
       quote: "Kevin Did a wonderful job animating set of static stickers. Work was done very quickly and the quality is outstanding. she managed to create great looking, flawless animation even with very limited number of frames allowed per stickers",
       author: "Cameron Williamson",
       position: "Chief Executive Officer",
       company: "GIGL",
       image: Testimony2Img
     },
     {
       quote: "Great Designer, does great work and is very flexible with change. if you're a programmer and are looking for UI/UX designer is definitely well qualified for the job.",
       author: "Savannah Nguyen",
       position: "Chief Executive Officer",
       company: "GIGL",
       image: Testimony3Img
     },
     {
      quote: "Kevin is very hard and great worker. He thinks about prolem, find solution and has a awesome working morale",
      author: "Esther Howard",
      position: "Chief Executive Officer",
      company: "GIGL",
      image: Testimony1Img
    },
    {
      quote: "Kevin Did a wonderful job animating set of static stickers. Work was done very quickly and the quality is outstanding. she managed to create great looking, flawless animation even with very limited number of frames allowed per stickers",
      author: "Cameron Williamson",
      position: "Chief Executive Officer",
      company: "GIGL",
      image: Testimony2Img
    },
   ]

const useTestimony = () =>{
     return {
          testimonial: Testimonials
     }
}

export default useTestimony;