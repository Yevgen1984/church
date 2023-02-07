import { MainMenuBlock, MainMenuList, MainMenuBox } from './MainMenu.styled.js';

export const MainMenu = () => {
  return <MainMenuBlock>
    <MainMenuList>
      <li>
        <a href="/">
          <MainMenuBox><img src="" alt="" />
          Діяльність
          </MainMenuBox>
        </a>
      </li>
      <li>
        <a href="/">
          <MainMenuBox><img src="" alt="" />
          Як знайти Бога?</MainMenuBox>
        </a>
      </li>
      <li>
        <a href="/">
          <MainMenuBox><img src="" alt="" />
          Реабілітаційні центри</MainMenuBox>
        </a>
      </li>
      <li>
        <a href="/">
          <MainMenuBox><img src="" alt="" />
          Гуманітарна допомога</MainMenuBox>
        </a>
      </li>
      <li>
        <a href="/">
          <MainMenuBox><img src="" alt="" />
          Допомога церкві</MainMenuBox>
        </a>
      </li>
    </MainMenuList>
      </MainMenuBlock>;
};
