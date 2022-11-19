import { RiBankFill } from 'react-icons/ri';

export function SingleBankOffer(props) {
  const bankName = props.data.bankDetails.bankName;
  const years =
    Math.round(
      10 *
        (props.data.totalDuration.years + props.data.totalDuration.months / 12)
    ) / 10;
  const interestRate = props.data.effectiveInterest;
  const monthlyPayment = props.data.monthlyPayment;
  const loanAmount = props.data.loanAmount
      
  return (
    
    <button class="shadow pa-5" style={{ minWidth: "100%",outlineStyle: "solid", outlineColor: "darkgrey",
    outlineWidth: "thin", backgroundColor: "white", border: "none", borderRadius: "8px"}}>
      <h1><RiBankFill /></h1>

      <h2>{years} years</h2>
      <h5>fixed interest rate</h5>
      <hr></hr>

      <div>
        <h3 class="text-secondary muted">€{loanAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h3>
        <h5 class="muted">{bankName}</h5>
        <ul style={{listStyle: "none", paddingLeft: "0pt"}}>
          <li>Interest rate: {interestRate}%</li>
          <li>Years: {years}</li>
          <li>Monthly payment: €{monthlyPayment}</li>
        </ul>
      </div>

    </button>      
    
  );
}

export default SingleBankOffer;
