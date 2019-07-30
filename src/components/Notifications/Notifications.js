import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import { enUS } from 'date-fns/locale';

import { parse } from 'path';
import api from '@/services/api';

import { Container, Badge, NotificationList, Notification, Scroll } from './Notifications_Styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(() => !!notifications.find(notification => notification.read === false), [notifications]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('notifications');

      const data = response.data.map(notification => ({
        ...notification,
        timeDistance: formatDistance(parseISO(notification.createdAt), new Date(), {
          addSuffix: true,
          locale: enUS,
        }),
      }));

      setNotifications(data);
    }
    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`notifications/${id}`);

    setNotifications(
      notifications.map(notification => (notification._id === id ? { ...notification, read: true } : notification))
    );
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p> {notification.content} </p>
              <time> {notification.timeDistance} </time>
              {!notification.read && (
                <button type="button" onClick={() => handleMarkAsRead(notification._id)}>
                  Mark as read
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
