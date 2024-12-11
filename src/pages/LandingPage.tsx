import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Users, MapPin, Shield } from 'lucide-react';

export function LandingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16 sm:py-24">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
          Find Local Talent <span className="text-indigo-600">Near You</span> at Candid Socials
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
          Connect with skilled professionals in your area or find local businesses looking for your expertise.
        </p>
        <div className="mt-10">
          <Link
            to="/auth"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started!
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 sm:py-24 bg-white rounded-xl shadow-sm">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Features</h2>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
            <div className="text-center">
              <div className="flex justify-center">
                <MapPin className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Local Connections</h3>
              <p className="mt-2 text-base text-gray-500">
                Find talented professionals right in your neighborhood, making collaboration easier.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Verified Professionals</h3>
              <p className="mt-2 text-base text-gray-500">
                Connect with verified local talent and businesses you can trust.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Secure Platform</h3>
              <p className="mt-2 text-base text-gray-500">
                Your data and transactions are protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 sm:py-24">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block text-indigo-600">Join our community today.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <Link
            to="/auth"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}