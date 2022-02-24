import React, {useState, createRef} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './style.css';





function Form(props){
  const [ title, setTitle ] = useState('');

  const titleInput = createRef();

  const handleChange = () => {
    setTitle( titleInput.current.value );
  };

  const handleClick =() => {
    props.onClick( title );
    setTitle('');
  };

  
  return (
    <div id= " form-container">
      <label for= 'title'> Title </label>
      <input 
        type= "text"
        ref={ titleInput } 
        id= "title" 
        value={ title }
        onChange={ handleChange }
      />

      <input 
        type= "button"
        value= "ПОИСК"
        onClick={ handleClick }
      />
    </div>
  );
}

function Results(props) {
  const { title, results} = props;

  if(results) {
    return (
    <>
      <h2>{ title }</h2>
      <div id= "result-container">
        { results.map(( result, i ) => {
          return <Movie key={i} details = { result } />;
        })}

      </div>
    </>
  );
  }else {
   return <h2>Not found</h2>
  }
}

function Movie(props) {
  const details = props.details;
  console.log(details);

  return (
    <div className="movie-details">

      <figure>
        <img
          src={ details.Poster }
          alt={`The poster movie`}
        />
      </figure>
      <h3> { details.Title } </h3>
      <h3> { details.Year } </h3>
      <h3> { details.Type } </h3>

      <input
        type="button"
        value="детали"
      />
    </div>
  );
}

function App() {
  const [ titles, setTitles ] = useState([]);
  const [ results, setResults ] = useState([]);

  const handleClick = title => {
    setTitles(title);

    let api_key = 'edb978d';
    let url = `http://www.omdbapi.com/?apikey=${api_key}&s=${title}`;
    
    axios.get(url)
        .then(response => {console.log('response :>>', response)
          setResults( response.data.Search )
    });
  };

  return (
      <>
        <h1> Movie Bank</h1>
        <Form onClick={ handleClick } />
        <Results 
          title={ titles }
          results={ results } 
        />
      </>
  );
  
  
}
ReactDOM.render(
  <App />, document.getElementById('root')
);
