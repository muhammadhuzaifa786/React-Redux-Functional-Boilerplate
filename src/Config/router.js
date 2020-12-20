import React from 'react'
import { connect } from 'react-redux'
import Home from '../Pages/home.js'
import About from '../Pages/about.js'
import Products from '../Pages/products.js'
import {BrowserRouter as Router,Route} from "react-router-dom";

function AppRouter(){
    
    return(
        <>
        <Router>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/products/:product' component={Products}></Route>

        </Router>
        </>
    )
    
}

const mapStateToProps = (state) => ({
    hasUser:state.hasUser,
    currentUser:state.currentUser
})
  
const mapDispatchToProps = (dispatch) => ({
})
  
  
export default connect(mapStateToProps,mapDispatchToProps)(AppRouter);