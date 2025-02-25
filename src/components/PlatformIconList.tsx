import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useColorModeValue } from "./ui/color-mode";
import Platform from "@/entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  const color = useColorModeValue("gray.300", "gray.500");

  return (
    <HStack margin={1}>
      {platforms.map((platform) => {
        const platformIcon = iconMap[platform.slug];
        return platformIcon ? (
          <Icon key={platform.id} as={platformIcon} color={color} />
        ) : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
