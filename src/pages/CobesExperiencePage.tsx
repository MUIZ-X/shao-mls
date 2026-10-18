import { AnimatePresence, motion } from 'framer-motion';
import { MloExplorer } from '../data/mloContent';
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  ChartNoAxesCombined,
  ChevronRight,
  CircleCheck,
  Download,
  ExternalLink,
  FileText,
  MapPinned,
  ShieldCheck,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Navbar } from '../components/navigation/Navbar';
import {
  archiveItems,
  assessmentRegions,
  journeyStages,
  learningExperiences,
  searchItems,
  teamCategories,
  type SearchItem,
} from '../data/cobesContent';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const scrollToContent = (target: string) => {
  window.setTimeout(() => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 0);
};


type DistributionItem = {
  label: string;
  value: number;
};

type Distribution = {
  id: string;
  label: string;
  title: string;
  type: 'pie' | 'bar';
  data: DistributionItem[];
  description: string;
};

const assessmentDistributions: Distribution[] = [
  {
    id: 'health-challenges',
    label: 'Health challenges',
    title: 'Most prevalent disease',
    type: 'pie',
    data: [
      { label: 'Malaria', value: 71.8 },
      { label: 'Fever', value: 7.1 },
      { label: 'Typhoid', value: 4.1 },
      { label: 'Others', value: 17.0 },
    ],
    description:
      'Malaria is the most prevalent disease in Shao community. This is linked to poor sanitation practices, open defecation, and open dumping which support mosquito breeding.',
  },
  {
    id: 'age',
    label: 'Age distribution',
    title: 'Age distribution of respondents',
    type: 'bar',
    data: [
      { label: '18–27', value: 24.7 },
      { label: '28–37', value: 21.9 },
      { label: '38–47', value: 19.4 },
      { label: '48–57', value: 10.4 },
      { label: '58–67', value: 11.1 },
      { label: '68–77', value: 9.4 },
      { label: '78–87', value: 3.1 },
    ],
    description:
      'The respondents comprised individuals across a wide range of age groups. The most frequently occurring age was 30 years, while the reported median age was 35 years. The average age was estimated to be approximately 38–40 years.',
  },
  {
    id: 'religion',
    label: 'Religion',
    title: 'Religious distribution',
    type: 'pie',
    data: [
      { label: 'Christianity', value: 54.6 },
      { label: 'Islam', value: 38.3 },
      { label: 'Traditional', value: 6.4 },
      { label: 'More than one religion', value: 0.7 },
    ],
    description:
      'Christianity was the most prevalent religion, followed by Islam and traditional worshippers.',
  },
  {
    id: 'occupation',
    label: 'Occupational distribution',
    title: 'Occupational distribution',
    type: 'bar',
    data: [
      { label: 'Trader', value: 25.69 },
      { label: 'Student', value: 8.94 },
      { label: 'Tailor', value: 6.42 },
      { label: 'Teacher', value: 4.82 },
      { label: 'Farmer', value: 4.59 },
      { label: 'Civil servant', value: 2.75 },
      { label: 'Others', value: 43.12 },
    ],
    description:
      'Shao has diverse economic activities, with traders forming the largest named occupational group, followed by students, tailors, teachers, farmers, civil servants and other occupations.',
  },
  {
    id: 'household',
    label: 'Household number',
    title: 'Number of people in households',
    type: 'bar',
    data: [
      { label: '1–3', value: 10.7 },
      { label: '4–6', value: 44.1 },
      { label: '7–10', value: 32.2 },
      { label: '11+', value: 13.1 },
    ],
    description:
      'The survey indicated that an average of approximately 7 people live in a household. Households containing 4–6 people formed the largest reported group.',
  },
  {
    id: 'sex',
    label: 'Sex',
    title: 'Sex distribution',
    type: 'pie',
    data: [
      { label: 'Male', value: 41 },
      { label: 'Female', value: 59 },
    ],
    description:
      'The survey revealed that females constituted the larger proportion of respondents, accounting for 59% compared with 41% males.',
  },
  {
    id: 'marital',
    label: 'Marital distribution',
    title: 'Marital status',
    type: 'pie',
    data: [
      { label: 'Single', value: 36 },
      { label: 'Married', value: 57 },
      { label: 'Divorced', value: 2 },
      { label: 'Widowed', value: 5 },
    ],
    description:
      'Married respondents constituted the largest group. The predominance of married respondents reflects the substantial representation of family units within the surveyed population.',
  },
  {
    id: 'education',
    label: 'Educational level',
    title: 'Educational level of respondents',
    type: 'bar',
    data: [
      { label: 'SSCE', value: 44.0 },
      { label: 'Tertiary', value: 26.2 },
      { label: 'No formal', value: 14.9 },
      { label: 'Primary', value: 11.9 },
      { label: 'None', value: 0.5 },
      { label: 'ND', value: 0.2 },
      { label: 'Master’s', value: 0.2 },
      { label: 'HND', value: 0.2 },
    ],
    description:
      'The educational background of the people of Shao varied considerably. The majority completed secondary school, while others had tertiary, no formal, and primary education. Other recorded qualifications included ND, HND and Master’s degrees.',
  },
];

