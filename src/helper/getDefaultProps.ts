/**
 * The function return default props.
 * @param props
 * @param defaultProps
 */
export default function getDefaultProps<T extends object>(props: T, defaultProps?: Omit<T, 'children'>): T {
  return {
    ...defaultProps,
    ...props
  };
}