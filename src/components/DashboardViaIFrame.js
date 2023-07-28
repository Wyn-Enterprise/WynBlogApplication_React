const DashboardViaIFrame = ({portalUrl, dashboardId, token}) => {
  
  const iframeSrc = `${portalUrl}/dashboards/view/${dashboardId}`;
  
  return (
    <div className="dashboard-container">
      <iframe src={iframeSrc} height="600px" width="1000px"></iframe>
    </div>
  );
}

export default DashboardViaIFrame;

