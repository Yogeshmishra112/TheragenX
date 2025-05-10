"use client"

import { useEffect, useRef } from "react"

interface AnalyticsChartProps {
  type: "line" | "bar" | "pie"
}

export default function AnalyticsChart({ type }: AnalyticsChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = 300

    // Common colors
    const colors = {
      teal: "rgba(20, 184, 166, 1)",
      tealLight: "rgba(20, 184, 166, 0.2)",
      cyan: "rgba(6, 182, 212, 1)",
      cyanLight: "rgba(6, 182, 212, 0.2)",
      amber: "rgba(245, 158, 11, 1)",
      amberLight: "rgba(245, 158, 11, 0.2)",
      rose: "rgba(225, 29, 72, 1)",
      roseLight: "rgba(225, 29, 72, 0.2)",
    }

    // Sample data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    const data = [65, 59, 80, 81, 56, 55]
    const data2 = [28, 48, 40, 19, 86, 27]
    const data3 = [35, 25, 30, 52, 45, 40]

    const pieData = [30, 25, 15, 20, 10]
    const pieLabels = ["Cardiology", "Neurology", "Oncology", "Pediatrics", "Other"]
    const pieColors = [colors.teal, colors.cyan, colors.amber, colors.rose, "#9333ea"]

    const barData = [
      { label: "Cardiology", value: 85 },
      { label: "Neurology", value: 75 },
      { label: "Oncology", value: 90 },
      { label: "Pediatrics", value: 65 },
      { label: "Radiology", value: 80 },
    ]

    // Draw line chart
    const drawLineChart = () => {
      const padding = 40
      const chartWidth = canvas.width - padding * 2
      const chartHeight = canvas.height - padding * 2
      const stepX = chartWidth / (months.length - 1)
      const stepY = chartHeight / 100

      // Draw axes
      ctx.beginPath()
      ctx.strokeStyle = "#e5e7eb"
      ctx.lineWidth = 1
      ctx.moveTo(padding, padding)
      ctx.lineTo(padding, canvas.height - padding)
      ctx.lineTo(canvas.width - padding, canvas.height - padding)
      ctx.stroke()

      // Draw months
      ctx.textAlign = "center"
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px sans-serif"
      months.forEach((month, i) => {
        const x = padding + i * stepX
        ctx.fillText(month, x, canvas.height - padding / 2)
      })

      // Draw y-axis labels
      ctx.textAlign = "right"
      ctx.fillStyle = "#6b7280"
      for (let i = 0; i <= 100; i += 20) {
        const y = canvas.height - padding - i * stepY
        ctx.fillText(i.toString(), padding - 10, y + 4)
      }

      // Draw grid lines
      ctx.beginPath()
      ctx.strokeStyle = "#f3f4f6"
      ctx.lineWidth = 1
      for (let i = 20; i <= 100; i += 20) {
        const y = canvas.height - padding - i * stepY
        ctx.moveTo(padding, y)
        ctx.lineTo(canvas.width - padding, y)
      }
      ctx.stroke()

      // Draw line 1
      ctx.beginPath()
      ctx.strokeStyle = colors.teal
      ctx.lineWidth = 3
      ctx.moveTo(padding, canvas.height - padding - data[0] * stepY)
      for (let i = 1; i < data.length; i++) {
        const x = padding + i * stepX
        const y = canvas.height - padding - data[i] * stepY
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Draw area under line 1
      ctx.beginPath()
      ctx.fillStyle = colors.tealLight
      ctx.moveTo(padding, canvas.height - padding - data[0] * stepY)
      for (let i = 1; i < data.length; i++) {
        const x = padding + i * stepX
        const y = canvas.height - padding - data[i] * stepY
        ctx.lineTo(x, y)
      }
      ctx.lineTo(padding + (data.length - 1) * stepX, canvas.height - padding)
      ctx.lineTo(padding, canvas.height - padding)
      ctx.closePath()
      ctx.fill()

      // Draw line 2
      ctx.beginPath()
      ctx.strokeStyle = colors.cyan
      ctx.lineWidth = 3
      ctx.moveTo(padding, canvas.height - padding - data2[0] * stepY)
      for (let i = 1; i < data2.length; i++) {
        const x = padding + i * stepX
        const y = canvas.height - padding - data2[i] * stepY
        ctx.lineTo(x, y)
      }
      ctx.stroke()

      // Draw area under line 2
      ctx.beginPath()
      ctx.fillStyle = colors.cyanLight
      ctx.moveTo(padding, canvas.height - padding - data2[0] * stepY)
      for (let i = 1; i < data2.length; i++) {
        const x = padding + i * stepX
        const y = canvas.height - padding - data2[i] * stepY
        ctx.lineTo(x, y)
      }
      ctx.lineTo(padding + (data2.length - 1) * stepX, canvas.height - padding)
      ctx.lineTo(padding, canvas.height - padding)
      ctx.closePath()
      ctx.fill()

      // Draw legend
      const legendX = canvas.width - 150
      const legendY = padding + 20

      ctx.fillStyle = colors.teal
      ctx.fillRect(legendX, legendY, 15, 15)
      ctx.fillStyle = "#374151"
      ctx.textAlign = "left"
      ctx.fillText("New Cases", legendX + 25, legendY + 12)

      ctx.fillStyle = colors.cyan
      ctx.fillRect(legendX, legendY + 25, 15, 15)
      ctx.fillStyle = "#374151"
      ctx.fillText("Resolved Cases", legendX + 25, legendY + 37)
    }

    // Draw pie chart
    const drawPieChart = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = Math.min(centerX, centerY) - 40

      const total = pieData.reduce((sum, value) => sum + value, 0)
      let startAngle = -Math.PI / 2

      // Draw pie slices
      for (let i = 0; i < pieData.length; i++) {
        const sliceAngle = (2 * Math.PI * pieData[i]) / total

        ctx.beginPath()
        ctx.fillStyle = pieColors[i]
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
        ctx.closePath()
        ctx.fill()

        // Draw slice label
        const labelAngle = startAngle + sliceAngle / 2
        const labelRadius = radius * 0.7
        const labelX = centerX + labelRadius * Math.cos(labelAngle)
        const labelY = centerY + labelRadius * Math.sin(labelAngle)

        ctx.fillStyle = "#ffffff"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.font = "bold 14px sans-serif"
        ctx.fillText(`${Math.round((pieData[i] / total) * 100)}%`, labelX, labelY)

        startAngle += sliceAngle
      }

      // Draw legend
      const legendX = canvas.width - 120
      const legendY = 40

      ctx.textAlign = "left"
      ctx.textBaseline = "middle"
      ctx.font = "12px sans-serif"

      for (let i = 0; i < pieLabels.length; i++) {
        const y = legendY + i * 25

        ctx.fillStyle = pieColors[i]
        ctx.fillRect(legendX, y, 15, 15)

        ctx.fillStyle = "#374151"
        ctx.fillText(pieLabels[i], legendX + 25, y + 7)
      }
    }

    // Draw bar chart
    const drawBarChart = () => {
      const padding = 40
      const chartWidth = canvas.width - padding * 2
      const chartHeight = canvas.height - padding * 2
      const barWidth = chartWidth / barData.length / 1.5
      const maxValue = Math.max(...barData.map((item) => item.value))
      const stepY = chartHeight / maxValue

      // Draw axes
      ctx.beginPath()
      ctx.strokeStyle = "#e5e7eb"
      ctx.lineWidth = 1
      ctx.moveTo(padding, padding)
      ctx.lineTo(padding, canvas.height - padding)
      ctx.lineTo(canvas.width - padding, canvas.height - padding)
      ctx.stroke()

      // Draw y-axis labels
      ctx.textAlign = "right"
      ctx.fillStyle = "#6b7280"
      ctx.font = "12px sans-serif"
      for (let i = 0; i <= maxValue; i += 20) {
        const y = canvas.height - padding - i * stepY
        ctx.fillText(i.toString(), padding - 10, y + 4)
      }

      // Draw grid lines
      ctx.beginPath()
      ctx.strokeStyle = "#f3f4f6"
      ctx.lineWidth = 1
      for (let i = 20; i <= maxValue; i += 20) {
        const y = canvas.height - padding - i * stepY
        ctx.moveTo(padding, y)
        ctx.lineTo(canvas.width - padding, y)
      }
      ctx.stroke()

      // Draw bars
      const barSpacing = chartWidth / barData.length

      for (let i = 0; i < barData.length; i++) {
        const item = barData[i]
        const barHeight = item.value * stepY
        const x = padding + i * barSpacing + (barSpacing - barWidth) / 2
        const y = canvas.height - padding - barHeight

        // Create gradient for bar
        const gradient = ctx.createLinearGradient(x, y, x, canvas.height - padding)
        gradient.addColorStop(0, colors.teal)
        gradient.addColorStop(1, colors.cyan)

        // Draw bar
        ctx.fillStyle = gradient
        ctx.fillRect(x, y, barWidth, barHeight)

        // Draw value on top of bar
        ctx.fillStyle = "#374151"
        ctx.textAlign = "center"
        ctx.fillText(item.value.toString(), x + barWidth / 2, y - 10)

        // Draw label below bar
        ctx.fillStyle = "#6b7280"
        ctx.fillText(item.label, x + barWidth / 2, canvas.height - padding + 20)
      }
    }

    // Draw the appropriate chart based on type
    if (type === "line") {
      drawLineChart()
    } else if (type === "pie") {
      drawPieChart()
    } else if (type === "bar") {
      drawBarChart()
    }

    // Handle resize
    const handleResize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth
        canvas.height = 300

        if (type === "line") {
          drawLineChart()
        } else if (type === "pie") {
          drawPieChart()
        } else if (type === "bar") {
          drawBarChart()
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [type])

  return <canvas ref={canvasRef} className="w-full h-[300px]" />
}
