import { ReactNode } from 'react'

type Props = { children: ReactNode }
export default function MobileContainer({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center p-6">
      <div className="mobile-frame">
        {children}
      </div>
    </div>
  )
}

