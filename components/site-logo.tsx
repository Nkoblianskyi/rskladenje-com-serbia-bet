import Link from "next/link"
import Image from "next/image"

interface BrandLogoProps {
  className?: string
  velicina?: "sm" | "md" | "lg"
}

export function SiteLogo({ className = "", velicina = "md" }: BrandLogoProps) {
  const sizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const iconSizes = {
    sm: "h-5 w-5",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  }

  return (
    <Link href="/" className={`flex items-center gap-2 hover:opacity-90 transition-opacity group ${className}`}>
      <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="Logo" width={44} height={44} />
        <div className="flex flex-col">
          <span className={`${sizes[velicina]} font-bold tracking-tight text-foreground leading-none`}>
            RS<span className="text-primary">kladenje</span>
          </span>
        </div>
      </div>
    </Link>
  )
}
