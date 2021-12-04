import React, { useState, useEffect } from 'react';
import { Input, SearchBarWrapper, MovieWrapper } from './styles';
import Movie from './Movie';
import movieApi from '../Api/movieApi';

const Search_API =
  'https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=';

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    movieApi.get('/trending/movie/week').then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setTimeout(() => {
        movieApi.get(`${Search_API}${searchTerm}`).then(({ data }) => {
          setMovies(data.results);
        });
        setSearchTerm('');
      }, 500);
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchBarWrapper>
        <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="Search A Movie"
            onChange={handleOnChange}
            value={searchTerm}
          ></Input>
        </form>
      </SearchBarWrapper>
      <MovieWrapper>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </MovieWrapper>
    </>
  );
};

export default SearchBar;
