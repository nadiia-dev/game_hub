import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useColorModeValue } from "./ui/color-mode";
import useGameQueryStore from "@/store";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) {
      setSearchText(ref.current.value);
      navigate("/game_hub/");
    }
  };

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      <InputGroup startElement={<BsSearch />} width="100%">
        <Input
          ref={ref}
          placeholder="Search games..."
          variant="subtle"
          borderRadius={20}
          bg={bg}
          color={color}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
