import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

// backend - 3 - the props is recived and required information from backend is acquired
const PizzaList = ({pizzaList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN WORLD</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, non, et molestiae, rerum ducimus laborum ut expedita earum consequatur animi reprehenderit illo alias quae facere porro itaque. Eaque, magni optio!
        </p>
        <div className={styles.wrapper} >
          {pizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza}/>      //this map is basically done because we have to iterate to eac document, and an id is passed so that every element is unique
          ))}  
            
        </div>
        
    </div>
  )
}

export default PizzaList