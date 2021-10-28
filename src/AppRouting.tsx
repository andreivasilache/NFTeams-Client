import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { Profile } from './Pages/Profile/Profile';
import { Auth } from './Components/Auth/Auth';


export const AppRouting = () => {
    console.log('test');
    return(
        <Switch>
            <Route exact path='/' component ={Profile} />
            <Route exact path='/auth' component ={Auth} />
        </Switch>
    )

}