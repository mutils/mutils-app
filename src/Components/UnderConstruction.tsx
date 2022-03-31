import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTrowelBricks } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.background.secondary};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.text.color.primary};
  width: 60%;
  margin-top: 40px;
  text-align: center;
  font-size: 1.5rem;
`;

const Link = styled.a`
  text-decoration: none;
  background: ${({ theme }) => theme.background.primary};
  color: white;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: bold;
  margin-top: 10px;
`;

export default () => {
  return (
    <Container>
      <FontAwesomeIcon icon={faTrowelBricks} size="10x" />
      <Paragraph>
        This tool is currently in development. If you'd like to help bring this
        tool to μtils please visit the GitHub repo and see how you can
        contribute.
      </Paragraph>
      <Link href="https://github.com/mutils/mutils-app" target="_blank">
        <FontAwesomeIcon icon={faGithub} /> μtils GitHub
      </Link>
    </Container>
  );
};
