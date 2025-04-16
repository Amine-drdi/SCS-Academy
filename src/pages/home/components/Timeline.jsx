import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleNumber6Filled,
} from "react-icons/tb";

const Timeline = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Comment démarrer avec nous ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Dès le premier contact, nous sommes à vos côtés pour définir vos
            objectifs, vous guider dans vos démarches administratives et faciliter
            l'accès aux solutions de financement adaptées. Ensemble, nous transformons
            vos ambitions en réalité.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-8">
          {/* Step 1 */}
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white shadow-xl mr-4">
              <TbCircleNumber1Filled className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Prenez contact avec un expert de notre équipe
              </h3>
              <p className="text-gray-600">
                Nos conseillers sont là pour vous guider dans la définition de
                votre projet de formation et vous accompagner dans l'obtention de
                votre financement. N'hésitez pas à solliciter leur expertise pour
                démarrer dans les meilleures conditions.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white shadow-xl mr-4">
              <TbCircleNumber2Filled className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accédez à votre espace personnel
              </h3>
              <p className="text-gray-600">
                Après votre inscription, vous recevrez un email avec une invitation
                pour accéder à votre espace personnel sur notre plateforme. C'est ici
                que vous pourrez démarrer et suivre l'évolution de votre formation.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white shadow-xl mr-4">
              <TbCircleNumber3Filled className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Apprenez à votre propre rythme
              </h3>
              <p className="text-gray-600">
                Notre plateforme vous permet de progresser à votre convenance, sans
                pression ni contraintes de temps. Que ce soit sur votre ordinateur,
                tablette ou smartphone, vous avez la liberté d'apprendre où vous le
                souhaitez, quand vous le souhaitez.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white shadow-xl mr-4">
              <TbCircleNumber4Filled className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Interagissez avec la communauté et les formateurs
              </h3>
              <p className="text-gray-600">
                Si vous avez des questions ou souhaitez partager vos réflexions,
                profitez du forum et des sections de commentaires pour échanger avec
                vos pairs et les formateurs. C'est l'occasion d'enrichir votre
                expérience d'apprentissage.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white shadow-xl mr-4">
              <TbCircleNumber5Filled className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Recevez votre attestation de formation
              </h3>
              <p className="text-gray-600">
                À l'issue de votre parcours, une attestation de suivi vous sera
                délivrée, attestant de votre engagement et de la validation de votre
                formation.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-600 text-white shadow-xl mr-4">
              <TbCircleNumber6Filled className="w-8 h-8" />
            </div>
            <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Percevez vos indemnités de financement
              </h3>
              <p className="text-gray-600">
                Si vous avez suivi une formation financée par le DPC, une fois celle-ci
                validée, l'ANDPC procédera au versement des indemnités directement sur
                votre compte bancaire, comme indiqué sur votre profil sur mondpc.fr.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
