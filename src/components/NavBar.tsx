import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import { ColorModeButton } from "@/components/ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({ onSearch }: Props) {
  return (
    <HStack justifyContent={"space-between"} paddingX="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
    </HStack>
  );
}

export default NavBar;
