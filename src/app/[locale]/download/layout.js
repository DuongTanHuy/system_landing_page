import { allMetadata } from 'src/app/[locale]/download/metadata';

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadataTrans = allMetadata[locale] || allMetadata['en'];

  return metadataTrans;
}

export default function Layout({ children }) {
  return <>{children}</>;
}
