import React from 'react';
import { SlideDown } from 'react-slidedown';
import {Inline, Toggle, Margin, Text, IToggleProps, Padding} from '../atoms';

/**
 * The toggle-content props type.
 */
export type IToggleContentProps = Pick<IToggleProps, 'defaultChecked'> & {

  /**
   * The label after toggle.
   */
  label?: string;

  /**
   * The toggle content.
   */
  children?: React.ReactNode | React.ReactNodeArray;

}

/**
 * The toggle-content molecule.
 * @param props
 * @constructor
 */
export default function ToggleContent(props: IToggleContentProps): React.ReactElement<IToggleContentProps> {
  const [checked, setChecked] = React.useState<boolean>(props.defaultChecked || false);
  const { label, children: content } = props;

  function handleToggleClick(): void {
    setChecked(!checked);
  }

  return (
    <>
      <Margin size={[0, 0, 30, 0]}>
        <Inline align="center">
          <Toggle
            mode="secondary"
            checked={checked}
            defaultChecked={props.defaultChecked}
            onClick={handleToggleClick}
          />
          {label && (
            <Margin size={[0, 0, 0, 14]}>
              <Text weight="medium">
                {label}
              </Text>
            </Margin>
          )}
        </Inline>
      </Margin>
      <SlideDown>
        {checked && (
          <Padding size={[0, 0, 30, 0]}>
            {content}
          </Padding>
        )}
      </SlideDown>
    </>
  );
}