import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import {
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  const bg = useColorModeValue("gray.300", "gray.700");
  const color = useColorModeValue("black", "white");

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button bg={bg} color={color}>
          {selectedPlatform?.name || "Platforms"} <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent width="200px" position={"absolute"} style={{ zIndex: 1000 }}>
        {data &&
          data.map((platform) => (
            <MenuItem
              key={platform.id}
              value={platform.name}
              onClick={() => onSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
