import { Box, Heading, Text, VStack, Input, Button } from "@chakra-ui/react";

const B2BEnquiry = () => (
  <Box p={4}>
    <Heading>B2B Enquiry</Heading>
    <Text>Placeholder for B2B enquiry form and information.</Text>
  <VStack spacing={4} align="start" mt={4}>
      <Input placeholder="Company Name" />
      <Input placeholder="Contact Person" />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <Input placeholder="Message" />
      <Button colorScheme="teal">Submit</Button>
    </VStack>
  </Box>
);

export default B2BEnquiry;