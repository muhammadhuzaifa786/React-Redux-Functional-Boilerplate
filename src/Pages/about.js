import React from 'react'
import { connect } from 'react-redux'


function About(props){
    const gotohome =()=>{

        const { history } = props;
        history.push("/")

    }
    return(
        <>
            <h1>About Page</h1>
            <button onClick={gotohome}>Go To Home</button>
        </>
    )
}


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUser:state.currentUser
})
  
const mapDispatchToProps = (dispatch) => ({
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(About);