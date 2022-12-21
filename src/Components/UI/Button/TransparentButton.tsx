import styled from "styled-components";

const TransparentButton = styled.button`
    padding: 10px;
    background: transparent;
    border: 1px solid var(--accent);
    border-radius: 8px;
    color: var(--accent);
    transition: background-color 0.5s, color 0.5s;
    -webkit-transition: background-color 0.5s, color 0.5s;

    :hover{
        color: var(--primary);
        background-color: var(--accent);
        transition: background-color 0.5s, color 0.5s;
        -webkit-transition: background-color 0.5s, color 0.5s;
        outline: none;
        cursor: pointer;
    }
`;

export default TransparentButton;