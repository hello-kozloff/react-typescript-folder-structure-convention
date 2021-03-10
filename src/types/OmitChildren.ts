/**
 * The helper remove children property in T.
 */
type OmitChildren<T> = Omit<T, 'children'>;
export default OmitChildren;