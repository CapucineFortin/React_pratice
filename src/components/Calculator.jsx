import { useState } from "react";
import Input from "./Input";

function Calculator({ onCompute }) {
    const [inputs, setInputs] = useState({ 'initialInvestment': 0, 'annualInvestment': 0, 'expectedReturn': 0, 'duration': 0 });

    function changeHandler(event, label) {
        setInputs(inputs => {
            const updatedInputs = { ...inputs, [label]: Number.parseInt(event.target.value) };
            onCompute(updatedInputs);
            return updatedInputs;
        })
        console.log(inputs);
    }

    return <section id="user-input">
        <div className="input-group">
            <Input label={'initialInvestment'} onChange={changeHandler} />
            <Input label={'annualInvestment'} onChange={changeHandler} />
        </div>
        <div className="input-group">   
            <Input label={'expectedReturn'} onChange={changeHandler} />
            <Input label={'duration'} onChange={changeHandler} />
        </div>
    </section>;
}
export default Calculator;