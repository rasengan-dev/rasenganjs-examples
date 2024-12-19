import React from "react";

const useIsTouchDevice = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    // Check if the device supports touch events
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

    // Set the state to true if it's not a touch device
    setIsDesktop(!isTouchDevice);
  }, []);

  return {
    isDesktop,
  };
};

export default useIsTouchDevice;
