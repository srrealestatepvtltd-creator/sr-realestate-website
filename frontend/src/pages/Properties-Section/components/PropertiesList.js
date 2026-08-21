import React from 'react';
import "../styles/PropertiesList.css";
import FeaturedProperties from './FeaturedProperty';
import PropertyFilterBar from './PropertyFilter';
import PropertyHeroSearch from './PropertiesSearch';
import PropertyViewToggle from './PropertyToggle';
export default function PropertiesList(){
return(
    <div className="properties-list">
        <PropertyHeroSearch />
        <PropertyFilterBar />
        <PropertyViewToggle />
        <FeaturedProperties />
        {/* <PropertyGrid /> */}
    </div>
)
}