import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/Button'
import InputField from '@/components/InputField'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const canLogin = useMemo(() => email.trim() !== '' && password.trim() !== '', [email, password])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/account')
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">Signin to your PopX account</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <InputField
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={e => setEmail((e.target as HTMLInputElement).value)}
          requiredMark
          required
        />
        <InputField
          label="Password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={e => setPassword((e.target as HTMLInputElement).value)}
          requiredMark
          required
        />
        <div className="pt-2">
          <Button type="submit" variant={canLogin ? 'primary' : 'disabled'} disabled={!canLogin}>
            Login
          </Button>
        </div>
      </form>
    </div>
  )
}
