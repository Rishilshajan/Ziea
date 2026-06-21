import { cn } from "@/lib/utils";

export function EditorialReveal() {
  return (
    <section className="section-padding bg-surface">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Layered Image Reveal */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-ambient bg-surface-container-high">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXSCjsWGjmACEqfJgkFaaCxF7Ox1HUVL3cXu1Bn0EVEAaiWlYaY3u9e8wbZR38pUFuvk--HmDcd6kXNz8dKEu4IocHWMWQ7gzpb-H-VAxtM93PqHn37FQnfDFImgf4jjR_qevEmYJXyU1eBeIBmFOLPQCmEmVcvaAst41xNeU2v8swqDRPR0j9WMc7lVr0YOWV-dahLuW_EhBNZetOxilIHNjDLX68Ou6k_s_pa98kB7waczakJBcQ3cigdmHbqabwgeDFdkhDWS1Q" 
              alt="Boutique Atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating Staggered Image */}
          <div className="absolute -bottom-16 -right-16 w-3/4 aspect-square rounded-2xl overflow-hidden shadow-ambient border-[12px] border-surface hidden md:block group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4gXAMViZ9CP2dtD49EOlJYX2a6sppJuXRecm9AScHiyamjKpQYVjY4SJBvQLf42J7Lo29zRNtXiGNPW2E6lG8N973DMTGooh1r21p8WoScYmC0CIInVfHn8QjppCK0RkZ8zDhH_npjX2ALkkPClry4hEOg_Qq7D2B-KCGSlnZO9hwDxnX44N8y4L8a0TNyVmdpauLYl5YAx4f7hsysObK0dmGq6tLauDhNuC9uTap3sBUFiGUEPQocIzs4fT0y9D9dfNKtQNMNU2M" 
              alt="Artisanal Craft"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            />
          </div>
        </div>

        {/* Narrative Content */}
        <div className="space-y-10 lg:pl-12">
          <div className="space-y-6">
            <span className="label-md text-tertiary">Our Philosophy</span>
            <h2 className="display-md text-deep-forest">
              Slow Fashion, <br/><span className="italic">Deeply Felt.</span>
            </h2>
            <p className="text-body-text text-xl leading-relaxed font-serif opacity-90">
              At ZIEA, we believe that what we wear is an extension of our internal landscape. We curate textiles that speak in whispers—sustainable, handcrafted, and designed to age with grace.
            </p>
          </div>

          <div className="pt-10 flex flex-col sm:flex-row gap-4 lg:gap-6 border-t border-petal-blush/20">
            {[
              { num: "01", title: "Sustainable Origin", text: "Earth-first materials" },
              { num: "02", title: "Master Artistry", text: "Generational craft" },
              { num: "03", title: "Enduring Design", text: "Timeless aesthetics" }
            ].map((item) => (
              <div 
                key={item.num} 
                className="flex-1 space-y-3 group border border-transparent hover:border-sage-grove/20 p-5 rounded-2xl transition-all duration-700 hover:shadow-ambient hover:-translate-y-1 bg-surface hover:bg-surface-container-low"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl font-serif text-sage-grove/60 italic group-hover:text-sage-grove transition-colors">
                    {item.num}
                  </span>
                  <div className="h-[1px] flex-grow bg-sage-pale/40 group-hover:bg-sage-grove/40 transition-colors" />
                </div>
                <p className="label-md text-deep-forest tracking-wider leading-snug">{item.title}</p>
                <p className="text-body-text text-sm font-serif italic opacity-80">{item.text}</p>
              </div>
            ))}
          </div>

          <button className="px-12 py-5 rounded-full border border-sage-grove/40 text-sage-grove label-md hover:bg-sage-grove hover:text-white transition-all duration-500">
            Read Our Full Story
          </button>
        </div>
      </div>
    </section>
  );
}
