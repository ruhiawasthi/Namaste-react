import { useState, useEffect } from "react";

const useOnlineStataus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStataus;
// doubt this useeffect will run just once and in browser we add addEventListener whic keeps checking wether user is online or offfline for ex when first time it find user in online so in setOnline staus it just puts true then after some points it fins then taht user is offline at the time did our useEffect will be call second time?