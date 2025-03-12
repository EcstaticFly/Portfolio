import React from "react";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const githubProfileLink = "https://github.com/EcstaticFly";
const linkedinProfileLink =
  "https://www.linkedin.com/in/suyash-pandey-91bb40290/";

function Footer() {
  const handleLinkClick = ({ id }: { id: number }) => {
    if (id === 1) {
      window.open(githubProfileLink, "_blank");
    } else if (id === 2) {
      window.open(linkedinProfileLink, "_blank");
    }
  };

  return (
    <footer className="w-full mb-[30px] md:mb-4 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Interested in learning more about me and elevating{" "}
          <span className="text-purple">your</span> digital presence?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let’s connect to discuss how I can help you accomplish your vision
          effectively.
        </p>
        <a href="mailto:suyash.2023ug1100@iiitranchi.ac.in">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Suyash Pandey
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              className="size-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              key={profile.id}
              onClick={() => handleLinkClick({ id: profile.id })}
            >
              <img
                src={profile.img}
                alt={profile.name}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
