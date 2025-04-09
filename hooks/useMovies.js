
import {searchMovies} from '../services/movies'
import { useCallback, useRef, useState } from 'react';

export function useMovies( { search } ){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError]  = useState(null);
  const previoysSearch = useRef(search);

  const getMovies = useCallback(
    async ({search}) => {
      if (search === previoysSearch.current) return
      try {
        setLoading(true);
        setError(null);
        previoysSearch.current = search
        const newMovies = await searchMovies({search});
        setMovies(newMovies)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
  ,[])
    
    return {movies,loading, getMovies}
}