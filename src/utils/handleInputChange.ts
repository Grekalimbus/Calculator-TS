const utilsHandleInputChange = (e: React.ChangeEvent<HTMLInputElement>,setInputValue: React.Dispatch<React.SetStateAction<string>>)=>{
    const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (allowedCharacters.includes(e.target.value.slice(-1))) {
      if (e.target.value[0] === '0') {
        setInputValue(e.target.value.slice(1));
      } else {
        setInputValue(e.target.value);
      }
    }
}

export default utilsHandleInputChange