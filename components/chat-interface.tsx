"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Brain, Send, User, FileText, Paperclip } from "lucide-react"

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      content:
        "Hello Dr. Johnson, I've analyzed the patient's lab results and medical history. How can I assist you today?",
    },
    {
      role: "user",
      content:
        "The patient has elevated blood pressure (145/95) and complains of occasional headaches. What should I consider?",
    },
    {
      role: "ai",
      content:
        "Based on the blood pressure reading of 145/95 mmHg, the patient has Stage 1 hypertension according to current guidelines. The headaches could be related to the elevated blood pressure.\n\nConsiderations:\n\n1. Review the patient's full medical history for other cardiovascular risk factors\n2. Check for secondary causes of hypertension\n3. Assess for target organ damage\n4. Consider lifestyle modifications (reduced sodium intake, increased physical activity, weight management)\n5. Medication options could include ACE inhibitors, ARBs, or calcium channel blockers as first-line therapy\n\nWould you like me to analyze specific aspects of this case in more detail?",
    },
  ])

  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    // Add user message
    setMessages([...messages, { role: "user", content: newMessage }])
    setNewMessage("")

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "I've analyzed this further. Given the patient's symptoms and blood pressure readings, I recommend scheduling a 24-hour ambulatory blood pressure monitoring to confirm the diagnosis of hypertension. Additionally, basic laboratory tests including electrolytes, kidney function, lipid profile, and blood glucose would be appropriate.\n\nIf hypertension is confirmed, a low-dose thiazide diuretic or calcium channel blocker would be reasonable first-line options given the patient profile. Would you like me to provide a detailed treatment plan based on current guidelines?",
        },
      ])
    }, 1000)
  }

  return (
    <Card className="border shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 text-white flex items-center justify-between">
        <div className="flex items-center">
          <Brain className="h-6 w-6 mr-2" />
          <h3 className="font-bold">TheragenX Medical Assistant</h3>
        </div>
        <div className="text-xs bg-white/20 px-2 py-1 rounded">Online</div>
      </div>

      <div className="h-[400px] overflow-y-auto p-4 bg-gray-50">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                  : "bg-white border shadow-sm"
              }`}
            >
              <div className="flex items-center mb-1">
                <div
                  className={`h-6 w-6 rounded-full flex items-center justify-center mr-2 ${
                    message.role === "user" ? "bg-white/20" : "bg-gradient-to-r from-teal-500 to-cyan-500"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Brain className="h-4 w-4 text-white" />
                  )}
                </div>
                <div className={`text-sm font-medium ${message.role === "user" ? "text-white" : "text-gray-700"}`}>
                  {message.role === "user" ? "You" : "TheragenXAi"}
                </div>
              </div>
              <div
                className={`text-sm whitespace-pre-line ${message.role === "user" ? "text-white" : "text-gray-600"}`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="flex items-center mb-2">
          <Button variant="outline" size="sm" className="mr-2">
            <FileText className="h-4 w-4 mr-1" />
            <span className="text-xs">View Patient Records</span>
          </Button>
          <Button variant="outline" size="sm">
            <Paperclip className="h-4 w-4 mr-1" />
            <span className="text-xs">Attach Files</span>
          </Button>
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Ask about patient diagnosis, treatment options, or medical research..."
            className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage()
            }}
          />
          <Button onClick={handleSendMessage} className="rounded-l-none bg-gradient-to-r from-teal-500 to-cyan-500">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
