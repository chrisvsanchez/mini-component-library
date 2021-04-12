import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
const STYLES = {
  small: {
    fontSize: 14,
    IconSize: 16,
    borderThickness: 2,
    height: 36,
  },
  large: {
    fontSize: 18,
    IconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  const styles = STYLES[size];
  return (
    <Wrapper style={{}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ "--size": styles.IconSize + "px" }}>
        <Icon id={icon} size={styles.IconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        placeholder={placeholder}
        style={{
          "--width": styles + "px",
          "--height": styles.height + "px",
          "--borderThickness": styles.borderThickness + "px",
        }}
      />
    </Wrapper>
  );
};

export default IconInput;
const Wrapper = styled.div`
  display: block;
  position: relative;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;
const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  font-size: ${14 / 16}rem;
  border: none;
  padding-left: 24px;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  &::placeholder {
    color: inherit;
  }
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  color: inherit;
  height: var(--size);
`;
