
import { Row } from "react-bootstrap";

import { FinishAlert } from "../services/alert-service";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '.././App.css';

/**
 * 
 * @param { {questionId:Number, count:Number, click:Function} } is an object which has questionId that indicates order of 
 * question, count that hold the length of the question array, click that is a function connected directly to 
 * parent component's (App component) setQuestionID() useState for use of stae lifting
 * @returns two HTML button NEXT and Question number 
 */
const NextAndQuestion = (props) => {

    const handleChange = () => {
        (props.count > props.questionId + 1) ? props.click(prevStatus => prevStatus + 1)
            : FinishAlert('You have finished the quiz. THANKS FOR YOUR PARTICIPATION :)))');
    }

    return (
        <>
            <Row className='mt-5'>
                <button className="button button1" onClick={handleChange} >Next</button>
            </Row>
            <Row className='mb-5'>
                {/* props.questionId starts with 0 and coming from App component*/}
                <button className="button">{`Question : ${props.questionId + 1}`}</button>
            </Row>
        </>
    )
}

export default NextAndQuestion;