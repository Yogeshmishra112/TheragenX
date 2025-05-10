// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import {
//   FileText,
//   MessageSquare,
//   Brain,
//   Lock,
//   Search,
//   FileUp,
//   Zap,
//   Shield,
//   Database,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";
// import WaveDivider from "@/components/wave-divider";
// import ChatInterface from "@/components/chat-interface";
// import DocumentProcessing from "@/components/document-processing";
// import BackgroundAnimation from "@/components/background-animation";
// import { useState } from "react";
// import { Menu, X, } from "lucide-react"; 
// import Navbar from "@/components/navbar";

// export default function AICapabilitiesPage() {
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
//             <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
//               <defs>
//                 <pattern id="circuit-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
//                   <path
//                     d="M0,0 L20,0 L20,20 L0,20 Z"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="0.5"
//                     strokeDasharray="2,2"
//                   />
//                   <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
//                 </pattern>
//               </defs>
//               <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
//             </svg>
//           </div> */}

// <div className="container relative z-10 px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   TheraSentriX
//                   </h1>
//                   <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   An AI-native pharmacovigilance solution designed to unify processes, connect data, and empower scientific teams from early clinical trials to post-marketing surveillance.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <Button
//                     size="lg"
//                     className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:shadow-lg transition-all duration-300 hover:scale-105"
//                   >
//                     Explore AI Features
//                   </Button>
//                   <Button
//                     size="lg"
//                     variant="outline"
//                     className="transition-all duration-300 hover:scale-105"
//                   >
//                     Watch Demo
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
//                     alt="AI Medical Assistant"
//                     className="relative rounded-lg object-cover border shadow-lg transition-all duration-500 hover:scale-[1.02]"
//                     priority
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <WaveDivider color="#ffffff" />

//         {/* Document Processing Section */}
//         <section className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Intelligent Document Processing
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Extract valuable insights from medical documents with our
//                   advanced AI technology.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div>
//                 <DocumentProcessing />
//               </div>

//               <div className="space-y-6">
//                 <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mr-4">
//                       <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                         <FileUp className="h-5 w-5 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Multi-Format Support
//                       </h3>
//                       <p className="text-gray-500">
//                         Process a wide range of medical documents including lab
//                         reports, clinical notes, radiology reports, and more in
//                         various formats (PDF, DICOM, images, text).
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mr-4">
//                       <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                         <Search className="h-5 w-5 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Intelligent Data Extraction
//                       </h3>
//                       <p className="text-gray-500">
//                         Our AI automatically identifies and extracts key
//                         clinical information, including diagnoses, medications,
//                         lab values, and vital signs with high accuracy.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mr-4">
//                       <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                         <Zap className="h-5 w-5 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Structured Data Output
//                       </h3>
//                       <p className="text-gray-500">
//                         Transform unstructured medical text into structured,
//                         actionable data that integrates seamlessly with your
//                         existing healthcare systems and workflows.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <WaveDivider color="#f9fafb" flip={true} />

//         {/* AI Chatbot Section */}
//         <section className="w-full py-12 md:py-24 bg-gray-50 relative overflow-hidden">
//           <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full opacity-10 blur-3xl"></div>

//           <div className="container relative z-10 px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Conversational Medical AI
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Interact naturally with our AI to get medical insights,
//                   diagnostic suggestions, and treatment options.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               <div className="order-2 lg:order-1 space-y-6">
//                 <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mr-4">
//                       <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                         <Brain className="h-5 w-5 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Medical Knowledge Base
//                       </h3>
//                       <p className="text-gray-500">
//                         Our AI is trained on millions of medical papers,
//                         clinical guidelines, and healthcare data to provide
//                         evidence-based responses and insights.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mr-4">
//                       <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                         <MessageSquare className="h-5 w-5 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Natural Conversations
//                       </h3>
//                       <p className="text-gray-500">
//                         Engage in natural, human-like conversations with our AI
//                         assistant to discuss patient cases, explore treatment
//                         options, and get second opinions.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="p-6 rounded-lg bg-gradient-to-br from-gray-50 to-white shadow-md hover:shadow-lg transition-all duration-300">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 mr-4">
//                       <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                         <FileText className="h-5 w-5 text-white" />
//                       </div>
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Context-Aware Responses
//                       </h3>
//                       <p className="text-gray-500">
//                         Our AI understands patient context from uploaded
//                         documents and previous conversations to provide
//                         personalized, relevant medical insights.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="order-1 lg:order-2">
//                 <ChatInterface />
//               </div>
//             </div>
//           </div>
//         </section>

