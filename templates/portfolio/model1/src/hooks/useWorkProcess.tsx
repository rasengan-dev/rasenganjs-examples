import {WorkProcess} from "@/entities/WorkProcess";
import img1 from '@/assets/process/process1.svg'
import img2 from '@/assets/process/process2.svg'
import img3 from '@/assets/process/process3.svg'
import img4 from '@/assets/process/process4.svg'


const Process : WorkProcess[] = [

    {
      title: "Introductions",
      description: "Morbi nunc nibh, ultrices in ligula et, volutpat suscipit lorem. Quique finibus, lectus in lacinia fauc.",
      logo: img1,
      css: 'group border-none duration-300 ease-out group-hover:shadow-2xl group-hover:shadow-purple-500/40 group-hover:border-transparent hover:shadow-2xl hover:shadow-purple-500/40 border-transparent ',
      logoCss: ""
    },
    {
      title: "User Experience Design",
      description: "Morbi nunc nibh, ultrices in ligula et, volutpat suscipit lorem. Quique finibus, lectus in lacinia fauc.",
      logo: img2,
      css: 'group border-none duration-300 ease-out group-hover:shadow-2xl group-hover:shadow-blue-500/40 group-hover:border-transparent hover:shadow-2xl hover:shadow-blue-500/40 border-transparent ',
      logoCss: ""
    },
    {
      title: "User Interface Design",
      description: "Morbi nunc nibh, ultrices in ligula et, volutpat suscipit lorem. Quique finibus, lectus in lacinia fauc.",
      logo: img3,
      css: 'group border-none duration-300 ease-out group-hover:shadow-2xl group-hover:shadow-orange-200/40 group-hover:border-transparent hover:shadow-2xl hover:shadow-orange-200/40 border-transparent ',
      logoCss: ""
    },
    {
      title: "Usability Testing",
      description: "Morbi nunc nibh, ultrices in ligula et, volutpat suscipit lorem. Quique finibus, lectus in lacinia fauc.",
      logo: img4,
      css: 'group border-none duration-300 ease-out group-hover:shadow-2xl group-hover:shadow-green-400/40 group-hover:border-transparent hover:shadow-2xl hover:shadow-green-400/40 border-transparent ',
      logoCss: ""
    }
  ]

  const useWorkProcess = () =>{
     return {process: Process};
  }

  export default useWorkProcess;