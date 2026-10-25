export const mapsSearchUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export const mapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`

export const mapsDirectionsUrl = (
  destination: string,
  origin?: string,
  travelmode: 'driving' | 'walking' = 'driving',
) => {
  const params = new URLSearchParams({ api: '1', destination, travelmode })
  if (origin) params.set('origin', origin)
  return `https://www.google.com/maps/dir/?${params}`
}
