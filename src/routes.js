import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/Home';
import FCFS from './pages/FCFS';
import SJF from './pages/SJF';
import SJF_PREEMPTIVE from './pages/SJF_PREEMPTIVE';
import PRIORITY from './pages/PRIORITY';
import PRIORITY_PREEMPTIVE from './pages/PRIORITY_PREEMPTIVE';
import ROUND_ROBIN from './pages/ROUND_ROBIN';

const Routes = () =>{
      return(
        <BrowserRouter>
          <Switch>
            <Route path="/fcfs" component={FCFS} />
            <Route path="/sjf" component={SJF} />
            <Route path="/sjf-preemptive" component={SJF_PREEMPTIVE} />
            <Route path="/priority" component={PRIORITY} />
            <Route path="/priority-preemptive" component={PRIORITY_PREEMPTIVE} />
            <Route path="/round-robin" component={ROUND_ROBIN} />
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      )
}
 
export default Routes;