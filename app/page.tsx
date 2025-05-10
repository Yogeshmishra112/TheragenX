"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Upload,
  MessageSquare,
  LineChart,
  Users,
  Shield,
  Brain,
} from "lucide-react";
import BackgroundAnimation from "@/components/background-animation";
import WaveDivider from "@/components/wave-divider";
import FeatureCard from "@/components/feature-card";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "@/components/navbar";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate how far we've scrolled through the section
        const progress = Math.min(
          Math.max(
            (windowHeight - sectionTop) / (windowHeight + sectionHeight),
            0
          ),
          1
        );
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />

      <main className="flex-1 px-4">
        {/* Hero Section with Background Animation */}
        <section className="relative w-full pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-l-4 border-b-4 border-black rounded-bl-[80px] my-4 shadow-lg bg-gradient-to-br from-gray-50 via-white to-gray-100">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100/50 via-transparent to-transparent"></div>
  <div className="container relative z-10 px-4 md:px-6">
    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="flex flex-col justify-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-black leading-tight pb-1">
            TheragenX – An AI-First
          </h1>
          <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Unified Platform Powering Therapies and Advancing Safer Medicines 
            Upload reports, track patient cases, and get instant medical
            insights with our intelligent assistant.
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
    </div>
  </div>
</section>



       

        



        {/* New Section: Reimagining Drug Development */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-white to-teal-50 border-2 border-gray-200 rounded-xl my-4 shadow-lg">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Holder */}
              <div className="relative w-full aspect-square max-w-[500px] group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-black/50 to-gray-800/50 opacity-75 blur-xl group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative rounded-lg p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition-all duration-500 h-full">
                  <Image
                    src="/second.png"
                    width={500}
                    height={500}
                    alt="Medical AI Dashboard"
                    className="relative rounded-lg object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
                    priority
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black leading-tight">
                  Reimagining Drug Development with Connected Intelligence
                </h2>
                <p className="text-gray-600 md:text-xl/relaxed lg:text-lg/relaxed leading-relaxed font-serif italic">
                  The pharmaceutical industry stands at a pivotal crossroads—pressed to break free from prolonged drug discovery cycles while keeping pace with an ever-evolving scientific landscape. At TheragenX, we envision a transformative future where AI doesn't just automate tasks—it accelerates science itself.
                </p>
               
              </div>
            </div>
          </div>
        </section>

        {/* Wave Divider */}
     

        {/* AI Empowerment Section */}
        <section className="w-full pt-16 pb-1 md:pt-24 bg-gradient-to-b from-white to-teal-50 border-2 border-gray-200 rounded-xl my-4 shadow-lg">
  <div className="px-4 md:px-10 lg:px-20 xl:px-32">
    <div className="text-center space-y-8">
      <h2 className="text-4xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-5xl text-black leading-tight">
        <span className="inline-block">
          AI That Thinks With You - Not Just For You
        </span>
      </h2>
      <p className="text-gray-600 text-lg md:text-xl lg:text-xl leading-relaxed ">
        Our platform is built on a foundation of unified, connected data, forming a resilient backbone for scalable, AI-driven innovation. At the user forefront, we've crafted intelligent, self-learning AI enablers that empower decision-makers—turning every user into a force multiplier for faster, smarter, and safer outcomes.
      </p>
    </div>

    {/* Image Section */}
    <div className="mt-12">
      <div className="relative w-full h-[300px] group">
        <Image
          src="/ten.webp"
          width={1200}
          height={675}
          alt="AI Platform Interface"
          className="relative rounded-t-[2.5rem] object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
          priority
        />
      </div>
    </div>
  </div>
</section>

           {/* Pharma Section */}
        <section 
          ref={sectionRef}
          className="w-full pt-16 pb-1 md:pt-24 bg-black border-2 border-gray-200 rounded-xl my-4 shadow-lg relative overflow-hidden"
        >
          {/* Decorative Lines with Light Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-light-flow" />
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-light-flow" />
          </div>
          
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white leading-tight">
                <span className="inline-block">
                  Pharma at a Turning Point - We're Building What's Next
                </span>
              </h2>
              <p className="text-gray-300 md:text-xl/relaxed lg:text-lg/relaxed leading-relaxed">
              AI-first platform purpose-built for pharma, connecting data seamlessly across the entire drug development lifecycle.</p>
            </div>

            {/* Image Section */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="relative w-full h-[300px] group">
                <Image
                  src="/fourth.jpeg"
                  width={1200}
                  height={675}
                  alt="AI Platform Interface"
                  className="relative rounded-t-[2.5rem] object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}

                {/* AI Empowerment Section */}
                <section className="w-full py-16 md:py-24 md:pt-24 bg-gradient-to-b from-white to-teal-50 border-2 border-gray-200 rounded-xl my-4">
                <div className="px-4 md:px-10 lg:px-20 xl:px-32">
  {/* 3D Strong Shadow Wrapper with Black Left and Top Border */}
  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] border-t-4 border-l-4 border-black">
    
    {/* Text Centering */}
    <div className="relative flex flex-col items-center justify-center space-y-8">
      {/* Heading */}
      <h2 className="text-4xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-5xl text-black leading-tight text-center">
        <span className="inline-block">AI-First by Design</span>
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-lg md:text-xl lg:text-xl leading-relaxed text-center">
        Unlike legacy, monolithic systems retrofitted with AI, TheragenX is built from the ground up as a full-stack AI platform. Our architecture is inherently AI-native—designed to work with AI, not around it. This allows us to deliver rapid, cost-effective solutions that flexibly adapt to your workflows, rather than forcing your teams to conform to rigid systems.
      </p>
    </div>

    {/* Image Section */}
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Image */}
      <div className="relative w-full h-[300px] group">
        <div className="relative rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
          <Image
            src="/seven.jpeg"
            width={500}
            height={500}
            alt="AI Platform Left Image"
            className="relative rounded-lg object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
            priority
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="relative w-full h-[300px] group">
        <div className="relative rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
          <Image
            src="/eight.jpeg"
            width={1200}
            height={675}
            alt="AI Platform Right Image"
            className="relative rounded-lg object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
            priority
          />
        </div>
      </div>
    </div>
  </div>
