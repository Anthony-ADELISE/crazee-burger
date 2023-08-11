import LogoImg from "/images/logo-orange.png";

const Logo = ({ className = "", styleImg }) => {
  return (
    <div
      className={` font-bold flex items-center text-primary_burger text-5xl md:text-7xl  space-x-5 font-amaticSC lg:text-9xl ${className}`}
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
