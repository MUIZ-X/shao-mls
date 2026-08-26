export type SurveyQuestion = {
  id: string;
  question: string;
  type: 'multiple' | 'checkbox' | 'boolean' | 'numeric' | 'text';
  options?: string[];
  notes?: string;
};

export const shaoSurveyQuestions: SurveyQuestion[] = [
  {
    id: 'timestamp',
    question: 'Timestamp',
    type: 'text',
  },
  {
    id: 'matric_number',
    question: 'INPUT YOUR MATRIC NUMBER',
    type: 'text',
  },
  {
    id: 'region_of_collection',
    question: 'REGION OF COLLECTION OF DATA',
    type: 'text',
    notes: 'Survey respondents recorded one of the Shao community regions by name or local spelling variant.',
  },
  {
    id: 'age',
    question: 'AGE',
    type: 'text',
  },
  {
    id: 'sex',
    question: 'SEX',
    type: 'text',
  },
  {
    id: 'marital_status',
    question: 'Marital Status',
    type: 'text',
  },
  {
    id: 'education_level',
    question: 'Highest level of education',
    type: 'text',
  },
  {
    id: 'religion',
    question: 'RELIGION',
    type: 'text',
  },
  {
    id: 'occupation',
    question: 'OCCUPATION',
    type: 'text',
  },
  {
    id: 'household_size',
    question: 'Number of people living in your household',
    type: 'numeric',
  },
  {
    id: 'residence_duration',
    question: 'How long have you lived in Shao?',
    type: 'text',
  },
  {
    id: 'top_health_problems',
    question: 'What are the three most common health problems affecting people in your community?',
    type: 'text',
  },
  {
    id: 'recent_household_illness',
    question: 'Has anyone in your household been sick within the last six months?',
    type: 'text',
  },
  {
    id: 'illness_type',
    question: 'What type of illness did they have?',
    type: 'text',
  },
  {
    id: 'usual_healthcare_source',
    question: 'Where do you usually seek healthcare when sick?',
    type: 'text',
  },
  {
    id: 'choice_reason',
    question: 'Why do you choose that option?',
    type: 'text',
  },
  {
    id: 'healthcare_challenges',
    question: 'What are the biggest challenges you face when accessing healthcare?',
    type: 'text',
  },
  {
    id: 'drinking_water_source',
    question: 'What is your major source of drinking water?',
    type: 'text',
  },
  {
    id: 'toilet_facility',
    question: 'What type of toilet facility does your household use?',
    type: 'text',
  },
  {
    id: 'waste_disposal',
    question: 'How do you dispose of household waste?',
    type: 'text',
  },
  {
    id: 'stagnant_water',
    question: 'Are there stagnant water bodies around your home?',
    type: 'text',
  },
  {
    id: 'environment_health_impact',
    question: 'Do you think your environment contributes to diseases?',
    type: 'text',
  },
  {
    id: 'routine_checkups',
    question: 'Do you go for routine medical check-ups?',
    type: 'text',
  },
  {
    id: 'participated_in_screening',
    question: 'Have you ever participated in a health screening programme?',
    type: 'text',
  },
  {
    id: 'screenings_done',
    question: 'Which screenings have you done?',
    type: 'text',
  },
  {
    id: 'screening_barriers',
    question: 'What prevents you from attending regular health screenings?',
    type: 'text',
  },
  {
    id: 'laboratory_close',
    question: 'Is there a medical laboratory close to your community?',
    type: 'text',
  },
  {
    id: 'laboratory_distance',
    question: 'Approximately how far is the nearest laboratory?',
    type: 'text',
  },
  {
    id: 'ever_visited_lab',
    question: 'Have you ever visited a medical laboratory?',
    type: 'text',
  },
  {
    id: 'lab_investigations_done',
    question: 'What laboratory investigations have you done?',
    type: 'text',
  },
  {
    id: 'lab_tests_requested',
    question: 'Before receiving treatment, do healthcare workers usually request laboratory tests?',
    type: 'text',
  },
  {
    id: 'do_test_before_medication',
    question: 'Do you usually perform the requested laboratory test before taking medications?',
    type: 'text',
  },
  {
    id: 'if_no_why',
    question: 'If No, why?',
    type: 'text',
  },
  {
    id: 'lab_result_trust',
    question: 'How much do you trust laboratory test results?',
    type: 'text',
  },
  {
    id: 'lab_improvement_requests',
    question: 'What improvements would you like to see in laboratory services?',
    type: 'text',
  },
  {
    id: 'lab_test_help_decisions',
    question: 'Do you believe laboratory tests help doctors make better treatment decisions?',
    type: 'text',
  },
  {
    id: 'more_health_education',
    question: 'Would you like to receive more health education on disease prevention and the importance of laboratory testing?',
    type: 'text',
  },
  {
    id: 'highest_priority_problem',
    question: 'What health problem should be given the highest priority in your community?',
    type: 'text',
  },
  {
    id: 'desired_health_services',
    question: 'What health services would you like to see more often in your community?',
    type: 'text',
  },
  {
    id: 'health_worker_visit_frequency',
    question: 'How often do health workers visit your community for health education or screening?',
    type: 'text',
  },
  {
    id: 'future_programme_participation',
    question: 'Would you be willing to participate in future community health programmes?',
    type: 'text',
  },
  {
    id: 'healthcare_recommendations',
    question: 'What recommendations do you have for improving healthcare and medical laboratory services in Shao Community?',
    type: 'text',
  },
];
