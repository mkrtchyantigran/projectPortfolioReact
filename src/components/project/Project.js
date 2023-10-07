import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, title3d, img, img3d, index }) => {
	return (
		<NavLink to={`/project/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				<img src={img3d} alt={title3d} className="project_img3d"></img>
				<h3 className="project__title">{title}{title3d}</h3>
			</li>
		</NavLink>
	);
};

export default Project;
