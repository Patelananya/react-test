export default function AccountSettings() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-semibold text-gray-900">Account Settings</h1>

      <section className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/100?img=47"
          alt="User"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="min-w-0">
          <div className="text-gray-900 font-medium truncate">Marry Doe</div>
          <div className="text-gray-600 text-sm truncate">Marry@gmail.com</div>
        </div>
      </section>

      <hr className="border-gray-200" />

      <p className="text-gray-700 text-sm leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  )
}

