import React from 'react';

export const NAV_ITEMS = [
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
];

export const MENU_CONTENT = {
    services: {
        heading: 'Services',
        items: [
            {
                label: 'Architectural Design',
                children: ['Residential', 'Commercial']
            },
            'Planning Applications',
            'Interior Design',
            'Create & Construct'
        ]
    },
    portfolio: {
        heading: 'Portfolio',
        items: ['Residential', 'Commercial']
    },
    about: {
        heading: 'About',
        items: ['Read More', 'Interior Design Philosophy', 'Core Values', 'About My Studio']
    },
    contact: {
        heading: 'Get in Touch',
        items: [
            'skapedesign.in@gmail.com',
            'Kolathur, Chennai-600099, TAMIL NADU, INDIA',
            '+91 9940482048',
            '+91 9940340216'
        ]
    }
};

export const RESIDENTIAL_SERVICE_DETAIL = {
    eyebrow: 'Architectural Design | Residential',
    title: 'Residential Architecture',
    intro: [
        'At SKAPE, we believe a home is more than walls and a roof. It is a reflection of your lifestyle, aspirations, and personality. Our residential architecture is thoughtfully designed to balance aesthetics, functionality, comfort, and sustainability.',
        'We create homes that feel timeless, elegant, and deeply personal.'
    ],
    approach: [
        {
            title: 'Understanding You',
            text: 'Every home begins with listening. We understand your lifestyle, family needs, cultural values, and future goals before shaping the design vision.'
        },
        {
            title: 'Concept to Creation',
            text: 'From initial sketches to final execution, we deliver a seamless architectural journey, integrating form, function, materials, and light.'
        },
        {
            title: 'Smart and Sustainable Design',
            text: 'We incorporate climate-responsive architecture, natural ventilation and daylight optimization, energy-efficient planning, and sustainable materials.'
        }
    ],
    offerings: [
        {
            title: 'Home Renovation',
            text: 'At SKAPE, we transform existing homes into refined, functional living spaces. Our renovation approach blends modern design with structural improvement, enhancing comfort, aesthetics, and value. From facade upgrades to complete interior remodeling, we reimagine your home with thoughtful planning, quality materials, and seamless execution tailored to your lifestyle.'
        },
        {
            title: 'Planning Application',
            text: 'We provide complete assistance for planning approval and statutory submissions. Our team prepares accurate drawings, documentation, and compliance reports aligned with local building regulations. We coordinate with authorities, ensuring a smooth approval process while minimizing delays. From concept to submission, we handle every detail professionally, making your project legally compliant and ready for construction.'
        },
        {
            title: 'Architecture and Interior Design',
            text: 'We seamlessly blend architecture and interior design to create cohesive, functional, and visually striking spaces. Our holistic approach ensures that structure, layout, materials, lighting, and interiors work in harmony. From concept to completion, we design spaces that reflect your lifestyle, enhance comfort, and deliver timeless aesthetics with thoughtful detailing and efficient planning.'
        },
        {
            title: 'Landscape Design',
            text: 'We design landscapes that enhance architecture and connect spaces with nature. Our approach balances aesthetics, functionality, and sustainability, creating inviting outdoor environments that complement your home. From garden planning and hardscape design to lighting and planting concepts, we craft serene, well-structured landscapes that elevate everyday living.'
        }
    ],
    heroImage: {
        src: '/assets/residential-hero.jpg',
        alt: 'Architectural planning desk with drawings and a laptop'
    },
    landscapeImage: {
        src: '/assets/residential-landscape.jpg',
        alt: 'Residential landscape lighting and outdoor seating'
    }
};

