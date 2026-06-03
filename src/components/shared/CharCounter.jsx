export default function CharCounter({ value = '', max }) {
  const len = value.length
  const pct = max ? len / max : 0
  let color = 'text-gray-400'
  if (pct >= 1) color = 'text-red-500 font-semibold'
  else if (pct >= 0.8) color = 'text-yellow-500'
  return (
    <span className={`text-xs ${color} ml-1`}>{len}/{max}</span>
  )
}
