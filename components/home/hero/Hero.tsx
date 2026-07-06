import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section className="relative h-75 sm:h-105 lg:h-140 rounded-3xl overflow-hidden mt-5">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/banar.jpg')" }}
      />

      <div
        className=" absolute inset-0 bg-linear-to-r from-black/90
          via-black/60 via-80% lg:via-55% sm:via-65% to-transparent"
      />

      <div className="relative z-10 h-full">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
