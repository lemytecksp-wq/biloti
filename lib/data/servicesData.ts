export interface ServiceItem {
  slug: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  shortDescription: string;
  image: string;
  introText: string;
  detailedDescription: string;
  whatItIncludes: string[];
  benefits: string[];
  faqs?: { question: string; answer: string }[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  heroText: string;
  introText: string;
  benefits: string[];
  servicesSlugs: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "water-blasting",
    title: "Water Blasting",
    shortDescription: "High-pressure exterior washing and soft-wash treatments for driveways, decks, roofs, cladding, and commercial buildings across Auckland.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/01-Water-Blasting.png",
    heroText: "Professional Pressure Washing & Exterior Surface Cleaning",
    introText: "Biloti Property Care delivers expert water blasting and gentle soft-wash solutions to remove grime, moss, mould, lichens, and stubborn stains from all exterior surfaces. We protect your building materials while restoring clean curb appeal.",
    benefits: [
      "Extends the lifespan of paint, roofing materials, timber, and concrete",
      "Removes slippery moss, algae, and mould for safer walkways",
      "Uses environmentally conscious cleaning solutions safe for gardens",
      "Tailored pressure settings suited to sensitive surfaces like cedar and asphalt"
    ],
    servicesSlugs: [
      "pre-paint-washing",
      "deck-fence-wash",
      "driveway-wash",
      "gutter-cleaning",
      "roof-treatment",
      "commercial-building-wash",
      "house-wash"
    ]
  },
  {
    slug: "cleaning-services",
    title: "Cleaning Services",
    shortDescription: "Comprehensive interior and commercial cleaning solutions ranging from office cleaning and carpet treatment to window washing and end of tenancy cleans.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Cleaning-Services.png",
    heroText: "Commercial & Residential Cleaning Services for Auckland",
    introText: "From pristine corporate offices to sparkling residential spaces, Biloti provides tailored cleaning schedules delivered by trained, vetted professionals. We bring hospital-grade sanitization, eco-friendly products, and meticulous standards to every job.",
    benefits: [
      "Customized schedules: daily, weekly, fortnightly, or one-off deep cleans",
      "Eco-friendly and non-toxic cleaning products for healthier indoor air quality",
      "Full compliance with Auckland health and commercial safety standards",
      "Comprehensive checklists for end of tenancy and builders post-construction cleans"
    ],
    servicesSlugs: [
      "office-cleaning",
      "graffiti-cleaning-services",
      "mould-remediation",
      "residential-window-cleaning",
      "builders-cleaning",
      "end-of-tenancy-cleaning",
      "residential-carpet-cleaning",
      "commercial-window-cleaning",
      "commercial-carpet-cleaning",
      "carpet-spot-and-stain-treatment",
      "upholstery-cleaning"
    ]
  },
  {
    slug: "pest-control",
    title: "Pest Control",
    shortDescription: "Safe, effective pest control solutions for residential homes and commercial premises across Greater Auckland.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/ChatGPT-Image-Aug-4-2026-01_26_03-AM-3.png",
    heroText: "Targeted & Safe Pest Eradication Solutions",
    introText: "Keep your property free from unwanted insects, rodents, and pests. Biloti Property Care offers safe, eco-friendly pest management designed to protect families, employees, pets, and property structures.",
    benefits: [
      "Treatments targeted against spiders, ants, cockroaches, flies, and rodents",
      "Safe, low-toxicity formulas approved for residential and workplace use",
      "Preventative barriers and entry-point sealing recommendations",
      "Flexible servicing for residential properties and commercial compliance"
    ],
    servicesSlugs: ["pest-control"]
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    shortDescription: "Complete lawn care, hedge trimming, landscaping, and section clearing services to keep your grounds vibrant and beautifully maintained.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Garden-Maintenance.jpeg",
    heroText: "Expert Landscaping & Property Grounds Care",
    introText: "A well-maintained grounds landscape enhances comfort and property value. Our Auckland grounds team handles everything from regular lawn mowing and hedge trimming to full section clean-ups and custom landscape design.",
    benefits: [
      "Regular scheduled lawn mowing and edge trimming",
      "Precision hedge shaping and tree pruning for healthy plant growth",
      "Full green waste removal and environmental recycling",
      "Custom landscaping plans for residential yards and commercial grounds"
    ],
    servicesSlugs: [
      "lawn-mowing",
      "hedge-tree-trimming",
      "landscaping",
      "section-yard-clean-up"
    ]
  }
];

