import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Inline, Margin, Text } from '../atoms';

/**
 * The input-container props type.
 */
export interface IInputContainerProps {

  /**
   * The before text.
   */
  before?: string;

  /**
   * The after text.
   */
  after?: string;

  /**
   * The required status in before.
   */
  required?: boolean;

  /**
   * The input content.
   */
  children: React.ReactNode;

}

/**
 * The input-container molecule.
 * @param props
 * @constructor
 */
function InputContainer(props: IInputContainerProps): React.ReactElement<IInputContainerProps> {
  const theme = React.useContext(ThemeContext);

  const Tag = styled.label``;
  const Input = styled.div``;

  return (
    <Tag>
      {props.before && (
        <Margin size={[0, 0, 10, 0]}>
          <Inline align="center">
            <Text
              color={theme.dark.color.white_80}
              size={14}
              weight="medium"
              height={17}>{props.before}</Text>
            {props.required && (
              <Margin size={[0, 0, 0, 4]}>
                <Text
                  color={theme.dark.color.primary}
                  height={12}>*</Text>
              </Margin>
            )}
          </Inline>
        </Margin>
      )}
      <Input>
        {props.children}
      </Input>
      {props.after && (
        <Margin size={[10, 0, 0, 0]}>
          <Text
            color={theme.dark.color.white_40}
            size={14}
            weight="medium"
            height={18}>{props.after}</Text>
        </Margin>
      )}
    </Tag>
  );
}

export default InputContainer;