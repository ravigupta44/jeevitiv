import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #ddd;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin-right: 4em;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  @media screen and (max-width: 1024px) {
    margin-right: 0;
    margin-top: 4em;
  }
`;

export const HeroContent = styled.div`
  width: 30%;
  height: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    height: 50%;
  }
`;

export const HeroTitle = styled.h2`
  margin-bottom: 0.5em;
  font-size: 3em;
`;

export const HeroP = styled.p`
  font-size: 1.2em;
  margin-bottom: 1.5em;
`;

export const HeroBtn = styled.button`
  outline: none;
  border: 1.5px solid #000;
  font-size: 1.1em;
  padding: 0.6em 0.8em;
  background: inherit;
  text-transform: uppercase;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: #eee;
  }
`;
