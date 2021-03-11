/**
 * The theme type.
 */
export default interface Theme {
  [theme: string]: {
    [group: string]: {
      [name: string]: string | number;
    };
  };
}
