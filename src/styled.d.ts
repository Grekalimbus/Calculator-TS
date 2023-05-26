import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    id: string
    background: string,
    fieldDisplay: string,
    backgroundUnderButtons: string
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
    },
    buttonTheme: string,
    }   
}