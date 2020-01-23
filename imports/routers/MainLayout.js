import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'
import Landing from '/imports/pages/Landing'
import Signup from '/imports/pages/Signup'
import NotFound from '../pages/NotFound'

function MainLayout() {
    return( 
    <Switch>
        <Route path="/signup" component={Signup}/>
        <Route path="/" exact component={Landing}/>
        <Route path="*" exact component={NotFound}/>
    </Switch>
    )
}


export default MainLayout