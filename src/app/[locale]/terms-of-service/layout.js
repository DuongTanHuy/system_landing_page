export const metadata = {
  title: 'MKTLogin - Privacy Policy',
  keywords:
    'MKTLogin Privacy Policy, MKTLogin browser, MKTLogin antidetect browser, MKTLogin fingerprinting, MKTLogin online accounts, MKTLogin business accounts, MKTLogin social media accounts, MKTLogin Google, MKTLogin Instagram, MKTLogin Facebook, MKTLogin Telegram, MKTLogin Twitter, MKTLogin Tiktok',
  description:
    'Understand how MKTLogin collects, uses, and protects your personal data when you use our antidetect browser. Learn about your privacy rights and our commitment to data security.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    siteName: 'MKTLogin',
    url: 'https://mktlogin.com/privacy-policy',
    title: 'MKTLogin - Privacy Policy',
    description:
      'Understand how MKTLogin collects, uses, and protects your personal data when you use our antidetect browser. Learn about your privacy rights and our commitment to data security.',
    images: [
      {
        url: 'https://mktlogin.com/images/mktlogin-dashboard.jpg',
        width: 1200,
        height: 740,
        alt: 'MKTLogin Antidetect Browser for Multi-Accounting',
      },
    ],
  },
  alternates: {
    canonical: 'https://mktlogin.com/privacy-policy',
    languages: {
      'en-US': 'https://mktlogin.com/en/privacy-policy',
      'vi-VN': 'https://mktlogin.com/vi/privacy-policy',
      'x-default': 'https://mktlogin.com/privacy-policy',
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
