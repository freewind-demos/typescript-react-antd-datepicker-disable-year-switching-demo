import { css } from '@emotion/css';
import { DatePicker } from 'antd';
import React from 'react';

const noYearSwitchClass = css`
  button.ant-picker-header-super-prev-btn,
  button.ant-picker-header-super-next-btn {
    display: none !important;
  }
`;

export function Hello() {
  return (
    <DatePicker popupClassName={noYearSwitchClass} />
  );
};
