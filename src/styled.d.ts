import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    purple: {
      color: string;
      background: string;
      field: string;
      buttonNumber: {
        main: string;
        border: string;
      };
      buttonSide: {
        main: string;
        border: string;
      };
      buttonResult: {
        main: string;
        border: string;
      };
      buttonTheme: string;
    };
  }
}