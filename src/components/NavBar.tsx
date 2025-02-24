import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";

function NavBar() {
  return (
    <HStack justifyContent={"space-between"} paddingX="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
