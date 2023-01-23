
import CallCentreOutsourcingSection from '@/components/CallCentreOutsourcingSection/CallCentreOutsourcingSection';
import OTAProcess from '@/components/OTAProcess/OTAProcess';
import CallCenterServices from '@/components/CallCenterServices/CallCenterServices';
import CallCenterOccSection from '@/components/CallCenterOccSection/CallCenterOccSection';
import CallCenterChooseUs from '@/components/CallCenterChooseUs/CallCenterChooseUs';
import CallCenterBanner from '@/components/Banners/CallCenterBanner/CallCenterBanner';
const CallCenterOutsourcing = () => {
   return (
      <>
         <CallCenterBanner />
         <CallCentreOutsourcingSection />
         <OTAProcess />
         <CallCenterServices />
         <CallCenterOccSection />
         <CallCenterChooseUs />
      </>
   )
}

export default CallCenterOutsourcing 