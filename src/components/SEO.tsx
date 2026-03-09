import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Salman Ahmad | Software Engineer & Web Developer Portfolio",
  description = "Experienced Software Engineer specializing in React, TypeScript, and modern web development. View my projects, skills, and get in touch for collaboration opportunities.",
  url = "https://salmanahmad-code.dev/",
  image = "/og-image.jpeg",
  type = "website"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogType = document.querySelector('meta[property="og:type"]');
    
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDescription) ogDescription.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', url);
    if (ogImage) ogImage.setAttribute('content', image);
    if (ogType) ogType.setAttribute('content', type);
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDescription) twitterDescription.setAttribute('content', description);
    if (twitterUrl) twitterUrl.setAttribute('content', url);
    if (twitterImage) twitterImage.setAttribute('content', image);
  }, [title, description, url, image, type]);

  return null;
};

export default SEO;