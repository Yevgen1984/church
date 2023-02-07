import styled from 'styled-components';

export const MainMenuBlock = styled.section`
  display: flex;
  align-items: center;
  padding: 10px;
  outline: 1px solid grey;
`;

export const MainMenuList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 5px;
margin: 0 auto;
`;

export const MainMenuBox = styled.div`
width: 200px;
height: 200px;
border-radius: ${p => p.theme.borderRadius.br40};
background-color: ${p => p.theme.colors.secondaryBackground};
`;

