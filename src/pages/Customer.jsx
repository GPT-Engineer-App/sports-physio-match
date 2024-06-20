import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Customer = () => (
  <Box p={4}>
    <Heading>Customer Interface</Heading>
    <VStack spacing={4} align="start">
      <Text>Automatic Match Making</Text>
      <Text>Membership Subscription with Discount</Text>
      <Text>Weekly Routine Bulk Booking</Text>
      <Text>Option to Choose Between Male and Female Physio</Text>
      <Text>"You have been matched with" Notification</Text>
    </VStack>
  </Box>
);

export default Customer;