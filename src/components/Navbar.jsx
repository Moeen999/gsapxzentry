import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import {useWindowScroll} from "react-use"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Navbar = () => {
  const navItems = ["Nexus", "Vault", "Prolouge", "About", "Contact"];
  const navContainerRef = useRef(null);
  const audioElemRef = useRef(null);
  const [isAudioPlaying, setisAudioPlaying] = useState(false);
  const [isToggleActive, setisToggleActive] = useState(false);
  const [lastScrollY, setlastScrollY] = useState(0);
  const [isNavVisible, setisNavVisible] = useState(true)
  const toggleAudioIndicator = () => {
    setisAudioPlaying((prev) => !prev);
    setisToggleActive((prev) => !prev);
  };
  useEffect(() => {
    if (isAudioPlaying) {
      audioElemRef.current.play();
    } else {
      audioElemRef.current.pause();
    }
  }, [isAudioPlaying]);


   const {y:currentScrollY} = useWindowScroll();
   useEffect(()=>{
    if(currentScrollY === 0){
        setisNavVisible(true);
        navContainerRef.current.classList.remove("floating-nav")
    }else if(currentScrollY > lastScrollY){
        setisNavVisible(false);
        navContainerRef.current.classList.add("floating-nav")
    }else if(currentScrollY < lastScrollY){
        setisNavVisible(true);
        navContainerRef.current.classList.add("floating-nav")
    }
    setlastScrollY(currentScrollY);
   },[currentScrollY , lastScrollY])

   useEffect(()=>{
    gsap.to(navContainerRef.current,{
        y:isNavVisible ? 0 : -100,
        opacity : isNavVisible ? 1 : 0,
        duration : 0.02
    })
   },[isNavVisible])
  return (
    <div
      ref={navContainerRef}
      className=" fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className=" absolute top-1/2 w-full -translate-y-1/2">
        <nav className=" flex size-full items-center justify-between p-4">
          <div className=" flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className=" w-10" />
            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className=" flex items-center h-full ">
            <div className=" hidden md:block">
              {navItems.map((link, index) => (
                <a
                  key={index}
                  className=" nav-hover-btn"
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>
            <button
              className=" ml-10 flex items-center space-x-0.5"
              onClick={toggleAudioIndicator}
            >
              <audio
                className="hidden"
                ref={audioElemRef}
                src="/audio/loop.mp3"
              ></audio>
              {[1, 2, 3, 4].map((line) => (
                <div
                  key={line}
                  className={`indicator-line ${isToggleActive ? "active" : ""}`}
                  style={{ animationDelay: `${line * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
