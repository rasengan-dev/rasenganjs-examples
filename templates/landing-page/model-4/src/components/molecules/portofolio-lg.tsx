import Image from "@rasenganjs/image"

export function PortofolioLg() {
  const items = [
    { img: '/portofolio-1.png' },
    { img: '/portofolio-2.png' },
    { img: '/portofolio-3.png' }
  ]

  return (
    <section className="mt-10 w-full">
      <section className={` mt-10 px-32 flex lg:grid grid-cols-1 lg:grid-cols-3 lg:gap-x-6`}>
        {
          items.map((item, index) => {
            return (
              <>
                <article
                  key={index + 'big'}
                  style={{ transform: `translateY(${(index * 60)}px)` }}
                  className={`hidden lg:block w-full h-60 rounded-xl bg-[#1E1E20] p-4`} 
                >
                  <div className="w-full h-full rounded-lg overflow-hidden">
                    <Image
                      width={'100%'}
                      height={'100%'}
                      alt="Image"
                      src={item.img}
                      objectfit="cover" 
                    />
                  </div>
                </article>
              </>
            )
          })
        }
      </section>
      {/* white space to fix translate y  */}
      <div className="h-32" />
    </section>
  )
}