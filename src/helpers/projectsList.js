

import project01 from "./../img/projects/01.jpg";
import project01Big from "./../img/projects/01-big.jpg";

import project02 from "./../img/projects/02.jpg";
import project02Big from "./../img/projects/02-big.jpg";

import project03 from "./../img/projects/03.jpg";
import project03Big from "./../img/projects/03-big.jpg";

import project04 from "./../img/projects/04.jpg";
import project04Big from "./../img/projects/04-big.jpg";




import project3d01 from "./../img/projects/3d modeling/project-01.jpg"
import project3d02 from "./../img/projects/3d modeling/project-03.jpg"
import project3d03 from "./../img/projects/3d modeling/project-02.jpg"
import project3d04 from "./../img/projects/3d modeling/project-05.jpg"

import projects_img_banner from "./../img/projects/Graphic Design/project-2000x2000.jpg";

import graphic_01 from "./../img/projects/Graphic Design/project-2000x2000.jpg";
import graphic_02 from "./../img/projects/Graphic Design/project-932x125.jpg";
import graphic_03 from "./../img/projects/Graphic Design/light.png"
import graphic_04 from "./../img/projects/Graphic Design/LOGO.png"
import graphic_05 from "./../img/projects/Graphic Design/Photoshop-Practic.png"

const image3d = [
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

const GraphicDesign = [
	
	{
		id: 1,
		imgSrc:graphic_01
	},
	{
		id: 2,
		imgSrc:graphic_02
	},
	{
		id: 3,
		imgSrc:graphic_03
	},
	{
		id: 4,
		imgSrc:graphic_04
	},
	{
		id: 5,
		imgSrc:graphic_05
	}
]


const projects = [
		{
		
		title: "Book Library App",
		skills: 'React 18, Vite, Redux, Redux Toolkit, Thunks, Slice, Axios, Express.js, Tailwind CSS, uuid',
		img: project04,
		imgBig: project04Big,
		gitHubLink: 'https://github.com/mkrtchyantigran/BooksLibrary-React-Redux',
		hrefLink: "https://books-library-react-redux.vercel.app/",
		aLink: <a rel="noreferrer"  href="https://books-library-react-redux.vercel.app/" target="_blank" className="btn_project">See all</a>,
	},
	{
		
		title: 'GPT-3',
		skills: 'React, HTML, CSS',
		img: project01,
		imgBig: project01Big,
		gitHubLink: 'https://github.com/mkrtchyantigran/project-react-gpt3',
		hrefLink: "https://mkrtchyantigran.github.io/project-react-gpt3/",
		aLink: <a rel="noreferrer"  href="https://mkrtchyantigran.github.io/project-react-gpt3/" target="_blank" className="btn_project">See all</a>,
	},
	{
		title: 'Dance',
		skills: 'JavaScript, Gulp, HTML, CSS/SCSS, Figma',
		img: project02,
		imgBig: project02Big,
		gitHubLink: 'https://github.com/mkrtchyantigran/project-Dance',
		hrefLink:"https://mkrtchyantigran.github.io/project-Dance/",
		aLink: <a rel="noreferrer"  href="https://mkrtchyantigran.github.io/project-Dance/" target="_blank" className="btn_project">See all</a>,
	},
	
	{
		
		title: "React Todo \n(Class-based)",
		skills: 'React.js, CSS, JavaScript (ES6+, Classes)',
		img: project03,
		imgBig: project03Big,
		gitHubLink: 'https://github.com/mkrtchyantigran/react-todo-with-clases',
		hrefLink: "https://react-todo-with-clases.vercel.app/",
		aLink: <a rel="noreferrer"  href="https://react-todo-with-clases.vercel.app/" target="_blank" className="btn_project">See all</a>,
	},
	{
		title3d: 'Graphic design',
		skills: 'Adobe Illustrator | Adobe Photoshop | CorelDRAW',
		img3d: projects_img_banner,
		img3dBig: GraphicDesign.map((item, index) => {
			return (
				<div key={index} className="project_3d_div" >
					<a href={item.imgSrc} > 
						<img className="project_3d_img" src={item.imgSrc} alt="3D Modeling"  />
					</a>
				</div>
			)
		})
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