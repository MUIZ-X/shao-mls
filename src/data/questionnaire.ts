import * as XLSX from 'xlsx';
import { canonicalRegions, type CanonicalRegion } from './projectData';

export type QuestionnaireRow = Record<string, string> & {
  normalizedRegion?: CanonicalRegion;
  regionStatus: 'mapped' | 'unmapped';
};

const regionKey = (value: string) => value.trim().toUpperCase().replace(/[-\s]+/g, ' ');
const canonicalByKey = new Map(canonicalRegions.map((region) => [regionKey(region), region]));

/** Maps only case/spacing/hyphen variants of verified canonical labels. */
export function normalizeRegion(raw: string): CanonicalRegion | undefined {
  return canonicalByKey.get(regionKey(raw));
}

export const questionnaireGroups = [
  { title: 'Community profile', fields: ['AGE', 'SEX', 'Marital Status', 'Highest level of education', 'OCCUPATION', 'Number of people living in your household', 'How long have you lived in Shao?'] },
  { title: 'Health burden', fields: ['What are the three most common health problems affecting people in your community?', 'What health problem should be given the highest priority in your community?'] },
  { title: 'Healthcare utilization', fields: ['Where do you usually seek healthcare when sick?', 'Why do you choose that option?', 'What are the biggest challenges you face when accessing healthcare?'] },
  { title: 'Environmental health', fields: ['What is your major source of drinking water?', 'What type of toilet facility does your household use?', 'How do you dispose of household waste?', 'Are there stagnant water bodies around your home?', 'Do you think your environment contributes to diseases?'] },
  { title: 'Prevention & screening', fields: ['Do you go for routine medical check-ups?', 'Have you ever participated in a health screening programme?', 'Which screenings have you done?', 'What prevents you from attending regular health screenings?'] },
  { title: 'Laboratory access', fields: ['Is there a medical laboratory close to your community?', 'Approximately how far is the nearest laboratory?', 'Have you ever visited a medical laboratory?'] },
  { title: 'Laboratory utilization', fields: ['What laboratory investigations have you done?', 'Before receiving treatment, do healthcare workers usually request laboratory tests?', 'Do you usually perform the requested laboratory test before taking medications?'] },
  { title: 'Laboratory trust', fields: ['How much do you trust laboratory test results?', 'Do you believe laboratory tests help doctors make better treatment decisions?', 'What improvements would you like to see in laboratory services?'] },
  { title: 'Community health priorities', fields: ['What health education topics would you like healthcare professionals to teach? ', 'What health services would you like to see more often in your community?', 'How often do health workers visit your community for health education or screening?', 'Would you be willing to participate in future community health programmes?'] },
  { title: 'Community recommendations', fields: ['What recommendations do you have for improving healthcare and medical laboratory services in Shao Community?'] },
] as const;

export const excludedQuestionnaireFields = new Set([
  'Timestamp',
  'INPUT YOUR MATRIC NUMBER',
  'REGION OF COLLECTION OF DATA',
]);

export function questionnaireFields(rows: QuestionnaireRow[]) {
  return rows.length ? Object.keys(rows[0]).filter((field) => !excludedQuestionnaireFields.has(field) && field !== 'normalizedRegion' && field !== 'regionStatus') : [];
}

export async function loadQuestionnaire() {
  const response = await fetch('/cobes-data/SHAONOVA%20QUEST%20RESPONSES.xlsx');
  if (!response.ok) throw new Error('Questionnaire workbook could not be loaded.');
  const workbook = XLSX.read(await response.arrayBuffer(), { type: 'array' });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const raw = XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet, { defval: '' });
  return raw.map((source) => {
    const row = Object.fromEntries(Object.entries(source).map(([key, value]) => [key, String(value).trim()]));
    const normalizedRegion = normalizeRegion(row['REGION OF COLLECTION OF DATA']);
    return { ...row, normalizedRegion, regionStatus: normalizedRegion ? 'mapped' : 'unmapped' };
  }) as QuestionnaireRow[];
}

export function responseDistribution(rows: QuestionnaireRow[], field: string, region?: CanonicalRegion) {
  const values = rows
    .filter((row) => !region || row.normalizedRegion === region)
    .map((row) => row[field]?.trim())
    .filter(Boolean);
  return Object.entries(values.reduce<Record<string, number>>((total, value) => ({ ...total, [value]: (total[value] ?? 0) + 1 }), {}))
    .sort((a, b) => b[1] - a[1]).slice(0, 8)
    .map(([label, value]) => ({ label, value }));
}
