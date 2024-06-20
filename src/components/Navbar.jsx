import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="teal.500" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" color="white" _hover={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link as={NavLink} to="/customer" color="white" _hover={{ textDecoration: "none" }}>
        Customer
      </Link>
      <Link as={NavLink} to="/physio" color="white" _hover={{ textDecoration: "none" }}>
        Physio
      </Link>
      <Link as={NavLink} to="/admin" color="white" _hover={{ textDecoration: "none" }}>
        Admin
      </Link>
      <Link as={NavLink} to="/b2b-enquiry" color="white" _hover={{ textDecoration: "none" }}>
        B2B Enquiry
      </Link>
      <Link as={NavLink} to="/contact-us" color="white" _hover={{ textDecoration: "none" }}>
        Contact Us
      </Link>
    </Flex>
  </Box>
);

export default Navbar;