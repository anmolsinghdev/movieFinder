import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: #2e4c6d; */
`;

export const Input = styled.input`
  margin: 2rem 0rem;
  height: 1.5rem;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;

  font-size: 1.5rem;
  color: #777;
  text-align: center;
  ::placeholder {
    text-align: center;
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 10px;
  background-color: #3f3351;
`;

export const Header = styled.h2`
  color: white;
`;

export const MovieWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MovieCard = styled.div`
  width: 15rem;
  background-color: #777;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;

  > img {
    object-fit: cover;
    height: 300px;
    width: 100%;
  }
  &:hover .movie-over {
    transform: translateY(0%);
    transition: transform 0.3s ease-in-out;
  }
`;

export const Movieinfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  > h4 {
    margin: 0;
    color: #fff;
  }
`;
export const Movieover = styled.div`
  background-color: #777;
  opacity: 90%;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  color: #fff;
  overflow: auto;
  max-height: 100%;
  padding: 1rem;
  transform: translateY(100%);
`;
export const Span = styled.span`
  color: white;
  padding: 0.5rem;
  background-color: black;
  border-radius: 5px;
  font-weight: bold;
  &.green {
    color: green;
  }
  &.orange {
    color: orange;
  }
  &.red {
    color: red;
  }
`;
