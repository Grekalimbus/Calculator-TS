const utilsOperationForOperator = (value: string,lastValue: string,inputValue: string, setLastValue: React.Dispatch<React.SetStateAction<string>>, setInputValue: React.Dispatch<React.SetStateAction<string>>) => {
    if (!lastValue) {
      if (value === '+') {
        setLastValue(inputValue + ` ${value}`);
        setInputValue('0');
      }
      if (value === '-') {
        setLastValue(inputValue + ` ${value}`);
        setInputValue('0');
      }
      if (value === 'x') {
        setLastValue(inputValue + ` ${value}`);
        setInputValue('0');
      }
      if (value === '/') {
        setLastValue(inputValue + ` ${value}`);
        setInputValue('0');
      }
    }
    if (lastValue) {
      if (lastValue.split(' ')[1] === '+') {
        const newResult = Number(lastValue.split(' ')[0]) + Number(inputValue);
        setLastValue(String(newResult) + ` ${value}`);
        setInputValue('0');
      }
      if (lastValue.split(' ')[1] === '-') {
        const newResult = Number(lastValue.split(' ')[0]) - Number(inputValue);
        setLastValue(String(newResult) + ` ${value}`);
        setInputValue('0');
      }
      if (lastValue.split(' ')[1] === 'x') {
        const newResult = Number(lastValue.split(' ')[0]) * Number(inputValue);
        setLastValue(String(newResult) + ` ${value}`);
        setInputValue('0');
      }
      if (lastValue.split(' ')[1] === '/') {
        const newResult = Number(lastValue.split(' ')[0]) / Number(inputValue);
        setLastValue(String(newResult) + ` ${value}`);
        setInputValue('0');
      }
    }
  };

export default utilsOperationForOperator