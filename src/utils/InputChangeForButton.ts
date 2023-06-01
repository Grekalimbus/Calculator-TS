const utilsInputChangeForButton = (inputValue: string,value: string,setInputValue: React.Dispatch<React.SetStateAction<string>>, dot:boolean, setDot: React.Dispatch<React.SetStateAction<boolean>>)=>{
    const allowedCharacters = ['DEL', 'RESET', '=', '+', '-', 'x', '/'];

    if (!allowedCharacters.includes(value)) {
      if (inputValue === '0') {
        if (inputValue.length === 1 && value !== '.') {
          setInputValue((prev) => (prev = value));
        }
        if (inputValue.length === 1 && value === '.') {
          setInputValue((prev) => (prev += value));
        }
      } else {
        for (let i = 0; i < inputValue.length; i++) {
          if (inputValue[i] === '.') setDot(true)
        }

        if (value !== '.') {
          setInputValue((prev) => (prev += value));
        }
        if (value === '.' && !dot) {
          setInputValue((prev) => (prev += value));
        }
      }
    }
}

export default utilsInputChangeForButton