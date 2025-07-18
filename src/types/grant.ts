interface Grant {
  id: number;
  daf_name: string;
  organization_id: number;
  amount_in_cents: number;
  modality: 'check' | 'ach' | 'wire';
  designation: 'wherever_needed_most' | 'specific_need' | 'research_and_development' | 'infrastructure' | 'education_and_training' | 'other';
  notes: string | null;
  is_reviewed: boolean;
  status: 'pending' | 'sent' | 'delivered' | 'deposited' | 'failed';
  sent_at: string | null;
  delivered_at: string | null;
  deposited_at: string | null;
  failed_at: string | null;
  created_at: string;
  updated_at: string;
}

interface Organization {
  id: number;
  name: string;
  ein: string;
  address: {
    street1: string;
    street2: string | null;
    city: string;
    state: string;
    zip: string;
  };
}

interface Activity {
  id: number;
  grant_id: number;
  activity_type: 'grant_created' | 'manual_review' | 'status_change';
  before_status?: string; 
  after_status?: string;
  created_at: string;
}

interface TimelineEvent {
  status: string;
  date: string;
  description: string;
}

export type { Grant, Organization, Activity, TimelineEvent };