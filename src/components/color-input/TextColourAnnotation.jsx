import styled from "styled-components";

// Check "sanity-color-simpler-color-input" package for original component

const ColorSpan = styled.span`
  & > span {
    background-color: inherit;
    border-bottom: unset;
    color: ${(props) => props.color};
  }
`;

export const TextColorAnnotation = (props) => {
  const color = props.value?.value || "";
  return <ColorSpan color={color}>{props.renderDefault(props)}</ColorSpan>;
};
