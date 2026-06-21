import { cn } from "@/lib/utils";

const PRODUCTS = [
  {
    name: "Aurelia Kurta Set",
    desc: "Heritage Cotton in Sage Pale",
    price: "₹ 4,800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnA0n5JUAXcC2sZHvSEyj28T8ptvVX5COpESfwj0dW0K5qhZq4adn_kRGBVZu6kJc8LYMJS6Mn98Eh14TLuBoGOCUr_rDRZcumtWx-GBsxlkROkoiyYC4C3JPahb7w12nyPdmOJ2od5HDY4fGzo9HLapIyUA4yyHNs9LhpeH2324YdyqLSJi8pL2oiD7pGsLv1FJKvvauj1DQHk2XkXSWhjp7iiX79oTs3RCcJ43YiE_g_PHHu7xPLhX5uKoe1W0_lN9MQk2ZLu6-u"
  },
  {
    name: "Linen Mist Saree",
    desc: "Hand-loomed Mulberry Silk",
    price: "₹ 12,500",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVbGPfkqsSISpmOwpWl619uRs4n4ntXMbhG2K68_L0ln792wUG4AmXmlyt_CQdtR6vlHgMuk5MJCL1F-vvDUC0iL79cqYpzmHZ5WlOMEFA1h33KfQLWegu5ZSwalRTuVRY1gPiEorkqQlEYvxQF2YxMerc-1XCbKWyEo5yFVCPWs6xX0HNZ5bGMi9tea9V6Hq_q-ogejDt-zxKMw9CtGx5DsSPnGMKh0XQF1zSITg2j4ZyIMZOoZM1yYdoEQdHTjMtWE9xa7YXwLN8",
    editorial: true
  },
  {
    name: "Zenith Cordset",
    desc: "Breathable Organic Linen",
    price: "₹ 6,200",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9HQeZ7LLqL0KfRXc364GmAnXMIHWuBw-rZupYRSOr5HgwF6L4ektw3bDS0JTwzp0XreNP7jpu7l_DFWPmf7H06Vixttwqa-2DHx6uvvi4hdVzTmZCYS8tKaIGnfnK2reL-brpXqwj069APqyFjkku70A6rgHS5SygE7OoQbXr24o5UHOnEwPTy3-QIqtg3QjTZDGQrLLq3lQR1fdgzcWd7e6zBmTBESHau371bsJQVajfhEgKw9XfZFG6N7Wh9v62p6ixUG3mXUn9"
  }
];

export function HandcraftedPieces() {
  return (
    <section className="bg-surface-container-low section-padding">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-16">
          <div className="max-w-2xl space-y-6">
            <span className="label-md text-tertiary">The Spring Edit</span>
            <h2 className="display-md text-deep-forest">Handcrafted Pieces for Your Daily Rituals</h2>
          </div>
          <a 
            href="#" 
            className="label-md text-sage-grove border-b border-sage-grove/20 pb-1.5 hover:border-sage-grove transition-all flex items-center gap-2 group"
          >
            View All Collections
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">
          {PRODUCTS.map((product, i) => (
            <div 
              key={product.name} 
              className={cn(
                "group space-y-8",
                product.editorial && "lg:-translate-y-16"
              )}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-surface-container-highest">
                <img 
                  src={product.img} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Favorite Button */}
                <div className="absolute top-6 right-6">
                  <button className="w-12 h-12 rounded-full glass-header flex items-center justify-center text-sage-grove hover:bg-sage-grove hover:text-white transition-all shadow-ambient">
                    <span className="material-symbols-outlined text-[22px]">favorite</span>
                  </button>
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <button className="w-full bg-sage-grove text-white py-5 rounded-full label-md shadow-lg hover:bg-sage-light transition-all">
                    Quick Add
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-serif text-deep-forest group-hover:text-sage-grove transition-colors duration-500">
                  {product.name}
                </h3>
                <p className="text-body-text italic font-serif opacity-80">{product.desc}</p>
                <p className="label-md text-sage-grove font-semibold mt-4">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
