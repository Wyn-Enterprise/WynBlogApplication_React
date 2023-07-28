import { WynIntegration } from "@grapecity/wyn-integration";

import React, { useEffect } from 'react';

const DashboardViaDiv = ({ portalUrl, dashboardId, token }) => {
  useEffect(() => {
      WynIntegration.createDashboardViewer({
        baseUrl: portalUrl,
        token: token,
        defaults: {
            dashboardId: dashboardId
        },
    }, '#wyn-root');
  });

  return <div className="dashboard-container">
            <div id="wyn-root" />
          </div>;
};

export default DashboardViaDiv;
