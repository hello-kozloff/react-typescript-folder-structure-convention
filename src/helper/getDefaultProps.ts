/**
 * The function return default props.
 * @param props
 * @param defaultProps
 */
export default function getDefaultProps<T extends object>(props: T, defaultProps?: T): T {
  return {
    ...defaultProps,
    ...props
  };
}