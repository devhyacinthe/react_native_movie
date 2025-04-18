const MOVIE_API_KEY = ""
  

export const TMDB_CONFIG = {
  BASE_URL: "https://api.themoviedb.org/3",
  API_KEY: MOVIE_API_KEY,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `/search/movie?query=${encodeURIComponent(query)}`
    : "/discover/movie?sort_by=popularity.desc";

  const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch movies", response.statusText);
  }

  const data = await response.json();

  return data.results;
};

export const fetchPopularMovies = async () => {
  const endpoint = "/movie/popular?language=en-US&page=2";

  const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });

  if (!response.ok) {
    // @ts-ignore
    throw new Error("Failed to fetch popular movies", response.statusText);
  }

  const data = await response.json();

  return data.results;
};

export const fetchMoviesDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  try {
    const endpoint = `/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`;

    const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
      method: "GET",
      headers: TMDB_CONFIG.headers,
    });

    if (!response.ok) {
      // @ts-ignore
      throw new Error("Failed to fetch movie details", response.statusText);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
