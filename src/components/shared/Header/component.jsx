import Form from '../Form';

import './styles.scss';

const Header=()=>(
  <header className='info'>
    <h1 className="info__title">Movies app using React and Redux</h1>
    <h2 className="info__subtitle">In this application you can see the most popular movies. It is also possible to use the search and find suitable films. By clicking on "More information" you can see detailed information about the film!</h2>
    <Form />
  </header>
)

export default Header;
