
'use client'
import {Movies} from '../components/Movies'
import {useMovies} from '../hooks/useMovies'
import {useSearch} from '../hooks/useSearch'



export default function Home() {
  const {search,updateSearch,error} = useSearch();
  const {movies,loading, getMovies} = useMovies({search});

  
  const handleSubmit = (event) =>{
    event.preventDefault();
    getMovies({search})
    
    {/*const fields = Object.fromEntries(
      new FormData(event.target)
    );
    const {query} = fields;
     */}

  };

  const handleChange = (event) => {
    const newQuery = event.target.value
    updateSearch(newQuery);
    
  }



  return (
    <main className="flex bg-zinc-900 text-white min-h-screen flex-col items-center justify-between p-24">
      <div className='w-full '>
        <h1>Buscador de pelicular</h1>
        <form onSubmit={handleSubmit} action="" className='form flex flex-row gap-5'>
        <input onChange={handleChange} value={search} name='search' className={`${error ? 'border-red-500': 'border-gray-500' } p-2 text-black rounded border  w-1/2`} placeholder="Ingresar nombre de una pelicula" type="text" />
        <button type='submit' className='p-2 rounded text-white bg-zinc-500'>Buscar</button>
        </form>
        {error && <p className='text-red-500 w-full'> {error} </p> }
      </div>
      <div className='w-full h-full mt-5'>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
        

      </div>
    </main>
  );
}
