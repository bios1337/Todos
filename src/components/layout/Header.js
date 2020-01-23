import React, { Component } from 'react';

export class Header extends Component {
	render() {
		return (
			<header style={headerStyle}>
				<h1>Todo List</h1>
			</header>
		);
	}
}

const headerStyle = {
	background: '#fff',
	color: '#000',
	textAlign: 'center',
	padding: '10px'
};

export default Header;
