import "./style.css";
import linkedIn from './../../img/icons/linkedIn.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a rel="noreferrer" href="https://github.com/mkrtchyantigran" target="_blank" >
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a rel="noreferrer" href="https://www.linkedin.com/in/tigran-mkrtchyan-7201a5231" target="_blank">
								<img src={linkedIn} alt="Link" />
							</a>
						</li>
					</ul>
					<div className="copyright">
						
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;