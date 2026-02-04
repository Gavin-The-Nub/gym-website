import Link from "next/link";
import Navbar from "./components/Navbar";
import { StaggerContainer, StaggerItem } from "./components/StaggeredFadeIn";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
          <div className="max-w-3xl">
            <p className="text-[#FFD700] font-semibold text-lg mb-4 tracking-wider uppercase animate-fade-in-up">
              Welcome to G8 Fitness
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">Elevated</span>
              <br />
              Greatness
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transform your body, elevate your mind. Join the ultimate fitness experience with world-class training and state-of-the-art facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <a href="#pricing" className="btn-primary text-lg px-8 py-4">
                Start Your Journey
              </a>
              <a href="#about" className="btn-secondary text-lg px-8 py-4">
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-[#FFD700] flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#FFD700] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1A1A1A] border-y border-[#2A2A2A]">
        <div className="container mx-auto px-6">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Active Members" },
              { number: "50+", label: "Expert Trainers" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <StaggerItem key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/img1.jpg"
                  alt="The G8 Experience"
                  width={600}
                  height={500}
                  className="object-cover w-full h-[500px]"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-[#FFD700] rounded-2xl -z-10" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                More Than Just a <span className="gradient-text">Gym</span>
              </h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                At G8 Fitness, we believe in pushing boundaries and achieving greatness. Our state-of-the-art facility is designed to inspire and motivate you on your fitness journey.
              </p>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                With premium equipment, expert trainers, and a supportive community, we provide everything you need to transform your body and elevate your life.
              </p>
              <StaggerContainer className="space-y-4 mb-8">
                {[
                  "State-of-the-art equipment",
                  "Personal training sessions",
                  "Group fitness classes",
                  "Nutrition guidance",
                ].map((item, index) => (
                  <StaggerItem key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
              <a href="#contact" className="btn-primary">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-[#1A1A1A]">
        <div className="text-center mb-12 px-6">
          <h2 className="section-title text-white">
            Our <span className="gradient-text">Programs</span>
          </h2>
        </div>
        {/* Programs Grid - Full Width */}
        <StaggerContainer className="grid md:grid-cols-3 gap-2 px-2">
          {[
            {
              slug: "personal-training",
              title: "Personal Coaching & Training",
              image: "/img2.jpg",
            },
            {
              slug: "group-classes",
              title: "Group Classes",
              image: "/img3.jpg",
            },
            {
              slug: "wellness-recovery",
              title: "Wellness & Recovery",
              image: "/img4.jpg",
            },
          ].map((program, index) => (
            <StaggerItem key={index}>
              <Link
                href={`/programs/${program.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-lg hover-lift">
                  <Image
                    src={program.image}
                    alt={program.title}
                    width={1080}
                    height={1080}
                    className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold border-b-2 border-[#FFD700] pb-1">
                      Learn More
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">
              Membership <span className="gradient-text">Plans</span>
            </h2>
            <p className="section-subtitle">
              Choose the plan that fits your lifestyle
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "₱1,500",
                period: "/month",
                features: [
                  "Access to gym equipment",
                  "Locker room access",
                  "Free WiFi",
                  "Basic fitness assessment",
                ],
                popular: false,
              },
              {
                name: "Premium",
                price: "₱2,500",
                period: "/month",
                features: [
                  "Everything in Basic",
                  "Group classes included",
                  "Nutrition consultation",
                  "1 Personal training/month",
                  "Towel service",
                ],
                popular: true,
              },
              {
                name: "Elite",
                price: "₱4,500",
                period: "/month",
                features: [
                  "Everything in Premium",
                  "Unlimited personal training",
                  "Premium locker",
                  "Guest passes (2/month)",
                  "Priority booking",
                  "Recovery room access",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <StaggerItem
                key={index}
                className={`relative glass-card p-8 ${
                  plan.popular ? "border-2 border-[#FFD700] scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#FFD700] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? "btn-primary"
                      : "bg-transparent border-2 border-gray-600 text-white hover:border-[#FFD700] hover:text-[#FFD700]"
                  }`}
                >
                  Choose Plan
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">
              Meet Our <span className="gradient-text">Trainers</span>
            </h2>
            <p className="section-subtitle">
              Expert coaches dedicated to your success
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Mike Johnson", role: "Head Coach", specialty: "Strength & Conditioning", image: "/images/trainer-1.png" },
              { name: "Sarah Williams", role: "Senior Trainer", specialty: "CrossFit & HIIT", image: "/images/trainer-2.png" },
              { name: "David Chen", role: "Personal Trainer", specialty: "Weight Loss", image: "/images/trainer-1.png" },
              { name: "Emma Rodriguez", role: "Fitness Coach", specialty: "Yoga & Flexibility", image: "/images/trainer-2.png" },
            ].map((trainer, index) => (
              <StaggerItem key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    width={300}
                    height={400}
                    className="object-cover w-full h-[350px] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-[#FFD700]">{trainer.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-center">{trainer.specialty}</p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title text-white">
              What Our <span className="gradient-text">Members</span> Say
            </h2>
            <p className="section-subtitle">
              Real stories from our community
            </p>
          </div>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "G8 Fitness completely transformed my life! The trainers are incredibly supportive and the facilities are top-notch. Best decision I ever made.",
                name: "Juan dela Cruz",
                role: "Member for 2 years",
              },
              {
                quote: "The community here is amazing. Everyone motivates each other to push harder. I've never felt more confident and strong.",
                name: "Maria Santos",
                role: "Member for 1 year",
              },
              {
                quote: "Professional trainers, clean facilities, and great atmosphere. G8 Fitness is truly elevated greatness in action.",
                name: "Carlos Reyes",
                role: "Member for 6 months",
              },
            ].map((testimonial, index) => (
              <StaggerItem key={index} className="glass-card p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gold-gradient opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="gradient-text">Elevate</span> Your Greatness?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join G8 Fitness today and start your transformation journey. Your future self will thank you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#pricing" className="btn-primary text-lg px-10 py-4">
                Start Free Trial
              </a>
              <a href="https://www.facebook.com/golden8fitness" target="_blank" rel="noopener noreferrer" className="btn-secondary text-lg px-10 py-4">
                Follow Us on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-400">GGE Bldg. Sakura Executive Village, Brgy. Marawoy, 4216</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Hours</h4>
                    <p className="text-[#FFD700] font-semibold">Always Open</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <a href="tel:09681012026" className="text-[#FFD700] hover:underline">0968 101 2026</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Instagram</h4>
                    <a href="https://instagram.com/golden8fitness" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">@golden8fitness</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.908 1.438 5.504 3.682 7.2V22l3.405-1.868c.91.252 1.874.387 2.913.387 5.523 0 10-4.144 10-9.243C22 6.145 17.523 2 12 2zm1.06 12.447l-2.538-2.707-4.955 2.707 5.454-5.787 2.602 2.707 4.89-2.707-5.453 5.787z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Messenger</h4>
                    <a href="https://m.me/golden8fitness" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">G8 Fitness Gym</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-[#2A2A2A] rounded-lg border border-[#3A3A3A] text-white focus:border-[#FFD700] focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button type="submit" className="btn-primary w-full py-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Golden 8 Fitness Gym"
                  width={180}
                  height={65}
                  className="h-14 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-4">
                Elevated Greatness. Transform your body, elevate your life.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/golden8fitness" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#2A2A2A] flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-[#FFD700] transition-colors">About Us</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-[#FFD700] transition-colors">Programs</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-[#FFD700] transition-colors">Membership</a></li>
                <li><a href="#trainers" className="text-gray-400 hover:text-[#FFD700] transition-colors">Trainers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#programs" className="text-gray-400 hover:text-[#FFD700] transition-colors">Strength Training</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-[#FFD700] transition-colors">Cardio Fitness</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-[#FFD700] transition-colors">CrossFit</a></li>
                <li><a href="#programs" className="text-gray-400 hover:text-[#FFD700] transition-colors">Personal Training</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Metro Manila, Philippines</li>
                <li className="text-gray-400">Mon-Sat: 5AM - 11PM</li>
                <li className="text-gray-400">Sun: 6AM - 9PM</li>
                <li>
                  <a href="https://www.facebook.com/golden8fitness" target="_blank" rel="noopener noreferrer" className="text-[#FFD700] hover:underline">
                    @golden8fitness
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#2A2A2A] pt-8 text-center">
            <p className="text-gray-500">
              © 2026 G8 Fitness Gym. All rights reserved. | Elevated Greatness
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
