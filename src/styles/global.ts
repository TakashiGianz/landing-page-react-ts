import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body, #root {
    height: 100%;
    overflow: hidden;
}

body {
    background-color: #F8FDFF;
    font-family: 'Poppins', sans-serif;
}

button {
    background-color: none;
    border: none;
    outline: none;  
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
}

a {
    text-decoration: none;
    outline: none;
}
`;

export default globalStyle;
