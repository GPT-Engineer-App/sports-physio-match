import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Admin = () => (
  <Box p={4}>
    <Heading>Admin Interface</Heading>
    <VStack spacing={4} align="start">
      <Text>Manage Users</Text>
      <Text>View Reports</Text>
      <Text>System Settings</Text>
    </VStack>
  </Box>
);

export default Admin;