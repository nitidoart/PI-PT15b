import styles from './Card.module.css'
//import styled from 'styled-components';
import { connect, useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from '../../redux/actions/actions';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Card(props) {
   // eslint-disable-next-line no-unused-vars
   const { status, id, name, species, gender, image, onClose, addFav, removeFav, myFavorites } = props;

   const [isFav, setIsFav] = useState(false);

   const { pathname } = useLocation();

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav(props);
      setIsFav(!isFav);
   };

   return (
      <div>

         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }


         <div className={styles.flipcard}>
            <div className={styles.flipcardinner}>

               <div className={styles.flipcardfront}>

                  <img src={image} alt='rick' />
                  <h2>{name}</h2>
               </div>


               <div className={styles.flipcardback}>
                  <div >
                     <Link to={`/detail/${id}`}>
                        <h1>{name}</h1>
                     </Link>
                  </div>
                  <h2>{status}</h2>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
                  <h2>{origin.name}</h2>

                  {pathname !== "/favorites" && (
                        <button className={styles.buttonclose} onClick={onClose}>X</button>
                     )}

                  
               </div>

            </div>
         </div>

      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {
         dispatch(addFav(character));
      },
      removeFav: (id) => {
         dispatch(removeFav(id));
      },
   };
};

const mapStateToProps = (state) => {
   return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);