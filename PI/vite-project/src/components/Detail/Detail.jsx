import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Detail = () => {
   const { detailId } = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      const URL_BASE = "https://rickandmortyapi.com/api";

      axios(`${URL_BASE}/character/${detailId}`).then((response) =>
         setCharacter(response.data)
      );

      /*  axios(`${URL_BASE}/character/${detailId}`).then(({ data }) => {
          if (data.name) {
             setCharacter(data);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
       return setCharacter({}); 
       }, [detailId]);*/
   }, []);

   return (
      <div>
               {character.name ? (
   <>
      <h1>{character.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt="" />
      <button>
         <Link to='/home'>HOME</Link>
      </button>
   </>
   ) : (
   <h3>Loading...</h3>
      )
} 
            
      </div>
   );
};

export default Detail;

/* {character.name ? (
   <>
      <h1>{character?.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt="" />
      <button>
         <Link to='/home'>HOME</Link>
      </button>
   </>
   ) : (
   <H3>Loading...</H3>
      )
} */