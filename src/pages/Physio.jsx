import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Physio = () => (
  <Box p={4}>
    <Heading>Physio Interface</Heading>
    <VStack spacing={4} align="start">
      <Text>Manage Appointments</Text>
      <Text>View Customer Profiles</Text>
      <Text>Update Availability</Text>
    </VStack>
  </Box>
);

export default Physio;