export const WORK_PLACE_SERVICE_DETAIL = {
    eyebrow: 'Architectural Design | Work Place',
    title: 'Work Place Design',
    intro: [
        'We create inspiring workplace environments that enhance productivity, collaboration, and brand identity.',
        'Our designs balance functionality, comfort, and aesthetics to ensure efficient space planning and thoughtful detailing. From modern offices to creative studios, we craft dynamic workspaces that reflect your vision while promoting innovation, flexibility, and a positive work culture.'
    ],
    approach: [
        {
            title: 'Productivity-First Planning',
            text: 'Layouts are organized to support focused work, smooth movement, and better day-to-day efficiency across teams.'
        },
        {
            title: 'Collaboration and Flexibility',
            text: 'We design a mix of collaborative and quiet zones so teams can shift naturally between discussion, creation, and concentration.'
        },
        {
            title: 'Brand-Led Spatial Identity',
            text: 'Materials, colors, and spatial language are curated to reflect your brand while keeping the workplace modern, comfortable, and professional.'
        }
    ],
    offerings: [
        {
            title: 'Corporate Offices',
            text: 'Structured workplace environments with clear zoning, meeting areas, and employee-focused planning.'
        },
        {
            title: 'Creative Studios',
            text: 'Flexible studio layouts that support ideation, production workflows, and dynamic team collaboration.'
        },
        {
            title: 'Workspace Renovation',
            text: 'Transformation of existing office spaces with improved circulation, updated materials, and stronger visual identity.'
        },
        {
            title: 'Lighting and Detailing',
            text: 'Layered lighting and interior detailing that improve comfort, mood, and day-long workplace usability.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80',
        alt: 'Modern collaborative office with glass partitions and open desks'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80',
        alt: 'Workplace lounge and meeting area with contemporary design'
    },
    approachHeading: 'Design Approach',
    scopeHeading: 'Work Place Scope',
    featureLabel: 'WORK PLACE INTERIORS'
};

export const HOSPITALITY_SERVICE_DETAIL = {
    eyebrow: 'Architectural Design | Hospitality',
    title: 'Hospitality Design',
    intro: [
        'We design hospitality spaces that create memorable guest experiences by blending architecture, interiors, and ambiance.',
        'From hotels and resorts to cafes and lounges, we craft spaces that balance comfort, functionality, and visual appeal. Our thoughtful planning, material selection, and lighting concepts create inviting environments that reflect your brand identity and elevate every visitor experience.'
    ],
    approach: [
        {
            title: 'Guest Journey Planning',
            text: 'Spaces are designed around arrival, movement, comfort, and service flow to create seamless and welcoming experiences.'
        },
        {
            title: 'Atmosphere and Identity',
            text: 'Interior character, mood, and layout are shaped to express brand personality while staying warm and intuitive for guests.'
        },
        {
            title: 'Material and Lighting Harmony',
            text: 'We combine durable materials, layered textures, and balanced lighting to deliver spaces that feel elegant, practical, and memorable.'
        }
    ],
    offerings: [
        {
            title: 'Hotels and Resorts',
            text: 'Guest-focused planning for lobbies, rooms, amenities, and shared spaces with a strong visual identity.'
        },
        {
            title: 'Cafes and Lounges',
            text: 'Social hospitality environments designed for comfort, atmosphere, and efficient front-of-house operations.'
        },
        {
            title: 'Restaurant Interiors',
            text: 'Dining spaces with refined zoning, seating strategy, and material palettes for an elevated experience.'
        },
        {
            title: 'Lighting Concepts',
            text: 'Feature and ambient lighting systems that enhance mood, wayfinding, and spatial depth throughout the venue.'
        }
    ],
    heroImage: {
        src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=80',
        alt: 'Luxury hotel lobby with warm hospitality lighting'
    },
    landscapeImage: {
        src: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=80',
        alt: 'Hospitality lounge seating with elegant interior styling'
    },
    approachHeading: 'Design Approach',
    scopeHeading: 'Hospitality Scope',
    featureLabel: 'GUEST EXPERIENCE'
};

export const SERVICES_DATA = [
    {
        title: 'Home Renovation',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path d="M9 22V12h6v10" />
            </svg>
        ),
        text:
            'We offer a seamless home renovation experience that transforms outdated spaces into functional, modern, and beautifully refined environments. Our process begins with understanding each client\'s needs, lifestyle, and vision, ensuring that every design decision reflects their goals. From structural improvements to aesthetic upgrades, we manage every detail with precision, transparency, and care.'
    },
    {
        title: 'Planning Application',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2v20M2 12h20M2 2l20 20M2 22L22 2" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
        ),
        text:
            'We provide thoughtful residential planning that transforms ideas into well-organized, efficient, and comfortable living spaces. By understanding each client\'s needs and lifestyle, we create layouts that maximize function, flow, and natural light. Our goal is to deliver personalized plans that make every home feel practical, beautiful, and truly livable.'
    },
    {
        title: 'Interior Design',
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3v18M3 12h18" />
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8l4 4-4 4M8 12h8" />
            </svg>
        ),
        text:
            'Our interior design experience is all about creating spaces that feel personal, comfortable, and genuinely connected to the way you live. We listen closely to your ideas, understand your lifestyle, and shape every detail to reflect your taste. From choosing materials and colors to planning furniture and lighting, we make the entire process simple and enjoyable.'
    }
];

