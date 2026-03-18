type Props = {
  title: string
  value: string
}

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">

      <div className="text-sm text-gray-500">
        {title}
      </div>

      <div className="text-2xl font-bold mt-2">
        {value}
      </div>

    </div>
  )
}