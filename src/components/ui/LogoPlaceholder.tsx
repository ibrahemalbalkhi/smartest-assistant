export default function LogoPlaceholder({ width = 180, height = 54, className = "" }: { width?: number; height?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 200 60" 
      width={width} 
      height={height}
      className={className}
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0066CC', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0052A3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      
      <circle cx="30" cy="30" r="20" fill="url(#logo-gradient)"/>
      <text x="30" y="35" fontFamily="Inter, Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="white">SA</text>
      <text x="60" y="35" fontFamily="Inter, Arial, sans-serif" fontSize="18" fontWeight="600" fill="#111827">Smartest Assistant</text>
    </svg>
  )
}