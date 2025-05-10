import { FeatureCard } from "./FeatureCard";

// Sample data for your features
// In a real application, this might come from a CMS or API
const features = [
  {
    id: "feat1", // Unique key for mapping
    // number: '01',
    title: "High-Resolution",
    description:
      "We've got high-quality, high-resolution images of cars from every angle. Perfect for your projects.",
  },
  {
    id: "feat2",
    // number: '02',
    title: "24/7 Support",
    description:
      "Our team is available around the clock to help with any questions or issues you might have.",
  },
  {
    id: "feat3",
    // number: '03',
    title: "Full Flexibility",
    description:
      "Choose from various angles, models, and formats to suit your specific needs.",
  },
  {
    id: "feat4",
    // number: '04',
    title: "Customer Dashboard",
    description:
      "Manage your account, downloads, and preferences through our intuitive dashboard.",
  },
  {
    id: "feat5",
    // number: '05',
    title: "Various Functions",
    description:
      "From simple downloads to API integration, we offer a range of functions to meet your needs.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 bg-[#F5F5F5] border-1 border-[#1D1B2029] w-full">
      <div className="mx-10 px-4">
        <h2 className="px-5 py-1 text-xl font-semibold mb-2 text-[35px]">
          Heading
        </h2>
        <p className="px-5 py-1 text-sm text-gray-500 mb-8 text-[30px]">
          subheading
        </p>

        <div className="flex flex-row justify-around items-start gap-10 py-10">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              //   number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
