import * as React from 'react';
import { cn } from '@/lib/utils';
import { ComponentVariant } from '@/lib/enums/ComponentVariant';

export interface DataCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  variant?: ComponentVariant;
}

const variantStyles = {
  [ComponentVariant.PRIMARY]: {
    iconBg: 'bg-blue-500',
    textColor: 'text-blue-500',
    valueColor: 'text-blue-950',
  },
  [ComponentVariant.GREEN]: {
    iconBg: 'bg-green-500',
    textColor: 'text-green-500',
    valueColor: 'text-blue-950',
  },
  [ComponentVariant.RED]: {
    iconBg: 'bg-red-500',
    textColor: 'text-red-500',
    valueColor: 'text-blue-950',
  },
  [ComponentVariant.YELLOW]: {
    iconBg: 'bg-yellow-500',
    textColor: 'text-yellow-500',
    valueColor: 'text-blue-950',
  },
};

const DataCard: React.FC<DataCardProps> = ({ icon, title, value, description, variant = ComponentVariant.PRIMARY }) => {
  const styles = variantStyles[variant];

  if (!styles) {
    console.error(`Invalid variant '${variant}' provided.`);
    return null; // Or provide a fallback style here
  }

  return (
    <div className="w-full p-6 bg-white rounded-lg border border-gray-100 flex-col justify-start items-start gap-4 inline-flex">
      <div className="self-stretch justify-start items-center gap-4 inline-flex">
        <div className={`w-10 h-10 p-2 ${styles.iconBg} rounded-full justify-center items-center flex`}>
          <div className="grow shrink basis-0 self-stretch justify-center items-center inline-flex">
            <div className="">
              {icon}
            </div>
          </div>
        </div>
        <div className="flex-col justify-center items-center inline-flex">
          <div className={`self-stretch ${styles.textColor} text-base font-medium font-['Poppins'] leading-tight`}>
            {title}
          </div>
          <div className={`w-full ${styles.valueColor} text-2xl font-semibold font-['Poppins'] leading-[30px]`}>
            {value}
          </div>
        </div>
      </div>
      <div className="self-stretch text-slate-400 text-sm font-normal font-['Poppins'] leading-[17.50px]">
        {description}
      </div>
    </div>
  );
};

export { DataCard };
