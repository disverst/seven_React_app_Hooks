import React, {useState, useEffect} from 'react'
import CommentsListHook from './CommentsListHook'
import Comments2ListHook from './Comments2ListHook'

function Comment2Hook() {

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
				<CommentsListHook data={data} />
				<Comments2ListHook data={data} />
			</div>
		</>
	)
}

export default Comment2Hook