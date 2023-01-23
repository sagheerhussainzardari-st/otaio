import * as PricingTab from  "@/components/Tabs"
export const verticalTabsUtilities = [
   {
      tab: "Branding & Design",
      panel: <PricingTab.BrandingAndDesigns />,
   },
   {
      tab: "Web Development",
      panel: <PricingTab.WebDevelopment />,
   },
   {
      tab: "App Development",
      panel: <PricingTab.AppDevelopment />,
   },
   {
      tab: "Lead Generation",
      panel: <PricingTab.TabLeadGeneration />,
   },
   {
      tab: "Content Writing",
      panel: <PricingTab.ContentWriting />,
   },
   {
      tab: "Social Media Marketing",
      panel: <PricingTab.SMMPricing />,
   },
   {
      tab: "Search Engine Optimization ",
      panel: <PricingTab.SearchEngineOptimization />,
   },
   {
      tab: "Video Animation",
      panel: <PricingTab.VideoAnimation />,
   },
   {
      tab:'Digital Marketing Services',
      panel:<PricingTab.DMSPricing />
   }
];
