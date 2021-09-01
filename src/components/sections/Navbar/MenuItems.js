import React from "react";
import {
  Box,
  Stack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import MenuItem from "./MenuItem";

const MenuItems = ({ isOpen }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchColorIcon = useColorModeValue(FaMoon, FaSun);
  const colorModeText = useColorModeValue("ciemny", "jasny");

  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={2}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/aktualnosci" title="AKTUALNOŚCI" />
        <MenuItem to="/druzyny" title="DRUŻYNY" />
        <MenuItem to="/dokumenty" title="DOKUMENTY" />
        <MenuItem to="/galeria" title="GALERIA" />
        <MenuItem to="/kontakt" title="KONTAKT" />
        <IconButton
          size="md"
          fontSize="lg"
          aria-label={`Zmień tryb na ${colorModeText}`}
          variant="ghost"
          color="current"
          ml={{ base: "0", md: "3" }}
          onClick={toggleColorMode}
          icon={<SwitchColorIcon />}
        />
      </Stack>
    </Box>
  );
};

export default MenuItems;
