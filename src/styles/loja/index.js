import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 20px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`