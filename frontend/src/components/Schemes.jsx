import React from 'react';
import SchemeCard from './SchemeCard';
import './style1.css'; 

function Schemes() {
  const schemes = [
    {
      title: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
      description: 'Health insurance scheme for poor and vulnerable families.',
      benifits: "Provides health coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization.",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Ayushman_Bharat_logo.png',
      websiteUrl: 'https://pmjay.gov.in',
    },
    {
      title: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)',
      description: 'Accidental insurance scheme for citizens of Rural India .',
      benifits: "Accidental death and disability insurance of ₹2 lakh at a premium of ₹12 per year.",
      imageUrl: 'https://www.ccbjhalawar.com/images/pmsby-details.jpg',
      websiteUrl: 'https://financialservices.gov.in/beta/en/pmsby',
    },
    {
      title: 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)',
      description: 'Life insurance scheme for citizens of Rural Indians .',
      benifits: "Provides ₹2 lakh in case of death at an affordable annual premium of ₹330.",
      imageUrl: 'https://i0.wp.com/iasnext.com/wp-content/uploads/2024/02/Pradhan-Mantri-Jeevan-Jyoti.webp',
      websiteUrl: 'https://www-myscheme-gov-in.translate.goog/schemes/pmjjby?_x_tr_sl=en&_x_tr_tl=hi&_x_tr_hl=hi&_x_tr_pto=tc&_x_tr_hist=true',
    },
    {
      title: 'Pradhan Mantri Swasthya Suraksha Yojana (PMSSY)',
      description: 'Scheme to improve medical education infrastructure and healthcare facilities.',
      benifits: "Establishes AIIMS institutions and upgrades government medical colleges for improved access to quality healthcare in underserved areas.",
      imageUrl: 'https://pmssy.mohfw.gov.in/WriteReadData/p92g8/31838586781553062048.jpg',
      websiteUrl: 'https://pmssy-mohfw.nic.in',
    },
    {
      title: 'National Rural Health Mission (NRHM)',
      description: 'Mission to improve healthcare delivery across rural India.',
      benifits: "Focuses on maternal and child health, immunization, and strengthening rural health infrastructure.",
      imageUrl: 'https://cdn1.byjus.com/wp-content/uploads/2015/11/national-rural-health-mission2.png',
      websiteUrl: 'https://nhm.gov.in/index1.php?lang=1&level=1&lid=49&sublinkid=969',
    },
    {
      title: 'Rashtriya Swasthya Bima Yojana (RSBY)',
      description: 'Health insurance for Below Poverty Line (BPL) families.',
      benifits: "Provides insurance coverage of up to ₹30,000 for hospitalization expenses, including maternity benefits.",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/98/RSBY_Logo.jpg',
      websiteUrl: 'https://www.इंडिया.सरकार.भारत/spotlight/राष्ट्रीय-स्वास्थ्य-बीमा-योजना',
    },
    {
      title: 'Janani Suraksha Yojana (JSY)',
      description: 'Safe motherhood intervention under NRHM.',
      benifits: "Provides cash incentives to promote institutional deliveries and reduce maternal and neonatal mortality.",
      imageUrl: 'https://www.impactguru.com/info/wp-content/uploads/2023/03/Janani-Suraksha-Yojana-Scheme-1200-x-800.jpg',
      websiteUrl: 'https://vikaspedia.in/health/nrhm/national-health-programmes-1/janani-suraksha-yojana',
    },
    {
      title: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
      description: 'Maternity benefit program for pregnant and lactating women.',
      benifits: "Provides a cash incentive of ₹5,000 for the first live birth to improve maternal and child health.",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/18/Pradhan_Mantri_Matritva_Vandana_Yojana.png',
      websiteUrl: 'https://pmmvy.wcd.gov.in',
    },
  ];

  return (
    <div className="scheme-container">
      {schemes.map((scheme, index) => (
        <SchemeCard
          key={index}
          title={scheme.title}
          description={scheme.description}
          benifits={scheme.benifits}
          imageUrl={scheme.imageUrl}
          websiteUrl={scheme.websiteUrl}
        />
      ))}
    </div>
  );
}

export default Schemes;
