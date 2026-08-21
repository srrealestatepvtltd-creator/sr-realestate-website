import React from "react";

import LeadHeader from "../Leads/components/LeadHeader";

import LeadStats from "../Leads/components/LeadStats";
import LeadTable from "../Leads/components/LeadTable";


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