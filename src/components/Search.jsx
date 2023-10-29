import PropTypes from 'prop-types';



const Search = ({ search , setSearch }) => {
  return (
    <div className="search"> 
    <head>Pesquisar:</head>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Digite aqui para pesquisar" />
    
    </div>
  )
}

Search.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
   
  };

export default Search