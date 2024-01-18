import './App.css';
import './css/main.css';
import useTwitchAuth from './scripts/useAuth.tsx';
import Navbar from './components/Navbar.tsx';
import MainContent from './components/MainContent.tsx';
import TrendingCategories from './components/TrendingCategories.tsx';

function TwitchAuthentication() { // Complete Authentication
  const { authWithTwitch } = useTwitchAuth();
  const getTwitchAuth = async () => {
    await authWithTwitch();
  };
  getTwitchAuth();

}

TwitchAuthentication();

function App() {

  /// PENDIENTE: buscar bug del cambio de theme, si se elimina esta variable no me cambia el color en el npm start
  const dark = "";

  return (
    <div className={`App ${dark}`}>
      <header>
        <Navbar />
      </header>
      <section>
        <MainContent />
      </section>
      <section>
        <TrendingCategories />
      </section>
    </div>
  );
}

export default App;
