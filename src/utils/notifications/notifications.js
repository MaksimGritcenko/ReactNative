import * as Notifications from "expo-notifications";

export const notifications = (data) => {
    const {
        notificationContent,
        notificationTitle,
        notificationTimeHours,
        notificationTimeMinutes
    } = data;

    console.log(data)

    Notifications.scheduleNotificationAsync({
        content: {
            title: notificationTitle,
            body: notificationContent,
        },
        trigger: {
            hour: notificationTimeHours,
            minute: notificationTimeMinutes,
            repeats: true
        },
    });
};

export const offlineNotifications = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => {
            return {
                shouldShowAlert: true,
            }
        },
    })
}