</div>



  <div className="px-4 md:px-10 lg:px-20 xl:px-32 mt-8">
  {/* 3D Strong Shadow Wrapper with Black Right Border */}
  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] border-r-4 border-black">
    
    {/* Main Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left Side Image */}
      <div className="relative w-full h-[300px] group">
        <div className="relative rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
          <Image
            src="/fivth.jpeg"
            width={500}
            height={500}
            alt="Connected Data Image"
            className="relative rounded-lg object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
            priority
          />
        </div>
      </div>

      {/* Right Side Text */}
      <div className="flex flex-col space-y-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-5xl text-black leading-tight">
          Connected Data from Discovery to Real-World Evidence
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl lg:text-xl leading-relaxed">
          True data lineage isn’t a feature—it’s a foundation. TheragenX connects data across the entire drug development lifecycle, from early discovery through post-marketing surveillance and real-world evidence. This seamless integration enables the development of hyperintelligent AI modules, applications, and agents that evolve with your organization—supporting every user role with the learning agility of a human mind.
        </p>
      </div>

    </div>
  </div>
</div>



<div className="px-4 md:px-10 lg:px-20 xl:px-32 mt-8">
  {/* 3D Strong Shadow Wrapper with Black Left Border */}
  <div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-[0_25px_70px_rgba(0,0,0,0.35)] border-l-4 border-black">

    {/* Main Content Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Left Side Text */}
      <div className="flex flex-col space-y-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-5xl text-black leading-tight">
          Built-In Compliance, Ready for Global Regulations
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl lg:text-xl leading-relaxed">
          TheragenX embeds regulatory compliance into every layer of the platform. From automated audit trails to dynamic triage rules aligned with global standards (FDA, EMA, ICH, MHRA), you’re always inspection-ready—with no scrambling, no rework, and no surprises.
        </p>
      </div>

      {/* Right Side Image */}
      <div className="relative w-full h-[300px] group">
        <div className="relative rounded-lg p-4 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
          <Image
            src="/sixth.jpg"
            width={1200}
            height={675}
            alt="Compliance Image"
            className="relative rounded-lg object-cover w-full h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-105"
            priority
          />
        </div>
      </div>

    </div>
    
  </div>
