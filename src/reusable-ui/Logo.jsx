import LogoImg from "/images/logo-orange.png";

const Logo = ({ className = "" }) => {
  return (
    <div
      className={`${className} flex items-center text-primary_burger text-[110px] space-x-5 font-amaticSC`}
    >
      <h1>Crazee </h1>
      <img className={`w-[200px] ${className}`} src={LogoImg} alt="img logo" />
      <h1>Burger</h1>
    </div>
  );
};

export default Logo;
