
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";

const About = () => {
  return (
    <Layout>
      <Hero
        title="About Hopeful Horizons"
        subtitle="Our mission, team, and commitment to the autism community in Minnesota"
      />
      
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-autism-clay-taupe">Our Story</h2>
            <p className="mb-4">
              Hopeful Horizons was founded by a group of parents, educators, and healthcare professionals who recognized the need for comprehensive autism services in Minnesota. What began as a small support group has grown into a full-service center offering diagnostic, therapeutic, and educational resources for individuals on the autism spectrum.
            </p>
            <p>
              Our center was built on the belief that every individual with autism deserves access to personalized, evidence-based support that recognizes their unique strengths and challenges. Today, we continue to expand our services while maintaining our commitment to excellence, compassion, and community.
            </p>
          </div>
          <div className="bg-autism-peach-cream/20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-autism-clay-taupe">Our Vision</h3>
            <p className="italic mb-6">
              "To create a world where individuals with autism spectrum disorders are embraced for their unique qualities, empowered to reach their full potential, and provided with the support they need to lead fulfilling lives."
            </p>
            <h3 className="text-xl font-semibold mb-4 text-autism-clay-taupe">Our Mission</h3>
            <p>
              To provide exceptional, person-centered services that improve the quality of life for individuals with autism and their families through comprehensive assessment, intervention, education, and advocacy.
            </p>
          </div>
        </div>
      </Section>
      
      <Section 
        title="Our Values" 
        color="alternate"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot">
            <h3 className="text-xl font-semibold mb-3 text-autism-clay-taupe">Compassion</h3>
            <p className="text-autism-sienna-gray">
              We approach each individual and family with understanding, empathy, and respect for their unique journey.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot">
            <h3 className="text-xl font-semibold mb-3 text-autism-clay-taupe">Excellence</h3>
            <p className="text-autism-sienna-gray">
              We are committed to providing the highest quality services based on evidence-based practices and continuous improvement.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot">
            <h3 className="text-xl font-semibold mb-3 text-autism-clay-taupe">Collaboration</h3>
            <p className="text-autism-sienna-gray">
              We work together with families, professionals, and community partners to create comprehensive support networks.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot">
            <h3 className="text-xl font-semibold mb-3 text-autism-clay-taupe">Inclusion</h3>
            <p className="text-autism-sienna-gray">
              We advocate for a society that values diversity and provides equal opportunities for individuals on the autism spectrum.
            </p>
          </div>
        </div>
      </Section>
      
      <Section title="Our Leadership Team">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-40 h-40 mx-auto rounded-full bg-autism-peach-cream mb-4 flex items-center justify-center text-autism-clay-taupe text-4xl font-bold">
              AB
            </div>
            <h3 className="text-xl font-semibold text-autism-clay-taupe">Abdulaziz Berento</h3>
            <p className="text-autism-soft-coral">Executive Director</p>
            <p className="mt-2 text-autism-sienna-gray">
              Psychologist with 5+ years of experience in autism diagnosis and intervention.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-40 h-40 mx-auto rounded-full bg-autism-peach-cream mb-4 flex items-center justify-center text-autism-clay-taupe text-4xl font-bold">
              DW
            </div>
            <h3 className="text-xl font-semibold text-autism-clay-taupe">Dresden Warminski, BCBA, LBA</h3>
            <p className="text-autism-soft-coral">Clinical Director</p>
            <p className="mt-2 text-autism-sienna-gray">
              Specializing in evidence-based therapies for autism spectrum disorders with a focus on early intervention with over 10+ years of experience.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-40 h-40 mx-auto rounded-full bg-autism-peach-cream mb-4 flex items-center justify-center text-autism-clay-taupe text-4xl font-bold">
              OA
            </div>
            <h3 className="text-xl font-semibold text-autism-clay-taupe">Obsa Ali</h3>
            <p className="text-autism-soft-coral">Family Support Director</p>
            <p className="mt-2 text-autism-sienna-gray">
              Parent advocate with extensive experience coordinating resources and support for families affected by autism.
            </p>
          </div>
        </div>
      </Section>
      
      <Section 
        color="alternate"
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-autism-clay-taupe mb-6">
            Join Our Community
          </h2>
          <p className="text-lg mb-8 text-autism-sienna-gray">
            Whether you're seeking services, looking to volunteer, or interested in employment opportunities, we invite you to become part of the Hopeful Horizons family.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="/contact" className="autism-btn-primary text-center">
              Contact Us
            </a>
            <a href="/services" className="autism-btn-secondary text-center">
              Explore Our Services
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
