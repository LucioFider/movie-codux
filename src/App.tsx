import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import styles from './App.module.scss';
import { Menu } from './components/menu/menu';
import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Menu />
            <Container />
            <Favorite />
        </div>
    );
}

export default App;
