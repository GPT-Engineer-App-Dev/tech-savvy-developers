import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Index from "./pages/Index.jsx";
import Developers from "./pages/Developers.jsx";

function App() {
  return (
    <Router>
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="blue.500" color="white">
        <Box p="2">
          <Link as={RouterLink} to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '20px' }}>Home</Link>
        </Box>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/developers" style={{ textDecoration: 'none', color: 'white', fontSize: '20px', marginRight: '12px' }}>Developers</Link>
        </Box>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/developers" element={<Developers />} />
        </Routes>
      </Flex>
    </Router>
  );
}

export default App;