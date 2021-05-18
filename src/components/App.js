import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import UserContext from '../contexts/UserContexts';
import Home from './Home/Home';
import Register from './Register/Register';
import Habits from './Habits/Habits';
import Today from './Today/Today';
import Historic from './Historic/Historic';
import '../css/reset.css';
import '../css/style.css';

export default function App(){
    const [user, setUser] = useState("");
    console.log(user);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/cadastro" exact>
                        <Register />
                    </Route>
                    <Route path="/habitos" exact>
                        <Habits />
                    </Route>
                    <Route path="/hoje" exact>
                        <Today />
                    </Route>
                    <Route path="/historico" exact>
                        <Historic />
                    </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}