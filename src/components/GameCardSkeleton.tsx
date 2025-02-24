import { Card, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";
import { useColorModeValue } from "./ui/color-mode";

const GameCardSkeleton = () => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Card.Root>
      <Skeleton height="200px" bg={bg} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
