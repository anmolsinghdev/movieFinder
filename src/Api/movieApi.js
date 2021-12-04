import axios from 'axios';

const KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTA0OGYwZjRmZmZhZDBkZmNhZDcwM2U5NWMzNGQyMCIsInN1YiI6IjYxYTA5OThkMDU4MjI0MDAyNjY0MzFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RzbEmAbIRTcU4gz9YDB7evjRUSFqu6Icb1vQJkuQFsU';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${KEY}`,
  },
});
