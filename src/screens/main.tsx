import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';

const mobileScreenSize = 1200; //px

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Wrap = styled.div`
  width: ${ mobileScreenSize }px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media (max-width: ${ mobileScreenSize + 40 }px) {
    width: calc(100% - 40px);
  }
`


const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
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
  color: ${ ({ theme }) => theme.color.title_text };
  font-size: 3rem;
  animation: ${ TitleTextAnimation } 13s linear infinite;
  text-align: center;
`

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

const CareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-self: center;
  width: 100%;
`

const CareerContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  align-self: center;
  width: 100%;
  min-height: 20rem;
  border: 2px solid gray;
`
const LabelContainer = styled.div`
  background-color: ${ ({ theme }) => theme.color.main_background };
  width: 6rem;
  height: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${ ({ theme }) => theme.color.normal_text };
  font-size: 1.3rem;

  top: -21.4rem;
  left: -40%;


  @media (max-width: ${ mobileScreenSize + 40 }px) {
    top: -21.4rem;
    left: 0;
  }
`

export default function Main () {
  return (
    <Layout>
      <Wrap>
        <Title>
          <TitleText>CODEPAM Portfolio</TitleText>
        </Title>
        <Body>
          <CareerContainer>
            <CareerContentContainer>
            </CareerContentContainer>
            <LabelContainer>Career</LabelContainer>
          </CareerContainer>
        </Body>
      </Wrap>
    </Layout>
  )
}