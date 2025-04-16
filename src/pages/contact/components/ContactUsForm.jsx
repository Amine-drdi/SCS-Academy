import React from "react";

const ContactUsForm = () => {
  return (
    <div className="w-full min-h-[550px]">
      <form className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col justify-between">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nom et Prénom</label>
            <input
              type="text"
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="Entrez votre Nom et Prénom"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="Entrez votre Email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Téléphone</label>
            <input
              type="tel"
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="Entrez votre numéro de téléphone"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="Votre Message"
              required
            ></textarea>
          </div>
        </div>
        <div className="w-full flex justify-end pt-6">
          <button
            type="submit"
            className="text-white font-medium text-sm px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-700 transition-all duration-300"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
