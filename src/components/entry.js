import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
export class entry extends Component {
	render() {
		const { nonprofits } = this.props;
		
		return (
			<div>
				{nonprofits.map(nonprofit => (
					<Card style={{ width: "18rem" }}>
						<Card.img variant="top" src={nonprofit.logoUrl} />
						<Card.Body>
							<Card.Title>{nonprofit.name}</Card.Title>
							<Button variant="outline-warning" href={nonprofit.url}> Link </Button>
						</Card.Body>
					</Card>
				))}
			</div>
		)
	}
}

export default entry
