import {syntheticPatients,syntheticSpecialists,nextStatus,selectMockSpecialist} from './mock-data.js';
const items=syntheticPatients.map(p=>({...p}));
let selected=items[0].id;
const list=document.querySelector('#patient-list');
const detail=document.querySelector('#case-detail');
const safe=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){
  list.innerHTML=items.map(p=>`<button class="patient ${p.id===selected?'active':''}" data-id="${p.id}"><span class="patient-id">${safe(p.id)} · EWS ${p.ews}</span><strong>${safe(p.name)}</strong><span>${safe(p.complaint)}</span><span class="pill ${p.acuity.toLowerCase()}">${safe(p.acuity)} acuity</span></button>`).join('');
  list.querySelectorAll('[data-id]').forEach(btn=>btn.addEventListener('click',()=>{selected=btn.dataset.id;render()}));
  const p=items.find(x=>x.id===selected);
  const spec=syntheticSpecialists.find(x=>x.id===p.specialistId);
  detail.innerHTML=`<div class="case-id">${safe(p.id)} <span class="pill">${safe(p.status)}</span></div><h3>${safe(p.name)}</h3><div class="facts"><span>Presenting issue <strong>${safe(p.complaint)}</strong></span><span>Early warning score <strong>${p.ews}</strong></span><span>Acuity <strong>${safe(p.acuity)}</strong></span></div><div class="stepper">${['Awaiting referral','Specialist contacted','Case room ready','Closed'].map((x,i)=>`<div class="step ${['Awaiting referral','Specialist contacted','Case room ready','Closed'].indexOf(p.status)>=i?'done':''}"><span>${i+1}</span>${x}</div>`).join('')}</div><label for="specialty">On-call specialist</label><select id="specialty"><option>Cardiology</option><option>Orthopaedics</option><option>Neurology</option></select><div class="match" id="match">Selected: ${spec?safe(spec.name):'None'}</div><div class="actions"><button id="match-button" class="secondary">Find mock specialist</button><button id="advance-button" ${p.status==='Closed'?'disabled':''}>Advance demo workflow →</button><button id="reset-button" class="ghost">Reset case</button></div><p class="disclaimer">All actions update local memory only. No requests, telephone calls, patient records, or AI outputs are generated.</p>`;
  const select=document.querySelector('#specialty');
  if(spec) select.value=spec.specialty;
  document.querySelector('#match-button').addEventListener('click',()=>{const s=selectMockSpecialist(select.value);p.specialistId=s?.id;document.querySelector('#match').textContent=s?`Mock match: ${s.name} — ${s.specialty}`:'No simulated on-call specialist available';});
  document.querySelector('#advance-button').addEventListener('click',()=>{if(p.status==='Awaiting referral'&&!p.specialistId){document.querySelector('#match').textContent='Choose an available specialist before advancing';return}p.status=nextStatus(p.status);render()});
  document.querySelector('#reset-button').addEventListener('click',()=>{const original=syntheticPatients.find(x=>x.id===selected);Object.assign(p,original);delete p.specialistId;render()});
}
render();