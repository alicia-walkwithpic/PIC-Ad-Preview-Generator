export const platformSpecs = {
  google: {
    label: 'Google Ads',
    logo: 'google',
    formats: {
      search: {
        label: 'Search Ad (RSA)',
        device: 'desktop',
        fields: {
          businessName: { label: 'Business Name', max: 25, type: 'text' },
          displayUrl: { label: 'Display URL', max: 35, type: 'text' },
          path1: { label: 'Path 1', max: 15, type: 'text' },
          path2: { label: 'Path 2', max: 15, type: 'text' },
          headlines: { label: 'Headlines', max: 30, count: 15, shown: 3, type: 'multi' },
          descriptions: { label: 'Descriptions', max: 90, count: 4, shown: 2, type: 'multi' },
        }
      },
      display: {
        label: 'Display Ad (RDA)',
        device: 'desktop',
        fields: {
          businessName: { label: 'Business Name', max: 25, type: 'text' },
          shortHeadlines: { label: 'Short Headlines', max: 30, count: 5, shown: 1, type: 'multi' },
          longHeadline: { label: 'Long Headline', max: 90, type: 'text' },
          descriptions: { label: 'Descriptions', max: 90, count: 5, shown: 1, type: 'multi' },
          image: { label: 'Image', type: 'image', aspectRatio: '1.91:1' },
          logo: { label: 'Logo', type: 'image', aspectRatio: '1:1' },
          ctaButton: { label: 'CTA Button', type: 'select', options: ['Learn More','Shop Now','Sign Up','Contact Us','Apply Now','Download','Book Now'] },
        }
      },
      pmax: {
        label: 'Performance Max',
        device: 'desktop',
        fields: {
          businessName: { label: 'Business Name', max: 25, type: 'text' },
          headlines: { label: 'Headlines', max: 30, count: 15, shown: 3, type: 'multi' },
          longHeadline: { label: 'Long Headline', max: 90, type: 'text' },
          descriptions: { label: 'Descriptions', max: 90, count: 5, shown: 2, type: 'multi' },
          image: { label: 'Image', type: 'image', aspectRatio: '1.91:1' },
          logo: { label: 'Logo', type: 'image', aspectRatio: '1:1' },
          ctaButton: { label: 'CTA Button', type: 'select', options: ['Learn More','Shop Now','Sign Up','Contact Us','Apply Now','Download','Book Now'] },
        }
      }
    }
  },
  bing: {
    label: 'Microsoft / Bing',
    logo: 'bing',
    formats: {
      search: {
        label: 'Search Ad (RSA)',
        device: 'desktop',
        fields: {
          businessName: { label: 'Business Name', max: 25, type: 'text' },
          displayUrl: { label: 'Display URL', max: 35, type: 'text' },
          path1: { label: 'Path 1', max: 15, type: 'text' },
          path2: { label: 'Path 2', max: 15, type: 'text' },
          headlines: { label: 'Headlines', max: 30, count: 15, shown: 3, type: 'multi' },
          descriptions: { label: 'Descriptions', max: 90, count: 4, shown: 2, type: 'multi' },
        }
      },
      display: {
        label: 'Display Ad',
        device: 'desktop',
        fields: {
          businessName: { label: 'Business Name', max: 25, type: 'text' },
          shortHeadline: { label: 'Short Headline', max: 30, type: 'text' },
          longHeadline: { label: 'Long Headline', max: 90, type: 'text' },
          description: { label: 'Description', max: 90, type: 'text' },
          image: { label: 'Image', type: 'image', aspectRatio: '1.91:1' },
          ctaButton: { label: 'CTA Button', type: 'select', options: ['Learn More','Shop Now','Sign Up','Contact Us','Apply Now','Download','Book Now'] },
        }
      },
      shopping: {
        label: 'Shopping Ad',
        device: 'desktop',
        fields: {
          productTitle: { label: 'Product Title', max: 150, type: 'text' },
          price: { label: 'Price', max: 20, type: 'text' },
          storeName: { label: 'Store Name', max: 50, type: 'text' },
          image: { label: 'Product Image', type: 'image', aspectRatio: '1:1' },
        }
      }
    }
  },
  meta: {
    label: 'Meta Ads',
    logo: 'meta',
    formats: {
      feed: {
        label: 'Feed Ad (Single Image)',
        device: 'mobile',
        fields: {
          pageName: { label: 'Page Name', max: 50, type: 'text' },
          primaryText: { label: 'Primary Text', max: 125, type: 'textarea' },
          headline: { label: 'Headline', max: 27, type: 'text' },
          description: { label: 'Description', max: 27, type: 'text' },
          ctaButton: { label: 'CTA Button', type: 'select', options: ['Shop Now','Learn More','Sign Up','Book Now','Download','Get Quote','Contact Us','Apply Now','Subscribe','Watch More','Send Message'] },
          image: { label: 'Image', type: 'image', aspectRatio: '1:1' },
        }
      },
      story: {
        label: 'Story Ad',
        device: 'mobile',
        fields: {
          pageName: { label: 'Page Name', max: 50, type: 'text' },
          textOverlay: { label: 'Text Overlay', max: 90, type: 'text' },
          ctaButton: { label: 'CTA Button', type: 'select', options: ['Shop Now','Learn More','Sign Up','Book Now','Download','Swipe Up'] },
          image: { label: 'Image/Video (9:16)', type: 'image', aspectRatio: '9:16' },
        }
      },
      carousel: {
        label: 'Carousel Ad',
        device: 'mobile',
        fields: {
          pageName: { label: 'Page Name', max: 50, type: 'text' },
          primaryText: { label: 'Primary Text', max: 125, type: 'textarea' },
          ctaButton: { label: 'CTA Button', type: 'select', options: ['Shop Now','Learn More','Sign Up','Book Now','Download','Get Quote','Contact Us','Apply Now','Subscribe'] },
          cards: { label: 'Cards', type: 'carousel', minCards: 2, maxCards: 10, cardFields: {
            headline: { label: 'Card Headline', max: 40, type: 'text' },
            description: { label: 'Card Description', max: 20, type: 'text' },
            image: { label: 'Card Image', type: 'image', aspectRatio: '1:1' },
          }}
        }
      }
    }
  },
  linkedin: {
    label: 'LinkedIn Ads',
    logo: 'linkedin',
    formats: {
      singleImage: {
        label: 'Single Image Ad',
        device: 'desktop',
        fields: {
          companyName: { label: 'Company Name', max: 50, type: 'text' },
          introText: { label: 'Introductory Text', max: 150, type: 'textarea' },
          headline: { label: 'Headline', max: 70, type: 'text' },
          description: { label: 'Description', max: 100, type: 'text' },
          ctaButton: { label: 'CTA Button', type: 'select', options: ['Learn More','Sign Up','Register','Download','View Quote','Apply Now','Request Demo','Try Now','Visit Website'] },
          image: { label: 'Image', type: 'image', aspectRatio: '1.91:1' },
          logo: { label: 'Company Logo', type: 'image', aspectRatio: '1:1' },
        }
      },
      textAd: {
        label: 'Text Ad',
        device: 'desktop',
        fields: {
          headline: { label: 'Headline', max: 25, type: 'text' },
          description: { label: 'Description', max: 75, type: 'text' },
          image: { label: 'Image (100x100)', type: 'image', aspectRatio: '1:1' },
          destinationUrl: { label: 'Destination URL', max: 500, type: 'text' },
        }
      },
      messageAd: {
        label: 'Message Ad (InMail)',
        device: 'desktop',
        fields: {
          senderName: { label: 'Sender Name', max: 50, type: 'text' },
          senderTitle: { label: 'Sender Title', max: 50, type: 'text' },
          subject: { label: 'Message Subject', max: 60, type: 'text' },
          body: { label: 'Message Body', max: 1500, type: 'textarea' },
          ctaButton: { label: 'CTA Button Text', max: 20, type: 'text' },
          bannerImage: { label: 'Banner Image (Optional)', type: 'image', aspectRatio: '4:1' },
          logo: { label: 'Sender Avatar/Logo', type: 'image', aspectRatio: '1:1' },
        }
      }
    }
  }
}
