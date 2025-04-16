import React from "react";

const Testimonials = () => {
  return (
    <div id="testimonials" className="flex flex-col gap-6 scroll-mt-52">
      <p className="text-2xl font-medium text-gray-600 max-w-2xl">
        Pourquoi les professionnels choisissent nos formations
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 border-2 border-gray-200 w-full rounded-lg p-4">
          <div className="flex flex-row items-center gap-4">
            <img
              src="/images/healthcare-worker-portrait.jpg?s=612x612&w=0&k=20&c=rJDnJzrLxV6vpK8SFaau-A3_hMbccoEBQf8lFCfc9ZE="
              alt="formateur"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="underline">Jon Doe</p>
              <p className="text-gray-400 text-sm">Vénéréologue</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            "Je suis plutôt satisfait de cette formation, qui propose de bons
            rappels de l'essentiel"
          </p>
        </div>
        <div className="flex flex-col gap-2 border-2 border-gray-200 w-full rounded-lg p-4">
          <div className="flex flex-row items-center gap-4">
            <img
              src="/images/close-up-portrait-of-young-female-doctor-wear-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=5clbDZW4GHOgECbiTrnuASjgVLKgwWp_7u-5eXpw6Cg="
              alt="formateur"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="underline">Jon Doe</p>
              <p className="text-gray-400 text-sm">Vénéréologue</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            "Je suis plutôt satisfait de cette formation, qui propose de bons
            rappels de l'essentiel"
          </p>
        </div>
        <div className="flex flex-col gap-2 border-2 border-gray-200 w-full rounded-lg p-4">
          <div className="flex flex-row items-center gap-4">
            <img
              src="/images/closeup-photo-doctor-standing-hospital-world-doctors-day-with-generative-ai_455711-2177.jpg"
              alt="formateur"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="underline">Jon Doe</p>
              <p className="text-gray-400 text-sm">Vénéréologue</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            "Je suis plutôt satisfait de cette formation, qui propose de bons
            rappels de l'essentiel"
          </p>
        </div>
        <div className="flex flex-col gap-2 border-2 border-gray-200 w-full rounded-lg p-4">
          <div className="flex flex-row items-center gap-4">
            <img
              src="/images/dr-zacharias.jpg?im="
              alt="formateur"
              className="w-16 h-16 object-cover rounded-full"
            />
            <div className="flex flex-col gap-1">
              <p className="underline">Jon Doe</p>
              <p className="text-gray-400 text-sm">Vénéréologue</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            "Je suis plutôt satisfait de cette formation, qui propose de bons
            rappels de l'essentiel"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
