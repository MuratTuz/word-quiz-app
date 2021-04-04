
import { Row, Col } from "react-bootstrap";

function XList(props) {
    return (
        props.choices.choices.map((choice, index) => {
            return <button className="button button2" data-value={choice} key={index} onClick={props.clickEvent} >{choice}</button>
        })
    )
}

/**
 * 
 * @param {{choices:Array, click:Function}} choices is an json array which contains question object and click is a function
 * connected parent App component's handleAnsweredQuestion funtion
 * @returns quiz word and choice words HTML elements as in <button> 
 */
const Choices = (props) => {

    return (
        <Row className='my-5'>
            <Col md={4}>
                <button className="button button3" >{props.choices.word}</button>
            </Col>
            <Col md={8}>
                <XList choices={props.choices} clickEvent={props.click} />
            </Col>
        </Row>
    )
}

export default Choices;