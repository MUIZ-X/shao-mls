const defaultThumbnail = '/cobes-data/shao-imgs/shaonova-img.jpg';

const objectiveThumbnails: Record<string, string> = {
  'mlo-01': '/cobes-data/shao-imgs/Shao-map.png',
  'mlo-02': '/cobes-data/shao-imgs/Shao-map.png',
  'mlo-03': '/cobes-data/shao-imgs/Disease-dist.jpg',
  'mlo-04': '/cobes-data/shao-imgs/shaonova-img.jpg',
  'mlo-05': '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
  'mlo-06': '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
  'slo-01': '/cobes-data/shao-imgs/shaonova-img.jpg',
  'slo-02': '/cobes-data/shao-imgs/Shao-map.png',
  'slo-03': '/cobes-data/shao-imgs/shao-mls-outreach.jpg',
  'slo-04': '/cobes-data/shao-imgs/shaonova-img.jpg',
};

export const getObjectiveThumbnail = (objectiveId: string) =>
  objectiveThumbnails[objectiveId] ?? defaultThumbnail;
