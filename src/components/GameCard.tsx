import { Game } from "@/hooks/useGame";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImgUrl from "@/services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImgUrl(game.background_image)} />
      <Card.Body>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <ScoreBadge score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
