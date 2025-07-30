'use client';
import { useState, useEffect } from 'react';
import { useAuthContext } from '@/lib/context/AuthContext';
import { checkUserNRCStatus, type NRCApplication, type NRCVolunteer } from '@/lib/services/mockNRCService';

export interface NRCStatus {
  loading: boolean;
  hasApplication: boolean;
  application?: NRCApplication;
  isApproved: boolean;
  isPending: boolean;
  isRejected: boolean;
  volunteer?: NRCVolunteer;
  canAccessDashboard: boolean;
  refresh: () => Promise<void>;
}

export const useNRCStatus = (): NRCStatus => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [hasApplication, setHasApplication] = useState(false);
  const [application, setApplication] = useState<NRCApplication | undefined>();
  const [isApproved, setIsApproved] = useState(false);
  const [volunteer, setVolunteer] = useState<NRCVolunteer | undefined>();

  const checkStatus = async () => {
    if (!user?.email) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const response = await checkUserNRCStatus(user.email);
      
      if (response.success && response.data) {
        setHasApplication(response.data.hasApplication);
        setApplication(response.data.application);
        setIsApproved(response.data.isApproved);
        setVolunteer(response.data.volunteer);
      }
    } catch (error) {
      console.error('Error checking NRC status:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkStatus();
  }, [user?.email]);

  const isPending = hasApplication && application?.status === 'pending';
  const isRejected = hasApplication && application?.status === 'rejected';
  const canAccessDashboard = isApproved && !!volunteer;

  return {
    loading,
    hasApplication,
    application,
    isApproved,
    isPending,
    isRejected,
    volunteer,
    canAccessDashboard,
    refresh: checkStatus
  };
};
