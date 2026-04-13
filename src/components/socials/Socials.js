import { SOCIAL } from "utils/constants";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {  PiTiktokLogoFill } from "react-icons/pi";

const SocialIcon = ({ href, icon }) => {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-300 hover:bg-primary-500 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
};

export const SocialLinks = ({ className }) => {
  const links = {
    facebook: SOCIAL.facebook,
    tiktok: SOCIAL.tiktok,
    instagram: SOCIAL.instagram,
    youtube: SOCIAL.youtube,
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      <SocialIcon href={links.youtube} icon={<FaYoutube />} />
      <SocialIcon href={links.tiktok} icon={<PiTiktokLogoFill />} />
      <SocialIcon href={links.facebook} icon={<FaFacebook />} />
      <SocialIcon href={links.instagram} icon={<FaInstagram />} />
    </div>
  );
};

export default SocialLinks;
