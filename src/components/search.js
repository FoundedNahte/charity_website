import React, { useEffect, useState, Component } from 'react';
import { Image, Tab, ListGroup, Button, InputGroup, FormControl, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { chunk } from 'lodash';
import axios from 'axios';

class search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchTerm: null,
			data: null
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const data = this.state
		axios.get("www.CharityFinder.us/search", { params: {search_term: this.state.searchTerm} }).then(response => this.setState({ data: response.data }))
		console.log(data);
	}

	handleInputChange = (event) => {
		event.preventDefault()
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	render() {
		const {data} = this.state
		const {searchTerm} = this.state
		
		const entryChunks = chunk(data, 3)

		const validate = (entry) => {
			if (entry != null) {
				return []
			} else
				return entry
		}
		const entries = data || [];
		const rows = entries.map((entry, index) => {
			return (
				<ListGroup.Item href={entry.url}>
					<Image src={entry.logoUrl} fluid/>
					<p> </p>
					{entry.name}
					<p> </p>
					<p>{entry.description}</p>
					<p> </p>
					<Button variant="outline-warning" href={entry.url}> Link </Button>
				</ListGroup.Item>
			)
		});
		
		if (data != null) {
			return (
				<div>
					<p style={ {color: "white", fontWeight: "bold", padding: "5px", border: "0px", margin: "0px"} }> Search Term is: {searchTerm} </p>
					<form onSubmit={this.handleSubmit}>
						<InputGroup className="col-lg-4 col-lg-offset-4" style={ {textAlign: "center" }}>
							<FormControl
								size="lg"
								placeholder="Search Term"
								type="text"
								name="searchTerm"
								onChange={this.handleInputChange}
							/>
							<Button variant="warning" type="submit"> Find </Button>
						</InputGroup>
					</form>
					<div>
						<Tab.Container id="my-auto" defaultActiveKey="#link1" style={ {padding: "5px"} }>
							<Row>
								<Col>
									<ListGroup>
										{rows}
									</ListGroup>
								</Col>	
							</Row>
						</Tab.Container>
					</div>
				</div>
	  		)
		} else {
			return (
				<div>
					<p style={ {color: "white", fontWeight: "bold", padding: "5px", border: "0[x", margin: "0px"} }> Search Term is: {searchTerm} </p>
					<form onSubmit={this.handleSubmit}>
						<InputGroup className="col-lg-4 col-lg-offset-4" style={ {textAlign: "center"}}>
							<FormControl
								size="lg"
								placeholder="Search Term"
								type="text"
								name="searchTerm"
								onChange={this.handleInputChange}
							/>
							<Button variant="warning" type='submit'> Find </Button>
						</InputGroup>
					</form>
				</div>
			)
		}
	}
}

export default search
