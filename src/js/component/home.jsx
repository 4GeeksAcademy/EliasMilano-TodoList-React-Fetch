import React, { useState, useEffect} from "react";
import Header from "./header.jsx"

const Home = () => {
	const [tasksList, setTasksList] = useState(["Get a haircut", "Coffe with The Oracle", "Make some red pills", "Wake up Neo"]);
	
	const [newTask, setNewTask] = useState ("");

	async function createUser() {
		const url = "https://playground.4geeks.com/todo/users/morpheus";
		const response = await fetch(url, {
			method: "POST"
		})
		if (response.ok){
			getTasks();
		}		
	}

	const getTasks = async() => {
		const url = "https://playground.4geeks.com/todo/users/morpheus";
		const response = await fetch(url);
		if (response.status == 404) {
			createUser();
			return;
		}
		const data = await response.json();
		setTasksList(data.todos);
	}

	useEffect(() => {
		getTasks();
	}, [])


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
					onKeyUp={async(event) => {
						if (event.key == "Enter") {
							const url = "https://playground.4geeks.com/todo/todos/morpheus";
							const response = await fetch(url,{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								  },
								body: JSON.stringify({
									label: newTask,
									is_done: false
								})
							})
							if (response.status == 201) {
								getTasks();
								setNewTask("");
							}
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
							{tasksList && tasksList.map((task,i) => {
								return (
									<li key={i} className="d-flex justify-content-between bg-black m-2">
										{task.label} 
										<i className="fa-solid fa-x hidden-icon" 
											onClick={async() => {
												const url = "https://playground.4geeks.com/todo/todos/" + task.id;
												const filteredList = tasksList.filter((_item,j) => {
													return (j != i);
												})
												const response = await fetch(url, {
													method: "DELETE"
												})
												if (response.ok) {
													setTasksList(filteredList);
												}
											}}
										/>
									</li>
								)
							})}
						</ul>
				</>
				<div className="mt-3 py-2 px-3 border-top">
					<span style={{fontWeight:"400", fontSize: "normal"}}>{tasksList && tasksList.length} items left</span>
				</div>
			</div>
		</div>
		
	);
};

export default Home;
