export const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className=" text-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold uppercase text-gray-600">Zen Fitness</h1>
          <p className="py-6 text-lg text-gray-600">
            Warehouse management (inventory management) website. Built on using React, firebase,
            react router, node, express, mongodb etc. I have completed this project as a part of my
            weekly assignment provided by <b>programming hero</b> team.
          </p>

          <p className="mb-5 text-lg text-gray-600 font-medium">
            What I was given as a task, full description can be found{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-Ar1f007/blob/main/task_description.md"
              className="link"
            >
              here.
            </a>
          </p>
          <p className="mb-5 text-lg text-gray-600 font-medium">
            More about project can be found{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ProgrammingHeroWC4/warehouse-management-client-side-Ar1f007/blob/main/README.md"
              className="link"
            >
              here.
            </a>
          </p>
          <p className="text-lg text-gray-400">Version: 1.0.0</p>
          <p className="text-lg text-gray-400">Frontend: React</p>
          <p className="text-lg text-gray-400">Backend: Node</p>
          <p className="text-lg text-gray-400">Tailwind component library: DaisyUI</p>
        </div>
      </div>
    </div>
  );
};
