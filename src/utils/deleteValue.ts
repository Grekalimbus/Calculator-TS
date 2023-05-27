const utilsDeleteValue = (inputValue: string,setInputValue: React.Dispatch<React.SetStateAction<string>>)=>{
    if (inputValue.length === 1) {
        setInputValue('0');
      }
      if (inputValue.length > 1) {
        setInputValue((prev) => prev.slice(0, -1));
      }
}

export default utilsDeleteValue