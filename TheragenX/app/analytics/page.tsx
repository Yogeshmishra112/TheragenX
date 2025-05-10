// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   BarChart3,
//   LineChart,
//   PieChart,
//   Activity,
//   Calendar,
//   Clock,
//   CheckCircle2,
//   AlertTriangle,
//   FileText,
//   Brain,
// } from "lucide-react";
// import WaveDivider from "@/components/wave-divider";
// import AnalyticsChart from "@/components/analytics-chart";
// import CaseStatusCard from "@/components/case-status-card";
// import PatientCaseTable from "@/components/patient-case-table";
// import BackgroundAnimation from "@/components/background-animation";
// import { useState } from "react";
// import { Menu, X, } from "lucide-react"; 
// import Navbar from "@/components/navbar";

// export default function AnalyticsPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   return (
//     <div className="flex min-h-screen flex-col">
//       {/* Navigation */}
//       <Navbar/>


//       <main className="flex-1">
//         {/* Hero Section */}
//         {/* <section className="w-full py-12 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden"> */}
//         <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
//           <BackgroundAnimation />
//           {/* <div className="absolute top-0 left-0 w-full h-full opacity-20">
//             <svg
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               className="w-full h-full"
//             >
//               <defs>
//                 <pattern
//                   id="grid-pattern"
//                   width="10"
//                   height="10"
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <path
//                     d="M 10 0 L 0 0 0 10"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="0.5"
//                   />
//                 </pattern>
//               </defs>
//               <rect
//                 x="0"
//                 y="0"
//                 width="100%"
//                 height="100%"
//                 fill="url(#grid-pattern)"
//               />
//             </svg>
//           </div> */}

//           <div className="container relative z-10 px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                     Powerful Analytics for Better Decisions
//                   </h1>
//                   <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                     Gain actionable insights from patient data, track case
//                     progress, and make informed clinical decisions with our
//                     comprehensive analytics dashboard.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Button
//                     size="lg"
//                     className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-lg transition-all duration-300 hover:scale-105"
//                   >
//                     Request Demo
//                   </Button>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="transition-all duration-300 hover:scale-105"
//                   >
//                     Learn More
//                   </Button>
//                 </div>
//               </div>
//               <div className="flex justify-center">
//                 <div className="relative">
//                   <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 opacity-75 blur-xl animate-pulse"></div>
//                   <Image
//                     src="/placeholder.svg?height=500&width=500"
//                     width={500}
//                     height={500}
//                     alt="Analytics Dashboard"
//                     className="relative rounded-lg object-cover border shadow-lg transition-all duration-500 hover:scale-[1.02]"
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <WaveDivider color="#ffffff" />

//         {/* Dashboard Overview Section */}
//         <section className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Comprehensive Dashboard
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Monitor patient cases, track outcomes, and visualize clinical
//                   data in real-time.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-lg font-medium flex items-center">
//                     <Activity className="mr-2 h-5 w-5 text-teal-600" />
//                     Active Cases
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold text-teal-600">247</div>
//                   <p className="text-sm text-gray-500">+12% from last month</p>
//                   <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
//                     <div
//                       className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
//                       style={{ width: "75%" }}
//                     ></div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-lg font-medium flex items-center">
//                     <CheckCircle2 className="mr-2 h-5 w-5 text-teal-600" />
//                     Resolved Cases
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold text-teal-600">189</div>
//                   <p className="text-sm text-gray-500">+8% from last month</p>
//                   <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
//                     <div
//                       className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
//                       style={{ width: "65%" }}
//                     ></div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="text-lg font-medium flex items-center">
//                     <Clock className="mr-2 h-5 w-5 text-teal-600" />
//                     Avg. Resolution Time
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="text-3xl font-bold text-teal-600">
//                     3.2 days
//                   </div>
//                   <p className="text-sm text-gray-500">-15% from last month</p>
//                   <div className="mt-4 h-2 w-full bg-gray-100 rounded-full overflow-hidden">
//                     <div
//                       className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
//                       style={{ width: "85%" }}
//                     ></div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <LineChart className="mr-2 h-5 w-5 text-teal-600" />
//                     Case Trends
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <AnalyticsChart type="line" />
//                 </CardContent>
//               </Card>

