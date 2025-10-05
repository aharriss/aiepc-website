import { useState } from 'react';
import { useRegistration } from '@/contexts/RegistrationContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const associations = [
  { id: 'legal', name: 'Legal Services Workers', benefits: ['Contract review support', 'Workplace rights education', 'Peer mentorship'], dues: '$15-25/mo', eligibility: 'Paralegals, legal assistants, clerks' },
  { id: 'healthcare', name: 'Healthcare Admin Alliance', benefits: ['HIPAA compliance training', 'Burnout prevention resources', 'Career advancement'], dues: '$12-20/mo', eligibility: 'Medical billing, scheduling, records' },
  { id: 'finance', name: 'Finance Operations Guild', benefits: ['Industry certifications', 'Networking events', 'Salary benchmarking'], dues: '$18-30/mo', eligibility: 'Accounting, payroll, analysts' },
  { id: 'support', name: 'Customer Support Collective', benefits: ['Mental health resources', 'Script library', 'Shift flexibility advocacy'], dues: '$10-18/mo', eligibility: 'Call center, chat support, help desk' },
];

const sectors = ['Legal Services', 'Healthcare Admin', 'Finance Ops', 'Customer Support', 'Claims & Underwriting', 'Back-office Tech', 'Education Admin'];

export default function Step1AssociationSelection() {
  const { setStep, updateData } = useRegistration();
  const [search, setSearch] = useState('');
  const [selectedSector, setSelectedSector] = useState('');

  const filtered = associations.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase()) || 
    (selectedSector && a.name.includes(selectedSector))
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-[#00308f] mb-2">Find Your Association</h1>
      <p className="text-gray-600 mb-6">Join a group of peers in your industry</p>
      
      <Input placeholder="Search by job title, SOC code, or keywords..." value={search} onChange={e => setSearch(e.target.value)} className="mb-4" />
      
      <div className="flex flex-wrap gap-2 mb-6">
        {sectors.map(s => (
          <Badge key={s} variant={selectedSector === s ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setSelectedSector(selectedSector === s ? '' : s)}>{s}</Badge>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map(assoc => (
          <Card key={assoc.id} className="hover:shadow-lg transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#00308f] mb-2">{assoc.name}</h3>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-2">
                {assoc.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
              <p className="text-sm text-gray-600 mb-2"><strong>Est. Dues:</strong> {assoc.dues}</p>
              <p className="text-sm text-gray-600 mb-4"><strong>Eligibility:</strong> {assoc.eligibility}</p>
              <Button onClick={() => { updateData({ selectedAssociation: assoc.id }); setStep(2); }} className="bg-[#00308f] hover:bg-[#5D8AA8]">Select</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
