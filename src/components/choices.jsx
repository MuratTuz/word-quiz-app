
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { InfoAlert } from "../services/alert-service";

function XList(props){
    return (
        props.choices.choices.map((choice, index) => {
            return <button className="button button2" value={choice} key={index} onClick={props.clickEvent} >{choice}</button>
        })
    )
}


/**
 * 
 * @param {{choices:Array, gameStatus:Object click:Function}} choices is an json array which contains question object
 * gameStatus is an object held true/false score and click is a function for state lifting, connected parent App component's
 * setStatus() useState in order to update score. 
 * @returns quiz word and choice words HTML elements as in <button> 
 */
const Choices = (props) => {

    const [count, setCount] = useState(0); // stopping multiple choices

    const handleChange = (event) => {

        // check if selection process has already rendered.
        if (count < props.choices.question) {
            let trueAnswer = props.gameStatus.true + 1;
            let falseAnswer = props.gameStatus.false + 1;

            props.choices.answer === event.target.value ? props.click(prevStatus => ({ ...prevStatus, true: trueAnswer }))
                : props.click(prevStatus => ({ ...prevStatus, false: falseAnswer }));

            setCount(props.choices.question);
        } else {
            InfoAlert('You have already answered this question');
        }

    }


    return (
        <Row className='my-5'>
            <Col md={4}>
                <button className="button button3" >{props.choices.word}</button>
            </Col>
            <Col md={8}>
                <XList choices={props.choices} clickEvent={handleChange}/>
            </Col>
        </Row>
    )
}

export default Choices;