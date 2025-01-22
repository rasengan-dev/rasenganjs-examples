import { Honor } from "@/entities/Honor";
import Honor1 from '@/assets/Honor&Awards/honor1.png'
import Honor2 from '@/assets/Honor&Awards/honor2.png'
import Honor3 from '@/assets/Honor&Awards/honor3.png'

const Honors: Honor[] = [
     {
          image: Honor1,
          title: 'Best UI/UX Design Award',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum',
     },
     {
          image: Honor2,
          title: 'Best UI/UX Design Award',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum',
     },
     {
          image: Honor3,
          title: 'Best UI/UX Design Award',
          description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum',
     },
]



const useHonor = () =>{
     return {
          honors: Honors
     }
}

export default useHonor;