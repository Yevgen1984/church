// import { useSelector } from 'react-redux';
// import { selectToken } from 'redux/auth/authSelectors';
// import { Navigation } from 'components/Navigation/Navigation';
// import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
// import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
 
  return (
    <>
       <header>
        Хедер
          </header>
      <Outlet />
    </>
  );
};