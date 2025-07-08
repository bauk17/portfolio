import { FaGithub } from "react-icons/fa";
import * as Styled from "./ProjectsCss";

function Projects() {
  return (
    <Styled.ProjectsWrapper>
      <Styled.ProjectsCards
        href="https://github.com/bauk17/delivery"
        target="_blank"
      >
        <Styled.ProjectTitle>Delivery API</Styled.ProjectTitle>
        <Styled.ProjectDescription>
          A backend service built with Java, Spring Boot, and Spring Security.
          It provides secure authentication, role-based access control, and a
          clean set of endpoints for managing orders, users, and delivery
          operations. Designed with clean architecture and good development
          practices in mind.
        </Styled.ProjectDescription>

        <FaGithub size={32} style={{ marginTop: 20, cursor: "pointer" }} />
      </Styled.ProjectsCards>
      <Styled.ProjectsCards
        href="https://github.com/bauk17/todo-server"
        target="_blank"
      >
        <Styled.ProjectTitle>PomoDoList</Styled.ProjectTitle>
        <Styled.ProjectDescription>
          A task-management app that integrates the Pomodoro technique directly
          into the workflow of completing activities. Built with React and
          MongoDB, it lets users create tasks, start focus cycles, and track
          progress in a simple and efficient way.{" "}
          <span style={{ fontWeight: "bold" }}></span>
        </Styled.ProjectDescription>
        <FaGithub size={32} style={{ marginTop: 20, cursor: "pointer" }} />
      </Styled.ProjectsCards>
    </Styled.ProjectsWrapper>
  );
}

export default Projects;
