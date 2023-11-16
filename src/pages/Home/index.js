import React from "react";
import { Link } from "react-router-dom";
import { Container, Body, Logo, Footer } from "./style";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

function Main() {
  return (
    <Container className="max-container">
      <Logo>
        Scheduler <p id="pcomblink">Simulator</p>
        <span>by: Caio F. Vieira</span>
      </Logo>
      <Body>
        <Link to="/fcfs" className="btn-default">
          First-Come First-Served - FCFS
        </Link>
        <Link to="/sjf" className="btn-default">
          Shortest Job First - SJF
        </Link>
        <Link to="/sjf-preemptive" className="btn-default">
          Shortest Job First - SJF PREEMPTIVE
        </Link>
        <Link to="/priority" className="btn-default">
          priority
        </Link>
        <Link to="/priority-preemptive" className="btn-default">
          {" "}
          priority preemptive
        </Link>
        <Link to="/round-robin" className="btn-default">
          Round Robin
        </Link>
      </Body>
      <Footer>
        <a
          href="https://www.linkedin.com/in/caiofvieira"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/caiocfv"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare />
        </a>
        <a
          href="https://www.instagram.com/caiiuh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </Footer>
    </Container>
  );
}

export default Main;
