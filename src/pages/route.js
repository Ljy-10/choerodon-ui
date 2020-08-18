import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Geren from './geren'
import Home from './home'
import App5 from '../App练习/App5';
import App4 from '../App练习/App4';
import App3 from '../App练习/App3';
import App1 from '../App练习/App1';
import Zhihu from './zhihu';
import Goods from './goods';



class ContentRoute extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/1" component={Home}></Route>
                    <Route path="/2" exact component={Geren}></Route>
                    <Route path="/3" exact component={App5}></Route>
                    <Route path="/5" exact component={App4}></Route>
                    <Route path="/6" exact component={App3}></Route>
                    <Route path="/7" exact component={App1}></Route>
                    <Route path="/8" exact component={Zhihu}></Route>
                    <Route path="/9" exact component={Goods}></Route>
                </Switch>
            </div>
        );
    }
}

export default ContentRoute;