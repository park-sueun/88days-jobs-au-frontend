export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">

      <div className="p-6 font-bold text-xl">
        Back Office
      </div>

      <nav className="px-4 space-y-2">

        <a className="block px-4 py-2 rounded bg-orange-500 text-white">
          Companies
        </a>

        <a className="block px-4 py-2 rounded hover:bg-gray-100">
          Users
        </a>

      </nav>

    </aside>
  )
}