import axios from 'axios';
import { IMovie } from '../Models/movies';

const getMovies = (activeKey: string) => {
  return axios.get<IMovie[]>(`http://localhost:4000/${activeKey}`)
    .then(response => {
      const data = response.data
      return data;
    })
}

const addMovieToFavourites = (movie: IMovie) => {
  return axios.post<IMovie>(
    'http://localhost:4000/favourite',
    movie,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.data)
}

const removeMovieFromFavourites = (id: string) => {
  axios.delete(`http://localhost:4000/favourite/${id}`)
    .then(response => {
      const data = response.data
      return data;
    })
}

export { getMovies, addMovieToFavourites, removeMovieFromFavourites }