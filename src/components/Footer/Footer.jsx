// import { Logo } from 'components/Logo/Logo';
// import { Navigation } from 'components/Navigation/Navigation';
// import { Container } from 'utils/GlobalStyle.jsx';
import { FooterBlok } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterBlok>
      <address>
        <ul>
          <li>
            <a
              href="https://www.google.com/maps/place/%D0%A6%D0%B5%D1%80%D0%BA%D0%BE%D0%B2%D1%8C+%D0%9D%D0%B0%D0%B7%D0%B0%D1%80%D1%8F%D0%BD%D0%B8%D0%BD%D0%B0/@49.2316659,28.4775965,15z/data=!4m6!3m5!1s0x472d5bea919e9dcf:0x92b44202750992d6!8m2!3d49.2316659!4d28.4775965!16s%2Fg%2F11bxg2tzsr"
              target="_blank"
              rel="noopener nofollow noreferrer">
            21050, м. Вінниця, вулиця Князів Коріатовичів, 10 
            </a>
          </li>
          <li>
            <a href="mailto:nazaretevn@gmail.com">nazaretevn@gmail.com</a>
          </li>
          <li>
            <a href="tel:+380638576515">+38(063)-857-65-15</a>
          </li>
        </ul>
      </address>
    </FooterBlok>
  );
};
