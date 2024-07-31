import { ComponentProps } from 'react';
import { useTheme } from '@rasenganjs/theme';
import { StarIcon } from 'hugeicons-react';
import Typography from '../atoms/Typography';
interface TestimonialProps {
  children?: React.ReactNode;
  className?: ComponentProps<'div'>['className'];
  testimonial: string;
  author: string;
  profile: string;
  ranking: number;
}

export default function TestimonialCard({
  testimonial,
  author,
  profile,
  ranking,
  className,
}: TestimonialProps): JSX.Element {
  const { isDark } = useTheme();

  return (
    <div
      className={` w-full flex flex-col items-center justify-between md:w-[280px]  p-6 lg:p-7 h-[250px] lg:h-[300px] rounded-2xl hover:scale-105 ease-in-out duration-[400ms]   ${
        isDark
          ? `bg-rasengan-dark-background text-rasengan-dark-text shadow-rasengan-dark-shadow 
                 border-[1px] border-rasengan-dark-border hover:shadow-2xl
              `
          : `bg-rasengan-light-background text-rasengan-light-text shadow-rasengan-light-shadow 
                 shadow-lg hover:shadow-2xl
              }`
      }  ${className}`}
    >
      <Typography
        text={`"${testimonial}"`}
        className="font-bold text-[18px] lg:text-xl text-center h-[80px] lg:h-[100px]  "
      />
      <ul className="flex gap-2 my-2 lg:my-4">
        {Array.from({ length: ranking }, (_, index) => (
          <li key={index}>
            <StarIcon key={index} className="text-rasengan-light-primary" />
          </li>
        ))}
      </ul>
      <Typography text={author} className="font-bold text-lg " />
      <Typography text={profile} className="text-sm " />
    </div>
  );
}
