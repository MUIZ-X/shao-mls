export const projectStats = {
  peopleReached: null,
  peopleScreened: null,
  peopleEducated: null,
  householdsSurveyed: null,
  communityMembersEngaged: null,
};

export const communityProfile = {
  location: 'Shao community, Kwara State, Nigeria',
  history: null,
  population: null,
  demographics: null,
  majorOccupations: null,
  education: null,
  culture: null,
  socialStructure: null,
  communityInstitutions: null,
  healthFacilities: null,
  environmentalConditions: null,
};

export const communityLocations = [
  {
    name: 'Health Facility',
    category: 'health-facility',
    latitude: null,
    longitude: null,
    description: '',
    services: [],
  },
  {
    name: 'Laboratory',
    category: 'laboratory',
    latitude: null,
    longitude: null,
    description: '',
    services: [],
  },
];

export const surveyQuestions = [
  {
    id: 'health_information_source',
    question: 'Where do you usually receive health information?',
    type: 'multiple',
    options: [
      'Health workers',
      'Social media',
      'Family/Friends',
      'Radio',
      'Television',
      'Community meetings',
      'Other',
    ],
  },
  {
    id: 'laboratory_awareness',
    question: 'Are you aware of laboratory services in the community?',
    type: 'boolean',
    options: ['Yes', 'No'],
  },
];
