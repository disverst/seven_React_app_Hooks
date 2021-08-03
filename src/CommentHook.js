import React, {useState, useEffect} from 'react'

function CommentHook() {

	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
			.then(response => response.json())
			.then(data => {
				setData(data)
			})
	}, [])
	
	const selectHandler = (event) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${event.target.value}/comments`)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				setData(data)
			});
	}

	return (
		<>
			<p>Choose post ID:</p>
			<select onChange={selectHandler}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
			<div>
				<h1>Comments</h1>
				{data.map(item => (
				<section key={item.id}>
					<h2> {item.id}. {item.name}</h2>
					<p>{item.body}</p>
				</section>
			))}
			</div>
		</>
	)
}

export default CommentHook