const PIE_COLORS = [
  '#2563eb',
  '#f97316',
  '#16a34a',
  '#dc2626',
  '#7c3aed',
  '#0891b2',
  '#db2777',
];

const polarToCartesian = (
  cx: number,
  cy: number,
  radius: number,
  angle: number,
) => {
  const angleInRadians = ((angle - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
};

const describePieSlice = (
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) => {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${cx} ${cy}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    'Z',
  ].join(' ');
};

function AnimatedPieChart({ data }: { data: DistributionItem[] }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;

  return (
    <div className="cobes-pie-chart-wrap">
      <motion.svg
        className="cobes-pie-chart"
        viewBox="0 0 500 420"
        role="img"
        aria-label="Community assessment distribution pie chart"
        initial={{ opacity: 0, scaleX: 0.03, scaleY: 0.92 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <g>
          {data.map((item, index) => {
            const startAngle = currentAngle;
            const angle = (item.value / total) * 360;
            const endAngle = currentAngle + angle;
            currentAngle = endAngle;

            const middleAngle = startAngle + angle / 2;
            const labelPoint = polarToCartesian(250, 210, 105, middleAngle);

            return (
              <g key={item.label}>
                <path
                  d={describePieSlice(250, 210, 155, startAngle, endAngle)}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                  stroke="#ffffff"
                  strokeWidth="3"
                />

                {item.value >= 3 && (
                  <text
                    x={labelPoint.x}
                    y={labelPoint.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="cobes-pie-chart__label"
                  >
                    {item.value}%
                  </text>
                )}
              </g>
            );
          })}
        </g>
      </motion.svg>

      <div className="cobes-chart-legend" aria-label="Chart legend">
        {data.map((item, index) => (
          <div className="cobes-chart-legend__item" key={item.label}>
            <span
              className="cobes-chart-legend__swatch"
              style={{ backgroundColor: PIE_COLORS[index % PIE_COLORS.length] }}
              aria-hidden="true"
            />
            <span className="cobes-chart-legend__label">{item.label}</span>
            <strong>{item.value}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedBarChart({ data }: { data: DistributionItem[] }) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div className="cobes-bar-chart" role="img" aria-label="Community assessment distribution bar chart">
      <div className="cobes-bar-chart__plot">
        {data.map((item, index) => (
          <div className="cobes-bar-column" key={item.label}>
            <div className="cobes-bar-column__value">
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.35 + index * 0.045 }}
              >
                {item.value}%
              </motion.span>
            </div>

            <div className="cobes-bar-column__track">
              <motion.div
                className="cobes-bar-column__bar"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              />
            </div>

            <div className="cobes-bar-column__label">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CobesExperiencePage() {
  const [selectedDistributionId, setSelectedDistributionId] = useState('health-challenges');
  const [selectedRegionId, setSelectedRegionId] = useState<string>(assessmentRegions[0].id);
  const [selectedLearningId, setSelectedLearningId] = useState<string>(learningExperiences[0].id);
  const [selectedJourneyId, setSelectedJourneyId] = useState<string>(journeyStages[0].id);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const selectedDistribution = useMemo(
    () =>
      assessmentDistributions.find((item) => item.id === selectedDistributionId) ??
      assessmentDistributions[0],
    [selectedDistributionId],
  );

  const selectedRegion = useMemo(
    () => assessmentRegions.find((region) => region.id === selectedRegionId) ?? assessmentRegions[0],
    [selectedRegionId],
  );
  const selectedLearning = useMemo(
    () => learningExperiences.find((item) => item.id === selectedLearningId) ?? learningExperiences[0],
    [selectedLearningId],
  );

  useEffect(() => {
    if (!modalOpen) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setModalOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [modalOpen]);

  const handleSearchNavigate = (item: SearchItem) => {
    if (item.action?.type === 'region') setSelectedRegionId(item.action.value);
    if (item.action?.type === 'learning') setSelectedLearningId(item.action.value);
    if (item.action?.type === 'journey') setSelectedJourneyId(item.action.value);
    if (item.action?.type === 'team') setSelectedTeamId(item.action.value);
    scrollToContent(item.target);
  };

  return (
    <div className="cobes-site-shell">
      <Navbar searchItems={searchItems} onSearchNavigate={handleSearchNavigate} />

      <main>
        <section id="home" className="cobes-hero scroll-target" aria-labelledby="home-heading">
          <div className="cobes-hero__backdrop" />
          <div className="cobes-container cobes-hero__layout">
            <motion.div
              className="cobes-hero__copy"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{ duration: 0.55, ease: 'easeOut' }}
            >
              <p className="cobes-eyebrow">University of Ilorin · Medical Laboratory Science · Class of 2026</p>
              <img
                className="cobes-hero__brand"
                src="/cobes-data/shao-imgs/shaonova-logo.png"
                alt="Shaonova"
              />
              <h1 id="home-heading">
                A New Light,
                <span>A Healthier Shao.</span>
              </h1>
              <p className="cobes-hero__lede">
                A community-centred COBES experience connecting evidence, prevention, health education,
                and accessible laboratory services in Shao.
              </p>
              <div className="cobes-button-row">
                <a className="cobes-button cobes-button--primary" href="#about-cobes">
                  Explore COBES <ArrowDownRight aria-hidden="true" size={18} />
                </a>
                <a className="cobes-button cobes-button--quiet" href="#community-assessment">
                  View assessment <ArrowRight aria-hidden="true" size={17} />
                </a>
              </div>
              <dl className="cobes-hero__facts" aria-label="COBES project overview">
                <div>
                  <dt>64</dt>
                  <dd>student team</dd>
                </div>
                <div>
                  <dt>08</dt>
                  <dd>community areas</dd>
                </div>
                <div>
                  <dt>02</dt>
                  <dd>health facilities</dd>
                </div>
              </dl>
            </motion.div>

            <motion.aside
              className="cobes-hero__who-card"
              initial={{ opacity: 0, x: 42 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: 0.16, ease: 'easeOut' }}
            >
              <div className="cobes-hero__who-topline">
              <p className="cobes-eyebrow">WHO Theme 2026</p>
              </div>
              <div className="cobes-hero__who-image-wrap">
                <img src="/cobes-data/shao-imgs/WHO-IMG.png" alt="World Health Organization theme graphic" />
              </div>
              <h2>Together for Health: Stand with Science</h2>
             
            </motion.aside>
          </div>
        </section>

        <section id="about-cobes" className="cobes-photo-section cobes-about scroll-target" aria-labelledby="about-heading">
          <div className="cobes-photo-section__overlay" />
          <div className="cobes-container cobes-about__layout">
            <motion.div
              className="cobes-about__image-frame"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: { opacity: 0, x: -38 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.52, ease: 'easeOut' }}
            >
              <img src="/cobes-data/shao-imgs/MLS-IMG.png" alt="Medical Laboratory Science field experience" />
              <span className="cobes-image-caption">Evidence in practice</span>
            </motion.div>

            <motion.div
              className="cobes-about__content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              transition={{ duration: 0.52, ease: 'easeOut' }}
            >
              <p className="cobes-eyebrow">About COBES</p>
              <h2 id="about-heading">Learning with the community, not simply in it.</h2>
              <p className="cobes-section-lede">
                The Community-Based Education and Service programme places Medical Laboratory Science
                learning in a real community context: listening carefully, assessing needs, supporting
                health literacy, and planning with evidence.
              </p>
              <div className="cobes-principles">
                <article>
                  <BookOpen aria-hidden="true" />
                  <h3>Learn through service</h3>
                  <p>Connect classroom knowledge with people, systems, and practical health needs.</p>
                </article>
                <article>
                  <ShieldCheck aria-hidden="true" />
                  <h3>Work from evidence</h3>
                  <p>Use assessment, observation, and verified records to guide project decisions.</p>
                </article>
                <article>
                  <UsersRound aria-hidden="true" />
                  <h3>Build shared ownership</h3>
                  <p>Partner with existing community and health structures for lasting value.</p>
                </article>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="community-assessment"
          className="cobes-photo-section cobes-assessment scroll-target"
          aria-labelledby="assessment-heading"
        >
          <div className="cobes-photo-section__overlay" />
          <div className="cobes-container cobes-section-content">
            <motion.div
              className="cobes-section-heading cobes-section-heading--split"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={reveal}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div>
                <p className="cobes-eyebrow">Community assessment</p>
                <h2 id="assessment-heading">A closer view of Shao, area by area.</h2>
              </div>
              <p>
                The assessment brings mapping, survey context, field observations, and follow-up learning
                together without presenting unverified findings as fact.
              </p>
            </motion.div>

            <div className="cobes-assessment__overview">
              <motion.figure
                className="cobes-map-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <img src="/cobes-data/shao-imgs/Shao-map.png" alt="Map of Shao community and project locations" />
                <figcaption>
                  <MapPinned aria-hidden="true" size={18} />
                  Community map of MLS’26 field locations
                </figcaption>
              </motion.figure>

              <motion.div
                className="cobes-assessment__note"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
              >
                <p className="cobes-eyebrow">Assessment approach</p>
                <h3>Evidence before assertion.</h3>
                <p>
                  Every region has a dedicated space for its assessment context. Questionnaire summaries
                  and detailed local findings can be added as validation is completed.
                </p>
                <dl>
                  <div><dt>08</dt><dd>focus areas</dd></div>
                  <div><dt>01</dt><dd>shared map</dd></div>
                  <div><dt>100%</dt><dd>source-led</dd></div>
                </dl>
              </motion.div>
            </div>

            <div className="cobes-region-tabs" role="tablist" aria-label="Community assessment areas">
              {assessmentRegions.map((region) => (
                <button
                  key={region.id}
                  type="button"
                  role="tab"
                  id={`region-tab-${region.id}`}
                  aria-controls={`region-${region.id}`}
                  aria-selected={selectedRegion.id === region.id}
                  className={selectedRegion.id === region.id ? 'is-active' : undefined}
                  onClick={() => setSelectedRegionId(region.id)}
                >
                  {region.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                id={`region-${selectedRegion.id}`}
                key={selectedRegion.id}
                role="tabpanel"
                aria-labelledby={`region-tab-${selectedRegion.id}`}
                className="cobes-region-panel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
              >
                <div>
                  <p className="cobes-eyebrow">{selectedRegion.focus}</p>
                  <h3>{selectedRegion.name}</h3>
                  <p>{selectedRegion.detail}</p>
                  <button type="button" className="cobes-text-button" onClick={() => setModalOpen(true)}>
                    Read assessment note <ChevronRight aria-hidden="true" size={17} />
                  </button>
                </div>
                <dl className="cobes-region-panel__facts">
                  <div><dt>Map context</dt><dd>{selectedRegion.mapContext}</dd></div>
                  <div><dt>Evidence source</dt><dd>Field register, questionnaire responses, and community engagement notes.</dd></div>
                  <div><dt>Reporting standard</dt><dd>Local findings are added after verification and appropriate interpretation.</dd></div>
                </dl>
              </motion.article>
            </AnimatePresence>

            <div className="cobes-assessment__bottom-grid">
              <article className="cobes-data-visual-card">
                <div className="cobes-data-visual-card__heading">
                  <div>
                    <p className="cobes-eyebrow">Assessment data</p>
                    <AnimatePresence mode="wait">
                      <motion.h3
                        key={selectedDistribution.id}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                      >
                        {selectedDistribution.title}
                      </motion.h3>
                    </AnimatePresence>
                  </div>
                  <ChartNoAxesCombined aria-hidden="true" />
                </div>

                <div className="cobes-chart-stage">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedDistribution.id}
                      className="cobes-chart-stage__inner"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {selectedDistribution.type === 'pie' ? (
                        <AnimatedPieChart data={selectedDistribution.data} />
                      ) : (
                        <AnimatedBarChart data={selectedDistribution.data} />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedDistribution.id}
                    className="cobes-chart-description"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p>{selectedDistribution.description}</p>
                  </motion.div>
                </AnimatePresence>
              </article>

              <article className="cobes-evidence-card cobes-distribution-tabs">
                <p className="cobes-eyebrow">Explore the data</p>
                <p className="cobes-distribution-tabs__intro">
                  Select a category to view its distribution.
                </p>

                <div
                  className="cobes-distribution-tabs__list"
                  role="tablist"
                  aria-label="Community assessment distributions"
                >
                  {assessmentDistributions.map((distribution) => (
                    <button
                      key={distribution.id}
                      type="button"
                      role="tab"
                      aria-selected={selectedDistribution.id === distribution.id}
                      className={`cobes-distribution-tab ${
                        selectedDistribution.id === distribution.id ? 'is-active' : ''
                      }`}
                      onClick={() => setSelectedDistributionId(distribution.id)}
                    >
                      <span>{distribution.label}</span>
                      <ChevronRight aria-hidden="true" size={17} />
                    </button>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="learning-experience" className="cobes-learning scroll-target" aria-labelledby="learning-heading">
          <div className="cobes-container cobes-section-content">
            <motion.div
              className="cobes-section-heading cobes-section-heading--split"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={reveal}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div>
                <p className="cobes-eyebrow">Learning experience</p>
                <h2 id="learning-heading">Fieldwork, made explorable.</h2>
              </div>
              <p>
                Browse the practical learning moments that moved COBES from introduction to collaborative action.
              </p>
            </motion.div>

            <div className="cobes-learning-row" aria-label="Learning experience cards">
              {learningExperiences.map((experience, index) => (
                <motion.button
                  id={`learning-${experience.id}`}
                  key={experience.id}
                  type="button"
                  className={`cobes-learning-card ${selectedLearning.id === experience.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedLearningId(experience.id)}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.42, delay: Math.min(index * 0.04, 0.2), ease: 'easeOut' }}
                >
                  <img src={experience.image} alt="" />
                  <span className="cobes-learning-card__shade" />
                  <span className="cobes-learning-card__meta">{experience.tag}</span>
                  <strong>{experience.title}</strong>
                  <span className="cobes-learning-card__arrow"><ArrowDownRight aria-hidden="true" size={19} /></span>
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={selectedLearning.id}
                className="cobes-learning-feature"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.26, ease: 'easeOut' }}
              >
                <img src={selectedLearning.image} alt="" />
                <div>
                  <p className="cobes-eyebrow">{selectedLearning.tag}</p>
                  <h3>{selectedLearning.title}</h3>
                  <p>{selectedLearning.description}</p>
                  <div className="cobes-learning-feature__outcome">
                    <CircleCheck aria-hidden="true" size={18} />
                    <span>{selectedLearning.outcome}</span>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>

        <section id="project-journey" className="cobes-journey scroll-target" aria-labelledby="journey-heading">
          <div className="cobes-container cobes-section-content">
            <motion.div
              className="cobes-section-heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={reveal}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className="cobes-eyebrow">Project journey</p>
              <h2 id="journey-heading">From community entry to accountable impact.</h2>
              <p>
                A project journey is more than a list of events. It shows how relationship-building,
                evidence, prevention, and follow-through connect over time.
              </p>
            </motion.div>

            <ol className="cobes-timeline">
              {journeyStages.map((stage, index) => (
                <motion.li
                  id={`journey-${stage.id}`}
                  key={stage.id}
                  className={selectedJourneyId === stage.id ? 'is-active' : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.42, delay: Math.min(index * 0.035, 0.18), ease: 'easeOut' }}
                >
                  <button type="button" onClick={() => setSelectedJourneyId(stage.id)}>
                    <span className="cobes-timeline__index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="cobes-timeline__node" aria-hidden="true" />
                    <span className="cobes-timeline__content">
                      <small>{stage.label}</small>
                      <strong>{stage.title}</strong>
                      <span>{stage.detail}</span>
                    </span>
                  </button>
                </motion.li>
              ))}
            </ol>

            <div className="cobes-impact">
              <div className="cobes-impact__heading">
                <p className="cobes-eyebrow">Impact & results</p>
                <h3>Report the full chain, not just the activity.</h3>
              </div>
              <div className="cobes-impact__flow" aria-label="Activities to impact pathway">
                <article><span>01</span><b>Activities</b><p>Assessment, education, screening, and partner engagement.</p></article>
                <article><span>02</span><b>Outputs</b><p>People reached, services delivered, materials and referrals recorded.</p></article>
                <article><span>03</span><b>Outcomes</b><p>Knowledge, safer practices, and strengthened local capability.</p></article>
                <article><span>04</span><b>Impact</b><p>Lasting health and wellbeing benefits supported over time.</p></article>
              </div>
              <div className="cobes-impact__metrics">
                <div><strong>100</strong><span>insecticide-treated nets distributed</span></div>
                <div><strong>02</strong><span>health facilities engaged</span></div>
                <div><strong>64</strong><span>students working with Shao</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="cobes-team scroll-target" aria-labelledby="team-heading">
          <div className="cobes-container cobes-section-content">
            <motion.div
              className="cobes-section-heading cobes-section-heading--split"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.22 }}
              variants={reveal}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div>
                <p className="cobes-eyebrow">Team</p>
                <h2 id="team-heading">One team, many essential roles.</h2>
              </div>
              <p>
                The team structure makes each strand of the work visible—from supervision and coordination
                to community education, evidence, logistics, and technical documentation.
              </p>
            </motion.div>

            <div className="cobes-team__feature">
              <img src="/cobes-data/shao-imgs/shaonova-img.jpg" alt="Shaonova COBES student team" />
              <div><p className="cobes-eyebrow">Shared purpose</p><h3>Healthcare learning that stays connected to people.</h3><p>Individual profiles can be added here after names, roles, photos, and publication consent are confirmed.</p></div>
            </div>

            <div className="cobes-team-grid">
              {teamCategories.map((team) => (
                <button
                  id={`team-${team.id}`}
                  type="button"
                  key={team.id}
                  className={`cobes-team-card ${selectedTeamId === team.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedTeamId(team.id)}
                >
                  <span className="cobes-team-card__avatar" aria-hidden="true">{team.initials}</span>
                  <span className="cobes-team-card__role">Project role</span>
                  <strong>{team.title}</strong>
                  <span>{team.role}</span>
                  <ChevronRight aria-hidden="true" size={18} />
                </button>
              ))}
            </div>

            <div className="cobes-archive" aria-labelledby="archive-heading">
              <div className="cobes-archive__heading">
                <div>
                  <p className="cobes-eyebrow">Archive</p>
                  <h3 id="archive-heading">Source materials and project records.</h3>
                </div>
                <FileText aria-hidden="true" size={25} />
              </div>
              <div className="cobes-archive__grid">
                {archiveItems.map((item) => (
                  <a key={item.title} href={item.href} download className="cobes-archive-card">
                    <span>{item.type}</span>
                    <strong>{item.title}</strong>
                    <p>{item.detail}</p>
                    <b>Download <Download aria-hidden="true" size={15} /></b>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="cobes-footer">
        <div className="cobes-container">
          <div>
            <p className="cobes-eyebrow">University of Ilorin · Department of Medical Laboratory Science</p>
            <h2>COBES / Shao Community</h2>
          </div>
          <p>Together for health. Stand with science.</p>
          <a href="#home">Back to top <ExternalLink aria-hidden="true" size={15} /></a>
        </div>
      </footer>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="cobes-modal-backdrop"
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setModalOpen(false)}
          >
            <motion.section
              className="cobes-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="assessment-note-title"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button type="button" className="cobes-modal__close" onClick={() => setModalOpen(false)} aria-label="Close assessment note">
                <X aria-hidden="true" size={20} />
              </button>
              <p className="cobes-eyebrow">Assessment note · {selectedRegion.name}</p>
              <h2 id="assessment-note-title">COMMUNITY MAPPING</h2>
              <div className="cobes-modal__content">
                <h4 className="cobes-eyebrow">ROAD NETWORK AND TRANSPORTATION</h4>

<p>
                There is one major tarred road running through the community, which most residents rely on for movement. Several smaller roads branch from the major road and remain untarred red-earth roads, making them more difficult to use during the rainy season. The major road meets the central part of the town at a T-junction, dividing the community into three areas, and it also leads to Oke-Ere. Most residents use motorcycles for transportation, while a smaller number use cars.
</p><br />
                <h4 className="cobes-eyebrow">HOUSING AND SETTLEMENT PATTERN</h4>
  <p>
                Most houses in Oke Lade are constructed with mud or earth, while a smaller number are built with cement blocks. Buildings are relatively close together, and it is common to find houses built beside or around large rocks because the rocky terrain forms part of the natural landscape.
  </p>
      <br/>
                 <h4 className="cobes-eyebrow">WATER SUPPLY</h4>
<p>
                Residents obtain water mainly from boreholes and wells within the community, while some households also collect and use rainwater. The boreholes have tanks mounted on raised metal stands for storing pumped water before distribution to residents. Access to water did not appear to be a major problem; however, the safety of some water sources, particularly rainwater, may be affected by the sanitation conditions observed in the community.
</p>
 <br/>
                
                 <h4 className="cobes-eyebrow">SANITATION AND WASTE MANAGEMENT</h4>
<p>

                Sanitation was the most prominent concern observed in Oke Lade. Most houses do not have toilets, resulting in widespread open defecation. There is also no organized waste collection system, and refuse is commonly dumped in open spaces around the community. These practices may contaminate water sources and increase the risk of communicable and faecal-oral diseases.

</p>
 <br/>
                <h4 className="cobes-eyebrow">HEALTH FACILITIES</h4>
<p>
                A clinic attached to First ECWA Shao was identified within the community. It is a missionary or mission clinic operated by the church to provide basic health services to residents. Its presence gives residents some access to healthcare without travelling far, although the mapping exercise did not provide sufficient information to assess its staffing, equipment or utilization.
</p>
 <br/>
                 <h4 className="cobes-eyebrow">ELECTRICITY AND OTHER INFRASTRUCTURE</h4>
<p>
                Electricity infrastructure was observed in Oke Lade, including electricity poles, transmission lines and a transformer installation along the road. A signboard at the transformer indicated that it was installed by Moro Local Government as part of a project to supply electricity to Shao Township.
</p>
 <br/>
                <h4 className="cobes-eyebrow">NATURAL AND ENVIRONMENTAL FEATURES</h4>
<p>
                Oke Lade is characterized by rocky terrain, red lateritic soil and patches of greenery. The large rock formation associated with Shao is visible from several points within the community and contributes to its distinctive physical appearance.
</p>
 <br/>
                <h4 className="cobes-eyebrow">COMMUNITY RESOURCES IDENTIFIED</h4>

<p>
                The community resources identified during the mapping exercise included a major tarred road, the First ECWA Shao mission clinic, boreholes and wells, rainwater as an additional water source, electricity and transformer infrastructure, First ECWA Shao as a major religious landmark, and the surrounding rock formations and natural environment.
</p>
 <br/>
                <h4 className="cobes-eyebrow">HEALTH AND ENVIRONMENTAL CHALLENGES</h4>
<p>
                The major challenges observed in Oke Lade include the lack of toilets and widespread open defecation, the absence of an organized waste disposal system, poor accessibility of some untarred connecting roads during the rainy season, possible contamination of well, borehole and rainwater sources due to poor sanitation, and the resulting increased risk of communicable and faecal-oral diseases.
</p>
 <br/>
                <h4 className="cobes-eyebrow">RECOMMENDATIONS</h4>
<p>

                Households should be encouraged and supported to construct and use sanitary toilets, while an organized system for waste collection and disposal should be developed. Health education should focus on sanitation, personal hygiene and safe water practices, including the proper collection and handling of rainwater. Boreholes and wells should be protected from contamination and water quality should be monitored regularly. There is also a need to advocate for improvement of untarred roads leading into the community and to support the mission clinic with additional resources so that it can better serve residents.
</p>
 <br/>
                <h4 className="cobes-eyebrow">CONCLUSION</h4>

<p>
                Overall, the mapping exercise carried out in Oke Lade, Shao, on August 4, 2026, provided a clearer picture of living conditions in the area. The community has useful resources, including a tarred road, electricity, water sources and a mission clinic. However, sanitation, particularly the lack of toilets and proper waste disposal, remains the most prominent health challenge observed. Addressing these problems will require cooperation among residents, community leaders and relevant authorities.
</p>
 <br />
              </div>
              <button type="button" className="cobes-button cobes-button--primary" onClick={() => setModalOpen(false)}>Close note</button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}