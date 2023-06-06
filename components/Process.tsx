import React from "react";
import ProcessStep from "./ProcessStep";

const Process = () => {
  return (
    <div className="max-w-7xl mx-auto py-28 ">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-sm font-semibold mb-2 text-primary-500">
          Stockie Operation Across the world
        </p>
        <h1 className="text-4xl font-bold mb-2">
          We have best team and best process
        </h1>
        <p className="text-secondary-200 w-2/4 mb-6">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 mt-16">
        <ProcessStep
          title="Project Discovery Call"
          description="Party we years to order allow asked of. We so opinion friends me message as delight."
          number="2"
        />

        <ProcessStep
          title="Project Discovery Call"
          description="Party we years to order allow asked of. We so opinion friends me message as delight."
          number="3"
        />

        <ProcessStep
          title="Project Discovery Call"
          description="Party we years to order allow asked of. We so opinion friends me message as delight."
          number="3"
        />
        <ProcessStep
          title="Project Discovery Call"
          description="Party we years to order allow asked of. We so opinion friends me message as delight."
          number="3"
        />
      </div>
    </div>
  );
};

export default Process;
