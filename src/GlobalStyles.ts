import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{    
    --primary-color: #f29f05;
    --secondary-color: #f27405 ;
    --tertiary-color: #03a688 ;
    --quaternary-color: #592b02 ;    
    --blackMedium:#151515;
    --blackLighter: #9e9e9e;
    --grayLight: #f5f5f5;
    --grayMedium: #bfbfbf;    
    --bg-color:#f0f0f5;
    
  }
   
    

*{
    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    width: 100vw;
    height: 100vh;

    font-family: 'Segoe UI';
}

body{
   

    background: #ffffff;
    -webkit-font-smoothing: antialiased;
}

a{
    color: var(--primary-color);
    text-decoration: none;

    & .ColorFull {
        color: white;
    }

} 
p{

    color: #707070;
    text-align: left;
    font-size: 16px;
    line-height: 21px;

}

h1, h2, h3, h4, h5, h6{
    font-weight:normal; 

    
    color: var(--primary-color);
    font-family: 'Segoe UI';

}
`;