//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <PieChart className="mr-2 h-5 w-5 text-teal-600" />
//                     Case Distribution
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <AnalyticsChart type="pie" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         <WaveDivider color="#f9fafb" flip={true} />

//         {/* Case Management Section */}
//         <section className="w-full py-12 md:py-24 bg-gray-50 relative overflow-hidden">
//           <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full opacity-10 blur-3xl"></div>

//           <div className="container relative z-10 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Intelligent Case Management
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Track, prioritize, and manage patient cases with our
//                   AI-powered system.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               <CaseStatusCard
//                 title="Urgent Cases"
//                 count={12}
//                 icon={<AlertTriangle className="h-5 w-5 text-white" />}
//                 color="from-red-400 to-red-600"
//                 change="+2 new"
//               />
//               <CaseStatusCard
//                 title="In Progress"
//                 count={45}
//                 icon={<Activity className="h-5 w-5 text-white" />}
//                 color="from-amber-400 to-amber-600"
//                 change="+5 today"
//               />
//               <CaseStatusCard
//                 title="Completed"
//                 count={189}
//                 icon={<CheckCircle2 className="h-5 w-5 text-white" />}
//                 color="from-green-400 to-green-600"
//                 change="+23 this week"
//               />
//             </div>

//             <Card className="transition-all duration-300 hover:shadow-lg mb-8">
//               <CardHeader>
//                 <CardTitle className="flex items-center">
//                   <FileText className="mr-2 h-5 w-5 text-teal-600" />
//                   Recent Patient Cases
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <PatientCaseTable />
//               </CardContent>
//             </Card>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <Calendar className="mr-2 h-5 w-5 text-teal-600" />
//                     Upcoming Appointments
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-4">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
//                       >
//                         <div className="flex-shrink-0 mr-4 h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold">
//                           {["JD", "SM", "RK"][i - 1]}
//                         </div>
//                         <div className="flex-grow">
//                           <h4 className="font-medium">
//                             {["John Doe", "Sarah Miller", "Robert Kim"][i - 1]}
//                           </h4>
//                           <p className="text-sm text-gray-500">
//                             {
//                               [
//                                 "Cardiology Follow-up",
//                                 "Annual Physical",
//                                 "Neurology Consultation",
//                               ][i - 1]
//                             }
//                           </p>
//                         </div>
//                         <div className="flex-shrink-0 text-right">
//                           <div className="font-medium">
//                             {["Today", "Tomorrow", "May 10"][i - 1]}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             {["2:30 PM", "10:00 AM", "1:15 PM"][i - 1]}
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader>
//                   <CardTitle className="flex items-center">
//                     <BarChart3 className="mr-2 h-5 w-5 text-teal-600" />
//                     Department Performance
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <AnalyticsChart type="bar" />
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>

//         <WaveDivider color="#ffffff" />

