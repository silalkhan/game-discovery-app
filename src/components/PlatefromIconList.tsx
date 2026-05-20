import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";
//import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

import type { Platform } from "../hooks/useGames";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconList({ platforms }: Props) {
  //here define index signature.
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    //nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <div className="flex items-center gap-3 mt-3 text-gray-500 dark:text-gray-300">
      {platforms.map((platform) => {
        //const Icon = iconMap[platform.slug as keyof typeof iconMap];//modern indexSignature.
        const Icon = iconMap[platform.slug];

        return (
          Icon && <Icon key={platform.id} className="text-xl text-gray-500" />
        );
      })}
    </div>
  );
}

export default PlatformIconList;
