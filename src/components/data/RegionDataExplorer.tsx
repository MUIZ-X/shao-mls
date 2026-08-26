import { useEffect, useMemo, useState } from 'react';
import { Bar, ComposedChart, Area, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadQuestionnaire, questionnaireFields, responseDistribution, type QuestionnaireRow } from '../../data/questionnaire';
import type { CanonicalRegion } from '../../data/projectData';

export function RegionDataExplorer({ region }: { region: CanonicalRegion }) {
  const [rows, setRows] = useState<QuestionnaireRow[]>([]);
  const [field, setField] = useState('');

  useEffect(() => {
    loadQuestionnaire().then((data) => {
      setRows(data);
      setField(questionnaireFields(data)[0] ?? '');
    });
  }, []);

  const fields = questionnaireFields(rows);
  const values = useMemo(() => responseDistribution(rows, field, region), [rows, field, region]);
  const total = rows.filter((row) => row.normalizedRegion === region).length;

  return <section className="region-explorer" aria-live="polite">
    <div className="region-explorer-head"><div><span className="eyebrow">Regional workbook view</span><h2>{region}</h2><p>Response distributions reflect only rows with a verified canonical mapping to this region. Matriculation numbers are excluded.</p></div><b>{rows.length ? `${total} verified rows` : 'Loading rows...'}</b></div>
    {rows.length > 0 && <><label className="region-question">Spreadsheet question<select value={field} onChange={(event) => setField(event.target.value)}>{fields.map((item) => <option key={item} value={item}>{item.trim()}</option>)}</select></label>
      {values.length ? <div className="region-chart-panel"><div className="chart-panel-head"><span>Response distribution</span><small>Count of completed answers</small></div><div className="region-chart"><ResponsiveContainer width="100%" height="100%"><ComposedChart data={values} margin={{ top: 12, right: 12, left: -16, bottom: 52 }}><CartesianGrid vertical={false} stroke="rgba(44,180,100,0.06)" /><XAxis dataKey="label" interval={0} angle={-28} textAnchor="end" tick={{ fill: '#9fcfb6', fontSize: 11 }} tickLine={false} axisLine={false} /><YAxis allowDecimals={false} tick={{ fill: '#9fcfb6', fontSize: 11 }} tickLine={false} axisLine={false} /><Tooltip cursor={{ fill: 'rgba(34, 150, 90, 0.06)' }} contentStyle={{ background: '#071014', border: '1px solid rgba(44,180,100,.08)', borderRadius: 8, color: '#eafff0' }} /><Area type="monotone" dataKey="value" stroke="#49c776" fill="rgba(49,180,100,0.06)" fillOpacity={0.9} isAnimationActive={true} animationDuration={800} /><Bar dataKey="value" radius={[6, 6, 6, 6]}>{values.map((item, index) => <Cell key={item.label} fill={index === 0 ? '#1DB954' : '#49c776'} />)}</Bar></ComposedChart></ResponsiveContainer></div></div> : <p className="empty-state">No completed answers for this question in verified {region} rows.</p>}</>}
  </section>;
}
