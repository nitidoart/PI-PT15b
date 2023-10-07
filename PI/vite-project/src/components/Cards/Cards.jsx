import Card from '../Card/Card';
import {CardsContainer} from "./stylesComponents"

function Cards(props) {
   const { characters, onClose } = props;
   return <CardsContainer>
      {
         characters.map((character) => {
            return (<Card
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               id={character.id}
               onClose={() => onClose(character.id)}
            />)
         })
      }
   </CardsContainer>;
}

export default Cards;


/* function Cards(props) {
   return <div></div>;
} */


/* Con destructurin
characters.map(({id, name, status, species, gender, origin, image}) => {
   return <Card
   key={id}
   name={name}
   status={status}
   species={species}
   gender={gender}
   origin={origin.name}
   image={image}
   onClose={() => window.alert('Emulamos que se cierra la card')}
   /> */
