import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/Button'
import InputField from '@/components/InputField'

export default function Register() {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [agency, setAgency] = useState<'yes' | 'no' | ''>('')
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/account')
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">Create your PopX account</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <InputField label="Full Name" requiredMark value={fullName} onChange={e => setFullName((e.target as HTMLInputElement).value)} />
        <InputField label="Phone number" requiredMark type="tel" value={phone} onChange={e => setPhone((e.target as HTMLInputElement).value)} />
        <InputField label="Email address" requiredMark type="email" value={email} onChange={e => setEmail((e.target as HTMLInputElement).value)} />
        <InputField label="Password" requiredMark type="password" value={password} onChange={e => setPassword((e.target as HTMLInputElement).value)} />
        <InputField label="Company name" value={company} onChange={e => setCompany((e.target as HTMLInputElement).value)} />

        <div>
          <div className="field-label">Are you an Agency?</div>
          <div className="flex items-center gap-6">
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="agency" value="yes" checked={agency === 'yes'} onChange={() => setAgency('yes')} className="accent-purple-600" />
              <span className="text-gray-800">Yes</span>
            </label>
            <label className="inline-flex items-center gap-2">
              <input type="radio" name="agency" value="no" checked={agency === 'no'} onChange={() => setAgency('no')} className="accent-purple-600" />
              <span className="text-gray-800">No</span>
            </label>
          </div>
        </div>

        <div className="pt-2">
          <Button type="submit">Create Account</Button>
        </div>
      </form>
    </div>
  )
}
