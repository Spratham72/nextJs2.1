import { withRouter } from "next/router";
export const getStaticPaths = async()=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await res.json();
    const path=data.map(el=>{return {params:{id:el.id.toString()}}})
    return {
        paths:path,
        fallback:false
    }   
}
export const getStaticProps=async(context)=>{
    const res=await fetch('https://jsonplaceholder.typicode.com/users/'+context.params.id);
    const data=await res.json();
return {
    props:{user:data}
}
}
const Detail=(props)=>{
    let el=props.user;
    console.log(el)
    return <>
      <div style={{"textAlign":"center", "color":"Blue"}} key={el.id}>
            <h1>{el.name}</h1>
            <h3>{el.email}</h3>
            <h3>{el.phone}</h3>
            <h3>{el.username}</h3>
            <h3>{el.website}</h3>
            </div>
        </>
       {/* <h1>Details of {props.router.query.id}</h1>  */}
    
}
export default withRouter(Detail);