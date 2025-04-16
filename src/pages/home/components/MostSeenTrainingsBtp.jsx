import Card from "../../../components/CardBtp";

const MostSeenTrainings = ({ title, description, trainings }) => {
  return (
    <section className="mt-12 mb-16 px-6 md:px-20">
      <div className="text-center mb-8">
        <p className="font-bold text-4xl text-gray-800">{title}</p>
        <p className="mt-4 text-lg text-gray-500 md:max-w-4xl mx-auto">{description}</p>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
        {trainings.slice(0, 11).map((training) => (
          <Card
            key={training.id}
            imageUrl={training.image}
            title={training.title}
            instructors={training.instructors}
            duration={training.duration}
            id={training.id}
          />
        ))}
      </div>
    </section>
  );
};

export default MostSeenTrainings;
