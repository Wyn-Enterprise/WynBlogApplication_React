import { WynIntegration } from "@grapecity/wyn-integration";

import React, { useEffect } from 'react';

const DashboardLite = ({ portalUrl, dashboardId, token }) => {
  useEffect(() => {
      WynIntegration.createViewerLite({
        baseUrl: portalUrl,
        token: token,
        defaults: {
            dashboardId: dashboardId,
        },
    }, '#wyn-root');
  });

  return <div className="dashboard-container">
            <div id="wyn-root" />
          </div>;
};

export default DashboardLite;
