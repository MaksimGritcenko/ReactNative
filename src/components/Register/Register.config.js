// Email, password check
export const EMAIL_REGEX = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

export const EMAIL_ERROR_TITLE = 'Email Not Valid';
export const EMAIL_ERROR_MESSAGE = 'Email not valid, please use valid email';

export const PASSWORD_ERROR_TITLE = 'Password Not Valid';
export const PASSWORD_ERROR_MESSAGE = 'Password should be at least 6 char and password with confirm password should match';

// Expo token path for push notifications
export const EXPO_TOKEN_PUSH_PATH = 'expoTokensForPushNotifications';