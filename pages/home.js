/* eslint-disable react/jsx-key */
import styles from '../styles/user.module.css';
import { useRouter, withRouter } from 'next/router';
import Link from "next/link";
const Home = (props) => {
    const router=useRouter();
    const user=["User 1", "User 2", "User 3", "User 4", "User 5", "User 6", "User 7", "User 8", "User 9", "User 10"];
    const redirect=(e)=>{
        router.push(`/user/${e.target.innerText}`)
       console.log(props)
    }
  return <div>
    <h3 style={{"textAlign":"center"}}>Users List</h3>
    <div className={styles.user}>
    {user.map(el=> <button key={el} onClick={redirect}>{el}</button>)}
    </div>
    </div>
};
export default withRouter(Home);
