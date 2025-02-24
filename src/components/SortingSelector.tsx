import { Button, MenuContent, MenuRoot, MenuTrigger } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { BsChevronDown } from "react-icons/bs";
import { CustomMenuItem } from "./CustomMenuItem";
import useGameQueryStore from "@/store";

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const curSortOrder = sortOrders.find((order) => order.value === sortOrder);

  const bg = useColorModeValue("gray.100", "gray.700");
  const color = useColorModeValue("black", "white");

  return (
    <MenuRoot>
      <div style={{ position: "relative", display: "inline-block" }}>
        <MenuTrigger asChild>
          <Button bg={bg} color={color}>
            {`Order by: ${curSortOrder?.label || "Relevance"}`}{" "}
            <BsChevronDown />
          </Button>
        </MenuTrigger>
        <MenuContent
          width="200px"
          position="absolute"
          top="calc(100% + 4px)"
          left="0"
        >
          {sortOrders &&
            sortOrders.map((order) => (
              <CustomMenuItem
                key={order.value}
                value={order.value}
                onClick={() => setSortOrder(order.value)}
              >
                {order.value}
              </CustomMenuItem>
            ))}
        </MenuContent>
      </div>
    </MenuRoot>
  );
};

export default SortSelector;
