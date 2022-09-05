import TimePicker from './timepicker';
import React,{useState} from 'react'
function App() {
  const [value,setValue] = useState("")
  return (
    <TimePicker value={value} setValue={setValue}/>
  );
}

export default App;
