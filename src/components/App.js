
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
        <label htmlFor="billamt">Bill:</label>
        <input id="billamt" value={billAmount} onChange={e => setBillAmount(e.target.value)} />
        <label htmlFor="seriveQual">Tip percentage:</label>
        <input id="serviceQual" value={tipPercent} onChange={e => setTipPercent(e.target.value)} />
        <label htmlFor="peopleamt">Number of people:</label>
        <input id="peopleamt" value={people} onChange={e => setPeople(e.target.value)} />
        <button>Calculate Tip</button>
       </form>
       <p id="totalTip" style={{textAlign:'center'}}>Tip per person: ${tipPerson}</p>
    </div>
  )
}

export default App
