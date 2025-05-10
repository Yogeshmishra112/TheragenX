import type { ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="absolute h-1 w-full bg-gradient-to-r from-teal-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="flex h-12 w-12 min-w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-600 shadow-md group-hover:shadow-lg transition-all duration-300">
          {icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl leading-snug min-h-[56px]">{title}</CardTitle>
        </div>
      </CardHeader>
      
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
