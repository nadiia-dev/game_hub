import { chakra, MenuItem } from "@chakra-ui/react";

export const CustomMenuItem = chakra(MenuItem, {
  base: {
    cursor: "pointer",
    padding: "8px 12px",
    transition: "background 0.2s ease",
    _hover: {
      background: "gray.100",
      _dark: { background: "gray.700", color: "white" },
    },
  },
});
