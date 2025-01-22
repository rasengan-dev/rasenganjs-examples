import { Project } from "@/entities/Project"
import Project1Img from '@/assets/projects/project1.png'
import Project2Img from '@/assets/projects/project2.png'
import Project3Img from '@/assets/projects/project3.png'

const Projects : Project[] = [

     {
          image: Project1Img,
          categories: ['UI Design', 'Brand Identity'],
          title: 'Merry Christmas - Website',
          description : 'Nitrx is global social networking website admin dashboard. Designed to track users, post, story & daily Activities. Hope you guys like it.',
          link: '#'
     },
     {
          image: Project2Img,
          categories: ['UI Design', 'UX Design'],
          title: 'Relik - Admin Dashboard',
          description : '👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.',
          link: '#'
     },
     {
          image: Project3Img,
          categories: ['Web Design', 'UX Design'],
          title: 'Jobpilot - Job Portal',
          description : 'Jobpilot is a modern high-quality and well-organized job portal Figma template designed to connect people looking for a suitable Jobs & Candidates.',
          link: '#'
     },
     {
          image: Project2Img,
          categories: ['UI Design', 'UX Design'],
          title: 'Relik - Admin Dashboard',
          description : '👉 Relik is a beautiful, simple, developer-friendly, highly customizable admin dashboard template with a 💎 high-quality UI & well-organized Figma file🔥.',
          link: '#'
     },
]

const useProject = () =>{
     return {
          projects: Projects
     }
}

export default useProject;