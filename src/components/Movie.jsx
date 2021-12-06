import React from 'react';
import { MovieCard, Movieinfo, Movieover, Span } from './styles';

const Image_API = 'https://image.tmdb.org/t/p/original/';

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 6) {
    return 'orange';
  } else return 'red';
};

const nameChecker = (title, name) => {
  if (title) {
    return title;
  } else {
    return name;
  }
};
const Movie = ({ title, poster_path, vote_average, overview, name }) => {
  return (
    <>
      <MovieCard>
        {/* <img src={`${Image_API}${poster_path}`} alt={''} /> */}
        <img
          src={
            poster_path
              ? Image_API + poster_path
              : 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
          }
          alt={''}
        />
        <Movieinfo>
          <h4>{nameChecker(title, name)}</h4>
          <Span className={`tag ${setVoteClass(vote_average)}`}>
            {vote_average}
          </Span>
        </Movieinfo>
        <Movieover className="movie-over">
          <h3>Overview:</h3>
          <p>{overview}</p>
        </Movieover>
      </MovieCard>
    </>
  );
};

export default Movie;