//         <WaveDivider color="#ffffff" />

//         {/* Privacy & Security Section */}
//         <section className="w-full py-12 md:py-24 bg-white relative overflow-hidden">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
//                   Privacy & Security by Design
//                 </h2>
//                 <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   We prioritize the security and privacy of your sensitive
//                   medical data.
//                 </p>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="flex items-center text-xl">
//                     <Shield className="mr-2 h-5 w-5 text-teal-600" />
//                     HIPAA Compliance
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-500">
//                     Our platform is built from the ground up to be fully
//                     HIPAA-compliant, with all necessary safeguards to protect
//                     patient health information.
//                   </p>
//                   <div className="mt-4 flex items-center text-teal-600">
//                     <CheckCircle className="mr-2 h-4 w-4" />
//                     <span className="text-sm font-medium">
//                       Certified HIPAA Compliant
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="flex items-center text-xl">
//                     <Lock className="mr-2 h-5 w-5 text-teal-600" />
//                     End-to-End Encryption
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-500">
//                     All data is encrypted in transit and at rest using
//                     industry-standard encryption protocols to ensure maximum
//                     security.
//                   </p>
//                   <div className="mt-4 flex items-center text-teal-600">
//                     <CheckCircle className="mr-2 h-4 w-4" />
//                     <span className="text-sm font-medium">
//                       AES-256 Encryption
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>

//               <Card className="transition-all duration-300 hover:shadow-lg">
//                 <CardHeader className="pb-2">
//                   <CardTitle className="flex items-center text-xl">
//                     <Database className="mr-2 h-5 w-5 text-teal-600" />
//                     Data Sovereignty
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-500">
//                     You maintain complete control over your data. We never use
//                     your medical data to train our models without explicit
//                     consent.
//                   </p>
//                   <div className="mt-4 flex items-center text-teal-600">
//                     <CheckCircle className="mr-2 h-4 w-4" />
//                     <span className="text-sm font-medium">
//                       Your Data Remains Yours
//                     </span>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             <div className="mt-12 p-6 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50 shadow-md">
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 <div className="flex-shrink-0">
//                   <div className="h-16 w-16 rounded-full bg-gradient-to-br from-teal-400 to-cyan-400 flex items-center justify-center">
//                     <Shield className="h-8 w-8 text-white" />
//                   </div>
//                 </div>
//                 <div className="flex-grow text-center md:text-left">
//                   <h3 className="text-xl font-bold mb-2">
//                     Our Security Commitment
//                   </h3>
//                   <p className="text-gray-600">
//                     TheragenX undergoes regular security audits and
//                     penetration testing to ensure the highest level of data
//                     protection. We maintain SOC 2 Type II certification and
//                     comply with all relevant healthcare data regulations.
//                   </p>
//                 </div>
//                 <div className="flex-shrink-0">
//                   <Button className="bg-white text-teal-600 hover:bg-gray-50 transition-all duration-300 hover:scale-105">
//                     Security Whitepaper
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
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
//                   Experience the Power of Medical AI
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
//                   Start Free Trial
//                 </Button>
//                 <Button
//                   size="lg"
//                   variant="outline"
//                   className="transition-all duration-300 hover:scale-105"
//                 >
//                   Request Demo
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
