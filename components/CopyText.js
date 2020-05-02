import React, { Component } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import COLORS from '../constants/colors';

const Wrapper = styled.span`
  position: relative;
`;

const StyledCopyText = styled.span`
  padding: 2px 4px;
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.copyEmail.text};
  border-radius: 3px;
  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.copyEmail.bgHover};
  }
`;

const Message = styled.span`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  margin-left: 4px;
  font-size: 13px;
  font-weight: 700;
  color: ${COLORS.PRIMARY};
  opacity: 0;

  ${props =>
    props.copied &&
    `
    top: -60px;
    opacity: 1;
    transition: top 0.75s,
                opacity 0.15s;
  `};
`;

class CopyText extends Component {
  state = {
    value: '',
    copied: false
  };

  onCopy = () => {
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  };

  render() {
    return (
      <Wrapper>
        <CopyToClipboard
          text={this.props.value}
          onCopy={this.onCopy}
          title="Copier dans le presse-papier"
        >
          <StyledCopyText>{this.props.value}</StyledCopyText>
        </CopyToClipboard>

        <Message copied={this.state.copied}>{this.props.message}</Message>
      </Wrapper>
    );
  }
}

export default CopyText;
