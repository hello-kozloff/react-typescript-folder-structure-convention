import React from 'react';
import {
  Inline, IInlineProps,
  Input, IInputProps,
  Margin, IMarginProps,
  Button, IButtonProps
} from '../atoms';

/**
 * The input-button props type.
 */
export interface IInputButton {
  inlineProps?: Omit<IInlineProps, 'children'>;
  inputProps?: IInputProps;
  marginProps?: Omit<IMarginProps, 'children'>;
  buttonProps?: IButtonProps;
}

/**
 * The input-button molecule.
 * @param props
 * @constructor
 */
function InputButton(props: IInputButton): React.ReactElement<IInputButton> {
  return (
    <Inline {...props.inlineProps}>
      <Input {...props.inputProps} />
      <Margin {...props.marginProps}>
        <Button {...props.buttonProps} />
      </Margin>
    </Inline>
  );
}

export default InputButton;