import React from 'react';

import PostListItem from '../post-list-item/';
import { ListGroup, ListGroupItem } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {

	const elements = posts.map((i) => {
		const {id, ...itemProps} = i;
		return (
			<ListGroupItem key={id}>
				<PostListItem
				 {...itemProps}
				  onDelete={() => onDelete(id)} 
				  onToggleImportant={() => onToggleImportant(id)} 
				  onToggleLike={()=>{onToggleLike(id)}}/>
			</ListGroupItem>
		)
	});

	return (
		<ListGroup className="app-list">
			{elements}
		</ListGroup>
	);
}

export default PostList;