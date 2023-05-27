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
## [link on Component CalculatorButton.tsx](https://github.com/Grekalimbus/Calculator-TS/blob/main/src/components/calculator/CalculatorButton.tsx)

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
<br />

## RU
Настроено хранилище в Redux в связке с LocalStorage, с помощью которого реазилуется смена и сохранение темы для пользователя, даже при обновлении страницы.

Так же могу отметить, что прописаны типы для стилей или так называемой темы.

## ENG
Set up storage in Redux in conjunction with LocalStorage, with the help of which the theme is changed and saved for the user, even when the page is refreshed.

I can also note that types for styles or the so-called theme are prescribed.

## [link on Slice (themeSlice.ts)](https://github.com/Grekalimbus/Calculator-TS/blob/main/src/store/themeSlice.ts)

```js
export type Theme = {
    id:string
    background: string,
    fieldDisplay: string,
    backgroundUnderButtons: string,
    color: string,
    buttonNumber: {
        background: string,
        border: string,
        color: string,
    },
    buttonSide: {
        background: string,
        border: string,
        color: string,
    },
    buttonResult: {
        background: string,
        border: string,
        color: string,
    },
    buttonTheme: string
}

type ThemeSTate = {
    list: Theme
}
 
const initialState:ThemeSTate = {
    list: {
        id: '1',
        background: '#17062A',
        fieldDisplay: '#1E0836',
        backgroundUnderButtons :'#1E0836',
        color: '#FBE23E',
        buttonNumber: {
          background: '#331B4D',
          border: '#9409B7',
          color: '#FBE23E',
        },
        buttonSide: {
          background: '#56077C',
          border: '#9409B7',
          color: 'white',
        },
        buttonResult: {
          background: '#01AF90',
          border: '#04DDB6',
          color: 'white',
        },
        buttonTheme: '#01AF90',
      }
}
 
const themeFromLS = localStorage.getItem('theme')
const parseThemeFromLS = themeFromLS?  JSON.parse(themeFromLS): initialState

const themeSlice = createSlice({
    name: 'theme',
    initialState:  parseThemeFromLS,
    reducers: {
        changeTheme(state, action: PayloadAction<string>) {
           if(state.list.id === '1'){           
            const themeObject = {
                id: '2',
                background: '#DDDDDD',
                fieldDisplay: '#EEEEEE',
                backgroundUnderButtons :'#D3CDCD',
                color: '#37372D',
                buttonNumber: {
                  background: '#E5E4E0',
                  border: '#A79D95',
                  color: '#37372D',
                },
                buttonSide: {
                  background: '#398085',
                  border: '#1C5D66',
                  color: 'white',
                },
                buttonResult: {
                  background: '#9D4608',
                  border: '#823B0A',
                  color: 'white',
                },
                buttonTheme: '#9D4608',
              }          
            localStorage.setItem('theme', JSON.stringify({
              ...state,
              list: themeObject,
            }))            
            return {
              ...state,
              list: themeObject,
            };            
           }

           if(state.list.id === '2'){                    
            ///
           }           
        }        
    },
});
```

## RU
Также хочу показать пример объемных компонентов с большой логикой, где вся логика лаконично распределенна и изолирована. 
С первой стороны может показатся, что компонент простой, но всё не совсем так.
Это самый главный компонент, который и является корнем всей логики этого приложения. Это приложение односраничное, поэтому здесь очень легко ориентироватся. Архитектура дефолтная. 

### Небольшое вступление 
    Я начал разрабатывать это приложение, но сразу же появился более приоритетный проект, на который я потратил около месяца. После этого я продолжил разарабывать это приложение "Calculator". К этому моменту оно было готово меньше чем на 30%. Мне хватило одного дня, чтобы завершить это приложение до конца. 
    Сейчас это приложение легко расширять. Например добавлять другие темы для пользователей. В директории приложения легко ориентироватся. Также хочу отметить, что приложение адаптивное под десктоп и мобил

## [Example Main component (Calculator.tsx)](https://github.com/Grekalimbus/Calculator-TS/blob/main/src/components/calculator/Calculator.tsx)