//         {/* Decision Support Section */}
//         <section className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Clinical Decision Support
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   AI-powered insights to help you make better clinical
//                   decisions.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div className="order-2 lg:order-1">
//                 <div className="space-y-6">
//                   <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                     <div className="flex items-start mb-4">
//                       <div className="flex-shrink-0 mr-4">
//                         <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                           <Activity className="h-5 w-5 text-white" />
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold mb-2">
//                           Risk Stratification
//                         </h3>
//                         <p className="text-gray-500">
//                           Automatically categorize patients by risk level based
//                           on clinical data, demographics, and medical history.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="ml-14">
//                       <div className="grid grid-cols-3 gap-2">
//                         <div className="p-2 rounded bg-red-50 border border-red-100 text-center">
//                           <div className="text-sm font-medium text-red-600">
//                             High Risk
//                           </div>
//                           <div className="text-lg font-bold text-red-700">
//                             24
//                           </div>
//                         </div>
//                         <div className="p-2 rounded bg-amber-50 border border-amber-100 text-center">
//                           <div className="text-sm font-medium text-amber-600">
//                             Medium
//                           </div>
//                           <div className="text-lg font-bold text-amber-700">
//                             56
//                           </div>
//                         </div>
//                         <div className="p-2 rounded bg-green-50 border border-green-100 text-center">
//                           <div className="text-sm font-medium text-green-600">
//                             Low Risk
//                           </div>
//                           <div className="text-lg font-bold text-green-700">
//                             167
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                     <div className="flex items-start mb-4">
//                       <div className="flex-shrink-0 mr-4">
//                         <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                           <Brain className="h-5 w-5 text-white" />
//                         </div>
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold mb-2">
//                           Treatment Recommendations
//                         </h3>
//                         <p className="text-gray-500">
//                           Evidence-based treatment suggestions based on patient
//                           data and the latest medical research.
//                         </p>
//                       </div>
//                     </div>
//                     <div className="ml-14 space-y-2">
//                       <div className="p-3 rounded bg-teal-50 border border-teal-100">
//                         <div className="flex justify-between items-center">
//                           <div className="font-medium text-teal-700">
//                             Primary Recommendation
//                           </div>
//                           <div className="text-sm text-teal-600">98% match</div>
//                         </div>
//                         <div className="text-gray-600 text-sm mt-1">
//                           ACE inhibitor therapy + lifestyle modifications
//                         </div>
//                       </div>
//                       <div className="p-3 rounded bg-gray-50 border border-gray-100">
//                         <div className="flex justify-between items-center">
//                           <div className="font-medium text-gray-700">
//                             Alternative Option
//                           </div>
//                           <div className="text-sm text-gray-600">85% match</div>
//                         </div>
//                         <div className="text-gray-600 text-sm mt-1">
//                           ARB therapy + diuretic + lifestyle modifications
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="order-1 lg:order-2">
//                 <div className="relative">
//                   <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 opacity-75 blur-xl animate-pulse"></div>
//                   <Image
//                     src="/placeholder.svg?height=600&width=600"
//                     width={600}
//                     height={600}
//                     alt="Clinical Decision Support"
//                     className="relative rounded-lg object-cover border shadow-lg transition-all duration-500 hover:scale-[1.02]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="w-full py-12 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50 relative overflow-hidden">
//           <div className="absolute top-0 left-0 w-full h-full opacity-20">
//             <svg
//               viewBox="0 0 100 100"
//               preserveAspectRatio="none"
//               className="w-full h-full"
//             >
//               <defs>
//                 <pattern
//                   id="dna-pattern"
//                   width="20"
//                   height="20"
//                   patternUnits="userSpaceOnUse"
//                 >
//                   <circle
//                     cx="10"
//                     cy="10"
//                     r="2"
//                     fill="currentColor"
//                     opacity="0.3"
//                   />
//                 </pattern>
//               </defs>
//               <rect
//                 x="0"
//                 y="0"
//                 width="100%"
//                 height="100%"
//                 fill="url(#dna-pattern)"
//               />
//             </svg>
//           </div>

//           <div className="container relative z-10 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Ready to Transform Your Clinical Decision Making?
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Join thousands of healthcare professionals already using
//                   TheragenX to improve patient outcomes.
//                 </p>
//               </div>
//               <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                 <Button
//                   size="lg"
//                   className="bg-gradient-to-r from-teal-500 to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                 >
//                   Schedule a Demo
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="transition-all duration-300 hover:scale-105"
//                 >
//                   View Pricing
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="w-full border-t bg-background py-6 md:py-0">
//         <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
//           <div className="flex items-center gap-2">
//             <Brain className="h-5 w-5 text-teal-600" />
//             <p className="text-sm text-gray-500">
//               © 2025 TheragenX. All rights reserved.
//             </p>
//           </div>
//           <div className="flex gap-4">
//             <Link
//               href="#"
//               className="text-sm text-gray-500 hover:underline transition-colors duration-200"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="#"
//               className="text-sm text-gray-500 hover:underline transition-colors duration-200"
//             >
//               Terms of Service
//             </Link>
//             <Link
//               href="#"
//               className="text-sm text-gray-500 hover:underline transition-colors duration-200"
//             >
//               Contact
//             </Link>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
