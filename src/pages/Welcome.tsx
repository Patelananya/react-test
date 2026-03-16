import { Link } from 'react-router-dom'
import Button from '@/components/Button'

export default function Welcome() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-gray-900">Welcome to PopX</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <Link to="/register">
          <Button>Create Account</Button>
        </Link>
        <Link to="/login">
          <Button variant="secondary">Already Registered? Login</Button>
        </Link>
      </div>
    </div>
  )
}

