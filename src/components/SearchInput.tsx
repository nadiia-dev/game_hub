import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current) onSearch(ref.current.value);
  };

  return (
    <form onSubmit={(e) => handleSubmitForm(e)}>
      <InputGroup startElement={<BsSearch />} width="100%">
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
