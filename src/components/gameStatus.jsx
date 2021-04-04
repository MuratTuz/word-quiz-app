
import { Row, Col } from "react-bootstrap";


/**
 * 
 * @param {{trueAnswer:Number, falseAnswer:Number}}} an object which has two keys in order to hold the scores
 * @returns TrueScores and FalseScores HTML elements
 */
const GameStatus = (props) => {

    return (
        <Row className='py-5 justify-content-center'>
            <Col md={3} >
                <button className="button buttonStatusTrue">{`True Score  : ${props.gameStatus.trueAnswer}`}</button>
            </Col>
            <Col md={3} >
                <button className="button buttonStatusFalse">{`False Score  : ${props.gameStatus.falseAnswer}`}</button>
            </Col>
        </Row>
    )
}

export default GameStatus;