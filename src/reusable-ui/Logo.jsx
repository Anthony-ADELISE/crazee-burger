import LogoImg from "/images/logo-orange.png";

const Logo = ({ className = "", styleImg }) => {
  return (
    <div
      className={` font-bold flex  items-center text-primary_burger text-4xl  space-x-5 font-amaticSC  ${className}`}
    >
      <h1>Crazee </h1>
      <img
        className={`max-w-[120px] md:max-w-[150px] lg:max-w-[250px] ${styleImg}`}
        src={LogoImg}
        alt="img logo"
      />
      <h1>Burger</h1>
    </div>
  );
};

export default Logo;
