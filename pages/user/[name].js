import { withRouter } from "next/router";

const Detail=(props)=>{
    console.log(props.router.query.name)
    return <div style={{"textAlign":"center", "color":"Blue"}}>
       <h1>Details of {props.router.query.name}</h1> 
    </div>
}
export default withRouter(Detail);