export type ShortLink = {
  label: string
  url: string
}

export const shortLinks: Record<string, ShortLink> = {
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/itbamuhammad/' },
  github: { label: 'GitHub', url: 'https://github.com/dahanlapuk' },
  instagram: { label: 'Instagram', url: 'https://www.instagram.com/itbamuhammad_' },
  facebook: { label: 'Facebook', url: 'https://www.facebook.com/itbamuhammad.kamil.3' },
  medium: { label: 'Medium', url: 'https://medium.com/@itbamuhammad' },
  twitter: { label: 'X (Twitter)', url: 'https://x.com/itbamuhammad_' },
  youtube: { label: 'YouTube', url: 'https://youtu.be/eEtHOsudTNw' },
  karyakarsa: { label: 'KaryaKarsa', url: 'https://karyakarsa.com/dahanlapuk' },
}

const aliases: Record<string, string> = {
  x: 'twitter',
  ig: 'instagram',
  fb: 'facebook',
  yt: 'youtube',
  gh: 'github',
  li: 'linkedin',
}

export function resolveShortLink(slug: string): ShortLink | undefined {
  const key = slug.toLowerCase()
  const target = Object.hasOwn(aliases, key) ? aliases[key] : key
  return Object.hasOwn(shortLinks, target) ? shortLinks[target] : undefined
}
