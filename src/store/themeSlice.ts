import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type Theme = {
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
const parseThemeFromLS = themeFromLS? {list: JSON.parse(themeFromLS)}: initialState

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
            localStorage.setItem('theme', JSON.stringify(themeObject))            
            return {
              ...state,
              list: themeObject,
            };            
           }

           if(state.list.id === '2'){                    
            const themeObject = {
                id: '3',
                background: '#3B4664',
                fieldDisplay: '#181f32',
                backgroundUnderButtons :'#252C45',
                color: '#eae3db',
                buttonNumber: {
                  background: '#eae3db',
                  border: '#b2a397',
                  color: '#4a4f5b',
                },
                buttonSide: {
                  background: '#a2b3e1',
                  border: '#6F83B8',
                  color: 'white',
                },
                buttonResult: {
                  background: '#f96c5b',
                  border: '#92271d',
                  color: 'white',
                },
                buttonTheme: '#f96c5b',
              }          
            localStorage.setItem('theme', JSON.stringify(themeObject))            
            return {
              ...state,
              list: themeObject,
            };
           }

           if(state.list.id === '3'){               
            const themeObject = {
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
            localStorage.setItem('theme', JSON.stringify(themeObject))            
            return {
              ...state,
              list: themeObject,
            };
           }           
        }        
    },
});

export const {changeTheme} = themeSlice.actions;

export default themeSlice.reducer;