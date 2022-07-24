interface FaviconProps {
  src: string
  alt?: string
}

export default function Favicon({ src, alt }: FaviconProps) {
  return <img src={src} alt={alt} className="w-auto h-6 mr-1 rounded-sm" />
}
