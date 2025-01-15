import { ReactNode } from "react";

const TechCardNew = ({ icon }: { icon: ReactNode }) => {
  return (
    <div className="bg-white dark:bg-gray-700 w-[150px] h-[150px] flex items-center text-center p-8 rounded-lg">
      {icon}
    </div>
  );
};

export default TechCardNew;
