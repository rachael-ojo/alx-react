// src/schema/notifications.test.js

const { getNotifications, markAsRead } = require('./notifications');

describe('Notifications Module', () => {
    test('should return all notifications', () => {
        const notifications = getNotifications();
        expect(notifications.length).toBeGreaterThan(0); // Ensure there are notifications
    });

    test('should mark a notification as read', () => {
        markAsRead(1);
        const notifications = getNotifications();
        expect(notifications[0].read).toBe(true); // Ensure the first notification is marked as read
    });
});