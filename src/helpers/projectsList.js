

import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";


import project3d01 from "./../img/projects/3d modeling/project-01.jpg"
import project3d02 from "./../img/projects/3d modeling/project-03.jpg"
import project3d03 from "./../img/projects/3d modeling/project-02.jpg"
import project3d04 from "./../img/projects/3d modeling/project-05.jpg"


let image3d = [
	{
		id: 1,
		imgSrc: project3d01
	},
	{
		id: 2,
		imgSrc: project3d02
	},
	{
		id: 3,
		imgSrc: project3d03
	},
	{
		id: 4,
		imgSrc: project3d04
	},

]


const projects = [
	{
		
		title: 'GPT-3',
		skills: 'React, HTML, CSS',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com',
		hrefLink: "https://mkrtchyantigran.github.io/projectReactGPT3/",
		aLink: <a rel="noreferrer"  href="https://mkrtchyantigran.github.io/projectReactGPT3/" target="_blank" className="btn_project">See all</a>,
	},
	{
		title: 'Dance',
		skills: 'JavaScript, Gulp, HTML, CSS/SCSS, Figma',
		img: project02,
		imgBig: project02Big,
		gitHubLink: 'https://github.com',
		hrefLink:"https://mkrtchyantigran.github.io/project-Dance/",
		aLink: <a rel="noreferrer"  href="https://mkrtchyantigran.github.io/project-Dance/" target="_blank" className="btn_project">See all</a>,
	},
	{
		title3d: '3D Modeling',
		skills: 'Autodesk 3ds Max | Corona',
		img3d: project3d01,
		img3dBig: image3d.map((item, index) => {
			return (
				<div key={index} className="project_3d_div" >
					<a href={item.imgSrc} > 
						<img className="project_3d_img" src={item.imgSrc} alt="3D Modeling"  />
					</a>
				</div>
			)
		})
	}
	
];

export {projects}