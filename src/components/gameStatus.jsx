
import { Row, Col } from "react-bootstrap";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.././App.css';

/**
 * 
 * @param {{true:Number, false:Number}}} an object which has two keys in order to hold the scores
 * @returns TrueScores and FalseScores HTML elements
 */
const GameStatus = (props) => {

    return (
        <Row className='py-5 justify-content-center'>
            <Col md={3} >
                <button className="button buttonStatusTrue">{`True Score  : ${props.gameStatus.true}`}</button>
                {console.log(props.gameStatus.true)}
            </Col>
            <Col md={3} >
                <button className="button buttonStatusFalse">{`False Score  : ${props.gameStatus.false}`}</button>
            </Col>
        </Row>
    )
}

export default GameStatus;