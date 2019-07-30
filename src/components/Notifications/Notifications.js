import React from 'react';
import { MdNotifications } from 'react-icons/md';

import { Container, Badge, NotificationList, Notification, Scroll } from './Notifications_Styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>You have a new schedule for tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new schedule for tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new schedule for tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification unread>
            <p>You have a new schedule for tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new schedule for tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
          <Notification>
            <p>You have a new schedule for tomorrow</p>
            <time>2 days ago</time>
            <button type="button">Mark as read</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
