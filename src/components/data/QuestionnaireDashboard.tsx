import { useEffect, useMemo, useState } from 'react';
import { canonicalRegions, dataQualityNotice, type CanonicalRegion } from '../../data/projectData';
import { loadQuestionnaire, questionnaireGroups, responseDistribution, type QuestionnaireRow } from '../../data/questionnaire';

const tidy = (field: string) => field.replace(/[? ]+$/, '');

export function QuestionnaireDashboard() {
  const [rows, setRows] = useState<QuestionnaireRow[]>([]);
  const [error, setError] = useState('');
  const [region, setRegion] = useState<CanonicalRegion>();
  const [groupIndex, setGroupIndex] = useState(0);
  const [field, setField] = useState<string>(questionnaireGroups[0].fields[1]);
  useEffect(() => { loadQuestionnaire().then(setRows).catch((reason) => setError(reason.message)); }, []);
  const group = questionnaireGroups[groupIndex];
  const distribution = useMemo(() => responseDistribution(rows, field, region), [rows, field, region]);
  const maximum = distribution[0]?.value ?? 1;
  const mapped = rows.filter((row) => row.regionStatus === 'mapped').length;
  return <section id="assessment" className="section-shell py-20">
    <div className="split-heading"><div><div className="eyebrow">Community assessment dashboard</div><h1>Evidence, held to a higher standard.</h1></div><p className="lede">Responses are loaded from the supplied questionnaire workbook in the browser. Public respondent totals remain intentionally unpublished pending record-count verification.</p></div>
    <div className="quality-notice"><strong>Data quality notice</strong><span>{dataQualityNotice}</span><small>Project report: 355 collated questionnaires · Current spreadsheet: 436 response rows</small></div>
    {error ? <p className="error-message">{error}</p> : <>
      <div className="dashboard-top"><div><span>Workbook status</span><b>{rows.length ? 'Loaded from source' : 'Reading workbook…'}</b></div><div><span>Canonical regions</span><b>{canonicalRegions.length} defined</b></div><div><span>Mapped records</span><b>{rows.length ? `${mapped} reviewable` : '—'}</b></div></div>
      <div className="filter-row"><label>Canonical region<select value={region ?? ''} onChange={(event) => setRegion(event.target.value as CanonicalRegion || undefined)}><option value="">All verified mappings</option>{canonicalRegions.map((item) => <option key={item}>{item}</option>)}</select></label><p>Only verified canonical mappings are filterable. Unmapped values remain excluded from regional views pending review.</p></div>
      <div className="question-layout"><aside>{questionnaireGroups.map((item, index) => <button key={item.title} className={index === groupIndex ? 'active' : ''} onClick={() => { setGroupIndex(index); setField(item.fields[0]); }}>{item.title}</button>)}</aside><div className="question-panel"><div className="field-select"><label>Question<select value={field} onChange={(event) => setField(event.target.value)}>{group.fields.map((item) => <option key={item} value={item}>{tidy(item)}</option>)}</select></label><small>Top response categories by submitted workbook value. Open-ended answers are shown as exact entries, not inferred themes.</small></div>{distribution.length ? <div className="response-bars">{distribution.map((item) => <div key={item.label}><span title={item.label}>{item.label}</span><i><em style={{ width: `${(item.value / maximum) * 100}%` }} /></i><b>{item.value}</b></div>)}</div> : <p className="empty-state">{rows.length ? 'No completed answers are available for this question and filter.' : 'Preparing source data…'}</p>}</div></div>
    </>}</section>;
}
