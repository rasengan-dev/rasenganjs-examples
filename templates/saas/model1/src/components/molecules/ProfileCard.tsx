import Typography from '../atoms/Typography';
import Image from '@rasenganjs/image';
import { Link } from 'rasengan';
import { useTheme } from '@rasenganjs/theme';

interface ProfileProps {
  avatar: string;
  name: string;
  description: string;
  portfolio: string | null;
  linkedin: string;
}

function ProfileCard({
  avatar,
  name,
  description,
  portfolio,
  linkedin,
}: ProfileProps) {
  const { isDark } = useTheme();

  return (
    <Link to={portfolio ? portfolio : linkedin} className="mb-1 ">
      <div className=" group flex flex-col  items-center justify-center">
        <Image
          src={avatar}
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full object-cover mb-4"
        />

        <Typography
          text={name}
          className={` text-lg lg:text-xl font-extrabold   ${isDark ? 'text-rasengan-dark-text group-hover:text-rasengan-dark-primary' : 'bg-rasengan-dark-text group-hover:text-rasengan-light-primary'} `}
        />

        <Typography
          text={description}
          className={`text-[15px] lg:text-[17px] text-center mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        />
      </div>
    </Link>
  );
}

export default ProfileCard;
