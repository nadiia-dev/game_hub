import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} paddingX="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
