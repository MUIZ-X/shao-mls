export const projectStatus = {
  programme: 'COBES PROJECT',
  currentWeek: 2,
  state: 'IN PROGRESS',
  nextWeek: 3,
  nextWeekLabel: 'UPCOMING — FINAL WEEK',
} as const;

/** Leave undefined until the report/spreadsheet count discrepancy is resolved. */
export const verifiedPublicRespondentCount: number | undefined = undefined;

export const dataQualityNotice =
  'Survey record count requires verification before final publication.';

export const healthChallengeData = [
  { name: 'Malaria', value: 59.3, color: '#38BDF8' },
  { name: 'Typhoid', value: 18.8, color: '#0EA5A8' },
  { name: 'Ulcer', value: 4.5, color: '#A7D948' },
  { name: 'Stroke', value: 3.5, color: '#F87171' },
  { name: 'Cholera', value: 2.8, color: '#A78BFA' },
  { name: 'Hypertension', value: 2.3, color: '#F59E0B' },
  { name: 'Diabetes', value: 2.3, color: '#F472B6' },
  { name: 'Measles', value: 1.8, color: '#94A3B8' },
  { name: 'Kidney Disease', value: 1.4, color: '#EAB308' },
  { name: 'Others', value: 3.3, color: '#22B8C7' },
] as const;

export const canonicalRegions = [
  'OKE LADE', 'ISALE OJA', 'OGIDIYI', 'OKEBO',
  'ODE ALAWON', 'AJAKITIPA', 'OKE SINNIGA', 'OJU OJA',
] as const;

export type CanonicalRegion = (typeof canonicalRegions)[number];

export const weekOneTimeline = [
  { title: 'Community entry', detail: 'Arrival, lodging preparation, and formal courtesy visits to community and traditional leaders.' },
  { title: 'Community mapping & questionnaire survey', detail: 'Eight groups documented community conditions and administered questionnaires to consenting residents.' },
  { title: 'Community & cultural engagement', detail: 'The team learned from Shao leaders about local history, culture, traditions, and religious harmony.' },
  { title: 'Healthcare & laboratory assessment', detail: 'Groups assessed ECWA Clinic and the Primary Health Care Centre, including laboratory practices and needs.' },
  { title: 'Health sensitization & mobilisation', detail: 'Malaria and typhoid prevention education was shared across the community, mosque, and churches.' },
  { title: 'Learning from a previous intervention', detail: 'The 2024 MLS incinerator project at Isale Oja was reviewed for condition, awareness, usage, and sustainability lessons.' },
  { title: 'Health outreach, screening & referrals', detail: 'The Aafin Ohoro outreach provided malaria and typhoid screening, blood-pressure checks, counselling, and referrals.' },
  { title: 'Church engagement & project planning', detail: 'Church health education and a team planning session concluded the documented first week.' },
] as const;

export const communityContext = [
  ['Community context', 'The report describes Shao as a predominantly Yoruba community with historical links to the Old Oyo Empire.'],
  ['Culture', 'The report records annual Yam and mass marriage festivals, and peaceful coexistence among Muslim, Christian, and traditional worshippers.'],
  ['Livelihoods', 'Agriculture and fishing are documented in the report as important community activities.'],
] as const;
