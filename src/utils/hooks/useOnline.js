import { useEffect, useState } from "react";

function useOnline() {
  const [online, setOnline] = useState(true);
  function Online() {
    setOnline(true);
  }
  function Offline() {
    setOnline(false);
  }

  useEffect(() => {
    window.addEventListener("online", Online);
    window.addEventListener("offline", Offline);

    return () => {
      window.removeEventListener("online", Online);
      window.removeEventListener("offline", Offline);
    };
  }, [online]);

  return online;
}

export default useOnline;
