export const FormBox = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-300 w-full py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          {children}
        </div>
      </div>
    </div>
  );
};
