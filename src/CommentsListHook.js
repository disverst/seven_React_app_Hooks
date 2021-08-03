function CommentsListHook(props) {

	return (
		<>
			<h1>Comments</h1>
			{props.data.map(item => (
				<section key={item.id}>
					<p><b>{item.id}. {item.email}</b></p>
					<p>{item.body}</p>
				</section>
			))}
		</>
	)
}

export default CommentsListHook