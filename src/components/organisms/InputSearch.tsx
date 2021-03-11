import React from 'react';
import { InputButton, IInputButton } from '../molecules';
import { getDefaultProps } from '../../helper';

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
    <InputButton
      {...getDefaultProps<IInputSearchProps>(props, {
        inlineProps: {
          stretched: true
        },
        inputProps: {
          placeholder: 'Введите название'
        },
        marginProps: {
          size: [0, 0, 0, 10]
        },
        buttonProps: {
          children: (
            <span>Поиск</span>
          )
        }
      })}
    />
  );
}

export default InputSearch;