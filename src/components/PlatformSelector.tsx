import usePlatforms, { Platform } from "@/hooks/usePlatforms";
import { Button, MenuContent, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { useColorModeValue } from "./ui/color-mode";
import { CustomMenuItem } from "./CustomMenuItem";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  if (error) return null;

  return (
    <MenuRoot>
      <div style={{ position: "relative", display: "inline-block" }}>
        <MenuTrigger asChild>
          <Button bg={bg} color={color}>
            {selectedPlatform?.name || "Platforms"} <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent
          width="200px"
          position="absolute"
          top="calc(100% + 4px)"
          left="0"
        >
          {data &&
            data.results.map((platform) => (
              <CustomMenuItem
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectPlatform(platform)}
              >
                {platform.name}
              </CustomMenuItem>
            ))}
        </MenuContent>
      </div>
    </MenuRoot>
  );
};

export default PlatformSelector;
