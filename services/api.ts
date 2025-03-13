
const MOVIE_API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTk5OGMxYjk2MmU0ZTAxYzllNmU4M2I3NDcyNDE0ZSIsIm5iZiI6MTY1OTU0MDk5MC42NjYsInN1YiI6IjYyZWE5NWZlODU2NmQyMDA1YTQ4MmUzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NKJpfL1ahCSreRsFKtETZahUHUpZQipROHun4iiDuDo"

export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${MOVIE_API_KEY}`
    }
}


export const fetchMovies = async ({ query }: {query: string}) => {
    const endpoint =  query ? `/search/movie?query=${encodeURIComponent(query)}` :
    '/discover/movie?sort_by=popularity.desc'

    const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })


    if(!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch movies', response.statusText)
    }


    const data = await response.json()

    return data.results;
}


export const fetchPopularMovies = async () => {
    const endpoint = 
    '/movie/popular?language=en-US&page=2'

    const response = await fetch(`${TMDB_CONFIG.BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })


    if(!response.ok) {
        // @ts-ignore
        throw new Error('Failed to fetch popular movies', response.statusText)
    }


    const data = await response.json()

    return data.results;
}