export interface ServiceItem {
  id: string;
  name: string;
  category: 'HAIR' | 'MAKEUP' | 'SKINCARE' | 'NAILS' | 'HAIR REMOVAL' | 'BODY CARE';
  categoryLabel: string;
  description: string;
  recommendedFor?: string;
  featured?: boolean;
}

export interface SalonInfo {
  name: string;
  tagline: string;
  businessType: string;
  fullAddress: string;
  landmark: string;
  city: string;
  statePincode: string;
  primaryPhone: string;
  secondaryPhone: string;
  email: string;
  website: string;
  facebookUrl: string;
  googleRating: number;
  googleReviewCount: string;
  openingHours: string;
  googleMapsUrl: string;
  mapEmbedUrl: string;
}

export const SALON_INFO: SalonInfo = {
  name: "360 SALON",
  tagline: "Your Look. Your Signature.",
  businessType: "Family Salon / Beauty Salon / Hair Salon",
  fullAddress: "GANPATI COMPLEX, C 32/3-1-G-F-12, Vidyapeeth Road, Englishiyaline, Vidya Vihar Colony, Shivpurwa, Varanasi, Uttar Pradesh 221002, India",
  landmark: "GANPATI COMPLEX, Englishiyaline, Vidyapeeth Road",
  city: "Varanasi",
  statePincode: "Uttar Pradesh 221002",
  primaryPhone: "+91 63891 22360",
  secondaryPhone: "+91 63893 60360",
  email: "360afamilysalon@gmail.com",
  website: "360salon.in",
  facebookUrl: "https://facebook.com/360afamilysalon",
  googleRating: 4.8,
  googleReviewCount: "3,458+",
  openingHours: "Every Day — 9:00 AM to 9:00 PM",
  googleMapsUrl: "https://maps.app.goo.gl/GXLbhg1aPWNZtdSJA",
  mapEmbedUrl: "https://maps.google.com/maps?q=360+SALON+GANPATI+COMPLEX+Vidyapeeth+Road+Varanasi&t=&z=16&ie=UTF8&iwloc=&output=embed"
};

export const SERVICE_CATEGORIES = [
  { id: 'ALL', label: 'All Services' },
  { id: 'HAIR', label: 'Hair' },
  { id: 'MAKEUP', label: 'Makeup' },
  { id: 'SKINCARE', label: 'Skincare' },
  { id: 'NAILS', label: 'Nails' },
  { id: 'HAIR REMOVAL', label: 'Hair Removal' },
  { id: 'BODY CARE', label: 'Body Care' },
] as const;

export type CategoryId = typeof SERVICE_CATEGORIES[number]['id'];

