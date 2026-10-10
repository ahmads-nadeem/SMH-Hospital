export default function Loading({ message = "Loading, please wait..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900/60 backdrop-blur-sm transition-opacity">
      {/* Outer Card */}
      <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 max-w-xs w-full mx-4">
        
        {/* Animated Spinner Ring */}
        <div className="relative flex items-center justify-center">
          {/* Background Glow */}
          <div className="absolute w-12 h-12 bg-blue-500/20 rounded-full blur-md animate-pulse"></div>
          
          {/* Spinner Circle */}
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-500 rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-5 text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide text-center">
          {message}
        </p>

      </div>
    </div>
  );
}

