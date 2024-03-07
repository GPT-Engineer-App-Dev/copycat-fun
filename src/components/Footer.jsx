import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" width="full" p={5} bg="gray.200" textAlign="center">
    © {new Date().getFullYear()} Todo App. All rights reserved.
  </Box>
);

export default Footer;
