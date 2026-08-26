export type SurveyQuestion = {
  id: string;
  question: string;
  type: 'multiple' | 'checkbox' | 'boolean' | 'likert' | 'numeric' | 'text';
  options?: string[];
};

export type CommunityLocation = {
  name: string;
  category: string;
  latitude: number | null;
  longitude: number | null;
  description: string;
  services: string[];
};

export type ProjectStats = {
  peopleReached: number | null;
  peopleScreened: number | null;
  peopleEducated: number | null;
  householdsSurveyed: number | null;
  communityMembersEngaged: number | null;
};
