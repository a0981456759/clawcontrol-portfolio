/* All entries are fictional synthetic demo data; no FHIR server, PHI or credentials. */
export const syntheticPatients = Object.freeze([
  {id:'DEMO-101',name:'Demo Patient Alpha',age:62,complaint:'Chest discomfort',acuity:'High',ews:7,status:'Awaiting referral',notes:'Synthetic scenario. No medical advice.'},
  {id:'DEMO-102',name:'Demo Patient Beta',age:44,complaint:'Wrist injury',acuity:'Medium',ews:3,status:'Specialist contacted',notes:'Synthetic scenario. No medical advice.'},
  {id:'DEMO-103',name:'Demo Patient Gamma',age:29,complaint:'Headache',acuity:'Low',ews:1,status:'Case room ready',notes:'Synthetic scenario. No medical advice.'}
]);
export const syntheticSpecialists = Object.freeze([
  {id:'DEMO-SP-1',name:'Dr Example One',specialty:'Cardiology',available:true,method:'Mock contact'},
  {id:'DEMO-SP-2',name:'Dr Example Two',specialty:'Orthopaedics',available:true,method:'Mock contact'},
  {id:'DEMO-SP-3',name:'Dr Example Three',specialty:'Neurology',available:false,method:'Unavailable'}
]);
export const lifecycle = Object.freeze(['Awaiting referral','Specialist contacted','Case room ready','Closed']);
export function nextStatus(status) {
  const idx=lifecycle.indexOf(status);
  if(idx<0) throw new Error('Unknown referral state');
  return lifecycle[Math.min(idx+1,lifecycle.length-1)];
}
export function selectMockSpecialist(specialty) {
  return syntheticSpecialists.find(s=>s.specialty===specialty && s.available) || null;
}
