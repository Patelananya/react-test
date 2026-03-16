import { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  requiredMark?: boolean
}

export default function InputField({ label, requiredMark, className = '', ...rest }: Props) {
  return (
    <div className="space-y-1">
      <label className="field-label">
        {label}{requiredMark ? <span className="text-red-500 ml-0.5">*</span> : null}
      </label>
      <input className={`field-input ${className}`} {...rest} />
    </div>
  )
}

