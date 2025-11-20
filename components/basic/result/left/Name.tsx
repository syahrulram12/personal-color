"use client";

interface NameUserProps {
  className?: string;
  children?: React.ReactNode;
}

const NameUser = ({ className, children }: NameUserProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default NameUser;
