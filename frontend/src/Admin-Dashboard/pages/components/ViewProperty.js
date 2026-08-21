import React, {useState} from "react";
import PropertyFilters from "../ViewProperties/components/PropertyFilters";
import PropertyTable from "../ViewProperties/components/PropertyTable";

export default function ViewProperty() {
    const [filters, setFilters] = useState({
  keyword: "",
  propertyType: "",
  listingType: "",
  district: "",
  status: "",
});
    return (    

        <div>     

            <PropertyFilters 
  filters={filters}
  setFilters={setFilters}
/>  
 {/* <PropertyViewModal /> */}
            <PropertyTable />
           

        </div>
    )
};

    