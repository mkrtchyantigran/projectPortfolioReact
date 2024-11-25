import Header from './../components/header/Header'

const Home = () => {
    return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Front-end</h2>
							<p>
							JavaScript | React | React Router | HTML | CSS | SCSS | Sass
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Full-Stack</h2>
							<p>Node.js | Express | MySQL | bcrypt | Postman </p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;
