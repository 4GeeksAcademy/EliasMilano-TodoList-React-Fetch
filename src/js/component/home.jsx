import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	let tasksList = ['Red pills', 'Shower'];

	return (
		<div className="container mt-5 col-5">
			<h1 className="text-center mt-5"> TODO LIST</h1>
			<div className= "mt-3">
				<input type="text" placeholder="Add a new task" className="mt-3 form-control bg-black text-success" id="exampleInputEmail1" aria-describedby="emailHelp" style={{fontFamily:"Roboto Mono", fontSize:"500"}}/>
				<ul className="list-group mt-3">
					<li className="d-flex justify-content-between bg-black border-bottom m-2">Make some red pills<i className="fa-solid fa-x hidden-icon"></i></li>
					<li className="d-flex justify-content-between bg-black border-bottom m-2">Shower<i className="fa-solid fa-x hidden-icon"></i></li>
					{tasksList.map= ((task,index) => {
						return (
							<li key={index} className="d-flex justify-content-between bg-black border-bottom m-2">{task}<i className="fa-solid fa-x hidden-icon"/></li>
						)
					})}
				</ul>
			</div>
		</div>
		
	);
};

export default Home;
