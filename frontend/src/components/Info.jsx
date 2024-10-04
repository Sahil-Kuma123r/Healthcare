import React from 'react';
import './infoCard.css';
import InfoCard from './infoCard';

function Info(){
  const data = [
    {
      title: 'गर्भावस्था के समय क्या करें?',
      imgUrl: 'https://www.careinsurance.com/upload_master/media/posts/July2023/what-should-not-be-done-in-pregnancy-know-everything.webp',
      description: 'गर्भावस्था के दौरान स्वस्थ रहने और ध्यान रखने के उपाय जानें।',
      youtubeUrl: 'https://youtu.be/x1VZ8q3fIvo?feature=shared'
    },
    {
      title: 'हस्तमैथुन सही या गलत?',
      imgUrl: 'https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2023/05/06114725/3-1-1-741x452.jpg',
      description: 'हस्तमैथुन के बारे में गलतफहमियों को दूर करें और इसका प्रभाव जानें।',
      youtubeUrl: 'https://youtube.com/link-to-masturbation-video'
    },
    {
      title: 'नवजात शिशु को कौन-कौन सी वैक्सीन लेनी चाहिए?',
      imgUrl: 'https://www.careinsurance.com/upload_master/media/posts/December2022/necessary-vaccines-for-new-born.jpg',
      description: 'बच्चों के स्वास्थ्य के लिए जरूरी टीकों के बारे में जानें।',
      youtubeUrl: 'https://youtube.com/link-to-vaccine-video'
    },
    {
      title: 'बच्चों को डेंगू से कैसे बचाएं?',
      imgUrl: 'https://feeds.abplive.com/onecms/images/uploaded-images/2024/08/12/bb8d2245583b3c4d999f0c26c88d88a01723462775133506_original.png?impolicy=abp_cdn&imwidth=1200&height=675',
      description: 'डेंगू के खतरे और बच्चों को बचाने के तरीके जानें।',
      youtubeUrl: 'https://youtube.com/link-to-dengue-video'
    },
    {
      title: 'मासिक धर्म में क्या ध्यान दें?',
      imgUrl: 'https://www.stayfree.in/sites/stayfree_in_2/files/img_0231_1.jpg',
      description: 'मासिक धर्म के दौरान स्वस्थ रहने के महत्वपूर्ण टिप्स जानें।',
      youtubeUrl: 'https://youtube.com/link-to-menstrual-video'
    },
  ];

  return (
    <div className="app">
      <h1 className="heading">Rural Health FAQs</h1>
      <div className="card-container">
        {data.map((item, index) => (
          <InfoCard 
            key={index}
            title={item.title}
            imgUrl={item.imgUrl}
            description={item.description}
            youtubeUrl={item.youtubeUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Info;