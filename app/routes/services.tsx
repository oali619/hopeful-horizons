
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { Calendar, Users, Book, Info, CheckCircle } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      <Hero
        title="Our Services"
        subtitle="Comprehensive, personalized support for individuals on the autism spectrum and their families"
      />
      
      <Section id="diagnostics">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-autism-clay-taupe">Diagnostic Evaluations</h2>
            <p className="mb-4">
              Our comprehensive diagnostic process is designed to provide a clear understanding of an individual's strengths, challenges, and support needs. We offer evaluations for children, adolescents, and adults who may have autism spectrum disorder.
            </p>
            <p className="mb-4">
              Our diagnostic team includes psychologists, speech-language pathologists, and occupational therapists who work together to conduct thorough assessments using gold-standard evaluation tools.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3 text-autism-clay-taupe">Our Evaluation Process Includes:</h3>
            <ul className="list-disc pl-6 space-y-2 text-autism-sienna-gray">
              <li>Developmental and medical history review</li>
              <li>Standardized assessments and observations</li>
              <li>Cognitive and language evaluations</li>
              <li>Sensory and motor skills assessment</li>
              <li>Detailed feedback session and written report</li>
              <li>Personalized recommendations and resource referrals</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-autism-honey-blush p-6 rounded-lg text-autism-clay-taupe">
              <Calendar size={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-center">Schedule an Evaluation</h3>
              <p className="mb-4 text-center">
                Our team is here to guide you through the diagnostic process.
              </p>
              <div className="text-center">
                <a href="/contact" className="autism-btn-primary block w-full text-center">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section id="therapy" color="alternate">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-autism-clay-taupe">Therapy Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot h-full">
            <h3 className="text-xl font-semibold mb-4 text-autism-clay-taupe flex items-center">
              <Users size={24} className="mr-2 text-autism-soft-coral" />
              Applied Behavior Analysis (ABA)
            </h3>
            <p className="mb-4 text-autism-sienna-gray">
              Evidence-based therapy that focuses on improving specific behaviors, such as communication, social skills, learning abilities, and adaptive functioning.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Individualized treatment plans based on comprehensive assessments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>One-on-one therapy sessions with certified behavior technicians</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Regular progress monitoring and plan adjustments</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot h-full">
            <h3 className="text-xl font-semibold mb-4 text-autism-clay-taupe flex items-center">
              <Users size={24} className="mr-2 text-autism-soft-coral" />
              Speech and Language Therapy
            </h3>
            <p className="mb-4 text-autism-sienna-gray">
              Dedicated to improving communication skills, including verbal expression, comprehension, social language, and alternative communication systems.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Comprehensive communication assessments</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Individual and group therapy options</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Augmentative and alternative communication (AAC) training</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot h-full">
            <h3 className="text-xl font-semibold mb-4 text-autism-clay-taupe flex items-center">
              <Users size={24} className="mr-2 text-autism-soft-coral" />
              Occupational Therapy
            </h3>
            <p className="mb-4 text-autism-sienna-gray">
              Helps individuals develop the skills needed for independent living, sensory processing, and participation in daily activities.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Sensory integration therapy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Fine and gross motor skill development</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Activities of daily living (ADL) training</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot h-full">
            <h3 className="text-xl font-semibold mb-4 text-autism-clay-taupe flex items-center">
              <Users size={24} className="mr-2 text-autism-soft-coral" />
              Social Skills Groups
            </h3>
            <p className="mb-4 text-autism-sienna-gray">
              Structured, supportive environments where participants can practice and improve their social interaction abilities with peers.
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Age-appropriate groups from preschool to adults</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Small group settings with trained facilitators</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={18} className="mr-2 mt-1 text-autism-soft-coral flex-shrink-0" />
                <span>Skill generalization through community outings</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      <Section id="family-support">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-autism-clay-taupe">Family Support Services</h2>
            <p className="mb-4">
              We recognize that autism affects the entire family, and we're committed to providing comprehensive support for parents, siblings, and caregivers. Our family support services are designed to empower families with the knowledge, resources, and community connections they need.
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot">
                <h3 className="text-xl font-semibold mb-3 text-autism-clay-taupe">Parent Education Workshops</h3>
                <p className="text-autism-sienna-gray">
                  Regular workshops on topics such as understanding autism, behavior management strategies, navigating educational systems, and planning for the future.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot">
                <h3 className="text-xl font-semibold mb-3 text-autism-clay-taupe">Support Groups</h3>
                <p className="text-autism-sienna-gray">
                  Facilitated groups for parents, siblings, and extended family members to share experiences, strategies, and emotional support.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-powder-apricot">
                <h3 className="text-xl font-semibold mb-3 text-autism-clay-taupe">Resource Navigation</h3>
                <p className="text-autism-sienna-gray">
                  Assistance connecting with community resources, educational services, funding options, and advocacy organizations.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-autism-honey-blush p-6 rounded-lg text-autism-clay-taupe">
              <Book size={64} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-center">Upcoming Workshops</h3>
              <ul className="space-y-4 mb-6">
                <li className="border-b border-autism-clay-taupe/20 pb-2">
                  <p className="font-medium">Understanding IEPs</p>
                  <p className="text-sm">June 15, 2025 • 6:30-8:00pm</p>
                </li>
                <li className="border-b border-autism-clay-taupe/20 pb-2">
                  <p className="font-medium">Sensory Strategies at Home</p>
                  <p className="text-sm">June 22, 2025 • 10:00-11:30am</p>
                </li>
                <li>
                  <p className="font-medium">Transition Planning</p>
                  <p className="text-sm">July 8, 2025 • 6:00-7:30pm</p>
                </li>
              </ul>
              <div className="text-center">
                <a href="/resources" className="autism-btn-primary block w-full text-center">
                  View All Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      <Section 
        color="alternate"
        className="text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-autism-clay-taupe mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 text-autism-sienna-gray">
            Our team is here to help you navigate the process and find the services that best meet your needs.
          </p>
          <a href="/contact" className="autism-btn-primary text-lg px-8 py-3">
            Contact Us Today
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default Services;
