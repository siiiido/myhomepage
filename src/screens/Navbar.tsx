import {
  Box,
  Container,
  Stack,
  Button,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "../components/ThemeToggleButton";

export const Navbar = () => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      zIndex={3}
      bg={useColorModeValue("#EDF2F7", "#2D3748")}
      css={{ backdropFilter: "blur(10px)" }}
    >
      <Container
        maxW="container.md"
        display="flex"
        justifyContent="space-between"
        alignContent="center"
        /* wrap="wrap" */
        flexWrap="wrap"
        p={2}
      >
        <Stack
          width={{ base: "full", md: "auto" }}
          display={{ base: "none", md: "flex" }}
          direction={{ base: "column", md: "row" }}
          mt={{ base: 4, md: 0 }}
          pt={2}
          fontSize={20}
        >
          <NavLink to="/">
            <Button variant="ghost">Homepage</Button>
          </NavLink>
          <NavLink to="/profile">
            <Button variant="ghost">Profile</Button>
          </NavLink>
          <NavLink to="/works">
            <Button variant="ghost">Works</Button>
          </NavLink>
        </Stack>

        <Box pt={1} flex={1} textAlign="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <NavLink to="/">
                  <MenuItem>Homepage</MenuItem>
                </NavLink>
                <NavLink to="/profile">
                  <MenuItem>Profile</MenuItem>
                </NavLink>
                <NavLink to="/works">
                  <MenuItem>Works</MenuItem>
                </NavLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
