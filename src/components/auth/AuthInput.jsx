export function AuthInput({ state, setState, label, type = 'text' }) {
  return <div>
    <label htmlFor={label} className="block text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      id={label}
      value={state}
      onChange={(e) => setState(e.target.value)}
      required
      className="w-full px-3 py-2 border rounded-md"
    />
  </div>;
}