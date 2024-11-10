import React, { useEffect, useState } from 'react'

const DevelopmentRoute = ({children}) => {
const [routeType, setRouteType] = useState<string>('');

  useEffect(() => {
    setRouteType(process.env.NODE_ENV);
  }, []);

  return routeType === "development" ? <>{children}</> : <></>;
}

export default DevelopmentRoute

