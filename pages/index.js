 import { useRouter } from "next/router";
 const IndexPage=()=>{
     const router=useRouter();
    return <p>Index Page <br/>
    <button onClick={()=>{router.push("/home")}}>GO TO USERS PAGE</button></p>
}
export default IndexPage;