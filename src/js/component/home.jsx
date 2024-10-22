import React, { useState } from "react";
import Header from "./header.jsx"

const Home = () => {
	const [tasksList, setTasksList] = useState(["Get a haircut", "Coffe with The Oracle", "Make some red pills", "Wake up Neo"]);
	
	const [newTask, setNewTask] = useState ("");

	return (
		<div className="container mt-5 col-5">
			<Header/>
			<h1 className="text-center mt-4">TODO LIST</h1>
			<div className= "mt-3">
				<input type="text" placeholder="Add a new task" className="mt-3 form-control bg-black text-success" 
					value={newTask} 
					style={{fontFamily:"Roboto Mono", fontSize:"500"}} 
					onChange={(event) => { 
						setNewTask(event.target.value)
					}}
					onKeyUp={(event) => {
						if (event.key == "Enter") {
							setTasksList([...tasksList, newTask]);
							setNewTask("");
							// To observe the pressed keys on the console
							console.log(event.key);
						}
					}}
				/>
				
				<>
					{(tasksList.length == 0) && <>
						<div className="d-flex justify-content-center mt-4">
							<h3 className="bg-secondary p-3 text-black rounded">THERE ARE NO TASKS</h3>
						</div>
					</>}
						<ul className="list-group mt-3">
							{tasksList.map((task,i) => {
								return (
									<li key={i} className="d-flex justify-content-between bg-black m-2">
										{task} 
										<i className="fa-solid fa-x hidden-icon" 
											onClick={() => {
												const filteredList = tasksList.filter((_item,j) => {
													return (j != i);
												})
												setTasksList(filteredList);
											}}
										/>
									</li>
								)
							})}
						</ul>
				</>
				<div className="mt-3 py-1 px-3 border rounded">
					<span style={{fontWeight:"400", fontSize: "normal"}}>{tasksList.length} items left</span>
				</div>
			</div>
		</div>
		
	);
};

export default Home;
