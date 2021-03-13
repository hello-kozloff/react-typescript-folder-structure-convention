import React from 'react';
import { ThemeContext } from 'styled-components';
import {
  Image,
  Inline,
  Input,
  InputDescription,
  InputTitle,
  Margin,
  Space,
  Text,
  Toggle
} from '../atoms';

import {
  UploadImage
} from '../molecules';

/**
 * The course-header molecule.
 * @constructor
 */
export default function CourseHeader(): React.ReactElement {
  const theme = React.useContext(ThemeContext);
  return (
    <>
      <Margin size={[40, 0, 35, 0]}>
        <Inline align="center" stretched>
          <Margin size={[0, 14, 0, 0]}>
            <Toggle />
          </Margin>
          <Text size={18} weight="medium">Опубликован</Text>
          <Space />
          <Text color={theme.dark.color.white_40}>12 декабря 2020 - 12 января 2021</Text>
        </Inline>
      </Margin>
      <Margin size={[35, 0, 40, 0]}>
        <Inline align="flex-start" stretched>
          <Margin size={[0, 30, 0, 0]}>
            <Inline direction="column">
              <UploadImage radius="5px">
                <Image
                  width="300px"
                  height="170px"
                  alt="Изображение курса"
                />
              </UploadImage>
              <Margin size={[16, 0, 0, 0]}>
                <Inline align="center">
                  <Margin size={[0, 10, 0, 0]}>
                    <Text
                      color={theme.dark.color.white_40}
                      size={14}
                      weight="medium">100</Text>
                  </Margin>
                  <Margin size={[0, 10, 0, 0]}>
                    <Text
                      color={theme.dark.color.white_40}
                      size={14}
                      weight="medium">100</Text>
                  </Margin>
                  <Margin size={[0, 10, 0, 0]}>
                    <Text
                      color={theme.dark.color.white_40}
                      size={14}
                      weight="medium">100</Text>
                  </Margin>
                </Inline>
              </Margin>
              <Margin size={[16, 0, 0, 0]}>
                <Input type="number" placeholder="Введите стоимость" stretched />
              </Margin>
            </Inline>
          </Margin>
          <Inline direction="column" stretched>
            <InputTitle />
            <Margin size={[16, 0, 0, 0]}>
              <InputDescription />
            </Margin>
          </Inline>
        </Inline>
      </Margin>
    </>
  );
}