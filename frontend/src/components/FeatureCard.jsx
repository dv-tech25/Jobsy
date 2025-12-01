/**
 * FeatureCard Component - Displays feature information in a card layout
 * 
 */
export const FeatureCard = ({ img, title, description }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow p-6 h-full flex flex-col">
      
      {/* Feature Image Box */}
      <div className="h-48 sm:h-44 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
        <img
          src={img}
          alt={title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};
