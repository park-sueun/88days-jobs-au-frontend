export default function FormInput({ label, name, value, onChange }: any) {
  return (
    <div>
      <label className="text-sm text-gray-500">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none"
      />
    </div>
  )
}