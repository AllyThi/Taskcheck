import PropTypes from 'prop-types';

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtra:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                   <option value="All"> Todas </option> 
                   <option value="Completed"> Completas </option> 
                   <option value="Incompleted"> Incompletas </option> 
                </select>
            </div>
            <div>
                <p>Ordem Alfabética:</p>
                <button onClick={() => setSort("Asc")}>Asc</button>
                <button onClick={() => setSort("Desc")}>Desc</button>
                
            </div>
        </div>

    </div>
  )
}
Filter.propTypes = {
    filter: PropTypes.object.isRequired,
    setFilter: PropTypes.func.isRequired,
    sort: PropTypes.object.isRequired,
    setSort: PropTypes.func.isRequired,
   
  };

export default Filter