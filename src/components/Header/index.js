import React from 'react';
import { Container, Logo } from './style';
import { Link } from 'react-router-dom';

function Main (){
      return(
        <Container className="max-container">
            <Logo>
                Scheduler <p>Simulator</p>
                <span></span>
            </Logo>
            <nav className="container-link">
                <Link to="/fcfs">FCFS</Link>
                <Link to="/sjf" >SJF</Link>
                <Link to="/sjf-preemptive" >SJF PREEMPTIVE</Link>
                <Link to="/priority">priority</Link>
                <Link to="/priority-preemptive"> priority preemptive</Link>
                <Link to="/round-robin">Round Robin</Link>
            </nav>
        </Container>
      )
}
 
export default Main;