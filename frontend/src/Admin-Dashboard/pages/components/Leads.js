import React from "react";

import LeadHeader from "../Leads/components/LeadHeader";
import LeadFilters from "../Leads/components/LeadFilters";
import LeadStats from "../Leads/components/LeadStats";
import LeadTable from "../Leads/components/LeadTable";
import LeadPagination from "../Leads/components/LeadPagination";

// import "..styles/Leads.css";

export default function Leads(){

    return(

        <section className="lead-page">
               <LeadHeader/>
  <LeadStats/>
         

            {/* <LeadFilters/> */}

          

            <LeadTable/>

            {/* <LeadPagination/> */}

        </section>

    )

}