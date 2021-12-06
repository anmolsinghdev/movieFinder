import React, { useState, useEffect } from 'react';
import {
  Input,
  SearchBarWrapper,
  MovieWrapper,
  ActionButton,
  Button,
} from './styles';
import Movie from './Movie';
import movieApi from '../Api/movieApi';

const Search_API =
  'https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=';

const Tv_API = `https://api.themoviedb.org/3/search/tv?api_key={api_key}&language=en-US&page=1&query=`;

const SearchBar = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    movieApi.get('/trending/movie/week').then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  const trendingWeek = () => {
    movieApi.get('/trending/movie/week').then(({ data }) => {
      setMovies(data.results);
    });
  };
  const trendingDay = () => {
    movieApi.get('/trending/movie/day').then(({ data }) => {
      setMovies(data.results);
    });
  };
  const allThing = () => {
    movieApi.get('/trending/all/day').then(({ data }) => {
      setMovies(data.results);
    });
  };
  const tvShow = () => {
    movieApi.get(`${Tv_API}${searchTerm}`).then(({ data }) => {
      setMovies(data.results);
      setSearchTerm('');
    });
  };

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
      <ActionButton>
        <Button onClick={trendingDay}>Trending In Day</Button>
        <Button onClick={trendingWeek}>Trending In Week</Button>
        <Button onClick={allThing}>ALL TYPE</Button>
        <Button onClick={tvShow}>Search TV SHOW</Button>
      </ActionButton>
      <MovieWrapper>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </MovieWrapper>
    </>
  );
};

export default SearchBar;
