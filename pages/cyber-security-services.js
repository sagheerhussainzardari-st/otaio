import React from 'react'
import CyberSecurityBanner from '@/components/Banners/CyberSecurityBanner/CyberSecurityBanner'
import CyberSecurityMalwareAnalysis from '@/components/CyberSecurityMalwareAnalysis/CyberSecurityMalwareAnalysis'
import CyberSecurityStrategyAndRiskManagement from '@/components/CyberSecurityStrategyAndRiskManagement/CyberSecurityStrategyAndRiskManagement'
import CyberSecurityThreatManagement from '@/components/CyberSecurityThreatManagement/CyberSecurityThreatManagement'
import SafeCyberSecurity from '@/components/SafeCyberSecurity/SafeCyberSecurity'
import CyberSecurityPenetrationTesting from '@/components/CyberSecurityPenetrationTesting/CyberSecurityPenetrationTesting';

const CyberSecurityServices = () => {
   return (
      <>
       
         <CyberSecurityBanner />
         <SafeCyberSecurity />
         <CyberSecurityPenetrationTesting />
         <CyberSecurityThreatManagement />
         <CyberSecurityMalwareAnalysis />
         <CyberSecurityStrategyAndRiskManagement />



      </>
   )
}

export default CyberSecurityServices