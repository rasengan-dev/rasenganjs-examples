import Image from "@rasenganjs/image";
import {
  FunctionComponent,
  ImgHTMLAttributes,
  useEffect,
  useState,
} from "react";

export type LogoProps = { src?: string } & ImgHTMLAttributes<HTMLImageElement>;

export const Logo: FunctionComponent<LogoProps> = ({ src, ...props }) => {
  const [logo, setlogo] = useState<string>("");
  useEffect(() => {
    const importImage = async () => {
      ["png", "jpg", "svg", "jpeg"].forEach((ext) => {
        import(`@/assets/images/logo.${ext}`)
          .then((image) => {
            setlogo(image.default);
          })
          .catch(() => {});
      });
    };
    if (src) {
      setlogo(src);
    } else {
      importImage();
    }
  }, []);

  return <Image src={logo} alt="Logo" {...props} />;
};
