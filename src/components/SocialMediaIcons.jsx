import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-3 gap-7 text-[30px]">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/amdadul-haque107/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/this.is.emdadul/"
        target="_blank"
        rel="noreferrer"
      >
        <BsFacebook/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/emdad2112/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
