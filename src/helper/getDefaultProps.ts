/**
 * The function return default props.
 * @param provided
 * @param props
 */
export default function getDefaultProps<T extends object>(provided: T, props?: T): T {
  return {
    ...provided,
    ...props
  };
}