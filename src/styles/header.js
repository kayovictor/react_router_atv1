import styled from 'styled-components'
import recife from './recife.jpg';
import home from './home.jpg';
import aurora from './aurora.jpg';

export const Header = styled.header`
width: 100% ;
height: 70px;
 background-color: black;
  nav{
      margin-left: 50vw;
     padding-top: 20px;
  }
`;

export const Content = styled.div`
    background-image: url(${recife});
    background-size: cover;
    width: 100%;
    height: 100vh;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    h1{
        color: black;
        text-align: center;
        margin-top: 20vw; 
        font-size: 80px;
    }
`;

export const Todo = styled(Content)`
    background-image: url(${home});  
`;

export const Conteudo = styled(Todo)`
  background-image: url(${aurora});
`;