export const allServices: ServiceItem[] = [
  // WATER BLASTING
  {
    slug: "pre-paint-washing",
    title: "Pre Paint Washing",
    categorySlug: "water-blasting",
    categoryTitle: "Water Blasting",
    shortDescription: "Thorough surface preparation washing to ensure paint adhesion and long-lasting finish on house walls and cladding.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/02-Pre-Paint-Washing.png",
    introText: "Proper surface cleaning is essential before applying new paint. Our pre-paint washing service removes dirt, oxidation, chalking paint, grease, and fungal growth to ensure maximum paint adhesion.",
    detailedDescription: "Preparing exterior surfaces for painting requires exact pressure control and specialised detergents. Biloti Property Care uses tailored soft-wash and pressure techniques to strip away chalked old paint, dust, air pollutants, and moss without damaging underlying timber or cladding materials. Painters rely on our prep washes for smooth, long-lasting coating results.",
    whatItIncludes: [
      "Application of specialized eco-friendly pre-paint cleaning solution",
      "Gentle agitation of heavy chalking or dirt accumulation",
      "Controlled pressure rinse of weatherboards, plaster, or fiber cement",
      "Rinse of glass and surrounding deck or patio surfaces",
      "Detailed inspection to ensure surfaces are clean and ready for painting"
    ],
    benefits: [
      "Prevents premature paint peeling, flaking, or blistering",
      "Extends the lifespan of new exterior paint coatings by years",
      "Saves painters prep time and ensures optimal paint bond",
      "Eco-conscious formula safe for surrounding lawn and shrubs"
    ]
  },
  {
    slug: "deck-fence-wash",
    title: "Deck & Fence Wash",
    categorySlug: "water-blasting",
    categoryTitle: "Water Blasting",
    shortDescription: "Revitalize timber and composite decks and fences by removing deep moss, grey wood oxidation, and algae.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/03-Deck-and-Fence-Wash.png",
    introText: "Restore the warm natural color of your timber decks and perimeter fences while removing slippery moss, lichen, and dirt build-up.",
    detailedDescription: "Auckland's damp winter months can turn outdoor wooden decks and fences green with algae and slippery moss. High-pressure washing on timber can gouge or splinter wood if done incorrectly. Biloti utilizes gentle soft-wash treatments paired with low-pressure rinsing to safely strip away grey timber oxidation, moss, and surface contaminants without damaging wood fibers.",
    whatItIncludes: [
      "Pre-soak with biodegradable wood cleaner to loosen organic growth",
      "Low-pressure wash tuned specifically for pine, kwila, macrocarpa, or cedar",
      "Removal of algae, black spot mould, and slick moss layers",
      "Clean wash of posts, railings, balustrades, and steps",
      "Preparation option for staining, oiling, or sealing"
    ],
    benefits: [
      "Eliminates dangerous slip hazards on outdoor timber decks",
      "Restores the natural wood grain and vibrant timber tones",
      "Prevents rot, fungal decay, and timber degradation",
      "Enhances outdoor entertaining spaces"
    ]
  },
  {
    slug: "driveway-wash",
    title: "Driveway Wash",
    categorySlug: "water-blasting",
    categoryTitle: "Water Blasting",
    shortDescription: "High-performance surface washing for concrete, paved, and asphalt driveways, removing oil stains and dirt.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/04-Driveway-Wash.png",
    introText: "Make a striking impression from the curb with a pristine, deep-cleaned driveway free of tyre marks, oil drips, and grime.",
    detailedDescription: "Driveways accumulate vehicle oil, tyre marks, moss, weeds in pavers, and general street dust. Using commercial rotary surface cleaners, Biloti washes concrete, exposed aggregate, cobblestones, and asphalt evenly, leaving no zebra stripes or missed spots.",
    whatItIncludes: [
      "Degreaser treatment on oil drips and vehicle fluid spots",
      "Rotary surface washing for consistent, streak-free deep cleaning",
      "Weed and moss removal from paver joinery and expansion gaps",
      "Rinse-down of adjacent paths, garage door bases, and gutters"
    ],
    benefits: [
      "Instantly boosts curb appeal and property market presentation",
      "Removes oil and chemicals that deteriorate concrete over time",
      "Keeps dirt from being tracked inside homes and office foyers"
    ]
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    categorySlug: "water-blasting",
    categoryTitle: "Water Blasting",
    shortDescription: "Clear leaves, silt, and debris from spouting and downpipes to prevent water overflow and roof structure damage.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/05-Gutter-Cleaning.png",
    introText: "Prevent costly water leaks, roof edge rot, and flooding with professional hand and vacuum gutter cleaning services.",
    detailedDescription: "Blocked spouting causes rainwater overflow, which damages fascia boards, interior ceilings, and building foundations. Biloti's gutter cleaning team clears all silt, leaves, and organic sludge from spouting, checks downpipe drainage, and flushes systems thoroughly.",
    whatItIncludes: [
      "Manual removal of heavy sludge, leaf clutter, and bird nests from gutters",
      "High-flow water flush of all gutter channels and downpipes",
      "Downpipe clearance verification to ground discharge or soak holes",
      "Exterior spouting wipe-down for a clean cosmetic finish"
    ],
    benefits: [
      "Protects foundation, ceilings, and soffits from costly water leaks",
      "Prevents mosquito breeding ground in stagnant gutter water",
      "Extends the operational life of colorsteel and PVC spouting"
    ]
  },
  {
    slug: "roof-treatment",
    title: "Roof Treatment",
    categorySlug: "water-blasting",
    categoryTitle: "Water Blasting",
    shortDescription: "Long-acting chemical treatment and soft-washing to kill lichen, moss, and mould on iron, tile, and slate roofs.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/06-Roof-Treatment.png",
    introText: "Protect your roof investment with safe moss treatments that eradicate lichens at the root without damaging roofing material.",
    detailedDescription: "High-pressure blasting on roof tiles or colorsteel can compromise sealant, force water into roof voids, or strip protective granules. Biloti applies specialized moss and lichen treatments that break down organic growths gently over time, allowing rain to wash away dead material naturally.",
    whatItIncludes: [
      "Safety harness setup and roof condition assessment",
      "Application of biocide roof treatment targeting moss and lichen roots",
      "Disconnection or temporary bypass of rainwater collection tanks if applicable",
      "Low-pressure rinse where immediate removal is required"
    ],
    benefits: [
      "Prevents tile cracking, rusted roofing iron, and membrane leaks",
      "Protects roof warranty and structural integrity",
      "Long-lasting protection against re-infestation for up to 18-24 months"
    ]
  },
  {
    slug: "commercial-building-wash",
    title: "Commercial Building Wash",
    categorySlug: "water-blasting",
    categoryTitle: "Water Blasting",
    shortDescription: "Professional exterior washing for commercial, industrial, and retail premises across Auckland.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/07-Commercial-Building-Wash.png",
    introText: "Keep your business premise looking immaculate, professional, and welcoming for clients and employees.",
    detailedDescription: "Commercial buildings accumulate diesel exhaust, industrial smog, algae, and bird droppings. Biloti provides tailored washing schedules for multi-story offices, warehouses, retail shops, and public buildings with minimal disturbance to daily operations.",
    whatItIncludes: [
      "Flexible scheduling including after-hours or weekend execution",
      "Soft-wash cleaning for ACM panels, glass facades, brick, and iron clad",
      "Awning, canopy, signage, and entrance area high-pressure washing",
      "Complete health and safety compliance with Auckland council guidelines"
    ],
    benefits: [
      "Maintains professional corporate brand image and tenant satisfaction",
      "Prevents degradation of exterior building cladding materials",
      "Safe execution adhering to strict Height & Safety standards"
    ]
  },
  {
    slug: "house-wash",
    title: "House Wash",
    categorySlug: "water-blasting",
    categoryTitle: "Water Blasting",
    shortDescription: "Gentle soft-wash exterior house cleaning that safely lifts grime, spiderwebs, and moss without high-pressure damage.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/08/08-House-Wash.png",
    introText: "Transform your home's exterior safely. Our soft-wash technique restores paint lustre and cleans weatherboards without water intrusion.",
    detailedDescription: "High pressure can force water behind weatherboards, damage window seals, or blast paint off cladding. Biloti's low-pressure soft-wash system blends eco-friendly cleaning soaps with high-volume gentle water flow to dissolve dirt, spider nests, and algae safely.",
    whatItIncludes: [
      "Complete low-pressure soft-wash from gutters down to baseboards",
      "Rinse of eaves, soffits, window frames, and doors",
      "Application of citrus-based anti-fungal solution to deter future moss growth",
      "Glass rinse for clean finish"
    ],
    benefits: [
      "Safe for weatherboard, plaster, brick, shadowclad, and cedar",
      "Restores vibrant clean paint appearance instantly",
      "Eliminates cobwebs, bug debris, and spores around living spaces"
    ]
  },

  // CLEANING SERVICES
  {
    slug: "office-cleaning",
    title: "Office Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Reliable commercial office cleaning maintaining spotless work environments, kitchens, workstations, and restrooms.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Office-Cleaning.png",
    introText: "Boost workplace productivity and employee wellness with clean, hygienic, and organized office environments.",
    detailedDescription: "A clean office reduces sick leave and creates a great impression for visiting clients. Biloti works discreetly out of office hours or during the day to keep workstations, meeting rooms, lunchrooms, and restrooms sanitized.",
    whatItIncludes: [
      "Disinfection of desk surfaces, keyboards, door handles, and light switches",
      "Vacuuming carpets and mopping hard floor surfaces",
      "Kitchenette/breakroom sanitization, sink scrubbing, and microwave cleaning",
      "Restroom scrubbing, restocking paper supplies, and mirror cleaning",
      "Trash emptying and recycling management"
    ],
    benefits: [
      "Dramatically reduces office germ spread and staff sick days",
      "Tailored schedules: daily, tri-weekly, or weekly visits",
      "Security-checked, professional uniformed cleaning team"
    ]
  },
  {
    slug: "graffiti-cleaning-services",
    title: "Graffiti Cleaning Services",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Rapid response graffiti removal for commercial, public, and residential structures without surface damage.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Graffiti-Cleaning-Services.png",
    introText: "Protect your property from vandalism with quick, effective spray paint and marker removal services.",
    detailedDescription: "Prompt graffiti removal deters repeat vandalism. Biloti uses specialized non-toxic paint solvents and controlled hot/cold water pressure washing to remove paint from brick, concrete, timber, metal, and painted walls.",
    whatItIncludes: [
      "Surface assessment to determine correct solvent formula",
      "Application of specialized non-damaging graffiti remover",
      "Agitation and precision pressure rinse",
      "Optional protective anti-graffiti barrier coating application"
    ],
    benefits: [
      "Restores original surface finish quickly",
      "Deters taggers by removing vandalism immediately",
      "Prevents permanent staining on porous materials like brick and sandstone"
    ]
  },
  {
    slug: "mould-remediation",
    title: "Mould Remediation",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Professional interior mould identification, treatment, and eradication for healthy indoor air quality.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Mould-Remediation.png",
    introText: "Eliminate toxic mould spores safely from walls, ceilings, and window sills to safeguard family and staff health.",
    detailedDescription: "Damp Auckland weather can cause mould outbreaks inside homes and offices, triggering allergies and respiratory issues. Biloti uses hospital-grade antimicrobial solutions to kill mould spores at the root and provide moisture prevention advice.",
    whatItIncludes: [
      "Identification of mould moisture sources and spore infestation areas",
      "Safe containment and HEPA-vacuuming of surface spores",
      "Deep application of antimicrobial mould killing agents",
      "Surface anti-fungal barrier treatment to prevent re-growth"
    ],
    benefits: [
      "Improves indoor air quality and safeguards family/staff health",
      "Eliminates musty odours at the source",
      "Protects drywall, ceilings, and timber framing from rot"
    ]
  },
  {
    slug: "residential-window-cleaning",
    title: "Residential Window Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Streak-free interior and exterior window glass cleaning including frames, sills, and flyscreens.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Residential-Window-Cleaning.png",
    introText: "Enjoy crystal-clear views and brighter natural sunlight throughout your home with expert window washing.",
    detailedDescription: "Washing home windows properly requires pure water technology, squeegee mastery, and safe extension equipment. Biloti cleans glass panes, tracks, sills, and mesh screens inside and outside.",
    whatItIncludes: [
      "Exterior and interior glass squeegee cleaning",
      "Wipe-down of window frames, catches, and sills",
      "Screen removal, brush-down, and wash",
      "Purified water pole cleaning for high or hard-to-reach second-story glass"
    ],
    benefits: [
      "Maximizes natural sunlight inside living spaces",
      "Removes salt spray film common in coastal Auckland areas",
      "Streak-free, crystal-clear finish without water spots"
    ]
  },
  {
    slug: "builders-cleaning",
    title: "Builders Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Post-construction and renovation deep clean preparing new homes and commercial spaces for handover.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-6-2026-12_50_59-PM.png",
    introText: "Transform construction sites into pristine, move-in-ready residential or commercial spaces.",
    detailedDescription: "New builds and renovations leave fine plaster dust, paint splatter, sticker residue, and sawdust everywhere. Biloti conducts initial coarse cleans and final detailed sparkle cleans for developers, builders, and homeowners.",
    whatItIncludes: [
      "Removal of paint specks, concrete splashes, and protective tape residue from glass/fixtures",
      "HEPA vacuuming inside drawers, cabinets, skirtings, and vents",
      "Sanitization of bathrooms, kitchens, tile grout, and stainless steel",
      "Hard floor scrubbing and high-shine polish"
    ],
    benefits: [
      "Ensures smooth handover inspection approval with clients or buyers",
      "Eliminates fine silica and drywall dust for safe occupancy",
      "Fully equipped team ready to meet strict project handover deadlines"
    ]
  },
  {
    slug: "end-of-tenancy-cleaning",
    title: "End of Tenancy Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Bond-back guaranteed deep cleaning for tenants, property managers, and landlords in Auckland.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/End-of-Tenancy-Cleaning.png",
    introText: "Ensure 100% rental bond return with comprehensive, property-manager-approved end of tenancy cleans.",
    detailedDescription: "Vacating a rental requires strict adherence to property management cleaning checklists. Biloti provides thorough deep cleaning covering ovens, rangehoods, skirtings, cupboards, and interior glass.",
    whatItIncludes: [
      "Full kitchen deep clean including inside oven, stovetop, and rangehood filters",
      "Bathroom descaling, mould scrubbing, and mirror polishing",
      "Wiping inside all built-in wardrobes, drawers, and light switches",
      "Vacuuming carpets and mopping hard floors",
      "Option to bundle with carpet steam cleaning and window washing"
    ],
    benefits: [
      "Designed specifically to satisfy Auckland property manager expectations",
      "Saves stress and heavy labor during moving day",
      "Re-clean guarantee if any issues are flagged on inspection"
    ]
  },
  {
    slug: "residential-carpet-cleaning",
    title: "Residential Carpet Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Hot water extraction steam carpet cleaning removing ground-in dirt, pet dander, allergens, and spots.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Residential-Carpet-Cleaning.png",
    introText: "Deep steam cleaning that refreshes home carpets, restores fiber bounce, and eliminates embedded allergens.",
    detailedDescription: "Over time, vacuuming alone cannot remove deep soil, dust mites, and pet odors trapped in carpet pile. Biloti uses high-power hot water extraction equipment to flush out contaminants and accelerate drying.",
    whatItIncludes: [
      "Pre-inspection and spot identification",
      "Eco-friendly pre-spray solution to break down oily soils",
      "Hot water steam extraction deep rinse",
      "Deodorizing and fiber fluffing treatment"
    ],
    benefits: [
      "Extends carpet life and revives original color tone",
      "Eliminates dust mites, pet hair, pollen, and odor",
      "Fast drying technology allowing foot traffic sooner"
    ]
  },
  {
    slug: "commercial-window-cleaning",
    title: "Commercial Window Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Scheduled window cleaning for commercial buildings, storefronts, and office towers.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Commercial-Window-Cleaning.png",
    introText: "Maintain bright, professional street-level and multi-level window glass for your commercial building.",
    detailedDescription: "Clean windows present a professional business image. Biloti provides regular scheduled washing for shops, offices, car dealerships, and commercial complexes using pure water pole systems and squeegees.",
    whatItIncludes: [
      "Pure water reverse osmosis pole washing for exterior glass up to multi-stories",
      "Storefront glass squeegee washing",
      "Frame wiping and cobweb removal",
      "Flexible schedule (weekly, fortnightly, monthly)"
    ],
    benefits: [
      "Enhances store frontage and corporate office appeal",
      "Safe high-reach equipment compliant with H&S regulations",
      "Reliable scheduled service options"
    ]
  },
  {
    slug: "commercial-carpet-cleaning",
    title: "Commercial Carpet Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Heavy-duty commercial carpet extraction for offices, schools, retail shops, and public venues.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Commercial-Carpet-Cleaning.png",
    introText: "High-capacity steam cleaning designed to handle heavy foot traffic and tough workplace spills.",
    detailedDescription: "Commercial carpets endure heavy wear, coffee spills, and soil tracking. Biloti utilizes industrial-grade carpet extractors and quick-dry methods to minimize workplace disruption.",
    whatItIncludes: [
      "High-traffic lane pre-treatment",
      "Deep steam extraction with quick-dry technology",
      "Coffee stain and ink spot treatment",
      "After-hours execution options"
    ],
    benefits: [
      "Keeps workplace carpet looking presentable and fresh",
      "Removes trapped dust, bacteria, and allergens",
      "Extends commercial floor covering investments"
    ]
  },
  {
    slug: "carpet-spot-and-stain-treatment",
    title: "Carpet Spot and Stain Treatment",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Targeted stain removal for wine, coffee, ink, pet accidents, grease, and tough discolorations.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-6-2026-12_50_55-PM.png",
    introText: "Advanced stain-matching techniques to lift tough spills without damaging carpet dyes or backing.",
    detailedDescription: "Accidental spills can ruin expensive carpets if improperly treated. Biloti uses specialized chemistry designed specifically for tannin, protein, oil, and dye stains to break down marks safely.",
    whatItIncludes: [
      "Stain classification (organic, synthetic dye, oil-based, acidic)",
      "Targeted neutralizing solvent application",
      "Gentle extraction without scrubbing fiber tips",
      "Deodorizer application"
    ],
    benefits: [
      "Saves carpets from expensive replacement",
      "Safely treats wool, nylon, and synthetic fibers",
      "Eliminates lingering odors"
    ]
  },
  {
    slug: "upholstery-cleaning",
    title: "Upholstery Cleaning",
    categorySlug: "cleaning-services",
    categoryTitle: "Cleaning Services",
    shortDescription: "Deep fabric and leather upholstery cleaning for sofas, office chairs, dining seats, and armchairs.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Cleaning-Services.png",
    introText: "Revitalize upholstered furniture, removing body oils, dust, food stains, and pet hair.",
    detailedDescription: "Sofas and office seating absorb sweat, dust, and spills every day. Biloti gentle fabric extraction and conditioning cleans upholstery fibers deep down while restoring fabric softness.",
    whatItIncludes: [
      "Fabric testing for dye stability and material composition",
      "Gentle steam extraction or low-moisture leather conditioning",
      "Targeted stain treatment on armrests and headrests",
      "Fabric protection option to repel future spills"
    ],
    benefits: [
      "Prolongs the life of residential and office furniture",
      "Removes stale odors and deep allergens",
      "Restores vibrant color and fabric texture"
    ]
  },

  // PEST CONTROL
  {
    slug: "pest-control",
    title: "Pest Control",
    categorySlug: "pest-control",
    categoryTitle: "Pest Control",
    shortDescription: "Effective, low-toxicity pest control for spiders, ants, cockroaches, flies, rodents, and wasps in Auckland homes & commercial spaces.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-7-2026-12_00_10-AM.png",
    introText: "Protect your family, staff, and property with safe, comprehensive pest eradication and barrier management.",
    detailedDescription: "Pests endanger health, contaminate food, and damage building wiring and insulation. Biloti Property Care provides targeted pest management using Ministry for Primary Industries (MPI) approved products safe for kids, pets, and staff once dry.",
    whatItIncludes: [
      "Comprehensive interior and exterior property pest inspection",
      "Perimeter spray barrier application around doors, windows, and foundations",
      "Sub-floor and roof void dusting for spider and insect control",
      "Cockroach baiting and ant colony trail destruction",
      "Rodent bait station placement and monitoring recommendations"
    ],
    benefits: [
      "Long-lasting barrier keeping crawling and flying insects away for months",
      "Non-staining, low-odor formulas approved for home and food prep areas",
      "Prevents electrical damage caused by gnawing rodents",
      "Custom commercial pest management compliance plans available"
    ]
  },

  // GARDEN MAINTENANCE
  {
    slug: "lawn-mowing",
    title: "Lawn Mowing",
    categorySlug: "garden-maintenance",
    categoryTitle: "Garden Maintenance",
    shortDescription: "Scheduled lawn cutting, edge trimming, clipping blow-down, and lawn health maintenance.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Lawn-Mowing.jpeg",
    introText: "Keep lawns lush, neat, and beautifully manicured with regular professional mowing schedules.",
    detailedDescription: "Regular lawn care promotes healthy root growth and weed suppression. Biloti offers weekly or fortnightly mowing, precise nylon edge clipping, and thorough path cleaning.",
    whatItIncludes: [
      "Precision height lawn mowing matched to grass species",
      "Snip trimming along garden borders, fence lines, and driveways",
      "Blowing off grass clippings from pathways, decks, and driveways",
      "Green waste removal or mulching option"
    ],
    benefits: [
      "Saves hours of weekend yard work",
      "Encourages dense green turf growth and suppresses weeds",
      "Flexible ongoing contracts or one-off cuts"
    ]
  },
  {
    slug: "hedge-tree-trimming",
    title: "Hedge / Tree Trimming",
    categorySlug: "garden-maintenance",
    categoryTitle: "Garden Maintenance",
    shortDescription: "Precision hedge shaping, shrub pruning, and small tree trimming for clean boundary lines.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Hedge-Tree-Trimming.jpeg",
    introText: "Maintain crisp hedge lines and healthy trees with expert trimming, shaping, and pruning services.",
    detailedDescription: "Overgrown hedges block natural light, encroach on footpaths, and look untidy. Biloti trims Griselinia, box hedging, pitosporum, hedges, and small shelter trees cleanly.",
    whatItIncludes: [
      "Straight laser-sharp vertical and horizontal hedge shaping",
      "Deadwood pruning and fruit tree trimming",
      "Clearing growth away from power lines, gutters, and boundary fences",
      "Mulching and complete removal of green trimmings"
    ],
    benefits: [
      "Promotes thick, healthy plant foliage",
      "Maximizes natural sunlight across your property",
      "Maintains clean boundary lines with neighbors"
    ]
  },
  {
    slug: "landscaping",
    title: "Landscaping",
    categorySlug: "garden-maintenance",
    categoryTitle: "Garden Maintenance",
    shortDescription: "Garden design, bark/mulch laying, plant installation, lawn turfing, and property enhancement.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Landscaping.jpeg",
    introText: "Enhance outdoor aesthetic and property value with tailored landscape improvements and planting.",
    detailedDescription: "Whether updating existing garden beds or establishing new native planting schemes, Biloti provides garden design, soil enrichment, weed matting, mulch placement, and lawn installation.",
    whatItIncludes: [
      "Garden bed preparation, soil conditioning, and weed barrier matting",
      "Supply and spreading of premium bark, mulch, decorative pebble, or river stone",
      "Plant selection and installation (native NZ plants, hedges, ornamentals)",
      "Instant lawn turf laying or hydroseeding preparation"
    ],
    benefits: [
      "Substantially increases overall property market value",
      "Low-maintenance garden bed designs that conserve moisture",
      "Tailored layout reflecting your aesthetic vision"
    ]
  },
  {
    slug: "section-yard-clean-up",
    title: "Section / Yard Clean Up",
    categorySlug: "garden-maintenance",
    categoryTitle: "Garden Maintenance",
    shortDescription: "Overgrown section clearing, heavy weed clearing, green waste removal, and pre-sale garden blitzes.",
    image: "https://biloti.co.nz/wp-content/uploads/2026/07/Section-Yard-Clean-Up.jpeg",
    introText: "Tackle neglected, overgrown yards or prepare properties for lease handover and real estate open homes.",
    detailedDescription: "Overgrown vegetation, fallen branches, and thick weeds can overwhelm a property fast. Biloti brings heavy brush cutters, chainsaws, and trailers to quickly restore order to any section.",
    whatItIncludes: [
      "Clearing tall grass, gorse, thick brambles, and vine infestation",
      "Pruning overgrown trees and removing fallen branches",
      "Garden bed weeding and edge redefining",
      "Complete green waste loading, haulage, and eco-disposal"
    ],
    benefits: [
      "Instantly turns messy, neglected sections into clean usable land",
      "Ideal pre-sale transformation for maximum buyer appeal",
      "Full green waste haulage included—no left behind piles"
    ]
  }
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServices.find((serv) => serv.slug === slug);
}

export function getServicesByCategory(categorySlug: string): ServiceItem[] {
  return allServices.filter((serv) => serv.categorySlug === categorySlug);
}
