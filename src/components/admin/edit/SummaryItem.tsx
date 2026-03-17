export default function SummaryItem({ label, value }: any) {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-lg font-semibold mt-2">{value}</p>
    </div>
  )
}