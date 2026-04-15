import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  image: string;
  overlay?: string;
}

const ParallaxSection = ({ children, image, overlay = "bg-foreground/60" }: Props) => {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ParallaxSection;
