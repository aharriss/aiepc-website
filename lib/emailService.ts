import { supabase } from './supabase';

export type EmailType = 
  | 'payment_confirmation'
  | 'payment_reminder'
  | 'refund_confirmation'
  | 'renewal_reminder';

interface EmailData {
  firstName: string;
  lastName: string;
  amount?: string;
  paymentDate?: string;
  billingCycle?: string;
  nextPaymentDate?: string;
  daysUntilDue?: number;
  dueDate?: string;
  originalPaymentDate?: string;
  refundDate?: string;
  reason?: string;
  membershipTier?: string;
  daysUntilExpiry?: number;
  expirationDate?: string;
  renewalAmount?: string;
}

export async function sendEmailNotification(
  type: EmailType,
  email: string,
  data: EmailData
): Promise<{ success: boolean; error?: string }> {
  try {
    const { data: result, error } = await supabase.functions.invoke('send-email-notification', {
      body: { type, email, data },
    });

    if (error) {
      console.error('Error sending email:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: String(error) };
  }
}
