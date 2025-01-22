import { MoveRightIcon } from 'lucide-react'
// import Image from '@rasenganjs/image'

export default function CallToAction() {
  return (
    <div className="relative lg:h-[650px] h-[550px] flex items-center overflow-hidden bg-banner bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 lg:h-[650px] h-[550px]">
        {/* <img
          src={Banner}
          alt="Background"
          // fill
          className="object-cover -mt-44 w-full ring h-[900px] md:h-[650px]"
          // priority
        /> */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent from-10% via-slate-900/40 via-30% to-slate-900/90 to-60%" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
            Have a project idea in mind.
            <br />
            Get in touch and let&apos;s chat!
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-200 mb-8">
            I am taking on new projects. Waiting to hear about new projects, so if you&apos;d like to chat please get in touch.
          </p>

          <button className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-9 py-6 rounded-lg font-medium transition-colors">
            Let&apos;s Work Together
            <MoveRightIcon className="w-5 h-5" color='white' />
          </button>
        </div>
      </div>
    </div>
  )
}

