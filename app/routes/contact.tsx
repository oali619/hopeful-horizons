
import React from "react";
import { useState, useEffect } from "react";
import {
  ActionFunctionArgs,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData
} from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import { Resend } from 'resend';
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "../components/ui/sonner";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ContactForm from "../components/ContactForm";
import { EmailTemplate } from '../components/EmailTemplate';

export async function action({ request }: ActionFunctionArgs) {
  const uploadHandler = unstable_composeUploadHandlers(
    unstable_createFileUploadHandler({
      maxPartSize: 5_000_000,
      file: ({ filename }) => filename,
    }),
    // parse everything else into memory
    unstable_createMemoryUploadHandler()
  );
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );
  const data = Object.fromEntries(formData.entries());
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: 'admin@hopefulhorizonsmn.com',
    to: 'admin@hopefulhorizonsmn.com',
    subject: `New Contact Submission - ${data.name}`,
    react: <EmailTemplate data={data} />,
  });
  return response;
}

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const response = useActionData<typeof action>();

  useEffect(() => {
    response?.data?.id && setMessageSent(true);
    response?.error && setMessageFailed(true);
  }, [response]);

  return (
    <Layout>
      {messageSent && toast.success('Message sent successfully.')}
      {messageFailed && toast.error('Message failed to send. Please try again.')}
      <Hero
        title="Contact Us"
        subtitle="We're here to answer your questions and help you access the support you need"
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="mb-8 text-autism-complementary-text">
              Whether you have questions about our services, want to schedule an appointment, or need more information about autism resources in Minnesota, we're here to help. Fill out the form below, and a member of our team will get back to you as soon as possible.
            </p>

            <ContactForm />
          </div>

          <div className="lg:col-span-2 bg-autism-neutral-light p-6 rounded-lg border border-autism-border-divider">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full">
                  <MapPin size={20} className="text-autism-accent-cta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <address className="not-italic text-autism-complementary-text">
                    1710 Douglas Dr Ste #225E<br />
                    Golden Valley, MN 55422<br />
                    United States
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full">
                  <Phone size={20} className="text-autism-accent-cta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-autism-complementary-text">
                    <a href="tel:+16122222817" className="hover:text-autism-bright-blue">(612) 222-2817</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full">
                  <Mail size={20} className="text-autism-accent-cta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-autism-complementary-text">
                    <a href="mailto:admin@hopefulhorizonsmn.com" className="hover:text-autism-bright-blue">admin@hopefulhorizonsmn.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full">
                  <Clock size={20} className="text-autism-accent-cta" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Hours of Operation</h4>
                  <p className="text-autism-complementary-text">
                    Monday - Friday: 7:00am - 9:00pm<br />
                    Saturday - Sunday: 9:00am - 5:00pm<br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section color="alternate">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Find Us</h2>
        <div className="rounded-lg overflow-hidden border-4 border-white shadow-lg">
          <div className="aspect-[16/9] w-full bg-autism-border-divider flex items-center justify-center">
          <iframe width="100%" height="100%" title="Hopeful Horizons" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1710%20Douglas%20Dr%20Golden%20Valley,%20MN%2055422+(Hopeful%20Horizons)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
          </div>
        </div>
      </Section>

      <Section >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider">
              <h3 className="text-lg font-semibold mb-2">How do I schedule an evaluation?</h3>
              <p className="text-autism-complementary-text">
                To schedule an evaluation, please complete our contact form or call our office. Our intake coordinator will gather some initial information and guide you through the process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider">
              <h3 className="text-lg font-semibold mb-2">Does insurance cover your services?</h3>
              <p className="text-autism-complementary-text">
                We accept most major insurance plans, including Medical Assistance. Our administrative team can help verify your benefits and explain any out-of-pocket costs before services begin.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider">
              <h3 className="text-lg font-semibold mb-2">How long is the waiting list for services?</h3>
              <p className="text-autism-complementary-text">
                Waiting times vary depending on the service and current demand. We strive to accommodate families as quickly as possible and can provide resources to support you while waiting for services to begin.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-autism-border-divider">
              <h3 className="text-lg font-semibold mb-2">What age groups do you serve?</h3>
              <p className="text-autism-complementary-text">
                We provide services for individuals of all ages, from early childhood through adulthood. Our programs are tailored to meet the developmental needs of each age group.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
