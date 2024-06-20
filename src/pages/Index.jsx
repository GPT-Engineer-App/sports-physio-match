import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Sports Physio Therapy</Text>
        <Text>Navigate through the sections to explore our services.</Text>
        <Button colorScheme="teal" onClick={() => navigate('/customer')}>Customer Interface</Button>
        <Button colorScheme="teal" onClick={() => navigate('/physio')}>Physio Interface</Button>
        <Button colorScheme="teal" onClick={() => navigate('/admin')}>Admin Interface</Button>
        <Button colorScheme="teal" onClick={() => navigate('/b2b-enquiry')}>B2B Enquiry</Button>
        <Button colorScheme="teal" onClick={() => navigate('/contact-us')}>Contact Us</Button>
      </VStack>
    </Container>
  );
};

export default Index;