export const ALL_SERVICES: ServiceItem[] = [
  // HAIR
  {
    id: 'haircut',
    name: 'Haircut',
    category: 'HAIR',
    categoryLabel: 'Hair Architecture',
    description: 'Precision cutting tailored to bone structure, face shape, and hair texture for women, men, and youngsters.',
    recommendedFor: 'Routine grooming & transformational styling',
    featured: true,
  },
  {
    id: 'hair-styling',
    name: 'Hair Styling',
    category: 'HAIR',
    categoryLabel: 'Hair Styling',
    description: 'Expert blowouts, tongs, elegant waves, and formal event hairdressing for any occasion.',
    recommendedFor: 'Parties, meetings, and evening celebrations',
  },
  {
    id: 'hair-colouring',
    name: 'Hair Colouring',
    category: 'HAIR',
    categoryLabel: 'Hair Colouring',
    description: 'Global shades, root touch-ups, balayage, highlights, and custom toning using professional formulas.',
    recommendedFor: 'Subtle dimension or bold color change',
    featured: true,
  },
  {
    id: 'hair-treatments',
    name: 'Hair Treatments',
    category: 'HAIR',
    categoryLabel: 'Restorative Care',
    description: 'Deep conditioning and intensive scalp nourishment formulas formulated to repair moisture and fiber integrity.',
    recommendedFor: 'Chemically treated or dull hair',
  },
  {
    id: 'hair-spa',
    name: 'Hair Spa',
    category: 'HAIR',
    categoryLabel: 'Relaxation & Spa',
    description: 'Rejuvenating steam ritual with customized cream baths, therapeutic pressure point massage, and rinse.',
    recommendedFor: 'Deep relaxation and instant silky shine',
    featured: true,
  },
  {
    id: 'hair-straightening',
    name: 'Hair Straightening',
    category: 'HAIR',
    categoryLabel: 'Texture Transformation',
    description: 'Sleek, heat-activated thermal re-texturing for long-lasting smoothness and frizz control.',
    recommendedFor: 'Manageable, high-gloss straight locks',
  },
  {
    id: 'hair-rebonding',
    name: 'Hair Rebonding',
    category: 'HAIR',
    categoryLabel: 'Permanent Straightening',
    description: 'Permanent structural straightening treatment designed for stubborn curls, coarse texture, and volume control.',
    recommendedFor: 'Ultra-pin-straight, disciplined finish',
  },
  {
    id: 'hair-perming',
    name: 'Hair Perming',
    category: 'HAIR',
    categoryLabel: 'Wave & Curl Creation',
    description: 'Artful perm styling that imparts lasting bounce, defined curls, or soft beach waves with body and movement.',
    recommendedFor: 'Adding sustained volume and textured curls',
  },
  {
    id: 'hair-extensions',
    name: 'Hair Extensions',
    category: 'HAIR',
    categoryLabel: 'Length & Volume',
    description: 'Seamless integration of premium extensions for instant length, thickness, and dimensional density.',
    recommendedFor: 'Special occasions and volume enhancement',
  },
  {
    id: 'anti-dandruff-treatment',
    name: 'Anti-Dandruff Hair Treatment',
    category: 'HAIR',
    categoryLabel: 'Scalp Health',
    description: 'Targeted clarifying scalp treatment addressing flaking, itchiness, and excess sebum balance.',
    recommendedFor: 'Scalp purification and soothing relief',
  },
  {
    id: 'cysteine-treatment',
    name: 'Cysteine Hair Treatment',
    category: 'HAIR',
    categoryLabel: 'Protein Infusion',
    description: 'Gentle, formaldehyde-free protein smoothing that infuses natural essential cysteine to tame unruly frizz.',
    recommendedFor: 'Frizz-free smoothness with natural movement',
    featured: true,
  },
  {
    id: 'hair-patch',
    name: 'Hair Patch',
    category: 'HAIR',
    categoryLabel: 'Specialized Restoration',
    description: 'Discreet, custom-fitted hair patch application and styling for natural hairline restoration and coverage.',
    recommendedFor: 'Targeted hair loss and seamless density',
  },
  {
    id: 'wowie-kids-makeover',
    name: 'Wowie Kids Hair Makeover',
    category: 'HAIR',
    categoryLabel: 'Kids Haircare',
    description: 'Friendly, patient, and trendy cuts designed especially for little ones in a comfortable salon atmosphere.',
    recommendedFor: 'Children & family salon visits',
  },
  {
    id: 'bridal-hair-do',
    name: 'Bridal Hair Do',
    category: 'HAIR',
    categoryLabel: 'Bridal Artistry',
    description: 'Intricate wedding updos, traditional floral dupatta draping, and contemporary bridal hair design.',
    recommendedFor: 'Weddings, receptions, and sangeet ceremonies',
    featured: true,
  },

  // MAKEUP
  {
    id: 'bridal-makeup',
    name: 'Bridal Makeup',
    category: 'MAKEUP',
    categoryLabel: 'Signature Bridal',
    description: 'High-definition, camera-ready bridal makeup curated to accentuate natural beauty under celebratory lighting.',
    recommendedFor: 'The wedding day ceremony & photography',
    featured: true,
  },
  {
    id: 'bridal-package',
    name: 'Bridal Package',
    category: 'MAKEUP',
    categoryLabel: 'Comprehensive Bridal',
    description: 'Complete bespoke bridal package encompassing pre-bridal preparation, bridal hair do, and flawless makeup.',
    recommendedFor: 'End-to-end wedding preparation',
    featured: true,
  },
  {
    id: 'party-makeup',
    name: 'Party Makeup',
    category: 'MAKEUP',
    categoryLabel: 'Glamour & Evening',
    description: 'Luminous, long-wearing party glam with tailored eye art and radiant skin finish for gala events.',
    recommendedFor: 'Cocktails, family gatherings, and milestones',
    featured: true,
  },
  {
    id: 'engagement-makeup',
    name: 'Engagement Makeup',
    category: 'MAKEUP',
    categoryLabel: 'Celebration Artistry',
    description: 'Graceful, romantic makeup balancing subtlety and festive radiance for ring ceremonies and roka functions.',
    recommendedFor: 'Engagement rituals and pre-wedding functions',
  },
  {
    id: 'groom-makeup',
    name: 'Groom Makeup',
    category: 'MAKEUP',
    categoryLabel: 'Groom Grooming',
    description: 'Subtle, undetectable skin refining, shine control, beard profiling, and grooming for high-definition wedding photography.',
    recommendedFor: 'Grooms on wedding and reception days',
  },
  {
    id: 'basic-makeup',
    name: 'Basic Makeup',
    category: 'MAKEUP',
    categoryLabel: 'Daytime & Clean Glam',
    description: 'Lightweight foundation, clean accents, and polished finishing for everyday elegance or low-key celebrations.',
    recommendedFor: 'Professional events, interviews, and dinners',
  },

  // SKINCARE
  {
    id: 'facial',
    name: 'Facial',
    category: 'SKINCARE',
    categoryLabel: 'Skin Rejuvenation',
    description: 'Customized deep pore cleansing, exfoliation, steam, facial massage, and nutrient-dense hydration mask.',
    recommendedFor: 'Skin rejuvenation and healthy circulation',
    featured: true,
  },
  {
    id: 'skin-brightening-facial',
    name: 'Skin Brightening Facial Treatment',
    category: 'SKINCARE',
    categoryLabel: 'Radiance Therapy',
    description: 'Targeted illuminating therapy formulated to reduce dullness, smooth uneven tone, and restore skin vitality.',
    recommendedFor: 'Tired skin seeking immediate luminosity',
    featured: true,
  },
  {
    id: 'insta-whitening-clean-up',
    name: 'Insta Whitening Clean Up',
    category: 'SKINCARE',
    categoryLabel: 'Instant Glow',
    description: 'Fast, effective clarifying cleanup to remove deep-seated surface impurities, blackheads, and environmental tan.',
    recommendedFor: 'Quick refreshes before special plans',
  },

  // NAILS
  {
    id: 'manicure',
    name: 'Manicure',
    category: 'NAILS',
    categoryLabel: 'Hand Care',
    description: 'Nail shaping, cuticle treatment, gentle hand scrub, relaxing massage, and immaculate buff or polish application.',
    recommendedFor: 'Well-groomed hands and healthy cuticles',
    featured: true,
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    category: 'NAILS',
    categoryLabel: 'Foot Wellness',
    description: 'Soothing foot soak, calloused skin smoothing, restorative exfoliation, and tension-melting calf massage.',
    recommendedFor: 'Tired feet and lasting sole smoothness',
    featured: true,
  },
  {
    id: 'nail-extension',
    name: 'Nail Extension',
    category: 'NAILS',
    categoryLabel: 'Nail Enhancements',
    description: 'Professional nail extension sculpting providing custom length, elegant contour, and long-lasting strength.',
    recommendedFor: 'Statement nails and special celebrations',
  },
  {
    id: 'artificial-nail-extension',
    name: 'Artificial Nail Extension',
    category: 'NAILS',
    categoryLabel: 'Precision Extensions',
    description: 'Precision applied artificial extensions with flawless tip blending and durable glossy topcoats.',
    recommendedFor: 'Instant dramatic nail transformations',
  },

  // HAIR REMOVAL
  {
    id: 'face-waxing',
    name: 'Face Waxing',
    category: 'HAIR REMOVAL',
    categoryLabel: 'Delicate Waxing',
    description: 'Gentle, skin-safe waxing for upper lip, chin, and facial contours, minimizing irritation and leaving a smooth canvas.',
    recommendedFor: 'Silky smooth facial definition',
  },
  {
    id: 'body-waxing',
    name: 'Body Waxing',
    category: 'HAIR REMOVAL',
    categoryLabel: 'Smooth Skin Care',
    description: 'Hygienic waxing treatments for arms, legs, and underarms utilizing soothing post-wax botanical lotions.',
    recommendedFor: 'Long-lasting satin body smoothness',
    featured: true,
  },
  {
    id: 'chest-waxing',
    name: 'Chest Waxing',
    category: 'HAIR REMOVAL',
    categoryLabel: 'Men\'s Grooming',
    description: 'Professional waxing technique tailored for male grooming, ensuring clean removal with skin calming aftercare.',
    recommendedFor: 'Athletic, sharp, and neat chest grooming',
  },

  // BODY CARE
  {
    id: 'full-arms-body-polishing',
    name: 'Full Arms Body Polishing',
    category: 'BODY CARE',
    categoryLabel: 'Polishing & Glow',
    description: 'Full-arm restorative exfoliation and skin polish treatment that buffs away dead skin cells for velvety, supple skin.',
    recommendedFor: 'Pre-wedding events, sleeveless attire, and overall radiance',
    featured: true,
  },
];

