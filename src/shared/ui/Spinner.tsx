const Spinner = ({ className }: { className?: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`h-8 w-8 animate-spin rounded-full border-4 border-solid  border-t-transparent ${
          className ? className : "border-gray-300"
        }`}
      ></div>
    </div>
  );
};

export default Spinner;
