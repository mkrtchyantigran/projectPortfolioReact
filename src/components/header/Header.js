import "./style.css";
import CV from "./Open-CV/CV (English).pdf"

const Header = () => {



    return (
		
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
				Hello, i'm Tigran
					</strong>
					<br />Front-end Development and 3D modeling 
				</h1>
				<a rel="noreferrer" href={CV}  target="_blank" className="btn">
					Open CV
				</a>
			</div>
		</header>
	);
}

export default Header;