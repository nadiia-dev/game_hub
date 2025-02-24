import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) onSearch(ref.current.value);
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
