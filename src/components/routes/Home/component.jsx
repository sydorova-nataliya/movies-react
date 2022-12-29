import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import Movies from '../Home/Movies';

import './styles.scss';

const Home=()=> (
  <>
    <Header />
      <main>
        <Movies getMovie="popular" title="Popular movies"/>
      </main>
    <Footer />
  </>
)

export default Home;
