const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Contacts</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Location</h2>
						<p>Łódź, Poland</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Mobile / WhatsApp</h2>
						<p>
							<a href="tel:+48 576 474 411"> +48 576 474 411</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:tigranmkrtchyan295@gmail.com">
								tigranmkrtchyan295@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;