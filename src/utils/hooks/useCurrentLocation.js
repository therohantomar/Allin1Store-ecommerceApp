import { useEffect, useState } from "react";
import { GEOLOCATION_LINK } from "../constants";

function useCurrentLocation() {
  const [location, setLocation] = useState({});
  const [err, setError] = useState(null);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const { signal } = controller;

    const geolocationWatchId = navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `${GEOLOCATION_LINK}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`,
          { signal }
        )
          .then((res) => res.json())
          .then((data) => {
            if (isMounted) {
              setLocation(data);
            }
          })
          .catch((error) => {
            if (isMounted) {
              setError(error);
            }
          });
      }
    );

    //Permission granted or not
    if ("permissions" in navigator) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          setStatus(permissionStatus.state); // Set status directly from permissionStatus.state
        });
    }
    return () => {
      isMounted = false;
      controller.abort();
      navigator.geolocation.clearWatch(geolocationWatchId);
    };
  }, []);

  return {location, err, status };
}

export default useCurrentLocation;
