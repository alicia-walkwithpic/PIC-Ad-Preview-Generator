import GoogleSearch from './GoogleSearch'
import GoogleDisplay from './GoogleDisplay'
import GooglePMax from './GooglePMax'
import BingSearch from './BingSearch'
import BingDisplay from './BingDisplay'
import BingShopping from './BingShopping'
import MetaFeed from './MetaFeed'
import MetaStory from './MetaStory'
import MetaCarousel from './MetaCarousel'
import LinkedInFeed from './LinkedInFeed'
import LinkedInTextAd from './LinkedInTextAd'
import LinkedInInMail from './LinkedInInMail'

const previewMap = {
  google: { search: GoogleSearch, display: GoogleDisplay, pmax: GooglePMax },
  bing: { search: BingSearch, display: BingDisplay, shopping: BingShopping },
  meta: { feed: MetaFeed, story: MetaStory, carousel: MetaCarousel },
  linkedin: { singleImage: LinkedInFeed, textAd: LinkedInTextAd, messageAd: LinkedInInMail },
}

export default function PreviewRenderer({ platform, format, formData, darkMode }) {
  const Component = previewMap[platform]?.[format]
  if (!Component) return <div className="text-gray-500 p-8 text-center">Preview not available</div>
  return <Component data={formData} darkMode={darkMode} />
}
