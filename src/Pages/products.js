import React from 'react'
import { connect } from 'react-redux'


function Products(props){
    return(
        <>
            <h1>Products Page</h1>

            <h1>Product Name is {props.match.params.product}</h1>
        </>
    )
}


const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUser:state.currentUser
})
  
const mapDispatchToProps = (dispatch) => ({
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(Products);