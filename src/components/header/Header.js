import "./style.css";
import CV from "./Open-CV/CVnew.pdf"

const Header = () => {



    return (
		
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Tigran</em>
					</strong>
					<br />Front-end & 3D modeling 
				</h1>
				<div className="header__text">
					<p>improve thinking and understand new things</p>
				</div>
				
				<a rel="noreferrer" href={CV}  target="_blank" className="btn">
					Open CV
				</a>
			</div>
		</header>
	);
}

export default Header;