import "./calculator.css";

const Calculator = ({ children }) => {
    return <div className="Calculator">
                <h2>Calculator</h2>
                {children}
                </div>;
  };

export default Calculator;