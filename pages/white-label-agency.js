
import OTAProcess from '@/components/OTAProcess/OTAProcess';
import WeDo from '@/components/WeDo/WeDo';
import WhiteLabellingMainBanner from '@/components/Banners/WhiteLabelling/WhiteLabellingMainBanner';
import WhiteLabellingPractices from '@/components/WhiteLabellingPractices/WhiteLabellingPractices';
import WhiteLabelPackages from '@/components/WhiteLabellingComponents/WhiteLabelPackages/WhiteLabelPackages';
const WhiteLabelAgency = () => {
   return (
      <>
         <WhiteLabellingMainBanner />
         <WhiteLabellingPractices />
         <OTAProcess />
         <WeDo />
         <WhiteLabelPackages />
      </>
   )

}
export default WhiteLabelAgency