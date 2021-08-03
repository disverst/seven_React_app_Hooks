import React, {useState, useEffect} from 'react'

function Comments2ListHook(props) {

	const [data, setData] = useState([])

	useEffect(() => {
		if (props.data.length > 0) setData(props.data)
	}, [props]);

	function onlyEven() {
		let a = data;
		let evenPost = a.filter((item) => ((item.id) %2 === 0))
		setData(evenPost)
	};

	return (
		<>
			<h1>Comments</h1>
			<div>
				<button onClick={onlyEven}>Only even comments</button>
			</div>
			{data.map(item => (
				<section key={item.id}>
					<p><b>{item.id}. {item.email}</b></p>
					<p>{item.body}</p>
				</section>
			))}
		</>
	)
}

export default Comments2ListHook