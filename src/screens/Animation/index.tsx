import React, { useState } from 'react';
import posed from 'react-pose';
import styled from '@emotion/styled';
import { PoseElementProps } from 'react-pose/lib/components/PoseElement/types';

const Box = posed.div({
  visible: { opacity: 1, left: 300 },
  hidden: { opacity: 0, left: 50 }
});

const StyledBox = styled(Box)`
  height: 100px;
  width: 100px;
  position: absolute;
  left: 50px;
  background-color: rebeccapurple;
`;

function Animation(): JSX.Element {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <StyledBox pose={isVisible ? 'visible' : 'hidden'} />
      <button type="button" onClick={(): void => setIsVisible(!isVisible)}>
        click
      </button>
    </div>
  );
}

export default Animation;
