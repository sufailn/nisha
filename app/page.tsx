"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TeachingApproach />
      <KidsPrograms />
      <SubjectsSection />
      <WorldMapSection/>
      <ExamsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <Footer />
    </main>
  )
}

function Header() {
  return (
    <motion.header
      className="sticky top-0 z-50 bg-[#8e1e3c] text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white">E</span>
          </div>
          <span className="font-semibold text-xl">Educare</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:text-gray-200 transition-colors">
            About us
          </Link>
          <div className="relative group">
            <Link href="#" className="hover:text-gray-200 transition-colors flex items-center gap-1">
              Courses <ChevronDown className="w-4 h-4" />
            </Link>
          </div>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Careers
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            News & Blog
          </Link>
          <Link href="#" className="hover:text-gray-200 transition-colors">
            Payments
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col text-xs">
            <span>+974 55555 5456</span>
            <span>info@educare.qa</span>
          </div>
          <Link
            href="#contact"
            className="bg-white text-[#8e1e3c] px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </motion.header>
  )
}

function HeroSection() {
  return (
    <section className="py-8 md:py-16 bg-white relative overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#8e1e3c] mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Personalized One-to-One
            <span className="block">Tutoring at Our Center</span>
          </motion.h1>

          <motion.div
            className="mt-6 md:mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="#demo"
              className="bg-[#8e1e3c] text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium hover:bg-[#7a1933] transition-colors inline-flex items-center"
            >
              Book a Free Demo Class <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
            <motion.div
            className="mt-8 md:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            >
            <p className="font-medium text-gray-700 mb-4">Curriculums we offer:</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <div className="w-16 h-10 md:w-20 md:h-12 rounded-md flex items-center justify-center ">
              <Image
                src="/hero/pearson-logo 2.png"
                alt="Pearson Logo"
                width={80}
                height={48}
                className="object-contain"
              />
              </div>
              <div className="w-16 h-10 md:w-20 md:h-12 rounded-md flex items-center justify-center ">
              <Image
                src="/hero/Group.png"
                alt="Group Logo"
                width={80}
                height={48}
                className="object-contain"
              />
              </div>
              <div className="w-16 h-10 md:w-20 md:h-12 rounded-md flex items-center justify-center">
              <Image
                src="/hero/image 6.png"
                alt="Image 6 Logo"
                width={80}
                height={48}
                className="object-contain"
              />
              </div>
            </div>
            </motion.div>

          <div className="absolute left-0 transform -translate-y-2/2 -translate-x-4 hidden lg:block">
            <Image
              src="/hero/Component 107.svg"
              alt="Left decoration"
              width={440}
              height={140}
              className=""
            />
          </div>

          <div className="absolute right-0 hidden lg:block">
            <Image
              src="/hero/Component 108.svg"
              alt="Right decoration"
              width={440}
              height={140}
              className=""
            />
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-12  bg-[#FFF3E1]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="flex items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center">
              <Image
          src="/hero/UserFocus.png"
          alt="Personal Attention"
          width={24}
          height={24}
          className="object-contain"
              />
            </div>
            <h3 className="text-[#8e1e3c] font-medium">Personal Attention</h3>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center">
              <Image
          src="/hero/Trophy.png"
          alt="Growth Mindset"
          width={24}
          height={24}
          className="object-contain"
              />
            </div>
            <h3 className="text-[#8e1e3c] font-medium">Growth Mindset</h3>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <Image
          src="/hero/Student.png"
          alt="Skill Development"
          width={24}
          height={24}
          className="object-contain"
              />
            </div>
            <h3 className="text-[#8e1e3c] font-medium">Skill Development</h3>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center">
              <Image
          src="/hero/Vector.png"
          alt="Passionate Teaching"
          width={24}
          height={24}
          className="object-contain"
              />
            </div>
            <h3 className="text-[#8e1e3c] font-medium">Passionate Teaching</h3>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function TeachingApproach() {
  return (
    <section className="py-16 bg-[#F9F7F4]">
      <div className="container mx-auto px-4 ">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our way of <span className="text-[#8e1e3c]">Teaching</span>
            </motion.h2>

            <motion.ul
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li className="flex gap-3">
                <span className="text-[#8e1e3c] font-bold">•</span>
                <p>
                  Every teacher at <span className="font-semibold">Educare</span> brings passion to their lessons,
                  making learning enjoyable with engaging activities tailored to inspire and motivate each student.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8e1e3c] font-bold">•</span>
                <p>
                  We focus on creating a supportive environment where individual strengths are recognized, and
                  personalized attention helps students excel.
                </p>
              </li>
              <li className="flex gap-3">
                <span className="text-[#8e1e3c] font-bold">•</span>
                <p>
                  Our approach combines innovative teaching methods with real-world applications, ensuring students not
                  only learn but also understand and apply their knowledge effectively.
                </p>
              </li>
            </motion.ul>
          </div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/oneway/Component 121.png?height=400&width=600"
              alt="Teaching approach"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function KidsPrograms() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-center mb-10">
            <motion.h2
            className="text-3xl md:text-4xl font-bold text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            >
            Programs we offer <span className="text-[#8e1e3c]">for Kids</span>
            </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="bg-[#8e1e3c] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7a1933] transition-colors inline-flex items-center"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        <div className="relative">
            <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            >
            <div className="relative bg-[#FFF3E1] rounded-lg shadow-md p-6 flex items-center justify-between">
              <div>
              <h3 className="text-xl font-semibold text-[#8e1e3c] mb-2">English Grammar</h3>
              <p className="text-gray-600">
                Master the building blocks of writing and communication.
              </p>
               <button  className="bg-[#8A1538] p-2 mt-4 text-white rounded-lg hover:bg-[#7A1933]  transition duration-300">
                  Know More
                
              </button>
              </div>
              <div className="w-24 h-24">
              <Image
                src="/ProgramsKids/a.png"
                alt="English Grammar"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
              </div>
            </div>

            <div className="relative bg-[#FFF3E1] rounded-lg shadow-md p-6 flex items-center justify-between">
              <div>
              <h3 className="text-xl font-semibold text-[#8e1e3c] mb-2">Craft Classes</h3>
              <p className="text-gray-600">
                Unleash creativity with hands-on projects and artistic fun.
              </p>
              <button  className="bg-[#8A1538] p-2 mt-4 text-white rounded-lg hover:bg-[#7A1933]  transition duration-300">
                  Know More
                
              </button>
             
          
              
              
              </div>
              <div className="w-24 h-24">
              <Image
                src="/ProgramsKids/b.png"
                alt="Craft Classes"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
              </div>
            </div>

            <div className="relative bg-[#FFF3E1] rounded-lg shadow-md p-6 flex items-center justify-between">
              <div>
              <h3 className="text-xl font-semibold text-[#8e1e3c] mb-2">Art and Painting</h3>
              <p className="text-gray-600">
                Express yourself through colors, sketches, and designs.
              </p>
               <button  className="bg-[#8A1538] p-2 mt-4 text-white rounded-lg hover:bg-[#7A1933]  transition duration-300">
                  Know More
                
              </button>
              </div>
              <div className="w-24 h-24">
              <Image
                src="/ProgramsKids/c.png"
                alt="Art and Painting"
                width={96}
                height={96}
                className="object-cover rounded-full"
              />
              </div>
            </div>
            </motion.div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8e1e3c]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
}

function ProgramCard({ title, description, image }: ProgramCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#8e1e3c] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href="#" className="text-[#8e1e3c] font-medium inline-flex items-center hover:underline">
          Read More <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </motion.div>
  )
}

function SubjectsSection() {
  return (
    <section className="py-16 bg-[#faf9f5]">
      <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mb-10">
        <motion.h2
        className="text-3xl md:text-4xl font-bold"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        >
        Subjects We <span className="text-[#8e1e3c]">Teach</span>
        </motion.h2>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        >
        <Link
          href="#"
          className="bg-[#8e1e3c] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7a1933] transition-colors inline-flex items-center"
        >
          View All <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
        </motion.div>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <SubjectCard title="Maths" icon="/subjects/maths.png" />
        <SubjectCard title="Physics" icon="/subjects/physics.png" />
        <SubjectCard title="Chemistry" icon="/subjects/chemistry.jpg" />
        <SubjectCard title="Biology" icon="/subjects/biology.jpg" />
        <SubjectCard title="Computer Science" icon="/subjects/computer-science.jpg" />
        <SubjectCard title="English" icon="/subjects/english.jpg" />
      </motion.div>

      <div className="flex justify-center mt-8">
        <div className="flex gap-2">
        <div className="w-2 h-2 rounded-full bg-[#8e1e3c]"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
      </div>
    </section>
  )
}

function SubjectCard({ title, icon }: { title: string; icon: string }) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 text-center shadow-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="w-full h-24 bg-[#8e1e3c] rounded-lg mb-4 flex items-center justify-center text-white">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="font-medium">{title}</h3>
    </motion.div>
  )
}

