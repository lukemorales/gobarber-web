import styled, { css } from 'styled-components';
import PerfectScrollBar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  position: relative;

  ${({ hasUnread }) =>
    hasUnread &&
    css`
      &::after {
        position: absolute;
        right: 0;
        top: 0;
        width: 8px;
        height: 8px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
      }
    `}
`;

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  right: -28px;
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    right: 20px;
    top: -18px;
    width: 0;
    height: 0;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-bottom: 18px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollBar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  color: #fff;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
    display: block;
    margin: 2px 0 0;
  }

  button {
    font-size: 12px;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
  }

  ${({ unread }) =>
    unread &&
    css`
      &::after {
        display: inline-block;
        width: 7px;
        height: 7px;
        background: #ff892e;
        content: '';
        border-radius: 50%;
        margin-left: 8px;
      }
    `}
`;
