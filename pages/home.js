/* eslint-disable react/jsx-key */
import styles from '../styles/user.module.css';
import { useRouter, withRouter } from 'next/router';
import Link from "next/link";
export const getStaticProps =async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    return {
        props:{user:data}
    }   
}
const Home = (props) => {
    const router=useRouter();
    
    const user=props.user;
    console.log(user)
    const redirect=(e)=>{
        console.log(e.target.id)
         router.push(`/user/${e.target.id}`)
       
    }
  return <div>
    <h3 style={{"textAlign":"center"}}>Users List</h3>
    <div className={styles.user}>
    {user.map(el=> <button key={el.id} id={el.id} onClick={redirect}>{el.name}</button>)}
    </div>
    </div>
};
export default withRouter(Home);
