// task_0/dashboard/src/schema/notifications.js

// Example notification schema
const notifications = [
    {
        id: 1,
        message: "Welcome to our application!",
        type: "info",
        read: false,
    },
    {
        id: 2,
        message: "Your profile has been updated.",
        type: "success",
        read: false,
    },
];

// Function to get all notifications
const getNotifications = () => {
    return notifications;
};

// Function to mark a notification as read
const markAsRead = (id) => {
    const notification = notifications.find(n => n.id === id);
    if (notification) {
        notification.read = true;
    }
};

// Exporting the functions
module.exports = {
    getNotifications,
    markAsRead,
};