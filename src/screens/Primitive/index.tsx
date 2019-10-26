import React from 'react';
import styled from '@emotion/primitives';

const Description = styled.Text({
  color: 'red'
});

const Box = styled.View();

function Primitive(): JSX.Element {
  return (
    <Box>
      <Description>Primitive Text</Description>
    </Box>
  );
}

export default Primitive;
