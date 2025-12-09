export function AuthInput({ id, state, setState, label, type = 'text' }) {
  return <div>
    <label htmlFor={id} className="block mb-1">{label}</label>
    <input
      type={type}
      id={id}
      value={state}
      onChange={(e) => setState(e.target.value)}
      required
      className="w-full px-3 py-2 border rounded-md text-black"
    />
  </div>;
}