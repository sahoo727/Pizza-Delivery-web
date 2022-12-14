import Head from 'next/head';
import Image from 'next/image';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
// import styles from '../styles/Home.module.css';
import axios from "axios";

export default function Home({pizzaList}) {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList={pizzaList}/>
    </div>
  )
}

// backend - 2 - this is one that we have write when we have fetch backend data to frontend or send frontend data to backend
export const getServerSideProps = async() => {
  const res = await axios.get("http://localhost:3000/api/products");

  return{
    props: {
      pizzaList: res.data, // sending this information to as props to Home component
    }
  }
}
