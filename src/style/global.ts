import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Inter", sans-serif;
            list-style: none;
            text-decoration: none;
            user-select: none;
        }

        body{
            background-color: #040404;
            font-size: 16px;
            overflow-x: hidden;
        }
`;
