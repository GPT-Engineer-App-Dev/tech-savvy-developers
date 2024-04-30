import { Box, Text, Input, Button, VStack, HStack } from '@chakra-ui/react';
import { useState } from 'react';

const developers = [
  { id: 1, name: 'Alice Johnson', location: 'New York, USA', technologies: 'React, Node.js' },
  { id: 2, name: 'Bob Smith', location: 'Berlin, Germany', technologies: 'Vue, PHP' },
  { id: 3, name: 'Carlos Ruiz', location: 'Madrid, Spain', technologies: 'Angular, Java' }
];

const Developers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDevelopers, setFilteredDevelopers] = useState(developers);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (!term) {
      setFilteredDevelopers(developers);
    } else {
      setFilteredDevelopers(developers.filter(dev => 
        dev.name.toLowerCase().includes(term.toLowerCase()) ||
        dev.location.toLowerCase().includes(term.toLowerCase()) ||
        dev.technologies.toLowerCase().includes(term.toLowerCase())
      ));
    }
  };

  return (
    <Box p={5}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold">Find Your Developer</Text>
        <Input placeholder="Search developers by name, location, or technology" value={searchTerm} onChange={handleSearch} />
        {filteredDevelopers.map(dev => (
          <HStack key={dev.id} justify="space-between" p={4} borderWidth="1px" borderRadius="lg">
            <VStack align="start">
              <Text fontWeight="bold">{dev.name}</Text>
              <Text>{dev.location}</Text>
              <Text>{dev.technologies}</Text>
            </VStack>
            <Button colorScheme="blue">Message</Button>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Developers;