import test from 'node:test';
import assert from 'node:assert/strict';
import {syntheticPatients, syntheticSpecialists, lifecycle, nextStatus, selectMockSpecialist} from '../src/mock-data.js';
test('all patients have explicit synthetic identifiers',()=>{assert.equal(syntheticPatients.length,3);for(const p of syntheticPatients){assert.match(p.id,/^DEMO-/);assert.match(p.name,/^Demo Patient/);}});
test('only simulated specialist records exist',()=>{assert.ok(syntheticSpecialists.every(x=>x.id.startsWith('DEMO-')));assert.equal(selectMockSpecialist('Cardiology')?.name,'Dr Example One');assert.equal(selectMockSpecialist('Neurology'),null);});
test('referral transitions are monotonic and bounded',()=>{assert.equal(nextStatus(lifecycle[0]),lifecycle[1]);assert.equal(nextStatus(lifecycle.at(-1)),lifecycle.at(-1));assert.throws(()=>nextStatus('unexpected'),/Unknown referral state/);});
