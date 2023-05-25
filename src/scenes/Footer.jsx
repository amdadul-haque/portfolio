import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className=" bg-red py-10 flex flex-col items-center gap-3">
      <SocialMediaIcons />
      <p className="font-playfair font-semibold text-3xl text-yellow">
        Md Amdadul Haque
      </p>
    </footer>
  );
};

export default Footer;
