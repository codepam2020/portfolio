import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

const Wrap = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TitleTextAnimation = keyframes`
  0% {
    color: #ff0000;
  }
  16.666666% {
    color: #ffff00;
  }
  33.333333% {
    color: #00ff00;
  }
  49.999999% {
    color: #00ffff;
  }
  66.666666% {
    color: #0000ff;
  }
  83.333333% {
    color: #ff00ff;
  }
  100% {
    color: #ff0000;
  }
`

const TitleText = styled.h1`
  color: ${({ theme }) => theme.color.title_text};
  font-size: 3rem;
  animation: ${TitleTextAnimation} 13s linear infinite;
`

export default function Main() {
  return (
    <Wrap>
      <Header>
        <TitleText>CODEPAM Portfolio</TitleText>
      </Header>
    </Wrap>
  )
}