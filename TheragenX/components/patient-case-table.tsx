import { CheckCircle, Clock, AlertTriangle } from "lucide-react"

export default function PatientCaseTable() {
  const cases = [
    {
      id: "CS-2023-001",
      patient: "John Smith",
      age: 67,
      condition: "Hypertension",
      status: "Completed",
      priority: "Medium",
      date: "May 2, 2023",
    },
    {
      id: "CS-2023-045",
      patient: "Maria Garcia",
      age: 42,
      condition: "Diabetes Type 2",
      status: "In Progress",
      priority: "Medium",
      date: "May 3, 2023",
    },
    {
      id: "CS-2023-062",
      patient: "Robert Chen",
      age: 58,
      condition: "Coronary Artery Disease",
      status: "Urgent",
      priority: "High",
      date: "May 4, 2023",
    },
    {
      id: "CS-2023-078",
      patient: "Sarah Johnson",
      age: 35,
      condition: "Migraine",
      status: "In Progress",
      priority: "Low",
      date: "May 5, 2023",
    },
    {
      id: "CS-2023-093",
      patient: "David Williams",
      age: 72,
      condition: "COPD",
      status: "Completed",
      priority: "Medium",
      date: "May 6, 2023",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "In Progress":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "Urgent":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800"
      case "Medium":
        return "bg-amber-100 text-amber-800"
      case "Low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-3 text-left font-medium text-gray-500">Case ID</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Patient</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Age</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Condition</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Status</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Priority</th>
            <th className="px-4 py-3 text-left font-medium text-gray-500">Date</th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c) => (
            <tr key={c.id} className="border-b hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 font-medium">{c.id}</td>
              <td className="px-4 py-3">{c.patient}</td>
              <td className="px-4 py-3">{c.age}</td>
              <td className="px-4 py-3">{c.condition}</td>
              <td className="px-4 py-3">
                <div className="flex items-center">
                  {getStatusIcon(c.status)}
                  <span className="ml-2">{c.status}</span>
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getPriorityClass(c.priority)}`}
                >
                  {c.priority}
                </span>
              </td>
              <td className="px-4 py-3">{c.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
