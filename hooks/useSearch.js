import { useEffect, useRef, useState } from "react";

export function useSearch (){
  const [search,updateSearch] = useState('');
  const [error,setError] = useState(null);
  const isFirtsInput = useRef(true);

  useEffect(()=>{
    if (isFirtsInput.current){
      isFirtsInput.current = search ===''
      return
    }

    if(search ===''){
      setError('No se puede hacer una busqueda vacia');
      return
    }

    if(search.length < 3){
      setError('La busqueda debe tener al menos 3 caracteres');
      return
    }

    setError(null);
  },[search])

  return {search,updateSearch,error}
}