import JobRow from "./JobRow";

const Jobs = () => {
  return (
    <div className="py-3">
      <div className="container">
        <h2 className="font-bold mb-4">Recent jobs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <JobRow />
          <JobRow />
          <JobRow />
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
