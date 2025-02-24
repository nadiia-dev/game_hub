import useGame from "@/hooks/useGame";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "@/App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data, error, isLoading, fetchNextPage, hasNextPage } =
    useGame(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  const gamesCount =
    data?.pages.reduce((acc, curValue) => acc + curValue.results.length, 0) ||
    0;

  return (
    <InfiniteScroll
      dataLength={gamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<h4>Loading...</h4>}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="20px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data &&
          data.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
}

export default GameGrid;
