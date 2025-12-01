export const LoadingSpinner = ({ size = "md", text = "Loading..." }) => {
  const sizeClass = {
    sm: "h-6 w-6",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  }[size];

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`animate-spin rounded-full ${sizeClass} border-4 border-gray-200 border-b-blue-600`}></div>
      {text && <p className="text-gray-600 text-sm font-medium">{text}</p>}
    </div>
  );
};

export const PageLoader = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <LoadingSpinner size="lg" text="Loading..." />
  </div>
);

export const InlineLoader = ({ text = "Loading..." }) => (
  <div className="flex items-center justify-center py-8">
    <LoadingSpinner size="md" text={text} />
  </div>
);