export const PROJECTS_DATA = [
    {
        id: 'heritage-richmond',
        segment: 'residential',
        banner: 'RESIDENTIAL | HERITAGE REBUILD',
        title: 'Heritage Rebuild, Richmond',
        subtitle: 'Victorian terrace restoration with full rebuild, basement, and loft expansion.',
        cover: 'https://minaleandmann.com/wp-content/uploads/2018/01/2-8.jpg',
        gallery: [
            'https://minaleandmann.com/wp-content/uploads/2018/01/2-8.jpg',
            'https://minaleandmann.com/wp-content/uploads/2018/01/3-7.jpg',
            'https://minaleandmann.com/wp-content/uploads/2018/01/4-7.jpg',
            'https://minaleandmann.com/wp-content/uploads/2018/01/5-5.jpg',
            'https://minaleandmann.com/wp-content/uploads/2018/01/6-3.jpg'
        ],
        designBrief:
            'Victorian terrace in Richmond restored by retaining the heritage façade, adding a full subterranean basement and maximizing family living space with an open rear plan while keeping intimate rooms at the front and upper levels.',
        interiorDesign:
            'Dark wood panelling, hand-sawn French chevron flooring, reclaimed Italian marble, and a MannMade London kitchen with matt lacquer fronts and marble-topped oak island. Every floor was reconfigured for a contemporary layout and a simple landscape links the indoor and outdoor spaces.'
    },
    {
        id: 'mythiri',
        segment: 'residential',
        banner: 'RESIDENTIAL | INTERIOR DESIGN',
        title: 'Ms. Mythiri',
        subtitle:
            'For Mythiri, we designed interiors that unite style, comfort, and practicality, creating a home that feels inviting, modern, and uniquely personal.',
        cover:
            'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80'
        ],
        designBrief:
            'The interior design for Mythiri in Chennai was envisioned as a harmonious blend of modern comfort and subtle elegance, tailored to the lifestyle and preferences of the client. The brief focused on creating warm, functional spaces with clean lines, natural textures, and a soothing color palette that reflects both contemporary taste and regional sensibilities. The design needed to balance openness with privacy, ensuring smooth circulation and practical use of every area. Special attention was given to lighting, storage planning, and spatial organization to enhance everyday living. The goal was to build a home that feels inviting, efficient, and uniquely personal.',
        interiorDesign:
            'The interiors combine calm materials, warm textures, and clean detailing to create a relaxed everyday atmosphere. The spatial planning supports both privacy and interaction, while layered lighting, soft finishes, and purposeful storage make each zone practical and elegant.'
    },
    {
        id: 'leisure-hall',
        segment: 'commercial',
        banner: 'COMMERCIAL | INTERIOR DESIGN',
        title: 'Leisure Hall',
        subtitle: 'Warm, socially engaging leisure environment with contemporary materials and fluid zoning.',
        cover:
            'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1400&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80'
        ],
        designBrief:
            'This project focuses on creating a warm, contemporary leisure space that blends natural materials with modern design elements to deliver an inviting, socially engaging environment. The brief emphasizes openness, fluid circulation, and visually rich textures that enhance both comfort and aesthetics. The layout integrates multiple seating arrangements to support casual conversations, collaborative activities, and relaxed dining. Wooden elements, earthy tones, and organic forms are used to create a cohesive atmosphere that feels both grounded and vibrant.',
        interiorDesign:
            'The interior features a striking composition of wooden textures, sculptural lighting, and woven furniture that together create a warm, immersive atmosphere. Curved seating, layered pendant lights, patterned surfaces, and greenery keep the space connected, comfortable, and contemporary.'
    },
    {
        id: 'cultural-hall',
        segment: 'commercial',
        banner: 'COMMERCIAL | INTERIOR DESIGN',
        title: 'Cultural Hall',
        subtitle: 'Elegant event space that blends cultural identity with modern comfort and clarity.',
        cover:
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
            'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=80'
        ],
        designBrief:
            'To create an elegant cultural hall designed for gatherings, ceremonies, and formal events, blending traditional aesthetics with a refined spatial layout. The brief focuses on delivering a space that feels grand, welcoming, and visually expressive while supporting large audiences comfortably. Ample seating, clear sightlines, and smooth circulation were key requirements, ensuring functionality for various programs. The design emphasizes cultural identity, incorporating classical motifs, rich colors, and handcrafted detailing.',
        interiorDesign:
            'Lighting, acoustics, and proportions are carefully balanced to improve audience comfort and stage visibility. Rich material layers and precise detailing create a ceremonial yet contemporary environment that supports both heritage expression and modern operations.'
    }
];
