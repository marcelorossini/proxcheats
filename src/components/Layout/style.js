import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "Navbar" "Wrapper";
`;

export const Wrapper = styled.div`
  grid-area: Wrapper;
  padding: 24px 24px;
  overflow-y: scroll;
  
  & > * {
    max-width: 1100px;
    margin: 0 auto;
  }
`;
