import Hero from '@/components/home/Hero';
import BrandPhilosophy from '@/components/home/BrandPhilosophy';
import CollectionShowcase from '@/components/home/CollectionShowcase';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import BrandStory from '@/components/home/BrandStory';
import NewsletterSection from '@/components/home/NewsletterSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandPhilosophy />
      <CollectionShowcase />
      <FeaturedProducts />
      <BrandStory />
      <NewsletterSection />
    </>
  );
}

