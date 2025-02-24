import { Game } from "@/hooks/useGame";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImgUrl from "@/services/image-url";
import Emoji from "./Emoji";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Card.Root>
      <Image src={getCroppedImgUrl(game.background_image)} />
      <Card.Body bg={bg}>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <ScoreBadge score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
