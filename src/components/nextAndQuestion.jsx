
import { Row } from "react-bootstrap";


/**
 * 
 * @param { {questionId:Number, click:Function} } is an object which has questionId that indicates order of 
 * question, click that is a function connected directly to parent component's (App component) handleNextQuestion function
 * @returns two HTML button NEXT and Question number 
 */
const NextAndQuestion = (props) => {

    return (
        <>
            <Row className='mt-5'>
                <button className="button button1" onClick={props.click} >Next</button>
            </Row>
            <Row className='mb-5'>
                {/* props.questionId starts with 0 and coming from App component*/}
                <button className="button">{`Question : ${props.questionId}`}</button>
            </Row>
        </>
    )
}

export default NextAndQuestion;