export const SALON_IMAGE_ASSETS = {
  hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85",
  salonInterior: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
  hairCut: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=80",
  bridalMakeup: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=80",
  skincare: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
  nails: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80",
  bodyCare: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
  hairColor: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
  // Instagram showcase images (3-6 editorial images)
  instagramFeed: [
    {
      id: 'ig-1',
      title: 'Bridal Artistry & Floral Dupatta Styling',
      tag: '#BridalLook',
      imageUrl: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ig-2',
      title: 'Precision Hair Contouring & Gloss Finish',
      tag: '#HairTransformation',
      imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ig-3',
      title: 'Relaxing Spa & Rejuvenating Care',
      tag: '#SalonMoments',
      imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ig-4',
      title: 'Hydrating Glow Facial & Skin Polishing',
      tag: '#SkincareRitual',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ig-5',
      title: 'Editorial Nail Art & Immaculate Extensions',
      tag: '#NailSculpt',
      imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'ig-6',
      title: 'Modern Grooming & Sharp Gentleman Profiling',
      tag: '#FamilySalon',
      imageUrl: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    }
  ]
};

export const VERIFIED_TRUST_METRICS = [
  {
    value: "4.8★",
    label: "Google Rating",
    subtext: "Highest tier customer satisfaction"
  },
  {
    value: "3,458+",
    label: "Google Reviews",
    subtext: "Verified real local client feedback"
  },
  {
    value: "9 AM – 9 PM",
    label: "Open Daily",
    subtext: "365 days family convenience"
  },
  {
    value: "All-in-One",
    label: "Full Service Family Salon",
    subtext: "Hair, beauty & grooming in one place"
  }
];

export const TRUST_PILLARS = [
  {
    title: "Complete Range Under One Roof",
    description: "From precision haircuts, coloring, and cysteine treatments to high-definition bridal makeup, facials, and nail extensions."
  },
  {
    title: "Dedicated Family Salon",
    description: "Welcoming and comfortable environment catering to women, men, youngsters, and children with patient care."
  },
  {
    title: "Prime Vidyapeeth Road Location",
    description: "Centrally positioned at Ganpati Complex, Englishiyaline, easily accessible across Varanasi with ample premises."
  },
  {
    title: "Exceptional Client Reputation",
    description: "Backed by 4.8★ on Google with over 3,458+ verified client reviews reflecting genuine quality, hygiene, and attentiveness."
  }
];
