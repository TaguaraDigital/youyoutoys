import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 639px) {
        flex-direction:column;
    }

    h1 {
        margin-top: 1rem;
        color: var(--mainClr);
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p {
        padding: 1.5rem;
        text-transform: uppercase;
        font-size: 1.5rem;
    }
`;

export const SummaryHeader = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;

    p{
        margin: 0;
        padding: 1rem;
    }


    button {
        font-size: ${(props) => props.big ? "1.5rem" : ".85rem" }  ;
        padding: ${(props) => props.big ? "1rem 2rem" : ".5rem 1rem" }  ;   
        margin: 0; 
        background-color: ${(props => props.primary ? "var(--ctaInvClr)" : "var(--ctaClr)") };
        color: ${(props => props.primary ? "var(--lightClr)" : "var(--ctaClr)") };
        color: var(--lightClr);
        border-radius: 5px;
        white-space: nowrap;
        outline: none;
        border: none;
        transition: 0.5s;

        &:hover {
            background-color: ${(props => props.primary ? "var(--ctaClr)" : "var(--purpleClr)"  ) };
            color: ${(props => props.primary ?  "var(--ctaInvClr)" : "var(--lightClr)") };
            color: var(--lightClr);
            transform: scale(.95);
        }
    }

    @media screen and (max-width: 639px) {
        flex-direction:column;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
`;

export const ButtonText = styled.button`
font-size: ${(props) => props.big ? "1.5rem" : ".85rem" }  ;
    padding: ${(props) => props.big ? "1rem 2rem" : ".5rem 1rem" }  ;   
    margin: 1rem; 
    background-color: ${(props => props.primary ? "var(--mainClr)" : "var(--ctaClr)") };
    color: ${(props => props.primary ? "var(--lightClr)" : "var(--ctaClr)") };
    color: var(--lightClr);
    border-radius: 5px;
    white-space: nowrap;
    outline: none;
    border: none;
    transition: 0.5s;

    &:hover {
        background-color: ${(props => props.primary ? "var(--ctaClr)" : "var(--purpleClr)"  ) };
        color: ${(props => props.primary ?  "var(--ctaInvClr)" : "var(--lightClr)") };
        color: var(--lightClr);
        transform: scale(.95);
    }

`; 