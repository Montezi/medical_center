import styled, { css } from 'styled-components/native';
import {
  Text,
  Layout as LayoutRoot,
  Button as ButtonRoot,
} from '@ui-kitten/components';

export const Layout = styled(LayoutRoot)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${(props) => props.paddingTop}px;
`;

export const Title = styled(Text)`
  text-transform: uppercase;
  margin-top: 30px;
`;

export const Typography = styled(Text)`
  font-size: ${(props) => props.fSize || '17px'};
  font-family: AcuminPro-Bold;
  color: ${(props) => props.color || '#addacd'};

  ${(props) =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

    ${(props) =>
    props.margin &&
    css`
      margin: 10px 0;
    `}
`;

export const BoxRow = styled(LayoutRoot)`
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 15px;
`;

export const Button = styled(ButtonRoot)`
  width: 80%;
  margin-top: 20px;
  border-radius: 8px;
`;

export const Logo = styled.Image`
  width: 205px;
  height: 180px;
`;
