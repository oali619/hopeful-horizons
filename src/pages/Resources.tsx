
import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { BookOpen, Calendar, Info, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Resources = () => {
  const upcomingEvents = [
    {
      title: "Understanding IEPs",
      date: "June 15, 2025",
      time: "6:30-8:00pm",
      location: "Autism Center MN - Conference Room",
      description: "Learn about Individualized Education Programs and how to advocate for your child in school settings."
    },
    {
      title: "Sensory Strategies at Home",
      date: "June 22, 2025",
      time: "10:00-11:30am",
      location: "Autism Center MN - Activity Room",
      description: "Practical strategies for creating sensory-friendly environments and activities at home."
    },
    {
      title: "Transition Planning Workshop",
      date: "July 8, 2025",
      time: "6:00-7:30pm",
      location: "Autism Center MN - Conference Room",
      description: "Planning for transitions across the lifespan, from early childhood to adulthood."
    },
    {
      title: "Parent Support Group",
      date: "July 15, 2025",
      time: "7:00-8:30pm",
      location: "Autism Center MN - Community Room",
      description: "Monthly gathering for parents to share experiences and support one another."
    },
  ];
  
  const educationalResources = [
    {
      title: "Understanding Autism Spectrum Disorder",
      description: "An overview of autism, including signs, symptoms, and support strategies.",
      type: "PDF Guide",
      icon: <Download size={20} />
    },
    {
      title: "Visual Supports and Social Stories",
      description: "Templates and examples to help with communication and transitions.",
      type: "Resource Kit",
      icon: <Download size={20} />
    },
    {
      title: "Sensory Processing Guide",
      description: "Understanding sensory challenges and implementing effective supports.",
      type: "PDF Guide",
      icon: <Download size={20} />
    },
    {
      title: "Executive Functioning Strategies",
      description: "Tools for improving organization, planning, and time management skills.",
      type: "PDF Guide",
      icon: <Download size={20} />
    },
  ];
  
  const communityResources = [
    {
      title: "Minnesota Department of Human Services",
      description: "Information on state programs and services for individuals with disabilities.",
      link: "#",
      icon: <ExternalLink size={20} />
    },
    {
      title: "Autism Society of Minnesota",
      description: "Advocacy, education, and community connections for individuals affected by autism.",
      link: "#",
      icon: <ExternalLink size={20} />
    },
    {
      title: "PACER Center",
      description: "Parent training and information center for families of children with disabilities.",
      link: "#",
      icon: <ExternalLink size={20} />
    },
    {
      title: "Minnesota Autism Resource Portal",
      description: "Centralized resource for autism services and supports across Minnesota.",
      link: "#",
      icon: <ExternalLink size={20} />
    },
  ];

  return (
    <Layout>
      <Hero
        title="Resources"
        subtitle="Educational materials, upcoming events, and community connections to support your journey"
      />
      
      <Section id="upcoming-events">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Calendar size={32} className="text-autism-soft-coral" />
                <h2 className="text-2xl md:text-3xl font-bold text-autism-clay-taupe">Upcoming Events</h2>
              </div>
              <p className="mb-6 text-autism-sienna-gray">
                Join us for these informative and supportive events at our center. Registration is required for all workshops.
              </p>
              <Link to="/contact" className="autism-btn-primary block text-center">
                Register for Events
              </Link>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-autism-powder-apricot">
                <h3 className="text-xl font-semibold mb-2 text-autism-clay-taupe">{event.title}</h3>
                <div className="flex flex-wrap gap-x-8 gap-y-2 mb-4 text-autism-sienna-gray">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-autism-soft-coral" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-autism-sienna-gray">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section id="educational-materials" color="alternate">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={32} className="text-autism-soft-coral" />
                <h2 className="text-2xl md:text-3xl font-bold text-autism-clay-taupe">Educational Materials</h2>
              </div>
              <p className="mb-6 text-autism-sienna-gray">
                Free downloadable resources to help you better understand autism and implement effective strategies at home and in the community.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationalResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-autism-powder-apricot">
                <h3 className="text-lg font-semibold mb-2 text-autism-clay-taupe">{resource.title}</h3>
                <p className="mb-4 text-autism-sienna-gray">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm bg-autism-honey-blush text-autism-clay-taupe px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                  <button className="flex items-center gap-2 text-autism-soft-coral hover:text-autism-peach-cream transition-colors">
                    {resource.icon}
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section id="community-resources">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <Info size={32} className="text-autism-soft-coral" />
                <h2 className="text-2xl md:text-3xl font-bold text-autism-clay-taupe">Community Resources</h2>
              </div>
              <p className="mb-6 text-autism-sienna-gray">
                Connect with these valuable organizations and services in Minnesota that provide additional support for individuals with autism and their families.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityResources.map((resource, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-autism-powder-apricot">
                <h3 className="text-lg font-semibold mb-2 text-autism-clay-taupe">{resource.title}</h3>
                <p className="mb-4 text-autism-sienna-gray">{resource.description}</p>
                <div className="flex justify-end">
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-autism-soft-coral hover:text-autism-peach-cream transition-colors"
                  >
                    {resource.icon}
                    <span>Visit Website</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
      
      <Section 
        color="alternate"
        className="text-center"
      >
        <div className="max-w-3xl mx-auto bg-autism-honey-blush p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-autism-clay-taupe mb-4">
            Resource Library
          </h2>
          <p className="text-lg mb-6">
            Visit our center's resource library for books, visual supports, sensory tools, and more that you can borrow.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/contact" className="autism-btn-primary text-center">
              Contact for Library Hours
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Resources;
