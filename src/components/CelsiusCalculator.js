function CelsiusCalculator({celsius, onChange}) {
    return(
        <input value = {celsius} onChange = {e => onChange(e.target.value)}/>
    );
}

export default CelsiusCalculator;