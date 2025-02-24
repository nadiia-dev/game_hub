import useGenres from "@/hooks/useGenres";
import getCroppedImgUrl from "@/services/image-url";
import useGameQueryStore from "@/store";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

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
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => setGenreId(genre.id)}
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
