
import OutsourceHumanResourcesBanner from '@/components/Banners/OutsourceHumanResourcesBanner/OutsourceHumanResourcesBanner';
import ResourcesOutsourcingBusiness from '@/components/ResourcesOutsourcingBusiness/ResourcesOutsourcingBusiness';
import OutsourcingHumanResources from '@/components/OutsourcingHumanResources/OutsourcingHumanResources';
import ResourceOutsourcingProcess from '@/components/ResourceOutsourcingProcess/ResourceOutsourcingProcess';

const OutsourceHumanResources = () => {
   return (
      <>
         <OutsourceHumanResourcesBanner />
         <ResourcesOutsourcingBusiness />
         <OutsourcingHumanResources />
         <ResourceOutsourcingProcess />
      </>
   )
}

export default OutsourceHumanResources