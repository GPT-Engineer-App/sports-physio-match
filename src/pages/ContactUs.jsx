import { Box, Heading, Text, VStack, Input, Button } from "@chakra-ui/react";

const ContactUs = () => (
  <Box p={4}>
    <Heading>Contact Us to Become a Partner</Heading>
    <Text>Placeholder for contact form and partnership information.</Text>
    <VStack spacing={4} align="start" mt={4}>
      <Input placeholder="Name" />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Message" />
      <Button colorScheme="teal">Submit</Button>
    </VStack>
  </Box>
);

export default ContactUs;