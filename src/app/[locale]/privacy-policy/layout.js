export const metadata = {
  title: 'MKTLogin - Terms of Service',
  keywords:
    'MKTLogin Terms of Service, MKTLogin browser, MKTLogin antidetect browser, MKTLogin fingerprinting, MKTLogin online accounts, MKTLogin business accounts, MKTLogin social media accounts, MKTLogin Google, MKTLogin Instagram, MKTLogin Facebook, MKTLogin Telegram, MKTLogin Twitter, MKTLogin Tiktok',
  description:
    "Review MKTLogin's Terms of Service to understand your rights and obligations when using our antidetect browser. This document outlines user responsibilities, acceptable use, and our service policies.",
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
    url: 'https://mktlogin.com/terms-of-service',
    title: 'MKTLogin - Terms of Service',
    description:
      "Review MKTLogin's Terms of Service to understand your rights and obligations when using our antidetect browser. This document outlines user responsibilities, acceptable use, and our service policies.",
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
    canonical: 'https://mktlogin.com/terms-of-service',
    languages: {
      'en-US': 'https://mktlogin.com/en/terms-of-service',
      'vi-VN': 'https://mktlogin.com/vi/terms-of-service',
      'x-default': 'https://mktlogin.com/terms-of-service',
    },
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}
