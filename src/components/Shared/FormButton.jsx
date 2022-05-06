export const FormButton = ({ text, classes }) => {
  return (
    <div className="mt-8">
      <button aria-label={text} className={`btn btn-primary w-full ${classes}`}>
        {text}
      </button>
    </div>
  );
};
