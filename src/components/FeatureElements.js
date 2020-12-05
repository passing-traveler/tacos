import styled from "styled-components";
import FeaturePic from "../images/halalcert.jpg";

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${FeaturePic});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #f5f5f5;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(2rem, 3vw, 3rem);
  }

  p {
    margin-bottom: 1.5rem;
    font-size: clamp(1rem, 1vw, 1rem);
  }
`;