function WorldMapSection() {
  interface StudentBubble {
    id: number;
    x: string;
    y: string;
    size: string;
    image: string;
    delay: string;
  }
  
    const studentBubbles: StudentBubble[] = [
    { id: 1, x: '15%', y: '30%', size: '72px', image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '0s' },
    { id: 2, x: '25%', y: '65%', size: '64px', image: 'https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '0.2s' },
    { id: 3, x: '40%', y: '25%', size: '80px', image: 'https://images.pexels.com/photos/7140784/pexels-photo-7140784.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '0.4s' },
    { id: 4, x: '65%', y: '20%', size: '72px', image: 'https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '0.6s' },
    { id: 5, x: '75%', y: '55%', size: '64px', image: 'https://images.pexels.com/photos/8535707/pexels-photo-8535707.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '0.8s' },
    { id: 6, x: '82%', y: '30%', size: '72px', image: 'https://images.pexels.com/photos/3769981/pexels-photo-3769981.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '1s' },
    { id: 7, x: '50%', y: '40%', size: '64px', image: 'https://images.pexels.com/photos/5905439/pexels-photo-5905439.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '1.2s' },
    { id: 8, x: '60%', y: '70%', size: '72px', image: 'https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=300', delay: '1.4s' },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 ">
        <div className="text-center mb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Global Learning Community</h2>
          <p className="text-gray-600">
        Join our diverse community of learners from across the globe, united by their pursuit of excellence and love for learning.
          </p>
        </div>

        <div
          className="relative h-[500px] md:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: "url('/map/map.png')" }}
        >
          {studentBubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full overflow-hidden shadow-lg"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            animationDelay: bubble.delay,
          }}
        >
          <img src={bubble.image} alt="Student" className="w-full h-full object-cover" />
        </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Master in <span className="text-[#8e1e3c]">IELTS, TOEFL Exams</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="bg-[#8e1e3c] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7a1933] transition-colors inline-flex items-center"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExamCard
              title="IELTS Preparation"
              description="Focus on all four sections: Listening, Reading, Writing, and Speaking."
              image="/placeholder.svg?height=200&width=300"
            />
            <ExamCard
              title="TOEFL Mastery"
              description="Comprehensive coverage of Reading, Listening, Speaking, and Writing sections."
              image="/placeholder.svg?height=200&width=300"
            />
            <ExamCard
              title="PTE Academic Course"
              description="Time-saving strategies and practice tests with instant feedback."
              image="/placeholder.svg?height=200&width=300"
            />
            <ExamCard
              title="Cambridge English (CAE)"
              description="Preparation for high-level English skills in Listening, Speaking, Reading, and Writing."
              image="/placeholder.svg?height=200&width=300"
            />
          </motion.div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#8e1e3c]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExamCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <motion.div
      className="bg-[#faf9f5] rounded-lg overflow-hidden shadow-sm border border-gray-100"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      </div>
    </motion.div>
  )
}

function TestimonialsSection() {
  return (
    <section className="py-16 bg-[#faf9f5]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Hear from our <span className="text-[#8e1e3c]">Valuable Parents</span>
        </motion.h2>

        <div className="relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialCard
              quote="Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!"
              name="Sarah H"
              role="Accountant"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Educare's commitment to 1-on-1 learning transformed our son's understanding of science. Recent top scores prove Educare delivers results. Grateful for the positive impact!"
              name="Ahmed K"
              role="Engineer"
              image="/placeholder.svg?height=100&width=100"
            />
            <TestimonialCard
              quote="Best decision for English tutoring! Educare improved our daughter's skills and instilled confidence. Recent high scores speak volumes. Thank you, Educare!"
              name="Sarah H"
              role="Accountant"
              image="/placeholder.svg?height=100&width=100"
            />
          </motion.div>

          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#8e1e3c]">
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
            <button className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-[#8e1e3c]">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-[#8e1e3c]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, role, image }: { quote: string; name: string; role: string; image: string }) {
  return (
    <motion.div
      className="bg-white rounded-lg p-6 shadow-sm relative"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="text-[#8e1e3c] text-6xl absolute -top-2 -left-2 opacity-20">"</div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={48} height={48} className="object-cover" />
        </div>
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-yellow-400">
            ★
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function FaqSection() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      question: "What subjects do you offer tutoring in?",
      answer:
        "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
    },
    {
      question: "What ages or grade levels do you tutor?",
      answer:
        "We tutor students from elementary school through high school and college. Our tutors are experienced in working with students of all ages and adapting their teaching methods to suit different learning styles and needs.",
    },
    {
      question: "Is tutoring one-on-one or in groups?",
      answer:
        "We primarily offer one-on-one tutoring to provide personalized attention and customized learning plans. However, we do offer small group sessions for certain subjects or test prep courses if requested.",
    },
    {
      question: "Can sessions take place at our home?",
      answer:
        "Yes, we offer in-home tutoring services for your convenience. Our tutors can travel to your location, or you can choose to have sessions at our learning center or online via video conferencing.",
    },
    {
      question: "What is the duration and frequency of each tutoring session?",
      answer:
        "Standard tutoring sessions are 60 minutes, but we offer flexibility based on the student's needs and attention span. Sessions can be scheduled once, twice, or three times per week, depending on the student's goals and schedule.",
    },
  ]

  return (
    <section className="py-16 bg-[#faf9f5]">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Frequently asked <span className="text-[#8e1e3c]">Questions</span>
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <motion.div
                className="bg-white p-4 rounded-lg shadow-sm cursor-pointer flex justify-between items-center"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                whileHover={{ backgroundColor: "#fff9f9" }}
              >
                <h3 className="font-medium">{faq.question}</h3>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-[#8e1e3c]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#8e1e3c]" />
                )}
              </motion.div>

              {openFaq === index && (
                <motion.div
                  className="bg-white p-4 rounded-b-lg shadow-sm mt-1 text-gray-600"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Latest <span className="text-[#8e1e3c]">Blog Posts</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link
              href="#"
              className="bg-[#8e1e3c] text-white px-4 py-2 rounded-md font-medium hover:bg-[#7a1933] transition-colors inline-flex items-center"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <BlogCard
            title="Top tips for effective home tutoring"
            description="Share practical advice on how students can make the most out of tutoring sessions."
            image="/placeholder.svg?height=200&width=300"
          />
          <BlogCard
            title="Building a productive study environment"
            description="Share practical advice on how students can make the most out of tutoring sessions."
            image="/placeholder.svg?height=200&width=300"
          />
          <BlogCard
            title="5 Skills every great tutor should have"
            description="Outline essential skills for tutors, such as patience, adaptability, subject knowledge."
            image="/placeholder.svg?height=200&width=300"
          />
          <BlogCard
            title="Getting the best individual tuition"
            description="Share practical advice on how students can make the most out of tutoring sessions."
            image="/placeholder.svg?height=200&width=300"
          />
        </motion.div>
      </div>
    </section>
  )
}

function BlogCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

function Footer() {
  return (
    <footer className="bg-[#8e1e3c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white">E</span>
              </div>
              <span className="font-semibold text-xl">Educare</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Career
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact info</h3>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:educare@gmail.com" className="hover:underline">
                  educare@gmail.com
                </Link>
              </li>
              <li>
                <Link href="mailto:info@educare.com" className="hover:underline">
                  info@educare.com
                </Link>
              </li>
              <li>
                <Link href="tel:+97444123456" className="hover:underline">
                  +974 4412 3456
                </Link>
              </li>
              <li>
                <Link href="tel:+97455347890" className="hover:underline">
                  +974 5534 7890
                </Link>
              </li>
              <li className="flex gap-4 mt-4">
                <Link href="#" className="hover:text-gray-200">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200">
                  <Youtube className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Office Address</h3>
            <p className="mb-2">EducareEducation Center</p>
            <p className="mb-2">Building 45, Al Sadd Street,</p>
            <p className="mb-4">Doha, Qatar</p>
            <Link href="#" className="underline hover:text-gray-200">
              View on Map
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2024 educare</p>
          <p className="text-sm">Designed by Novindus Technologies</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
