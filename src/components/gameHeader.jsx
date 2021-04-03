
import { Row, Col } from "react-bootstrap";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.././App.css';

/**
 * 
 * @param {}  
 * @returns HTML header element
 */
const GameHeader = () => {

    return (
        <Row className='justify-content-center mt-5'>
            <Col md={6} className='my-5 header'>
                <h1>
                    WORD CARD GAME
                </h1>
            </Col>
        </Row>
    )
}

export default GameHeader;