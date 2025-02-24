import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/image-url";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) <Spinner />;

  return (
    <>
      <Heading marginBottom={3}>Genres</Heading>
      <List.Root listStyle="none">
        {data &&
          data.results.map((genre) => (
            <List.Item key={genre.id} paddingY="5px">
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius={8}
                  objectFit="cover"
                  src={getCroppedImgUrl(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  fontSize="lg"
                  textAlign={"start"}
                  maxWidth={"200px"}
                  variant="plain"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => onSelectGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </List.Item>
          ))}
      </List.Root>
    </>
  );
};

export default GenreList;
