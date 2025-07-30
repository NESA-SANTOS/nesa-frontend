// Mock Notification Service for frontend-only demonstration
// This simulates email notifications and in-app notifications

export interface Notification {
  id: string;
  userId: string;
  type: 'application_submitted' | 'application_approved' | 'application_rejected' | 'nominee_submitted' | 'system_update';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

// Storage key
const NOTIFICATIONS_STORAGE_KEY = 'nrc_notifications';

// Utility functions
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

const getNotificationsFromStorage = (): Notification[] => {
  try {
    const data = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading notifications from localStorage:', error);
    return [];
  }
};

const saveNotificationsToStorage = (notifications: Notification[]): void => {
  try {
    localStorage.setItem(NOTIFICATIONS_STORAGE_KEY, JSON.stringify(notifications));
  } catch (error) {
    console.error('Error saving notifications to localStorage:', error);
  }
};

// Create notification
export const createNotification = (
  userId: string,
  type: Notification['type'],
  title: string,
  message: string,
  actionUrl?: string
): void => {
  const notifications = getNotificationsFromStorage();
  
  const newNotification: Notification = {
    id: generateId(),
    userId,
    type,
    title,
    message,
    timestamp: new Date().toISOString(),
    read: false,
    actionUrl
  };
  
  notifications.unshift(newNotification); // Add to beginning
  saveNotificationsToStorage(notifications);
  
  // In a real app, this would trigger push notifications, emails, etc.
  console.log('📧 Mock Email Sent:', {
    to: userId,
    subject: title,
    body: message
  });
};

// Get notifications for a user
export const getUserNotifications = (userId: string): Notification[] => {
  const notifications = getNotificationsFromStorage();
  return notifications.filter(notification => notification.userId === userId);
};

// Mark notification as read
export const markNotificationAsRead = (notificationId: string): void => {
  const notifications = getNotificationsFromStorage();
  const notificationIndex = notifications.findIndex(n => n.id === notificationId);
  
  if (notificationIndex !== -1) {
    notifications[notificationIndex].read = true;
    saveNotificationsToStorage(notifications);
  }
};

// Mark all notifications as read for a user
export const markAllNotificationsAsRead = (userId: string): void => {
  const notifications = getNotificationsFromStorage();
  const updatedNotifications = notifications.map(notification => 
    notification.userId === userId 
      ? { ...notification, read: true }
      : notification
  );
  saveNotificationsToStorage(updatedNotifications);
};

// Delete notification
export const deleteNotification = (notificationId: string): void => {
  const notifications = getNotificationsFromStorage();
  const filteredNotifications = notifications.filter(n => n.id !== notificationId);
  saveNotificationsToStorage(filteredNotifications);
};

// Notification templates
export const NotificationTemplates = {
  applicationSubmitted: (applicantName: string) => ({
    title: 'NRC Application Submitted',
    message: `Thank you for applying to the NESA Nominee Research Corps, ${applicantName}! Your application is now under review. We'll notify you once a decision has been made.`
  }),
  
  applicationApproved: (applicantName: string) => ({
    title: 'NRC Application Approved! 🎉',
    message: `Congratulations ${applicantName}! Your NRC volunteer application has been approved. You can now access your dashboard and start uploading nominee profiles.`
  }),
  
  applicationRejected: (applicantName: string) => ({
    title: 'NRC Application Update',
    message: `Thank you for your interest in the NRC program, ${applicantName}. Unfortunately, your application was not approved at this time. We appreciate your enthusiasm for education in Africa.`
  }),
  
  nomineeSubmitted: (nomineeName: string) => ({
    title: 'Nominee Profile Submitted',
    message: `Your nominee profile for "${nomineeName}" has been successfully submitted and is now under review.`
  }),
  
  systemUpdate: (updateMessage: string) => ({
    title: 'NRC System Update',
    message: updateMessage
  })
};

// Helper functions for common notification scenarios
export const sendApplicationSubmittedNotification = (userEmail: string, applicantName: string): void => {
  const template = NotificationTemplates.applicationSubmitted(applicantName);
  createNotification(
    userEmail,
    'application_submitted',
    template.title,
    template.message,
    '/get-involved/nrc-volunteer'
  );
};

export const sendApplicationApprovedNotification = (userEmail: string, applicantName: string): void => {
  const template = NotificationTemplates.applicationApproved(applicantName);
  createNotification(
    userEmail,
    'application_approved',
    template.title,
    template.message,
    '/get-involved/nrc-volunteer/dashboard'
  );
};

export const sendApplicationRejectedNotification = (userEmail: string, applicantName: string): void => {
  const template = NotificationTemplates.applicationRejected(applicantName);
  createNotification(
    userEmail,
    'application_rejected',
    template.title,
    template.message,
    '/get-involved/nrc-volunteer'
  );
};

export const sendNomineeSubmittedNotification = (userEmail: string, nomineeName: string): void => {
  const template = NotificationTemplates.nomineeSubmitted(nomineeName);
  createNotification(
    userEmail,
    'nominee_submitted',
    template.title,
    template.message,
    '/get-involved/nrc-volunteer/dashboard'
  );
};

export const sendSystemUpdateNotification = (userEmail: string, updateMessage: string): void => {
  const template = NotificationTemplates.systemUpdate(updateMessage);
  createNotification(
    userEmail,
    'system_update',
    template.title,
    template.message
  );
};

// Bulk notification functions for admin use
export const sendBulkNotificationToAllVolunteers = (title: string, message: string): void => {
  // In a real implementation, this would query all volunteers from the database
  const volunteers = JSON.parse(localStorage.getItem('nrc_volunteers') || '[]');
  
  volunteers.forEach((volunteer: any) => {
    createNotification(
      volunteer.email,
      'system_update',
      title,
      message
    );
  });
  
  console.log(`📧 Bulk notification sent to ${volunteers.length} volunteers`);
};

// Initialize with sample notifications for demo
export const initializeSampleNotifications = (): void => {
  const notifications = getNotificationsFromStorage();
  
  if (notifications.length === 0) {
    // Add some sample notifications for demo purposes
    const sampleNotifications: Notification[] = [
      {
        id: 'notif-1',
        userId: 'john.doe@email.com',
        type: 'application_submitted',
        title: 'NRC Application Submitted',
        message: 'Thank you for applying to the NESA Nominee Research Corps! Your application is now under review.',
        timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
        read: false,
        actionUrl: '/get-involved/nrc-volunteer'
      },
      {
        id: 'notif-2',
        userId: 'marie.dubois@email.com',
        type: 'application_submitted',
        title: 'NRC Application Submitted',
        message: 'Thank you for applying to the NESA Nominee Research Corps! Your application is now under review.',
        timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        read: false,
        actionUrl: '/get-involved/nrc-volunteer'
      }
    ];
    
    saveNotificationsToStorage(sampleNotifications);
  }
};

// Initialize sample data on module load
if (typeof window !== 'undefined') {
  initializeSampleNotifications();
}
