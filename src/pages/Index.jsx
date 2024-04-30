import { Box, Text, VStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Index = () => {
  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="3xl" fontWeight="bold">Welcome to Particles</Text>
        <Text fontSize="xl">The premier marketplace for software talent specialized in web technologies.</Text>
        <Link as={RouterLink} to="/developers" style={{ marginTop: '20px', textDecoration: 'underline' }}>
          Browse Developers
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;