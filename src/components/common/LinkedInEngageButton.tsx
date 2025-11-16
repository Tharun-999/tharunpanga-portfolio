"use client";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Strings from "@/constants/strings";

const LinkedInEngageButton = () => {
  return (
    <a
      href={`${Strings.linkedInLink}/recent-activity/all/`}
      target="_blank"
      rel="noopener noreferrer"
      className="app__outlined_btn min-w-[10rem] inline-flex items-center justify-center gap-2"
    >
      <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
      <span>Join the Conversation</span>
    </a>
  );
};

export default LinkedInEngageButton;