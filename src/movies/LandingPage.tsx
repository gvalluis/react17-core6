import React, { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import { landingPageDTO } from './movies.model';

export default function LandingPage() {

    
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: 'Spider-Man: Far From Home',
            poster: 'https://upload.wikimedia.org/wikipedia/pt/thumb/0/04/Spider-man-far-from-home-poster.jpg/250px-Spider-man-far-from-home-poster.jpg'
          },
          {
            id: 2,
            title: 'Luca',
            poster: 'https://upload.wikimedia.org/wikipedia/pt/2/24/Luca_%28Filme_de_2021_%E2%80%93_Novo_p%C3%B4ster%29.png'
          }
        ],
        upcomingReleases: [
          {
            id: 3,
            title: 'Soul',
            poster: 'https://cinemacomrapadura.com.br/imagens/2019/11/20191107-soul-poster-br.jpg'
          }
        ]
      })
    }, 1000);

    return () => clearTimeout(timerId);
  });
  
    return (
        <>
            <h3>In Theaters</h3>
            <MoviesList movies={movies.inTheaters} />

            <h3>Upcomming Releases</h3>
            <MoviesList movies={movies.upcomingReleases} />
        </>
    )
}