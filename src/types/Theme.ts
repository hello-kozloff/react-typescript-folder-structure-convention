/**
 * The theme type.
 */
export default interface Theme {
  [theme: string]: {
    variables: {
      [name: string]: string | number;
    };
  };
}
