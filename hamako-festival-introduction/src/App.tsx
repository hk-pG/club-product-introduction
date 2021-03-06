import { Hidden } from '@material-ui/core';
import { FC, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Routing } from './components/ListOfExhibits/organisms/Routing';
import { Header } from './components/shareComponents/templates/header/Header';
import { HeaderMobile } from './components/shareComponents/templates/header/HeaderMobile';

const App: FC = () => {
  const year: number = 2021;
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scroll(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <>
      <div className="contents">
        <Hidden smDown>
          {/* モバイル画面ではボタンを出さない */}
          <Header year={year} />
        </Hidden>
        <Hidden mdUp>
          <HeaderMobile year={year} />
        </Hidden>
        <Routing />
      </div>
    </>
  );
};

export default App;
