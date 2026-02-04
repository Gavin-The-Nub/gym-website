import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { programs } from "@/app/data/programs";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  
  if (!program) {
    return { title: "Program Not Found" };
  }
  
  return {
    title: `${program.title} | Golden 8 Fitness Gym`,
    description: program.description,
  };
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="glass-card flex items-center justify-between px-6 py-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Golden 8 Fitness Gym"
                width={140}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <Link href="/#programs" className="btn-primary text-sm py-2 px-5">
              Back to Programs
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative z-10 container mx-auto px-6 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="gradient-text">{program.title}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {program.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              {program.fullDescription}
            </p>

            <h2 className="text-2xl font-bold text-white mb-8">
              What&apos;s <span className="gradient-text">Included</span>
            </h2>

            <ul className="space-y-4 mb-12">
              {program.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 glass-card p-4">
                  <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-200 text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-400 mb-6">
                Contact us today to learn more about our {program.title.toLowerCase()} program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact" className="btn-primary px-8 py-3">
                  Contact Us
                </Link>
                <a
                  href="https://www.facebook.com/golden8fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 py-3"
                >
                  Message on Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs */}
      <section className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Explore Other <span className="gradient-text">Programs</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {programs
              .filter((p) => p.slug !== program.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/programs/${p.slug}`}
                  className="group relative overflow-hidden rounded-2xl hover-lift"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    width={400}
                    height={300}
                    className="object-cover w-full h-[250px] group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-lg font-bold text-[#FFD700]">{p.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0A0A0A] border-t border-[#2A2A2A]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">
            © 2026 Golden 8 Fitness Gym. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
