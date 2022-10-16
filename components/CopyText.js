import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PropTypes from 'prop-types';

const Wrapper = styled.span`
  position: relative;
`;

const StyledCopyText = styled.span`
  padding: 2px 4px 1px;
  text-decoration: none;
  font-weight: 700;
  color: ${({ theme }) => theme.copyEmail.text};
  border-radius: 3px;
  cursor: pointer;
  transition: 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.copyEmail.textHover};
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
  color: ${({ theme }) => theme.colors.primary};
  opacity: 0;

  ${props =>
    props.copied &&
    `
    top: -60px;
    opacity: 1;
    transition: top 0.35s,
                opacity 0.15s;
  `};
`;

const CopyText = ({ value, message }) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

    return (
      <Wrapper>
        <CopyToClipboard
          text={value}
          onCopy={onCopy}
          title="Copier dans le presse-papier"
        >
          <StyledCopyText>{value}</StyledCopyText>
        </CopyToClipboard>

        <Message copied={copied}>{message}</Message>
      </Wrapper>
    );
}

CopyText.propTypes = {
  value: PropTypes.string,
  message: PropTypes.string
};

export default CopyText;