</div>


</section>


{/* Next section */}
<section 
  ref={sectionRef}
  className="w-full py-16 md:py-24 bg-black border-2 border-gray-200 rounded-xl my-4 shadow-lg relative overflow-hidden"
>
  {/* Decorative Lines for Desktop only */}
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/20 hidden lg:block">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-light-flow" />
  </div>
  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/20 hidden lg:block">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-light-flow" />
  </div>

  {/* Mobile Top Logo */}
  <div className="block md:hidden flex justify-center mb-8">
    <Image
      src="/left-logo.png"
      alt="Top Mobile Logo"
      width={0}
      height={0}
      sizes="100vw"
      className="w-40 sm:w-48 md:w-56 h-auto object-contain"
    />
  </div>

  {/* Desktop Left Logo */}
  <div className="hidden lg:block absolute top-1/2 left-6 transform -translate-y-1/2">
    <Image
      src="/left-logo.png"
      alt="Left Logo"
      width={200}
      height={150}
      className="object-contain"
    />
  </div>

  {/* Text Section */}
  <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-white leading-tight">
      Right-Sized for Global or Local Operations
    </h2>

    <p className="text-gray-300 md:text-xl/relaxed lg:text-lg/relaxed leading-relaxed max-w-3xl">
      Our platform is designed to grow with your needs. Whether you’re running a small pharmacovigilance, regulatory or clinical trial team or a global operation, TheragenX offers modular capabilities that scale effortlessly—so you can start small, adapt fast, and expand without disruption.
    </p>
  </div>

  {/* Desktop Right Logo */}
  <div className="hidden lg:block absolute top-1/2 right-6 transform -translate-y-1/2">
    <Image
      src="/right-logo.png"
      alt="Right Logo"
      width={200}
      height={150}
      className="object-contain"
    />
  </div>

  {/* Mobile Bottom Logo */}
  <div className="block md:hidden flex justify-center mt-8">
    <Image
      src="/right-logo.png"
      alt="Bottom Mobile Logo"
      width={0}
      height={0}
      sizes="100vw"
      className="w-40 sm:w-48 md:w-56 h-auto object-contain"
    />
  </div>
</section>



<section className="relative w-full py-20 md:py-32 bg-gradient-to-br from-slate-600 to-white text-black rounded-xl my-4 shadow-lg overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-black opacity-50"></div>
  <div className="container px-6 md:px-12 relative z-10">
    <div className="text-center">
      <h2 className="text-3xl sm:text-3xl md:text-5xl tracking-tight leading-tight mb-8 font-extrabold">
        Real-Time Intelligence for Real-World Impact
      </h2>
      <p className="text-sm sm:text-xl md:text-2xl text-white font-normal leading-relaxed max-w-4xl mx-auto">
        TheragenX doesn't just process information—it thinks with you. Our real-time analytics, consistency checks, and
        predictive insights enable proactive decisions, earlier interventions, and continuous improvement across the entire drug lifecycle.
      </p>
    </div>
  </div>
</section>





<section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-12 lg:px-24 border-l-4 border-t-4 border-black rounded-tl-[60px] rounded-bl-[80px] shadow-2xl">
  
  {/* Decorative background shapes */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200 via-white to-gray-100 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-gray-100 to-white rounded-full blur-2xl opacity-40"></div>

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Content */}
    <div className="flex flex-col space-y-8">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black tracking-tight">
      Human-Centered AI for Every Role
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
      We don't just build AI—we build AI that works the
way humans think. TheragenX delivers intuitive, role-specific support tools that guide
junior scientists, empower senior reviewers, and promote consistency across every
touchpoint, dramatically reducing training time and human error.</p>
      
   
    </div>

    {/* Right Side - Feature Card */}
    <div className="flex justify-center">
      <div className="relative w-full max-w-md p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-black rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
        <Image
          src="/live.gif"
          alt="TheragenX Dashboard"
          width={600}
          height={400}
          className="rounded-2xl object-cover"
        />
       
      </div>
    </div>

  </div>
</section>



