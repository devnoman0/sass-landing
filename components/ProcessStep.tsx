type ProcessStepProps = {
  title: string;
  description: string;
  number: string;
};

const ProcessStep = ({ title, description, number }: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center shadow-custom border py-8 px-4 rounded-md">
      <div className="flex items-center justify-center bg-gray-100 h-16 w-16 rounded-[20px] mb-6">
        <div className="h-6 w-6 bg-gray-400 rounded-full"></div>
      </div>
      <h1 className="font-semibold mb-2">{title}</h1>
      <p className="text-secondary-200 leading-[30px]">{description}</p>
      {/* <h1 className="absolute top-0 right-0 leading-none opacity-5 font-extrabold text-[200px]">
        {number}
      </h1> */}
    </div>
  );
};

export default ProcessStep;
