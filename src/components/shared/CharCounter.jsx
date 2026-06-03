export default function CharCounter({ value = '', max }) {
  const len = value.length
  const pct = max ? len / max : 0
  let color = '#9a9a9a'
  if (pct >= 1) color = '#d0021b'
  else if (pct >= 0.8) color = '#c57a00'
  return (
    <span style={{ fontSize: 11, color, fontFamily: "'DM Mono', monospace", marginLeft: 4 }}>{len}/{max}</span>
  )
}
