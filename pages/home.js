import styles from  "../styles/home.module.css";
import Link from "next/link";
const Home = () => {

  return <div>
      <h3>Home Page</h3>
      <div className={styles.container}>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact us</Link>
        <p>Welcome</p>
        <p>To Home Page</p>
      </div>
    </div>
  
};
export default Home;
