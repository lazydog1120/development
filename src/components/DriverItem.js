import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

export function DriverItem({item, addToFavorites, removeFromFavorites}){
    return(
        //inspired from https://react-bootstrap.github.io/components/cards/
        <Card border="dark" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <Card.Header>{item.name}</Card.Header>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Team: {item.team}</ListGroup.Item>
                <ListGroup.Item>Nationality: {item.nationality}</ListGroup.Item>
                <ListGroup.Item>Region: {item.region}</ListGroup.Item>
                <ListGroup.Item>Wins: {item.Wins}</ListGroup.Item>
                <ListGroup.Item>Points: {item.points}</ListGroup.Item>
            </ListGroup>
            <ToggleButton variant="primary" onClick={()=> {addToFavorites(item)}}>Add to Favorites</ToggleButton>
            <ToggleButton variant="danger" onClick={() => {removeFromFavorites(item)}}>Remove from Favorites</ToggleButton>
        </Card.Body>
    </Card>
        
    );
}