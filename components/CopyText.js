import React, { Component } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import COLORS from '../constants/colors';

const StyledCopyText = styled.span`
  text-decoration: none;
  font-weight: 700;
  color: ${COLORS.ANTHRACITE};
  box-shadow: inset 0 -1px 0 ${rgba(COLORS.ANTHRACITE, 0.8)};
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    color: ${COLORS.YELLOW};
    box-shadow: inset 0 -1px 0 ${rgba(COLORS.YELLOW, 0.8)};
  }
`;

const Message = styled.span`
  display: inline-flex;
  padding: 0 6px;
  margin-left: 8px;
  font-size: 13px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.YELLOW};
  border-radius: 2px;
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
      <span>
        <CopyToClipboard text={this.props.value} onCopy={this.onCopy} title="Copier dans le presse-papier">
          <StyledCopyText>{this.props.value}</StyledCopyText>
        </CopyToClipboard>

        {this.state.copied ? <Message>{this.props.message}</Message> : null}
      </span>
    );
  }
}

export default CopyText;
