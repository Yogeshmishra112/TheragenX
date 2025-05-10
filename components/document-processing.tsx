"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Upload, Check, Loader2 } from "lucide-react"

export default function DocumentProcessing() {
  const [stage, setStage] = useState<"upload" | "processing" | "complete">("upload")
  const [progress, setProgress] = useState(0)

  const handleUpload = () => {
    setStage("processing")

    // Simulate processing progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += 5
      setProgress(currentProgress)

      if (currentProgress >= 100) {
        clearInterval(interval)
        setStage("complete")
      }
    }, 200)
  }

  return (
    <Card className="border shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 text-white">
        <h3 className="font-bold flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Medical Document Processor
        </h3>
      </div>

      <div className="p-6">
        {stage === "upload" && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="h-20 w-20 rounded-full bg-teal-50 flex items-center justify-center mb-6">
              <Upload className="h-10 w-10 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Upload Medical Documents</h3>
            <p className="text-gray-500 text-center mb-6 max-w-md">
              Drag and drop your medical documents or click to browse. We support PDF, DICOM, JPG, PNG, and text files.
            </p>
            <div className="flex gap-4">
              <Button
                onClick={handleUpload}
                className="bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 hover:shadow-lg"
              >
                Upload Files
              </Button>
              <Button variant="outline">Browse Examples</Button>
            </div>
          </div>
        )}

        {stage === "processing" && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="h-20 w-20 rounded-full bg-teal-50 flex items-center justify-center mb-6 relative">
              <div className="absolute inset-0 rounded-full border-4 border-teal-200"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-teal-500"
                style={{
                  clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
                  clipPath: `path('M 50,50 m 0,-45 a 45,45 0 1 1 0,90 a 45,45 0 1 1 0,-90')`,
                  strokeDasharray: 283,
                  strokeDashoffset: 283 - (283 * progress) / 100,
                }}
              ></div>
              <Loader2 className="h-10 w-10 text-teal-500 animate-spin" />
            </div>
            <h3 className="text-xl font-bold mb-2">Processing Documents</h3>
            <p className="text-gray-500 text-center mb-6 max-w-md">
              Our AI is analyzing your documents, extracting key medical information, and structuring the data.
            </p>
            <div className="w-full max-w-md bg-gray-100 rounded-full h-2.5 mb-2">
              <div
                className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{progress}% Complete</p>
          </div>
        )}

        {stage === "complete" && (
          <div className="flex flex-col">
            <div className="flex items-center justify-center py-6 mb-4">
              <div className="h-16 w-16 rounded-full bg-green-50 flex items-center justify-center mr-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Processing Complete</h3>
                <p className="text-gray-500">Your documents have been successfully processed.</p>
              </div>
            </div>

            <div className="border rounded-lg mb-6">
              <div className="p-4 border-b bg-gray-50 font-medium">Extracted Information</div>
              <div className="p-4 space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Patient Information</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm font-medium">Name</div>
                      <div>John Smith</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">DOB</div>
                      <div>05/12/1965</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Gender</div>
                      <div>Male</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">MRN</div>
                      <div>MRN-2023-45678</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Clinical Information</div>
                  <div className="space-y-2">
                    <div>
                      <div className="text-sm font-medium">Diagnosis</div>
                      <div>Essential (primary) hypertension (I10)</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Vital Signs</div>
                      <div>BP: 145/95 mmHg, HR: 78 bpm, Temp: 98.6°F, RR: 16/min</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Medications</div>
                      <div>Lisinopril 10mg daily, Aspirin 81mg daily</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-500 mb-1">Lab Results</div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Glucose</span>: 105 mg/dL
                      </div>
                      <div className="text-amber-500 text-sm">Slightly Elevated</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">Total Cholesterol</span>: 210 mg/dL
                      </div>
                      <div className="text-amber-500 text-sm">Elevated</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">HDL</span>: 45 mg/dL
                      </div>
                      <div className="text-green-500 text-sm">Normal</div>
                    </div>
                    <div className="flex justify-between">
                      <div>
                        <span className="font-medium">LDL</span>: 135 mg/dL
                      </div>
                      <div className="text-amber-500 text-sm">Elevated</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 hover:shadow-lg">
                View Full Report
              </Button>
              <Button variant="outline" onClick={() => setStage("upload")}>
                Process Another Document
              </Button>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
