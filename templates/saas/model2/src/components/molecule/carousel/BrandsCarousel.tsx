const BrandsLogos = [
  "./logos/layers.png",
  "./logos/quotient.png",
  "./logos/circooles.png",
  "./logos/hourglass.png",
  "./logos/commandr.png",
];

const BrandsCarousel = () => {
  return (
    <div className="group/brands flex rounded-3xl w-full mx-auto md:bg-[#222222] overflow-hidden">
      <div
        className={`group-hover/brands:paused flex animate-slide items-center gap-16 md:gap-20 xl:gap-24 py-6 shrink-0 w-[calc(2*var(5)*(theme(gap.16)+128px))] md:w-[calc(2*var(5)*(theme(gap.20)+144px))] lg:w-[calc(2*var(5)*(theme(gap.20)+160px))]  xl:w-[calc(2*var(5)*(theme(gap.24)+192px))]`}
      >
        {[...BrandsLogos, ...BrandsLogos].map((elmt, index) => (
          <img
            key={index + 10}
            src={elmt}
            alt="logo"
            loading="lazy"
            className="aspect-auto object-contain w-32 md:w-36 lg:w-40 xl:w-48 h-12"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsCarousel;
