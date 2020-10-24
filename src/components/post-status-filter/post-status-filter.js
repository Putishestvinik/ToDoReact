import React, {Component} from "react";
import './post-status-filter.css';
import {Button, ButtonGroup} from 'reactstrap';

export default class PostStatusFilter extends Component {
	constructor(props){
		super(props);
		this.buttons = [
			{ name: 'all', label: 'All' },
			{ name: 'like', label: 'Like' },
			{ name: 'important', label: 'Important' }
		]
	}
	render() {
		const buttons = this.buttons.map( ({name, label}) => {
			const {filter, onFilterSelect} = this.props;
			const cls = filter === name ? "info" : "outline-secondary";
			return (
				<Button onClick={()=> onFilterSelect(name)} key={name} color={cls}>{label}</Button>
			)
		});
		return (
			<ButtonGroup>
				{buttons}
			</ButtonGroup>
		);
	}
}