import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import { Link } from "react-router-dom";
import { Users, Book, Calendar, MapPin } from "lucide-react";
import autismImg0 from "../images/autism0.jpg"
import autismImg1 from "../images/autism1.jpg"
import autismImg2 from "../images/autism2.jpg"

const Index = () => {
  return (
    <Layout>
      <Hero
        title="Supporting Every Journey on the Autism Spectrum"
        subtitle="Compassionate care, personalized support, and community resources for individuals and families in Minnesota."
        ctaText="Discover Our Services"
        ctaLink="/services"
        image={autismImg0}
      />

      <Section
        title="Welcome to Hopeful Horizons"
        subtitle="We're dedicated to providing comprehensive support, resources, and services for individuals with autism and their families across Minnesota."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="autism-card p-6 text-center flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              <Users size={48} className="text-autism-accent-cta" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-autism-neutral-dark2">
              Our dedicated specialists bring years of experience and compassion to every interaction.
            </p>
          </div>

          <div className="autism-card p-6 text-center flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              <Book size={48} className="text-autism-accent-cta" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Evidence-Based Approach</h3>
            <p className="text-autism-neutral-dark2">
              We utilize proven methodologies tailored to each individual's unique needs.
            </p>
          </div>

          <div className="autism-card p-6 text-center flex flex-col items-center">
            <div className="mb-4 flex justify-center">
              <MapPin size={48} className="text-autism-accent-cta" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Focused</h3>
            <p className="text-autism-neutral-dark2">
              Proudly serving the Minnesota community with accessible resources and support.
            </p>
          </div>
        </div>
      </Section>


      <Section
        color="alternate"
        title="Our Services"
        subtitle="Comprehensive support for individuals across the autism spectrum"
      >
        <img
          src={autismImg1}
          alt="Autism Services"
          className="w-full max-h-64 object-cover rounded-lg mb-8"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Diagnostic Evaluations"
            description="Comprehensive assessments to identify autism spectrum disorders and related conditions."
            icon={<Calendar size={36} className="text-autism-accent-cta" />}
            link="/services#diagnostics"
          />
          <ServiceCard
            title="Therapy Services"
            description="Individualized therapy plans including ABA, speech, occupational, and social skills."
            icon={<Users size={36} className="text-autism-accent-cta" />}
            link="/services#therapy"
          />
          <ServiceCard
            title="Family Support"
            description="Resources, education, and guidance for families navigating autism diagnosis and care."
            icon={<Book size={36} className="text-autism-accent-cta" />}
            link="/services#family-support"
          />
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="autism-btn-primary">
            View All Services
          </Link>
        </div>
      </Section>

      <Section className="text-center">
        <div className="max-w-3xl mx-auto">
          <img
            src={autismImg2}
            alt="Contact Us"
            className="w-full max-h-64 object-cover rounded-lg mb-8"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-lg mb-8 text-autism-neutral-dark">
            Contact us today to learn more about our services or to schedule a consultation with our team of specialists.
          </p>
          <Link to="/contact" className="autism-btn-primary text-lg px-8 py-3">
            Contact Us
          </Link>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
