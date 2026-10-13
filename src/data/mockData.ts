import { PortfolioItem, TattooStyle } from '../types';

export const ARTIST_INFO = {
  name: 'David',
  brand: 'DAVINK.TATTO0',
  location: 'Haines City / Davenport, Florida',
  instagramHandle: '@davink.tatto0',
  instagramUrl: 'https://www.instagram.com/davink.tatto0/?hl=en',
  followers: '1,518',
  posts: 45,
  profileImage: 'https://instagram.fisb26-1.fna.fbcdn.net/v/t51.82787-19/801305336_17985214920061828_5529258997055058186_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=G1JiwGD1DfcQ7kNvwHaCbVw&_nc_oc=AdryD1Ioq0swJ5D7XodXMsemBoCE8Q5tZha26xCdqMpGtKdmZH8KLDU0dErzjnNCuiw&_nc_zt=24&_nc_ht=instagram.fisb26-1.fna&_nc_gid=0mu8eVgHuI8RWtNgpTv-dQ&_nc_ss=7baaf&oh=00_AQP3_QXq_aWYLB5x1Ep6pDUrrrI2At09FVHM9dxGJ0iWxA&oe=6AD3B0EB',
  heroVideoUrl: '/david_ig_video.mp4',
  heroPoster: '/david_hero_poster.jpg',
  aboutPhoto: '/assets/david_slide3_official.jpg',
  featuredPost: {
    url: 'https://www.instagram.com/p/DeUtu3Vqmp3/?hl=en',
    embedUrl: 'https://www.instagram.com/p/DeUtu3Vqmp3/embed/',
    poster: '/david_hero_poster.jpg',
    caption: 'Un encendedor también puede ser un pequeño lienzo. 🎨🔥 Hoy aproveché un rato libre para hacer algo que me encanta: transformar un objeto cotidiano en una pequeña pieza de arte.',
    date: 'October 2026'
  }
};

export const TATTOO_STYLES: TattooStyle[] = [
  {
    id: 'custom',
    title: 'CUSTOM TATTOOS',
    tagline: 'Personal concepts engineered around your unique vision',
    description: 'Every custom piece is meticulously crafted from scratch. We sit down to discuss your ideas, motifs, and narrative, turning raw inspiration into a cohesive, anatomically tailored composition that flows naturally with your physique.',
    imageUrl: 'https://images.unsplash.com/photo-1598371839606-9185d75e0108?q=80&w=1000&auto=format&fit=crop',
    features: ['Original Freehand & Digital Concepting', 'Anatomical Placement Planning', 'Exclusive One-of-a-Kind Artwork']
  },
  {
    id: 'black-grey',
    title: 'BLACK & GREY',
    tagline: 'Mastering depth, rich contrast, and timeless monochromatic realism',
    description: 'Deep shadows, delicate smooth gradients, and hyper-detailed textures define our black and grey work. From neoclassical portraits and statuesque compositions to dark-surrealism and intricate sleeve layouts.',
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=1000&auto=format&fit=crop',
    features: ['Smooth Velvety Gradients', 'High Contrast Dimensionality', 'Aged-to-Perfection Ink Formulas']
  },
  {
    id: 'cover-up',
    title: 'COVER-UP TATTOOS',
    tagline: 'Transforming old or unwanted ink into breathtaking new masterpieces',
    description: 'Bad tattoos or past mistakes should never hold you back. Using advanced composition theory, strategic negative space, and dark saturated black-and-grey contrast, old tattoos are completely erased beneath striking new art.',
    imageUrl: 'https://images.unsplash.com/photo-1611501275017-9b65de00f69d?q=80&w=1000&auto=format&fit=crop',
    features: ['Strategic Value Mapping', 'Seamless Integration of Old Lines', 'Complete Visual Rebirth']
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 'art1', type: 'video', src: '/portfolio/item_1_DcdyeaKtBZa.mp4' },
  { id: 'art2', type: 'video', src: '/portfolio/item_2_DeaRlnuEULG.mp4' },
  { id: 'art3', type: 'video', src: '/portfolio/item_3_DeXmElJBV0t.mp4' },
  { id: 'art4', type: 'image', src: '/portfolio/item_4_DeIaySasJPG.jpg' },
  { id: 'art5', type: 'video', src: '/portfolio/item_5_DeCkCFNA-bf.mp4' },
  { id: 'art6', type: 'video', src: '/portfolio/item_6_Dd-Y9_7s7Qq.mp4' },
  { id: 'art7', type: 'video', src: '/portfolio/item_7_DGcDlxINFcI.mp4' },
  { id: 'art8', type: 'image', src: '/portfolio/item_8_Dd7y-o1sTCk.jpg' },
  { id: 'art9', type: 'video', src: '/portfolio/item_9_Dcd0CPXNYEo.mp4' },
  { id: 'art10', type: 'video', src: '/portfolio/item_10_DdrJKPzKM6D.mp4' },
  { id: 'art11', type: 'video', src: '/portfolio/item_11_DdVPZX-h3_1.mp4' },
  { id: 'art12', type: 'image', src: '/portfolio/item_12_DdT-zfpNFCx.jpg' },
  { id: 'art13', type: 'image', src: '/portfolio/item_13_DdOxOMuK5iG.jpg' },
  { id: 'art14', type: 'video', src: '/portfolio/item_14_DcNJ182DMXV.mp4' },
  { id: 'art15', type: 'video', src: '/portfolio/item_15_DbwJ69YB0JY.mp4' },
  { id: 'art16', type: 'video', src: '/portfolio/item_16_DUGb1xnjR68.mp4' }
];

export const STUDIO_HIGHLIGHTS = [
  {
    title: 'Sterile & Private Environment',
    description: 'Single-client private studio setup in Haines City / Davenport ensuring absolute focus, hygiene, and comfort during your session.',
    image: 'https://images.unsplash.com/photo-1598371839606-9185d75e0108?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Pro-Grade Equipment & Inks',
    description: 'Equipped with state-of-the-art rotary machines, vegan organic pigments, and single-use sterile disposable barriers.',
    image: 'https://images.unsplash.com/photo-1611501275017-9b65de00f69d?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Uncompromising Artistry',
    description: 'Every session is treated as a masterclass in tattoo craftsmanship, honoring skin longevity and timeless visual impact.',
    image: 'https://images.unsplash.com/photo-1590246814833-6f2963d3e647?q=80&w=1000&auto=format&fit=crop'
  }
];

export const FAQS = [
  {
    question: 'How do I book a consultation or appointment with David?',
    answer: 'You can submit an inquiry through our booking form with your concept details, placement, and reference photos. David reviews every project personally to ensure the style aligns with his artistic vision.'
  },
  {
    question: 'Where is the studio located?',
    answer: 'The private studio is located in the Haines City and Davenport, Florida area. Exact studio address and parking instructions are provided upon confirmed appointment booking.'
  },
  {
    question: 'How should I prepare for my tattoo session?',
    answer: 'Get a good night’s sleep, eat a substantial meal before arriving, stay well hydrated, and wear comfortable clothing that allows easy access to the tattoo placement area. Avoid alcohol for 24 hours prior.'
  },
  {
    question: 'Can you cover up my old tattoo?',
    answer: 'Yes! David specializes in seamless cover-ups. A consultation is required to assess the darkness and placement of the existing tattoo so we can engineer a custom design that completely hides it.'
  }
];
