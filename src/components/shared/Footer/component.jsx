import './styles.scss';

const Footer=()=> (
  <footer className="footer">
    <section className="footer__section" >
        <div>
          <h4 className="footer__title">The basics</h4>
          <ul className="footer__list list">
            <li className="list__contact-links"><a href="#">About TMBD</a></li>
            <li className="list__contact-links"><a href="#">Contact Us</a></li>
            <li className="list__contact-links"><a href="#">Support Forums</a></li>
            <li className="list__contact-links"><a href="#">System Stus</a></li>
          </ul> 
        </div>
        <div>
          <h4 className="footer__title">GET INVOLVED</h4>
          <ul className="footer__list list">
            <li className="list__contact-links"><a href="#">Contribution Bible</a></li>
            <li className="list__contact-links"><a href="#">Add New Movie</a></li>
            <li className="list__contact-links"><a href="#">Add New TV Show</a></li>
          </ul> 
        </div>
        <div>
          <h4 className="footer__title">COMMUNITY</h4>
          <ul className="footer__list list">
            <li className="list__contact-links"><a href="#">Guidelines</a></li>
            <li className="list__contact-links"><a href="#">Discussions</a></li>
            <li className="list__contact-links"><a href="#">Leaderboard</a></li>
            <li className="list__contact-links"><a href="#">Twitter</a></li>
          </ul> 
        </div>
        <div>
          <h4 className="footer__title">LEGAL</h4>
          <ul className="footer__list list">
            <li className="list__contact-links"><a href="#">Terms of Use</a></li>
            <li className="list__contact-links"><a href="#">API Terms of Use</a></li>
            <li className="list__contact-links"><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
  
    </section>
  </footer>
)

export default Footer;
