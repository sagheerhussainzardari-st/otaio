import DigitalStartupBanner from "@/components/Banners/DigitalStartupBanner/DigitalStartupBanner";
import DigitalStartupPricingComponent from "@/components/DigitalStartupPricingComponent/DigitalStartupPricingComponent";
import DigitalStartupServices2 from "@/components/DigitalStartupService2/DigitalStartupServices2";
import DigitalStartupServices from "@/components/DigitalStartupServices/DigitalStartupServices";
import OTAProcess from '@/components/OTAProcess/OTAProcess';
const DigitalStartup = () => {
   return (
      <>
         <DigitalStartupBanner />
         <DigitalStartupServices />
         <OTAProcess />
         <DigitalStartupServices2 />
         <DigitalStartupPricingComponent/>
      </>
   )
}
export default DigitalStartup