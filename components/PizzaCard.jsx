import Image from "next/image";
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title} >FIORI DI ZUCCA</h1>
      <span className={styles.price}> $19.90 </span>
      <p className={styles.desc} >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nisi earum id animi ea illo inventore, nobis debitis suscipit velit sed omnis, quisquam eveniet vitae iure dolores quam deserunt recusandae.
      </p>
    </div>
  )
}

export default PizzaCard