import JobRow from "./JobRow";

const Jobs = () => {
  return (
    <div className="bg-neutral-800 py-6 rounded-3xl">
      <div className="container">
        <h2 className="font-bold mb-4">Recent jobs</h2>
        <div className="flex flex-col gap-4">
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
          <JobRow />
        </div>
      </div>
    </div>
  );
};

export default Jobs;
