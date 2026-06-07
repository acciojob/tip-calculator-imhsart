
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [billAmount, setBillAmount] = useState(50)
  const [tipPercent, setTipPercent] = useState(18)
  const [people, setPeople] = useState(1)
  const [tipPerson, setTipPerson] = useState(null)

  function handleSubmit(e){
    e.preventDefault()

    let currTip = billAmount*tipPercent*0.01
    let finalTip = (currTip/people).toFixed(2)
    setTipPerson(finalTip)
    setBillAmount(50)
    setTipPercent(18)
    setPeople(1)
  }
  return (
    <div  id="container">
       <form onSubmit={handleSubmit}>
        <label htmlFor="bill">Bill:</label>
        <input id="bill" value={billAmount} onChange={e => setBillAmount(e.target.value)} />
        <label htmlFor="tip-percentage">Tip percentage:</label>
        <input id="tip-percentage" value={tipPercent} onChange={e => setTipPercent(e.target.value)} />
        <label htmlFor="people">Number of people:</label>
        <input id="people" value={people} onChange={e => setPeople(e.target.value)} />
        <button>Calculate Tip</button>
       </form>
       <p style={{textAlign:'center'}}>Tip per person: ${tipPerson}</p>
    </div>
  )
}

export default App
