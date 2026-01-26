import {useRef, useState, React} from 'react';
import './TestMain.css';

export default function TestMain() {
    const [form1, setFrom1] = useState();
    const subForm1 = useRef();

    return (
        <>
            <div className="testMain">
                <div className="testFromContainer">
                    <form>
                        <input type="text"/>
                        <button ref={subForm1}>Submit</button>
                    </form>
                </div>
            </div> 
        </>
    )
}
