const FullPageLoading = () => {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 z-50">
      <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      <div className="text-white mt-4 text-lg font-bold">Loading...</div>
    </div>
  );
};

export default FullPageLoading;
