import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

const PizzaList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN WORLD</h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, non, et molestiae, rerum ducimus laborum ut expedita earum consequatur animi reprehenderit illo alias quae facere porro itaque. Eaque, magni optio!
        </p>
        <div className={styles.wrapper} >
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
        
    </div>
  )
}

export default PizzaList