import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CaseStatusCardProps {
  title: string
  count: number
  icon: ReactNode
  color: string
  change: string
}

export default function CaseStatusCard({ title, count, icon, color, change }: CaseStatusCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-lg overflow-hidden">
      <div className={`h-1 w-full bg-gradient-to-r ${color}`}></div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center">
          <div className={`mr-2 h-8 w-8 rounded-full bg-gradient-to-r ${color} flex items-center justify-center`}>
            {icon}
          </div>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{count}</div>
        <p className="text-sm text-gray-500">{change}</p>
        <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${color} rounded-full`}
            style={{ width: `${Math.min(count, 100)}%` }}
          ></div>
        </div>
      </CardContent>
    </Card>
  )
}
