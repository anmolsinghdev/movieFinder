import React from 'react';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { Container } from './styles';
const App = () => {
  return (
    <Container>
      <Navbar />
      <SearchBar />
    </Container>
  );
};

export default App;
