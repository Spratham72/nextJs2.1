import Link from "next/link"

const Contact=()=>{
   
    return <>
    <div>
        <h3>Contact Details</h3>
       <div style={{"display":"flex","background":"olive", "color":"white", "gap":"20px"}}>
           <Link href="https://github.com/Spratham72">Github</Link>
           <Link href="https://linkdin.com/">LinkdIn</Link>
        </div>
    </div>
    </>
}
export default Contact;