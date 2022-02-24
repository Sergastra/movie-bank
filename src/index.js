import React, {useState, createRef} from 'react';
import ReactDOM from 'react-dom';

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

  
  return(
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
  )
}


function App(){

  const handleClick = title => {
    console.log(title);
    
    let api_key = 'edb978d';
    let url = 'http://www.omdbapi.com/?apikey= ${api_key}&t= ${title}';
  };

  return (
    <>
    <h1> Movie Bank</h1>
    <Form 
      onClick={ handleClick } 
    />
    </>
  )
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
