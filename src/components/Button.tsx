import { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'disabled'
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

export default function Button({ variant = 'primary', className = '', ...rest }: Props) {
  const base = 'btn-base'
  const variants: Record<Variant, string> = {
    primary: 'gradient-primary',
    secondary: 'btn-secondary',
    disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
  }
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    />
  )
}

