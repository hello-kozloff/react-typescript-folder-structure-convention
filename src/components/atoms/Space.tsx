import React from 'react';
import styled from 'styled-components';

/**
 * The space atom.
 * @constructor
 */
export default function Space(): React.ReactElement{
  const Container = styled.div`
    margin-left: auto;
    margin-right: auto;
  `;

  return (
    <Container />
  );
}