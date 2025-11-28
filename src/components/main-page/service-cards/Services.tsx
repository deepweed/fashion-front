import { ServicesData } from "./services.data";

const Services = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    {ServicesData.map((service, i) => {
      const Icon = service.alt;

      return (
        <div
          key={i}
          className="w-full rounded-3xl bg-white p-5 shadow-sm flex flex-col"
        >
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900">
              {service.title}
            </h3>
            <Icon
              strokeWidth={1.5}
              className="w-10 h-10 md:w-13 md:h-13 text-blue-700"
            />
          </div>
          <p className="w-full text-gray-600 text-xs md:text-sm leading-snug">
            {service.description}
          </p>
        </div>
      );
    })}
  </div>
);

export default Services;
