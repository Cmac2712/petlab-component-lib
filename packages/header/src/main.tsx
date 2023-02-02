import React, { FC } from "react";

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: FC = ({ children }: HeaderProps) => {
  return (
    <header
      style={{
        backgroundColor: "blue",
        color: "white",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      {children}
    </header>
  );
};

export { Header };
