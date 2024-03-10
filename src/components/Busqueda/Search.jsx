import React, {useState, useEffect} from 'react'

const SearchComponent = () => {
  //setear los hooks useState
  const [ games, setGames ] = useState([])
  const [ search, setSearch ] = useState("")

  //renderizamos la vista
  return (
    <div>
        <input value={search}  type="text" placeholder='Search' className='form-control'/>
        <table className='table table-striped table-hover mt-5 shadow-lg'>

            <tbody>
                
            </tbody>
        </table>
    </div>
  )
}
export default SearchComponent