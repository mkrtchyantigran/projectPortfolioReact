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
							JavaScript | React | HTML | CSS | Sass | Gulp | Git, GitHub
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">3D modeling</h2>
							<p>Autodesk 3ds Max | Corona | V-Ray </p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;
