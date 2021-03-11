/**
 * The theme type.
 */
export default interface Theme {
  [theme: string]: {
    color: {
      [name: string]: string | number;
    };
  };
}
