import { useState } from "react";
// import styles from './SearchBar.module.css'


function SearchBar(props) {
   const [id, setId] = useState("");
 
   const handleChange = (event) => {
     setId(event.target.value);
   };
 
   const handleSubmit = () => {
     onSearch(id);
     setId("");
   };
 
   const { onSearch } = props;
   return (
     <div>
       <input type="search" onChange={handleChange} value={id} />
       <button onClick={handleSubmit}>Agregar</button>
       {/* <button onClick={() => onSearch(id)}>Agregar</button> */}
     </div>
   );
 }



export default SearchBar;



/* export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={}>Agregar</button>
      </div>
   );
} */


/* function SearchBar({ onSearch }) {
   return (
      <div className={styles.container}>
         <input type='search' />
         <button className={styles.btn} onClick={onSearch}>Agregar</button>
      </div>
   );
} */