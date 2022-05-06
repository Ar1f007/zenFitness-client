export const FormButton = ({ text }) => {
  return (
    <div className="mt-8">
      <button aria-label={text} className="btn btn-primary w-full">
        {text}
      </button>
    </div>
  );
};
