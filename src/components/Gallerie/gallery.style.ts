import styled from "styled-components";

export const GalleryContainer = styled.div`
  position: relative;
  width: 21rem;
  height: 21rem;
  border-radius: 10px;
  margin: 2rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #ff6060;
    opacity: 0.5;
  }

  @media screen and (min-width: 375px) and (max-width: 768px) {
    width: 335px;
    height: 255px;
    border-radius: 10px;
    margin: 0;
    margin-bottom: 20px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  margin-top: -101.5%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );

  @media screen and (min-width: 375px) and (max-width: 768px) {
    margin-top: -77.5%;
  }
`;

export const Title = styled.h2`
  position: absolute;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: -15%;
  font-size: 16px;
  line-height: 20px;
  color: white;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    font-size: 14px;
  }
`;
