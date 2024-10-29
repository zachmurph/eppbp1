import React from 'react';
import { useProposal } from '../context/ProposalContext';
import { Download, Mail, Phone, Globe, MapPin } from 'lucide-react';

const ProposalPreview = () => {
  const { proposal } = useProposal();
  const companyInfo = {
    name: "Your Company Name",
    address: "123 Construction Ave, Builder City, BC 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@yourcompany.com",
    website: "www.yourcompany.com"
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm">
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 rounded-t-xl">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold text-gray-900">Proposal Preview</h2>
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-gray-200 pb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{companyInfo.name}</h1>
            <div className="mt-4 space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>{companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>{companyInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>{companyInfo.website}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Proposal For:</p>
            <h2 className="text-xl font-semibold mt-2">{proposal.clientName || 'Client Name'}</h2>
            <p className="text-gray-600 mt-4">Project:</p>
            <h3 className="text-lg font-medium">{proposal.projectName || 'Project Name'}</h3>
            <p className="text-gray-600 mt-4">Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Executive Summary</h2>
          <p className="text-gray-600 leading-relaxed">
            We are pleased to submit this proposal for {proposal.projectName}. Our team has carefully reviewed your requirements and developed a comprehensive solution that aligns with your objectives.
          </p>
        </div>

        {/* Project Gallery */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Project Gallery</h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800"
              alt="Previous work"
              className="rounded-lg object-cover h-48 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800"
              alt="Previous work"
              className="rounded-lg object-cover h-48 w-full"
            />
          </div>
        </div>

        {/* Scope of Work */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Scope of Work</h2>
          <div className="prose max-w-none text-gray-600">
            {proposal.scope || 'Project scope details will appear here.'}
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Project Timeline</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-medium">Project Start</p>
                  <p className="text-gray-600">{proposal.timeline}</p>
                </div>
              </div>
              {/* Add more timeline points as needed */}
            </div>
          </div>
        </div>

        {/* Custom Sections */}
        {proposal.sections?.map((section: any, index: number) => (
          <div key={index} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            <div className="prose max-w-none text-gray-600">
              {section.content}
            </div>
          </div>
        ))}

        {/* Pricing */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Investment</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2">Item</th>
                  <th className="text-right py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Materials</td>
                  <td className="text-right">$1,000.00</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2">Labor</td>
                  <td className="text-right">$2,500.00</td>
                </tr>
                <tr className="font-semibold">
                  <td className="py-2">Total Investment</td>
                  <td className="text-right">$3,500.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Terms & Conditions</h2>
          <div className="prose max-w-none text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>This proposal is valid for 30 days from the date of submission.</li>
              <li>50% deposit required to commence work.</li>
              <li>Final payment due upon project completion.</li>
              <li>Any changes to the scope will require written approval.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Ready to Get Started?</h3>
          <p className="text-blue-700 mb-4">
            We're excited to work with you on this project. To accept this proposal and move forward:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-blue-700">
            <li>Sign and return the attached agreement</li>
            <li>Submit the initial deposit</li>
            <li>Schedule a kick-off meeting with our team</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProposalPreview;