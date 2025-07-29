import { FaFacebook, FaTiktok, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/share/12M5ao62ehL/",
      icon: <FaFacebook />,
    },
    {
      href: "https://www.tiktok.com/@coding_with_moeen?_t=ZS-8xInHEE9TCT&_r=1",
      icon: <FaTiktok />,
    },
    {
      href: "https://youtube.com/@codingwithmoeen-999?si=9rWr9aTm5bYRtAxN",
      icon: <FaYoutube />,
    },
    {
      href: "https://www.linkedin.com/in/moeen-m-b8b526360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <footer className=" w-screen bg-violet-300 py-4 text-black ">
      <div className=" container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row ">
        <p className=" text-center text-sm md:text-left ">
          &copy; LazyDev 2025. All rights reserved
        </p>
        <div className=" flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black ease-in-out duration-500  hover:text-white transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a href="#privacy-policy" className=" text-center text-sm hover:underline md:text-right">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
