import React from 'react';
import { InputButton, IInputButton } from '../molecules';

/**
 * The input-search props type.
 */
export interface IInputSearchProps extends IInputButton {

  // Here we can add, for example, a size parameter that will set the size of all child components

}

/**
 * The input-search organism.
 * @param props
 * @constructor
 */
function InputSearch(props: IInputSearchProps): React.ReactElement<IInputSearchProps> {
  return (
    <InputButton {...props} />
  );
}

InputSearch.defaultProps = {
  inputProps: {
    placeholder: 'Введите название'
  },
  marginProps: {
    size: [0, 0, 0, 8]
  },
  buttonProps: {
    children: (
      <span>Поиск</span>
    )
  }
};

export default InputSearch;