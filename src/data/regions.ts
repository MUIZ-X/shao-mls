export type CanonicalRegion = {
  id: string;
  name: string;
  aliases: string[];
  description: string;
};

export const canonicalCommunityRegions: CanonicalRegion[] = [
  {
    id: 'OKE_LADE',
    name: 'OKE LADE',
    aliases: ['OKE LADE', 'OKE-LADE', 'Oke lade', 'OKE LADE50', 'OKE LADE 50'],
    description: 'Primary market and commercial district in the Shao catchment area.',
  },
  {
    id: 'ISALE_OJA',
    name: 'ISALE OJA',
    aliases: ['ISALE OJA', 'ISALE-OJA', 'Isale ode'],
    description: 'A community neighbourhood and local trading hub.',
  },
  {
    id: 'OGIDIYI',
    name: 'OGIDIYI',
    aliases: ['OGIDIYI', 'OGIDI'],
    description: 'A named community region within the Shao area.',
  },
  {
    id: 'OKEBO',
    name: 'OKEBO',
    aliases: ['OKEBO'],
    description: 'A canonical location in the community mapping list.',
  },
  {
    id: 'ODE_ALAWON',
    name: 'ODE ALAWON',
    aliases: ['ODE ALAWON', 'ODE ALOWON', 'ODE-ALAWON', 'Ode alawon', 'Ode alawon'],
    description: 'A canonical section of Shao community mapped for field work.',
  },
  {
    id: 'AJAKITIPA',
    name: 'AJAKITIPA',
    aliases: ['AJAKITIPA'],
    description: 'A canonical node in the community region set.',
  },
  {
    id: 'OKE_SINNIGA',
    name: 'OKE SINNIGA',
    aliases: [
      'OKE SINNIGA',
      'Oke siniga',
      'Oke sinigga',
      'Oke sinniga',
      'Oke issiniga',
      'Oke isuniga',
      'Oke isinigga',
      'Oke isinniga',
      'Oke siginni',
      'Oke shinniga',
      'Siniga',
      'Sinuga',
      'Sinniga',
      'Seniga',
    ],
    description: 'A canonical neighbourhood with multiple common spelling variants in raw field data.',
  },
  {
    id: 'OJU_OJA',
    name: 'OJU OJA',
    aliases: ['OJU OJA', 'Oju oja'],
    description: 'A community location captured in canonical mapping.',
  },
];

const normalizeKey = (value: string) =>
  value
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const regionAliasMap: Record<string, string> = {};

canonicalCommunityRegions.forEach((region) => {
  region.aliases.forEach((alias) => {
    const key = normalizeKey(alias);
    if (key) {
      regionAliasMap[key] = region.name;
    }
  });
});

export function normalizeCommunityRegion(rawValue?: string | null) {
  if (!rawValue) {
    return undefined;
  }

  const canonical = regionAliasMap[normalizeKey(rawValue)];
  return canonical ?? undefined;
}

export function isCanonicalRegion(rawValue?: string | null) {
  return Boolean(normalizeCommunityRegion(rawValue));
}
