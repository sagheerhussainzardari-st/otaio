
import CreativeDesigningProcess from '@/components/CreativeDesigningProcess/CreativeDesigningProcess';
import WowCustomers from '@/components/WowCustomers/WowCustomers';
import CreativeDesignUIUX from '@/components/CreativeDesignUIUX/CreativeDesignUIUX';
import CreativeDesignSocialMedia from '@/components/CreativeDesignSocialMedia/CreativeDesignSocialMedia';
import CreativeDesignPricingPackages from '@/components/PricingComponents/CreativeDesignPricingPackages';
import CreativePackagesBanner from "@/components/Banners/CreativePackagesBanner/CreativePackagesBanner";
import CreativeDesigningBanner from '@/components/Banners/CreativeDesigningBanner/CreativeDesigningBanner';

const CreativeDesignPackages = () => {
   return (
      <>
         <CreativePackagesBanner />
         <CreativeDesigningBanner />
         <CreativeDesigningProcess />
         <WowCustomers />
         <CreativeDesignUIUX />
         <CreativeDesignSocialMedia />
         <CreativeDesignPricingPackages />
      </>
   )
}
export default CreativeDesignPackages