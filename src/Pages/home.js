import React,{useState,useEffect,useRef} from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {set_user} from '../Store/action'


function Home(props){
    const [name,setName] = useState("Ali")
    const [product,setProduct] = useState("KeyBoard")

    useEffect(()=>{
        console.log("This function runs only on first Render")
    },[])

    useEffect(()=>{
        console.log("This function runs at every Render")
    })

    useEffect(()=>{
        console.log("This function runs when Name Updates")
    },[name])

    useEffect(()=>{
        return()=>{
            console.log("This function runs at component unmount")
        }
    })

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            console.log("This Function Runs Only On Update")
            setName(props.currentUsername)
            console.log(name)
        }
    });

    const signin = ()=>{
        props.set_user("Huzaifa","huzaifa@gmail.com","www.google.com","123")
        setName(props.currentUsername)
    }
    




    return(
        <>
            <h1>Home Page</h1>
            <h1>Welcome {name}</h1>
            <h1>Default User Is  {name}</h1>
            <h1>New User Is  {props.currentUsername}</h1>
            <button onClick={()=>signin()}>Set User</button>
            <br/>
            <Link to="/about">Go To About</Link>
            <Link to={{pathname:'/products/'+product}}>Go To Products</Link>

            
        </>
    )
}


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUsername:state.currentUsername
})
  
const mapDispatchToProps = (dispatch) => ({
    set_user:(name,email,photoURL,uid)=> dispatch(set_user(name,email,photoURL,uid))
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Home);