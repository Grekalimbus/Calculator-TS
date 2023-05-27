# Introducing Calculator app with 3 different themes
<br />

![Image1](https://i.postimg.cc/sxzYNHBC/image.png)
![Image1](https://i.postimg.cc/fTw77Fnx/image.png)
![Image1](https://i.postimg.cc/g27vW2wD/image.png)
<br />

### Used tehnolohy
    React
    Redux
    TypeScript
    Styled-components
<br />

### What is worth paying attention to
Component `CalculatorButton.tsx`

### ENG
There are many buttons, all of different sizes and all have different styles, but there is only one component for the buttons. Inside the component, the styles for the button are dynamically determined depending on its value
For each button, depending on its value, the corresponding function for this value is transferred.
I see a small minus in the fact that there are a lot of conditions with the return of a component, but on the other hand, in order to improve one thing, you need to sacrifice something else.

### RU
Кнопок много, все разных размеров и у всех разные стили, но компонент для кнопок всего один. Внутри компонента динамически определяются стили для кнопки в зависимости от её значения
Для каждой кнопки в зависимости от её значения передается соответствующая для этого значения функция.
Небольшой минус вижу в том, что много условий с возвратом компонента, но с другой стороны, чтобы улучшить что-то одно, нужно жертвовать чем-то другим.

### Exemple component

```js
interface Props {
  handleInputChangeForButton: (value: string) => void;
  resetValue: () => void;
  deleteValue: () => void;
  resultValue: () => void;
  operationForOperator: (value: string) => void;
  value: string;
}

const CalculatorButton: FC<Props> = ({
  value,
  handleInputChangeForButton,
  resetValue,
  deleteValue,
  operationForOperator,
  resultValue,
}) => {
  const theme = useTheme();
  const pickThemeColorButton = (value: string) => {
    if (['DEL'].includes(value)) {
      return {
        background: theme.buttonSide.background,
        borderBottom: `3px solid ${theme.buttonSide.border}`,
        color: theme.buttonSide.color,
        width: '20%',
      };
    }
    if (['RESET'].includes(value)) {
      return {
        background: theme.buttonSide.background,
        borderBottom: `3px solid ${theme.buttonSide.border}`,
        color: theme.buttonSide.color,
        width: '46%',
      };
    }
    if (['='].includes(value)) {
      return {
        background: theme.buttonResult.background,
        borderBottom: `3px solid ${theme.buttonResult.border}`,
        color: theme.buttonResult.color,
        width: '46%',
      };
    }
    return {
      background: theme.buttonNumber.background,
      borderBottom: `3px solid ${theme.buttonNumber.border}`,
      width: '20%',
    };
  };

  if (value === 'DEL') {
    return (
      <Button onClick={() => deleteValue()} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }
  if (value === 'RESET') {
    return (
      <Button onClick={() => resetValue()} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }
  if (value === '=') {
    return (
      <Button onClick={() => resultValue()} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }
  if (['+', '-', 'x', '/'].includes(value)) {
    return (
      <Button onClick={() => operationForOperator(value)} style={pickThemeColorButton(value)}>
        {value}
      </Button>
    );
  }

  return (
    <Button onClick={() => handleInputChangeForButton(value)} style={pickThemeColorButton(value)}>
      {value}
    </Button>
  );
};

export default CalculatorButton;
```





