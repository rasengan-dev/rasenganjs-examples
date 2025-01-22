import ContactCard from "../molecules/cards/ContactCard";

export default function Contact() {
  return (
    <>
      <div className="bg-gradient-to-b from-white from-70% to-[#132238] to-10% p-10 flex mx-auto overflow-hidden">
        <div className="absolute lg:inline hidden z-0 left-40 rounded-full blur-container blur-2xl w-96 h-96 bg-green-500/10"></div>

        <div className="sticky mx-auto z-99">
          <ContactCard />
        </div>
      </div>
    </>
  );
}
