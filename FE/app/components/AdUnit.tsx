import Image from "next/image";

type AdUnitProps = {
  className?: string;
};

const cookingAds = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=300&fit=crop",
    title: "Premium Kitchen Essentials",
    description: "Upgrade your cooking experience",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
    title: "Recipe Masterclass",
    description: "Learn from the pros",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&h=300&fit=crop",
    title: "Gourmet Spices",
    description: "Elevate every dish",
  },
];

export default function AdUnit({ className = "" }: AdUnitProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* <p className="text-xs text-gray-400 text-center">Sponsored</p> */}

      {cookingAds.map((ad) => (
        <div
          key={ad.id}
          className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
        >
          <div className="relative w-full h-[250px]">
            <Image
              src={ad.image}
              alt={ad.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <h3 className="font-bold text-lg mb-1">{ad.title}</h3>
              <p className="text-sm text-gray-200">{ad.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
