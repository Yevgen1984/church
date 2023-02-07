import MainLogo from '../../images/church.png';
import { LogoImg,LogoBox } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoBox>
      <LogoImg src={MainLogo} alt="church logo"/>
      <p>Церква Ісуса Назарянина</p>
    </LogoBox>
  );
};