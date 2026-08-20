import WelcomeBanner from "../Overview/components/WelcomeBanner";
import StatsCards from "../Overview/components/StatsCards";
import RevenueChart from "../Overview/components/RevenueChart";
// import LeadChart from "../Overview/components/LeadChart";
import PropertyStatus from "../Overview/components/PropertiesStatus";

// import RecentLeads from "./components/RecentLeads";
// import ActivityTimeline from "./components/ActivityTimeline";

// import NotificationPanel from "./components/NotificationPanel";

// import "./Overview.css";

export default function Overview(){

return(

<div className="overview">

<WelcomeBanner/>

<StatsCards/>

<div className="overview-row">

<RevenueChart/>



</div>

<div className="overview-row">

<PropertyStatus/>



</div>

{/* <div className="overview-row">

<RecentProperties/>

<ActivityTimeline/>

</div> */}

{/* <div className="overview-row">

<PropertyMap/>

<NotificationPanel/>

</div> */}

{/* <QuickActions/> */}

</div>

)

}