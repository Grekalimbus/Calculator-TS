const utilsResultValue = (inputValue: string, lastValue: string,setLastValue: React.Dispatch<React.SetStateAction<string>>, setInputValue: React.Dispatch<React.SetStateAction<string>>)=>{
    if (lastValue.split(' ')[1] === '+') {
        const newResult = Number(lastValue.split(' ')[0]) + Number(inputValue);
        setInputValue(String(newResult));
        setLastValue('');
      }
      if (lastValue.split(' ')[1] === '-') {
        const newResult = Number(lastValue.split(' ')[0]) - Number(inputValue);
        setInputValue(String(newResult));
        setLastValue('');
      }
      if (lastValue.split(' ')[1] === 'x') {
        const newResult = Number(lastValue.split(' ')[0]) * Number(inputValue);
        setInputValue(String(newResult));
        setLastValue('');
      }
      if (lastValue.split(' ')[1] === '/') {
        const newResult = Number(lastValue.split(' ')[0]) / Number(inputValue);
        setInputValue(String(newResult));
        setLastValue('');
      }
}

export default utilsResultValue