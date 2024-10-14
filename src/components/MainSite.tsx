import React from "react";

interface MainProps {
  children: React.ReactNode;
}

function MainSite({ children }: MainProps) {
  return <div className="main">
        {children}
    </div>;
}

export default MainSite;
