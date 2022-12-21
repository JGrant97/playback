import styled from "styled-components";

const Input = styled.input`
    padding: 10px 15px;
    background: transparent;
    border: 1.5px solid ;
    border-color: var(--accent);
    border-radius: 8px;
    color: var(--accent);
    width: 100%;
    transition: border-color 0.5s;
    -webkit-transition: border-color 0.5s;

    :focus{
        border-color: var(--highlight);
        transition: border-color 0.5s;
        -webkit-transition: border-color 0.5s;
        outline: none;
        cursor: pointer;
    }
`;

export default Input;