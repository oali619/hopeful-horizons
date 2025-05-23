import React from "react";
import { useState, useEffect } from "react";
import {
  ActionFunctionArgs,
  unstable_composeUploadHandlers,
  unstable_createFileUploadHandler,
  unstable_createMemoryUploadHandler,
  unstable_parseMultipartFormData,
} from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "../components/ui/sonner";
import { EmailTemplate } from "../components/EmailTemplate";
import { Resend } from "resend";

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
  console.log({ data });
  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: 'admin@hopefulhorizonsmn.com',
    to: 'admin@hopefulhorizonsmn.com',
    subject: `New Referral - ${data.clientName}`,
    react: <EmailTemplate data={data} referral={true} />,
  });
  return response;
}

const Referral = () => {
  const { register, formState: { errors } } = useForm();
  const [referralSent, setReferralSent] = useState(false);
  const [referralFailed, setReferralFailed] = useState(false);
  const response = useActionData<typeof action>();

  useEffect(() => {
    response?.data?.id && setReferralSent(true);
    response?.error && setReferralFailed(true);
  }, [response]);

  return (
    <Layout>
      {referralSent && toast.success('Referral sent successfully.')}
      {referralFailed && toast.error('Referral failed to send. Please try again.')}
      <Hero
        title="Make a Referral"
        subtitle="We're here to help families find the support they need"
        ctaText=""
        ctaLink=""
      />

      <Section
        title="Referral Process"
        subtitle="We welcome referrals from healthcare providers, educators, and families."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">How Our Referral Process Works</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <h4 className="font-medium">Submit a Referral</h4>
                  <p className="text-neutral-dark mt-1">Complete the referral form on this page with as much detail as possible.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <h4 className="font-medium">Initial Contact</h4>
                  <p className="text-neutral-dark mt-1">Our intake coordinator will contact the family within 2 business days of receiving the referral.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <h4 className="font-medium">Screening & Assessment</h4>
                  <p className="text-neutral-dark mt-1">We'll schedule an initial assessment to determine the appropriate services.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <h4 className="font-medium">Service Planning</h4>
                  <p className="text-neutral-dark mt-1">Our team will develop a personalized plan of care based on individual needs.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-5 border border-interactive-hover rounded-lg bg-neutral-light">
              <h4 className="font-semibold mb-2">Need immediate assistance?</h4>
              <p className="mb-4">If you have urgent questions or need help with the referral process, please contact us directly.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-primary text-white hover:bg-interactive-hover">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <a href="tel:+16122222817">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Call (612) 222-2817
                </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-border">
            <h3 className="text-xl font-semibold mb-4 text-primary">Referral Form</h3>
            <form
              action='/referral'
              method='POST'
              encType='multipart/form-data'
              id='referral_form'
              className="space-y-5"
            >
              <div className="space-y-1.5">
                <Label htmlFor="referralType">Referral Type</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="selfReferral" {...register("referralType")} value="Self-Referral" />
                    <label htmlFor="selfReferral" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Self-Referral
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="providerReferral" {...register("referralType")} value="Provider Referral" />
                    <label htmlFor="providerReferral" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Provider Referral
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="referrerName">Your Name*</Label>
                  <Input id="referrerName" {...register("referrerName", { required: true })} className={errors.referrerName ? "border-red-500" : ""} />
                  {errors.referrerName && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="referrerOrganization">Organization (if applicable)</Label>
                  <Input id="referrerOrganization" {...register("referrerOrganization")} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="referrerEmail">Your Email*</Label>
                  <Input id="referrerEmail" type="email" {...register("referrerEmail", { required: true })} className={errors.referrerEmail ? "border-red-500" : ""} />
                  {errors.referrerEmail && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="referrerPhone">Your Phone*</Label>
                  <Input id="referrerPhone" {...register("referrerPhone", { required: true })} className={errors.referrerPhone ? "border-red-500" : ""} />
                  {errors.referrerPhone && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>
              </div>

              <div className="border-t border-border my-4 pt-4">
                <h4 className="font-medium mb-3">Client Information</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="clientName">Client Name*</Label>
                    <Input id="clientName" {...register("clientName", { required: true })} className={errors.clientName ? "border-red-500" : ""} />
                    {errors.clientName && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="clientAge">Client Age*</Label>
                    <Input id="clientAge" type="number" {...register("clientAge", { required: true })} className={errors.clientAge ? "border-red-500" : ""} />
                    {errors.clientAge && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                  </div>
                </div>

                <div className="space-y-1.5 mt-4">
                  <Label htmlFor="reasonForReferral">Reason for Referral*</Label>
                  <Textarea
                    id="reasonForReferral"
                    {...register("reasonForReferral", { required: true })}
                    placeholder="Please describe the primary concerns and reasons for seeking services"
                    className={errors.reasonForReferral ? "border-red-500" : ""}
                  />
                  {errors.reasonForReferral && <p className="text-red-500 text-xs mt-1">This field is required</p>}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label>Services Interested In</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service1" {...register("servicesInterested")} value="Diagnostic Assessment" />
                    <label htmlFor="service1" className="text-sm font-medium leading-none">Diagnostic Assessment</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service2" {...register("servicesInterested")} value="Therapy Services" />
                    <label htmlFor="service2" className="text-sm font-medium leading-none">Therapy Services</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service3" {...register("servicesInterested")} value="Skills Development" />
                    <label htmlFor="service3" className="text-sm font-medium leading-none">Skills Development</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="service4" {...register("servicesInterested")} value="Family Support" />
                    <label htmlFor="service4" className="text-sm font-medium leading-none">Family Support</label>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-start space-x-2">
                  <Checkbox id="consent" {...register("consent", { required: true })} className={errors.consent ? "border-red-500" : ""} />
                  <label htmlFor="consent" className="text-sm">
                    I confirm that I have permission to refer this individual for services, and understand Hopeful Horizons will contact them directly.*
                  </label>
                </div>
                {errors.consent && <p className="text-red-500 text-xs mt-1">You must consent to make a referral</p>}
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => toast.success('Referral submission pending...')}
                  type="submit"
                  className="w-full bg-accent text-neutral-dark hover:bg-accent/80"
                >
                  Submit Referral
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <Section color="alternate" className="text-center">
        <h3 className="text-2xl font-semibold mb-4">Thank You for Your Referral</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Your referral helps us connect families with the support they need. We value your trust and will handle all information with the utmost confidentiality and care.
        </p>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
          <Link to="/contact">Contact Us With Questions</Link>
        </Button>
      </Section>
    </Layout>
  );
};

export default Referral;
function useEffects(arg0: () => void, arg1: any[]) {
  throw new Error("Function not implemented.");
}

