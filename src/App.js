
import Pokemons from './components/Pokemon/Pokemons';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Themes/GlobalStyles';
import {useDarkMode} from './components/Hooks/useDarkMode';
import { darkTheme, lightTheme } from './components/Themes/Themes';
import Toogle from './components/Themes/Toggler';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navigation>
            <Toogle theme={theme} toggleTheme={themeToggler} />
          </Navigation>
          <Pokemons />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
