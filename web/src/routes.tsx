import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import path from 'path'
import Home from './components/pages/Home'
import CreatePoint from './components/pages/CreatePoint'
const Routes = () =>{
    return(
    <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
    );
}
export default Routes;