const LABELS = {
    initialInvestment : "Initial Investment", 
    annualInvestment: "Annual Investment", 
    expectedReturn: "Expected return", 
    duration: "Duration"};

function Input({ label, onChange }) {
    return <p>
        <label>{LABELS[label]}</label>
        <input required type="number" onChange={() => onChange(event, label)}/>
    </p>;
}
export default Input;