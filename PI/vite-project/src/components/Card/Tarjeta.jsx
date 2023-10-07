function Card(props) {
    const { status, id, name, species, gender, image, onClose, addFav, removeFav, myFavorites } = props;
    //const dispatch = useDispatch();
    //const myFavorites = useSelector((state) => state.myFavorites);
    //const {myFavorites} = useSelector((state) => state); otra forma
    const [isFav, setIsFav] = useState(false);
 
    const { pathname } = useLocation();
 
    useEffect(() => {
       myFavorites?.forEach((fav) => {
          if (fav.id === props.id) {
             setIsFav(true);
          }
       });
    }, [myFavorites]);
 
    /*  const handleFavorite = () => {
        if (isFav) {
           setIsFav(false);
           dispatch(removeFavorite(id));
        } else {
           setIsFav(true);
           dispatch(addFavorite({ name, status, species, gender, onClose, image, id, addFavorite, removeFavorite }));
        }
     }; */
 
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
                    <div>
                       {pathname !== "/favorites" && (
                          <button className={styles.btn} onClick={() => onClose(id)}>X</button>
                       )}
                    </div>
                    <img src={image} alt='rick' />
                    <h2>{name}</h2>
                 </div>
  
  
                 <div className={styles.flipcardback}>
                    <Link to={`/detail/${id}`}>
                       <Name>{name}</Name>
                    </Link>
                    <h2>{status}</h2>
                    <h2>{species}</h2>
                    <h2>{gender}</h2>
                    <h2>{origin.name}</h2>
                    <button className={styles.buttonclose} onClick={onClose}>X</button>
                 </div>
  
              </div>
           </div>
           
        </div>
     );
  }
 
 
 //* ESTO ES LA CONECCION 
 const mapDispatchToProps = (dispatch) => {
    return {
       addFavorite: (character) => {
          dispatch(addFavorite(character)); //addFavorite(character) llega desde las action pasan por mapDispatchToProps quien crea una funcion con el mismo nombre y las manda a las prosp de Card
       },
 
       removeFavorite: (id) => { //primero recibimos las acction arriba en import esta funcion re prepara para recibir un id-character y se lo pasa al action creator cunado se ejecute
          dispatch(removeFavorite(id)); // removeFavorite es la funcion despachadora REMOVE_FAVORITE es la actions type
       }
    }
 };
 
 const mapStateToProps = (state) => {
    return {
       myFavorites: state.myFavorites,
    };
 }
 
 //export default Card;
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
 
 // Es lo mismo que decir
 
 // const Card = (props) => {
 
 //    return (
 //       <>
 //       {}
 //       </>
 //    )
 // }
 
 // export default Card;
 
 
 /* mapStateToProps y mapDispatchToProps son dos funciones que se utilizan comúnmente en React y Redux 
 para conectar componentes de React a un store de Redux y proporcionar datos y acciones a esos componentes. */
 