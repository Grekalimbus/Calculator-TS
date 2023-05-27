let dotCount = 0;
const utilsInputChangeForButton = (inputValue: string,value: string,setInputValue: React.Dispatch<React.SetStateAction<string>>)=>{
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
          if (inputValue[i] === '.') dotCount += 1;
        }

        if (value !== '.') {
          setInputValue((prev) => (prev += value));
        }
        if (value === '.' && dotCount < 1) {
          setInputValue((prev) => (prev += value));
        }
      }
    }
}

export default utilsInputChangeForButton