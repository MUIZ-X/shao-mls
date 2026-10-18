export const fieldMapLocations = [
  { id: 'oke-lade', label: 'OKE-LADE', assessmentRegionId: 'oke-lade', mapPosition: [0.51, 0.61] },
  { id: 'isale-oja', label: 'ISALE OJA', assessmentRegionId: 'isale-oja', mapPosition: [0.71, 0.32] },
  { id: 'oju-oja', label: 'OJU OJA', assessmentRegionId: 'oju-oja', mapPosition: [0.62, 0.20] },
  { id: 'ogidi', label: 'OGIDI', assessmentRegionId: 'ogidi', mapPosition: [0.74, 0.15] },
  { id: 'ode-alawon', label: 'ODE ALAWON', assessmentRegionId: 'ode-alawon', mapPosition: [0.55, 0.10] },
  { id: 'oke-iboo', label: 'OKE IBOO', assessmentRegionId: 'oke-iboo', mapPosition: [0.66, 0.11] },
  { id: 'ode-aare', label: 'ODE-AARE', assessmentRegionId: undefined, mapPosition: [0.80, 0.15] },
  { id: 'oke-sinniga', label: 'OKE SINNIGA', assessmentRegionId: 'oke-seniga', mapPosition: [0.87, 0.24] },
  { id: 'sobi-hills', label: 'SOBI HILLS', assessmentRegionId: undefined, mapPosition: [0.90, 0.94] },
] as const;

export type FieldMapLocationId = (typeof fieldMapLocations)[number]['id'];

export const fieldMapLandmarks = [
  { id: 'central-mosque', label: 'CENTRAL MOSQUE', type: 'mosque', mapPosition: [0.49, 0.16] },
  { id: 'oju-oja-mosque', label: 'OJU OJA MOSQUE', type: 'mosque', mapPosition: [0.60, 0.22] },
  { id: 'isale-oja-mosque', label: 'ISALE OJA MOSQUE', type: 'mosque', mapPosition: [0.70, 0.33] },
  { id: 'palace', label: 'PALACE', type: 'palace', mapPosition: [0.80, 0.20] },
  { id: 'main-church', label: 'CHURCH', type: 'church', mapPosition: [0.79, 0.55] },
  { id: 'ecwa-church', label: 'ECWA CHURCH', type: 'church', mapPosition: [0.34, 0.59] },
  { id: 'ecwa-clinic', label: 'ECWA CLINIC', type: 'clinic', mapPosition: [0.47, 0.88] },
  { id: 'ministry-health-centre', label: 'MINISTRY HEALTH CENTRE', type: 'clinic', mapPosition: [0.72, 0.59] },
  { id: 'muslim-community-school', label: 'MUSLIM COMMUNITY SCHOOL', type: 'marker', mapPosition: [0.59, 0.90] },
  { id: 'baptist-college', label: 'BAPTIST COLLEGE OF HEALTH TECH.', type: 'marker', mapPosition: [0.83, 0.77] },
  { id: 'jagodo-malete', label: 'JAGODO (MALETE)', type: 'marker', mapPosition: [0.17, 0.16] },
  { id: 'oloru', label: 'OLORU', type: 'marker', mapPosition: [0.88, 0.08] },
  { id: 'omilende', label: 'OMILENDE', type: 'marker', mapPosition: [0.50, 0.94] },
  { id: 'outreach-point', label: 'OUTREACH', type: 'marker', mapPosition: [0.31, 0.52] },
  { id: 'project-point', label: 'PROJECT', type: 'marker', mapPosition: [0.52, 0.47] },
] as const;

export type FieldMapLandmark = (typeof fieldMapLandmarks)[number];