<section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-12 mt-2 lg:px-24 border-r-4 border-b-4 border-black rounded-br-[60px] rounded-tr-[80px] shadow-2xl">
  
  {/* Decorative background shapes */}
  <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-gray-200 via-white to-gray-100 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-gray-100 to-white rounded-full blur-2xl opacity-40"></div>

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Side - Feature Card */}
    <div className="flex justify-center order-2 lg:order-1">
      <div className="relative w-full max-w-md p-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 border-2 border-black rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
        <Image
          src="/nine.gif"
          alt="TheragenX Dashboard"
          width={600}
          height={400}
          className="rounded-2xl object-cover"
        />
       
      </div>
    </div>

    {/* Right Content */}
    <div className="flex flex-col space-y-8 order-1 lg:order-2">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-black tracking-tight">
      Ethical AI, Engineered for Trust
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
      Ethical responsibility is core to our platform design.
With explainable AI outputs, transparent data trails, and alignment with principles like
beneficence and non-maleficence, TheragenX promotes fair, safe, and unbiased
decision-making at scale.
 </p>
    </div>

  </div>
</section>


<section className="relative w-full py-20 px-6 md:px-12 bg-gradient-to-br from-gray-100 to-white mt-2">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Efficiency Now. Compliance Always
      </h2>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto">
        TheragenX ensures structured data, built-in compliance, and global adaptability for seamless operations.
      </p>
    </div>

    {/* Grid for Items */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* 1 */}
      <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
        <div className="bg-black text-white p-4 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Structured, Transparent Data</h3>
        <p className="text-gray-600 text-sm">
          Clean and connected data flow, fully traceable for global regulatory compliance.
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
        <div className="bg-black text-white p-4 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Built-in Compliance Algorithms</h3>
        <p className="text-gray-600 text-sm">
          AI assistants follow updatable rules to stay aligned with evolving regulations.
        </p>
      </div>

      {/* 3 */}
      <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
        <div className="bg-black text-white p-4 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 16l-4-4l4-4m8 8l4-4l-4-4" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Standardized Global Workflows</h3>
        <p className="text-gray-600 text-sm">
          Templates and frameworks based on MedDRA, ICH E2B ensure regional consistency.
        </p>
      </div>

      {/* 4 */}
      <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
        <div className="bg-black text-white p-4 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Real-Time Consistency Checks</h3>
        <p className="text-gray-600 text-sm">
          Detects errors instantly, minimizing inspection risks and manual corrections.
        </p>
      </div>

      {/* 5 */}
      <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
        <div className="bg-black text-white p-4 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 8v4l3 3m6 2a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Instantly Adaptable</h3>
        <p className="text-gray-600 text-sm">
          Easily update workflows as new safety and risk regulations emerge.
        </p>
      </div>

      {/* 6 */}
      <div className="flex flex-col items-center text-center p-6 bg-white border border-gray-300 rounded-2xl shadow hover:shadow-lg transition">
        <div className="bg-black text-white p-4 rounded-full mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Inspection-Ready by Design</h3>
        <p className="text-gray-600 text-sm">
          Full audit trails and action logs ensure you're always inspection-ready.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden border-2 border-gray-200 rounded-xl my-4 shadow-lg"
        >
          <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-gradient-to-tr from-teal-300 to-cyan-300 rounded-full opacity-10 blur-3xl"></div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black leading-tight">
                  Pharma at a Turning Point- We're Building What's Next
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TheragenX combines powerful AI with intuitive healthcare
                  management tools.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 mt-12">
              <div className="flex flex-col p-6 rounded-xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">AI-First by Design</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Unlike legacy, monolithic systems retrofitted with AI, TheragenX is built from the ground up as a full-stack AI platform. Our architecture is inherently AI-native—designed to work with AI, not around it. This allows us to deliver rapid, cost-effective solutions that flexibly adapt to your workflows, rather than forcing your teams to conform to rigid systems.
                </p>
              </div>

              <div className="flex flex-col p-6 rounded-xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Connected Data, from Discovery to Real-World Evidence</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  True data lineage isn't a feature—it's a foundation. TheragenX connects data across the entire drug development lifecycle, from early discovery through post-marketing surveillance and real-world evidence. This seamless integration enables the development of hyper-intelligent AI modules, applications, and agents that evolve with your organization—supporting every user role with the learning agility of a human mind.
                </p>
              </div>

              <div className="flex flex-col p-6 rounded-xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500">
                    <LineChart className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Built-In Compliance, Ready for Global Regulations</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  TheragenX embeds regulatory compliance into every layer of the platform. From automated audit trails to dynamic triage rules aligned with global standards (FDA, EMA, ICH, MHRA), you're always inspection-ready—with no scrambling, no rework, and no surprises.
                </p>
              </div>

              <div className="flex flex-col p-6 rounded-xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Right-Sized for Global or Local Operations</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Our platform is designed to grow with your needs. Whether you're running a small pharmacovigilance, regulatory or clinical trial team or a global operation, TheragenX offers modular capabilities that scale effortlessly—so you can start small, adapt fast, and expand without disruption.
                </p>
              </div>

              <div className="flex flex-col p-6 rounded-xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Human-Centered AI for Every Role</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We don't just build AI—we build AI that works the way humans think. TheragenX delivers intuitive, role-specific support tools that guide junior scientists, empower senior reviewers, and promote consistency across every touchpoint, dramatically reducing training time and human error.
                </p>
              </div>

              <div className="flex flex-col p-6 rounded-xl bg-white border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black">Real-Time Intelligence for Real-World Impact</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  TheragenX doesn't just process information—it thinks with you. Our real-time analytics, consistency checks, and predictive insights enable proactive decisions, earlier interventions, and continuous improvement across the entire drug lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        {/* Wave Divider */}
  

        {/* Demo Section */}
        {/* <section
          id="demo"
          className="w-full py-12 md:py-24 lg:py-32 bg-white relative overflow-hidden border-2 border-gray-200 rounded-xl my-4 shadow-lg"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <svg width="50%" height="50%">
              <pattern
                id="pattern-circles"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
                patternContentUnits="userSpaceOnUse"
              >
                <circle
                  id="pattern-circle"
                  cx="25"
                  cy="25"
                  r="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                ></circle>
              </pattern>
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#pattern-circles)"
              ></rect>
            </svg>
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-cyan-600">
                  See TheragenX in Action
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our platform's interface and see how it transforms
                  healthcare management.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-12">
              <div className="rounded-lg border bg-background shadow-xl transition-all duration-500 hover:shadow-2xl">
                <div className="relative p-1">
                  <div className="absolute -inset-1 rounded-lg bg-black opacity-30 blur-sm"></div>
                  <Image
                    src="/dashboard-overview.png"
                    width={1200}
                    height={300}
                    alt="TheragenX Dashboard Demo"
                    className="relative rounded-md object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  <div className="relative transition-all duration-300 hover:scale-105">
                    <div className="absolute -inset-0.5 rounded-md bg-black opacity-30 blur-sm"></div>
                    <Image
                      src="/ai-chat-interface.png"
                      width={400}
                      height={200}
                      alt="AI Chat Interface"
                      className="relative rounded-md object-cover"
                    />
                  </div>
                  <div className="relative transition-all duration-300 hover:scale-105">
                    <div className="absolute -inset-0.5 rounded-md bg-black opacity-30 blur-sm"></div>
                    <Image
                      src="/document-upload.png"
                      width={400}
                      height={200}
                      alt="Document Upload Screen"
                      className="relative rounded-md object-cover"
                    />
                  </div>
                  <div className="relative transition-all duration-300 hover:scale-105">
                    <div className="absolute -inset-0.5 rounded-md bg-black opacity-30 blur-sm"></div>
                    <Image
                      src="/patient-timeline.png"
                      width={400}
                      height={200}
                      alt="Patient Case Timeline"
                      className="relative rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Wave Divider */}
      

     

        {/* Wave Divider */}
        
    

       

        {/* Wave Divider */}
        <WaveDivider color="#ffffff" />
      </main>

      {/* Footer */}
      {/* <footer className="w-full border-t bg-background py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-gradient-to-r from-teal-500 to-cyan-500 text-teal-600" />
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
      </footer> */}

      {/* Add this style block at the end of the file, before the closing main tag */}
      <style jsx global>{`
        @keyframes light-flow {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-light-flow {
          animation: light-flow 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
