"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  LineChart,
  PieChart,
  Activity,
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Brain,
} from "lucide-react";
import WaveDivider from "@/components/wave-divider";
import AnalyticsChart from "@/components/analytics-chart";
import CaseStatusCard from "@/components/case-status-card";
import PatientCaseTable from "@/components/patient-case-table";
import BackgroundAnimation from "@/components/background-animation";
import { useState } from "react";
import { Menu, X, } from "lucide-react"; 
import Navbar from "@/components/navbar";

export default function AnalyticsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
   <div className="flex min-h-screen flex-col overflow-hidden">
         <Navbar />
   
         <main className="flex-1 px-4 bg-slate-100">
             {/* Hero Section with Background Animation */}
             <div className="relative">
               <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 border-r-4 border-b-4 border-black rounded-br-[80px] my-4 shadow-2xl bg-gradient-to-br from-gray-50 via-white to-gray-100 z-10">
                 {/* Decorative background */}
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent"></div>

                 <div className="container relative z-10 px-4 md:px-6">
                   <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                     
                     {/* Left side - Image */}
                     <div className="flex justify-center">
                       <div className="relative">
                         <div className="absolute -inset-0.5 rounded-lg bg-black opacity-75 blur-xl animate-pulse"></div>
                         <Image
                           src="/medical-dashboard.jpg"
                           width={500}
                           height={500}
                           alt="Medical AI Dashboard"
                           className="relative rounded-lg object-cover border shadow-lg transition-all duration-500 hover:scale-[1.02]"
                           priority
                         />
                       </div>
                     </div>

                     {/* Right side - Text */}
                     <div className="flex flex-col justify-center space-y-4">
                       <div className="space-y-2">
                         <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-black leading-tight pb-1">
                           TheraSentriX
                         </h1>
                         <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                           An AI-native pharmacovigilance solution designed to unify processes, connect
                           data, and empower scientific teams from early clinical trials to post-marketing surveillance.
                         </p>
                       </div>
                       <div className="flex flex-col gap-2 min-[400px]:flex-row">
                         <Button
                           size="lg"
                           className="bg-black hover:shadow-lg transition-all duration-300 hover:scale-105"
                         >
                           Get in Touch
                         </Button>
                       </div>
                     </div>

                   </div>
                 </div>
               </section>
             </div>

             {/* Black Section */}
             <section className="relative w-full h-screen bg-black overflow-hidden border-l-4 border-t-4 border-white rounded-tl-[80px] shadow-lg">
               <div className="relative z-10 w-full h-full mx-auto">
                 <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                   {/* Left Image */}
                   <div className="relative w-full h-full">
                     <Image
                       src="/fourth.jpeg"
                       alt="TheraSentriX Visual"
                       layout="fill"
                       objectFit="cover"
                       className="rounded-none border-r-2 border-white"
                       priority
                     />
                   </div>

                   {/* Right Content */}
                   <div className="flex flex-col justify-center px-6 md:px-12 text-white bg-black h-full">
                     <div className="space-y-6 max-h-[80vh] overflow-y-auto">
                       <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
                         TheraSentriX
                       </h2>
                       <p className="text-gray-300 text-lg md:text-xl">
                         TheraSentriX is not just another safety tool—it's a next-generation PV system built on a
                         connected, full-stack AI architecture, offering unmatched flexibility, compliance, and insight
                         across every phase of drug development.
                       </p>
                       <div>
                         <Button className="bg-white text-black hover:bg-gray-200 transition-all">
                           Learn More
                         </Button>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>

             {/* Lifecycle Pharmacovigilance Section */}
             <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-teal-50 border-2 border-gray-200 rounded-xl my-4 shadow-lg">
               <div className="container px-4 md:px-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                   {/* Image Holder */}
                   <div className="relative w-full aspect-square max-w-[500px] group">
                     <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-black/50 to-gray-800/50 opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500"></div>
                     <div className="relative rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-500 h-full">
                       <Image
                         src="/nine.gif?height=500&width=500"
                         width={500}
                         height={500}
                         alt="Lifecycle Pharmacovigilance"
                         className="relative rounded-lg object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
                         priority
                       />
                     </div>
                   </div>

                   {/* Text Content */}
                   <div className="space-y-8">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black leading-tight">
                       Lifecycle Pharmacovigilance from Clinical to Commercial
                     </h2>
                     <div className="bg-gray-600 rounded-lg p-6 space-y-6">
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                           <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                           </svg>
                         </div>
                         <div>
                           <h3 className="font-semibold text-white">Early Clinical Trials</h3>
                           <p className="text-gray-300">Structured AE capture, early signal detection, protocol-level insights</p>
                         </div>
                       </div>

                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                           <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                           </svg>
                         </div>
                         <div>
                           <h3 className="font-semibold text-white">Late-Stage Trials</h3>
                           <p className="text-gray-300">Integrated case management with automation-assisted triage and QC</p>
                         </div>
                       </div>

                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center">
                           <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                           </svg>
                         </div>
                         <div>
                           <h3 className="font-semibold text-white">Post-Marketing</h3>
                           <p className="text-gray-300">Continuous safety monitoring, global regulatory reporting, and real-world evidence integration</p>
                         </div>
                       </div>
                     </div>

                     <p className="text-gray-600 md:text-lg/relaxed leading-relaxed font-serif italic">
                       This unified approach ensures that safety is not an afterthought—it's embedded at every step.
                     </p>
                   </div>
                 </div>
               </div>
             </section>

             {/* Intelligent Literature Monitoring Section */}
             <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-transparent to-transparent"></div>
               
               <div className="container relative z-10 px-4 md:px-6">
                 <div className="max-w-4xl mx-auto">
                   <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white leading-tight mb-6">
                       Intelligent Literature Monitoring at Scale
                     </h2>
                     <p className="text-gray-300 md:text-xl/relaxed lg:text-lg/relaxed leading-relaxed font-serif italic max-w-3xl mx-auto">
                       Manual review of scientific literature is labor-intensive and error-prone. TheraSentriX transforms this process with AI-powered literature monitoring.
                     </p>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                     {/* Global Medical Literature Card */}
                     <div className="group relative">
                       <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                       <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600">
                         <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2">Global Medical Literature</h3>
                         <p className="text-gray-400">Scanning and analyzing global medical journals and databases</p>
                       </div>
                     </div>

                     {/* Automated Signal Detection Card */}
                     <div className="group relative">
                       <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                       <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
                         <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2">Automated Signal Detection</h3>
                         <p className="text-gray-400">Automatically extracting and tagging relevant safety signals</p>
                       </div>
                     </div>

                     {/* Smart Routing Card */}
                     <div className="group relative">
                       <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                       <div className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300">
                         <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 mb-4">
                           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                           </svg>
                         </div>
                         <h3 className="text-xl font-bold text-white mb-2">Smart Routing</h3>
                         <p className="text-gray-400">Routing findings to the right teams for faster case creation and triage</p>
                       </div>
                     </div>
                   </div>

                   <div className="text-center">
                     <p className="text-gray-300 md:text-lg/relaxed leading-relaxed font-serif italic">
                       This ensures no signal is missed, and teams stay ahead of emerging risks.
                     </p>
                   </div>
                 </div>
               </div>
             </section>

             {/* Aggregate Safety Reporting Section */}
             <section className="w-full py-16 bg-white relative overflow-hidden">
               <div className="container relative z-10 px-4 md:px-6 mx-auto">
                 <div className="max-w-6xl mx-auto">
                   {/* Header */}
                   <div className="mb-12 text-center">
                     <h2 className="text-3xl font-bold text-gray-900 mb-4">
                       Aggregate Safety Reporting Made Simple
                     </h2>
                     <p className="text-gray-600 max-w-2xl mx-auto">
                       TheraSentriX automates and streamlines the generation of aggregate safety reports like PBRERs, DSURs, and PSURs.
                     </p>
                   </div>

                   {/* Main Content */}
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                     {/* Left Side - Timeline */}
                     <div className="relative">
                       <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>
                       
                       <div className="space-y-8">
                         {/* Templates */}
                         <div className="relative pl-16">
                           <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                             </svg>
                           </div>
                           <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                             <h3 className="text-lg font-bold text-gray-900 mb-1">Pre-aligned Templates</h3>
                             <p className="text-gray-600 text-sm">Templates aligned with ICH and regional guidelines for consistent reporting</p>
                           </div>
                         </div>

                         {/* AI-assisted */}
                         <div className="relative pl-16">
                           <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                             </svg>
                           </div>
                           <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                             <h3 className="text-lg font-bold text-gray-900 mb-1">AI-assisted Aggregation</h3>
                             <p className="text-gray-600 text-sm">Intelligent data aggregation from multiple sources for comprehensive reports</p>
                           </div>
                         </div>

                         {/* Validation */}
                         <div className="relative pl-16">
                           <div className="absolute left-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                           <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                             <h3 className="text-lg font-bold text-gray-900 mb-1">Built-in Validation</h3>
                             <p className="text-gray-600 text-sm">Consistency checks and completeness validation for compliance assurance</p>
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Right Side - Stats and Benefits */}
                     <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-100">
                       <div className="space-y-6">
                         {/* Time Saved */}
                         <div className="flex items-center space-x-4">
                           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                             <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                           <div>
                             <h4 className="text-base font-semibold text-gray-900">Time Saved</h4>
                             <p className="text-gray-600 text-sm">Reduce report generation time from weeks to days</p>
                           </div>
                         </div>

                         {/* Accuracy */}
                         <div className="flex items-center space-x-4">
                           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                             <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                           </div>
                           <div>
                             <h4 className="text-base font-semibold text-gray-900">Higher Accuracy</h4>
                             <p className="text-gray-600 text-sm">AI-powered validation ensures data consistency</p>
                           </div>
                         </div>

                         {/* Compliance */}
                         <div className="flex items-center space-x-4">
                           <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                             <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                             </svg>
                           </div>
                           <div>
                             <h4 className="text-base font-semibold text-gray-900">Compliance Assurance</h4>
                             <p className="text-gray-600 text-sm">Built-in checks ensure regulatory compliance</p>
                           </div>
                         </div>
                       </div>

                       <div className="mt-6 pt-6 border-t border-gray-200">
                         <p className="text-gray-600 text-sm italic">
                           What once took weeks can now be done in days—with higher accuracy and compliance assurance.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>

             {/* Real-Time Dashboards Section - Alternative Design */}
             <section className="w-full py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
               {/* Animated background elements */}
               <div className="absolute inset-0">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                 <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%]"></div>
               </div>

               <div className="container relative z-10 px-4 md:px-6 mx-auto">
                 <div className="max-w-6xl mx-auto">
                   {/* Header */}
                   <div className="text-center mb-16">
                     <h2 className="text-4xl font-bold text-white mb-6">
                       Real-Time Safety Intelligence
                     </h2>
                     <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                       Monitor, analyze, and respond to safety signals with our advanced real-time dashboard.
                     </p>
                   </div>

                   {/* Main Content */}
                   <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                     {/* Left Side - Key Metrics */}
                     <div className="lg:col-span-4 space-y-6">
                       {/* Total Cases Card */}
                       <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                         <div className="flex items-center justify-between mb-4">
                           <h3 className="text-lg font-semibold text-white">Total Cases</h3>
                           <span className="text-sm text-green-400">+12.5%</span>
                         </div>
                         <div className="flex items-baseline">
                           <span className="text-3xl font-bold text-white">2,847</span>
                           <span className="ml-2 text-sm text-gray-400">cases</span>
                         </div>
                         <div className="mt-4 h-2 bg-gray-700 rounded-full overflow-hidden">
                           <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" style={{ width: '75%' }}></div>
                         </div>
                       </div>

                       {/* Active Signals Card */}
                       <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                         <div className="flex items-center justify-between mb-4">
                           <h3 className="text-lg font-semibold text-white">Active Signals</h3>
                           <span className="text-sm text-yellow-400">12 new</span>
                         </div>
                         <div className="flex items-baseline">
                           <span className="text-3xl font-bold text-white">42</span>
                           <span className="ml-2 text-sm text-gray-400">signals</span>
                         </div>
                         <div className="mt-4 grid grid-cols-4 gap-2">
                           <div className="h-1 bg-blue-500 rounded-full"></div>
                           <div className="h-1 bg-blue-400 rounded-full"></div>
                           <div className="h-1 bg-blue-300 rounded-full"></div>
                           <div className="h-1 bg-blue-200 rounded-full"></div>
                         </div>
                       </div>

                       {/* Compliance Status Card */}
                       <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                         <div className="flex items-center justify-between mb-4">
                           <h3 className="text-lg font-semibold text-white">Compliance</h3>
                           <span className="text-sm text-green-400">98.5%</span>
                         </div>
                         <div className="flex items-center space-x-3">
                           <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                             <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                             </svg>
                           </div>
                           <span className="text-sm text-gray-300">All systems compliant</span>
                         </div>
                       </div>
                     </div>

                     {/* Right Side - Activity Feed */}
                     <div className="lg:col-span-8">
                       <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 h-full">
                         <div className="flex items-center justify-between mb-6">
                           <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
                           <span className="text-sm text-gray-400">Last 24 hours</span>
                         </div>
                         
                         <div className="space-y-4">
                           {/* Activity Items */}
                           <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg">
                             <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                               <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                               </svg>
                             </div>
                             <div className="flex-1">
                               <div className="flex items-center justify-between">
                                 <h4 className="text-sm font-medium text-white">New Case Reported</h4>
                                 <span className="text-xs text-gray-400">2m ago</span>
                               </div>
                               <p className="text-sm text-gray-300 mt-1">Case #2847: Adverse event reported in clinical trial</p>
                             </div>
                           </div>

                           <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg">
                             <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                               <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                               </svg>
                             </div>
                             <div className="flex-1">
                               <div className="flex items-center justify-between">
                                 <h4 className="text-sm font-medium text-white">Signal Detected</h4>
                                 <span className="text-xs text-gray-400">15m ago</span>
                               </div>
                               <p className="text-sm text-gray-300 mt-1">New safety signal identified in post-marketing data</p>
                             </div>
                           </div>

                           <div className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg">
                             <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                               <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                               </svg>
                             </div>
                             <div className="flex-1">
                               <div className="flex items-center justify-between">
                                 <h4 className="text-sm font-medium text-white">Report Generated</h4>
                                 <span className="text-xs text-gray-400">1h ago</span>
                               </div>
                               <p className="text-sm text-gray-300 mt-1">Monthly safety report completed and ready for review</p>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Bottom Text */}
                   <div className="mt-16 text-center">
                     <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                       Stay ahead of safety concerns with real-time monitoring and instant notifications.
                     </p>
                   </div>
                 </div>
               </div>
             </section>

             {/* Final Real-Time Dashboards Section */}
             <section className="w-full py-16 md:py-24 mt-2 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
               {/* Animated background elements */}
               <div className="absolute inset-0">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                 <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%]"></div>
               </div>

               <div className="container relative z-10 px-4 md:px-6 mx-auto">
                 <div className="max-w-6xl mx-auto">
                   {/* Header */}
                   <div className="text-center mb-16">
                     <h2 className="text-4xl font-bold text-white mb-6">
                       Real-Time Dashboards for Always-On Visibility
                     </h2>
                     <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                       Stay in control with dynamic, real-time dashboards tailored to user roles and safety objectives.
                     </p>
                   </div>

                   {/* Main Content */}
                   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                     {/* Live Metrics Card */}
                     <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                       <div className="flex items-center justify-between mb-6">
                         <h3 className="text-lg font-semibold text-white">Live Metrics</h3>
                         <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                           <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                           </svg>
                         </div>
                       </div>
                       <div className="space-y-4">
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <div className="flex items-center justify-between mb-2">
                             <span className="text-sm text-gray-300">Case Volumes</span>
                             <span className="text-sm text-green-400">+12.5%</span>
                           </div>
                           <div className="h-1 bg-gray-600 rounded-full">
                             <div className="h-1 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                           </div>
                         </div>
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <div className="flex items-center justify-between mb-2">
                             <span className="text-sm text-gray-300">Signal Trends</span>
                             <span className="text-sm text-yellow-400">Active</span>
                           </div>
                           <div className="h-1 bg-gray-600 rounded-full">
                             <div className="h-1 bg-yellow-500 rounded-full" style={{ width: '60%' }}></div>
                           </div>
                         </div>
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <div className="flex items-center justify-between mb-2">
                             <span className="text-sm text-gray-300">Compliance KPIs</span>
                             <span className="text-sm text-green-400">98.5%</span>
                           </div>
                           <div className="h-1 bg-gray-600 rounded-full">
                             <div className="h-1 bg-green-500 rounded-full" style={{ width: '98.5%' }}></div>
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Drill-downs Card */}
                     <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                       <div className="flex items-center justify-between mb-6">
                         <h3 className="text-lg font-semibold text-white">Drill-downs</h3>
                         <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                           <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                           </svg>
                         </div>
                       </div>
                       <div className="space-y-4">
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <h4 className="text-sm font-medium text-white mb-2">Product Analysis</h4>
                           <div className="space-y-2">
                             <div className="flex items-center justify-between text-sm">
                               <span className="text-gray-300">Product A</span>
                               <span className="text-gray-400">45%</span>
                             </div>
                             <div className="flex items-center justify-between text-sm">
                               <span className="text-gray-300">Product B</span>
                               <span className="text-gray-400">30%</span>
                             </div>
                             <div className="flex items-center justify-between text-sm">
                               <span className="text-gray-300">Product C</span>
                               <span className="text-gray-400">25%</span>
                             </div>
                           </div>
                         </div>
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <h4 className="text-sm font-medium text-white mb-2">Regional Insights</h4>
                           <div className="space-y-2">
                             <div className="flex items-center justify-between text-sm">
                               <span className="text-gray-300">North America</span>
                               <span className="text-gray-400">40%</span>
                             </div>
                             <div className="flex items-center justify-between text-sm">
                               <span className="text-gray-300">Europe</span>
                               <span className="text-gray-400">35%</span>
                             </div>
                             <div className="flex items-center justify-between text-sm">
                               <span className="text-gray-300">Asia Pacific</span>
                               <span className="text-gray-400">25%</span>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>

                     {/* Audit Trails Card */}
                     <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                       <div className="flex items-center justify-between mb-6">
                         <h3 className="text-lg font-semibold text-white">Audit Trails</h3>
                         <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                           <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                           </svg>
                         </div>
                       </div>
                       <div className="space-y-4">
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <h4 className="text-sm font-medium text-white mb-2">Inspection Documentation</h4>
                           <div className="flex items-center space-x-2 text-sm text-gray-300">
                             <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             <span>All documentation up to date</span>
                           </div>
                         </div>
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <h4 className="text-sm font-medium text-white mb-2">Data Lineage</h4>
                           <div className="flex items-center space-x-2 text-sm text-gray-300">
                             <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             <span>Complete traceability maintained</span>
                           </div>
                         </div>
                         <div className="p-4 bg-gray-700/30 rounded-lg">
                           <h4 className="text-sm font-medium text-white mb-2">Activity History</h4>
                           <div className="flex items-center space-x-2 text-sm text-gray-300">
                             <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                             <span>Full audit trail available</span>
                           </div>
                         </div>
                       </div>
                     </div>
                   </div>

                   {/* Bottom Text */}
                   <div className="mt-16 text-center">
                     <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                       Whether you're a safety leader, medical reviewer, or regulatory liaison, TheraSentriX provides
                       clarity at a glance and confidence in every decision.
                     </p>
                   </div>
                 </div>
               </div>
             </section>
         </main>

         {/* Footer */}
         <footer className="w-full border-t bg-background py-6 md:py-0">
           <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
             <div className="flex items-center gap-2">
               <Brain className="h-5 w-5 text-teal-600" />
               <p className="text-sm text-gray-500">
                 © 2025 TheragenX. All rights reserved.
               </p>
             </div>
             <div className="flex gap-4">
               <Link
                 href="#"
                 className="text-sm text-gray-500 hover:underline transition-colors duration-200"
               >
                 Privacy Policy
               </Link>
               <Link
                 href="#"
                 className="text-sm text-gray-500 hover:underline transition-colors duration-200"
               >
                 Terms of Service
               </Link>
               <Link
                 href="#"
                 className="text-sm text-gray-500 hover:underline transition-colors duration-200"
               >
                 Contact
               </Link>
             </div>
           </div>
         </footer>
       </div>
  );
}
