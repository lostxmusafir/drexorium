import React, { useEffect } from 'react';

/**
 * Enterprise Production-Grade SEO & Entity Graph Manager
 * Implements Schema.org standard graphs (founderOf, knowsAbout, sameAs, WebPage entity loops)
 * and dynamic SPA meta tag management for Google AI Overviews & Search Engines.
 */
export default function SEOHead({ activePage }) {
  useEffect(() => {
    // 1. Page Metadata Configuration Dictionary
    const PAGE_SEO = {
      'home': {
        title: 'Drexorium Labs | Decoding The Cosmos. Powering The Ascent.',
        description: 'Drexorium Labs — Founded by Raj Patil. Clinical precision in aerospace engineering, GSLV heavy launch systems, OrbitNet AI telemetry, and microgravity space biotechnology.',
        keywords: 'Drexorium Labs, Raj Patil, Founder Raj Patil, Zydrakon AI, Aerospace AI, GSLV Launch Vehicle, Cryogenic Engine C25, Space Microbiology, OrbitNet AI, Bengaluru Aerospace',
        canonical: 'https://drexoriumlabs.vercel.app/',
        ogType: 'website',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/gslv_booster_ground_ai.png',
      },
      'about-us': {
        title: 'Executive Leadership & Vision | Founder Raj Patil | Drexorium Labs',
        description: 'Meet Founder & CEO Raj Patil and executive leadership at Drexorium Labs. Discover our mission in aerospace engineering, deep space research, and global ground station networks.',
        keywords: 'Raj Patil, Founder Raj Patil, Drexorium Labs Leadership, Aerospace CEO India, Space Biotech Research, Dr. Maya Lin, Zydrakon AI Founder',
        canonical: 'https://drexoriumlabs.vercel.app/about',
        ogType: 'profile',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/raj_patil_founder.jpg',
      },
      'ai-analytics': {
        title: 'OrbitNet-Bio Transformer AI Telemetry | Drexorium Labs',
        description: 'OrbitNet-Bio Transformer AI: 0.42ms single-cell microgravity classification and autonomous trajectory telemetry. Developed in partnership with Zydrakon AI.',
        keywords: 'OrbitNet AI, OrbitNet-Bio, Aerospace Telemetry AI, Edge Transformer Space, Zydrakon AI, Satellite Trajectory AI, Single-Cell Microgravity ML',
        canonical: 'https://drexoriumlabs.vercel.app/ai-analytics',
        ogType: 'article',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/ai_planetary_mapping.png',
      },
      'launch-systems': {
        title: 'GSLV-MK3 Heavy Launch Vehicle & Cryogenic C25 Propulsion | Drexorium Labs',
        description: 'Engineering heavy-lift rocket architectures, twin S200 solid strap-on boosters, Vikas core engines, and cryogenic C25 upper stages for orbital payloads.',
        keywords: 'GSLV Launch Vehicle, Cryogenic Engine C25, S200 Solid Boosters, Interplanetary Propulsion, Heavy Lift Rocket India, Aerospace Engineering',
        canonical: 'https://drexoriumlabs.vercel.app/launch-systems',
        ogType: 'article',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/gslv_rocket_launch.png',
      },
      'space-biotech': {
        title: 'Space Biotechnology & Microfluidic Bio-Cassette Research | Drexorium Labs',
        description: 'Orbital microfluidic lab-on-a-chip bio-cassettes, extremophile radiotolerance (Deinococcus radiodurans), and monocrystalline protein growth under microgravity.',
        keywords: 'Space Biotechnology, Microfluidics Space, Bio-Cassette Incubator, Extremophile Radiation, Deinococcus radiodurans, Microgravity Biology',
        canonical: 'https://drexoriumlabs.vercel.app/space-biotech',
        ogType: 'article',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/space_microbiology_lab.png',
      },
      'drone-tech': {
        title: 'AeroMars Autonomous Scout Drones | 100 FPS Edge Vision | Drexorium Labs',
        description: 'AeroMars scout drones featuring 100 FPS edge-AI computer vision for planetary surface scouting, aerial mapping, and hazard avoidance.',
        keywords: 'AeroMars Drone, Autonomous Scout Drone, Edge AI Computer Vision, Planetary Surface Mapping, Aerospace Robotics, Flight Telemetry',
        canonical: 'https://drexoriumlabs.vercel.app/drone-tech',
        ogType: 'article',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/authentic_factory_drone_photo.png',
      },
      'missions': {
        title: 'Space Exploration Missions & Payload Tracker | Drexorium Labs',
        description: 'Track Drexorium Labs active and historic space missions: Lunar Reconnaissance, Solar Observatory, Deep Space Telemetry, and Kinetic Asteroid Impactor.',
        keywords: 'Space Missions Tracker, Lunar Reconnaissance, Solar Observatory, Asteroid Impactor, Deep Space Payload, Orbital Operations',
        canonical: 'https://drexoriumlabs.vercel.app/missions',
        ogType: 'article',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/gslv_booster_ground_ai.png',
      },
      'careers': {
        title: 'Careers & Academic Internships | Drexorium Labs Aerospace',
        description: 'Join Drexorium Labs. Open full-time positions in Aerospace Systems Engineering, AI Telemetry Architecture, Space Microbiology, and Flight Operations.',
        keywords: 'Aerospace Careers India, Space Tech Jobs, AI Engineer Aerospace, Space Biotech Internship, Drexorium Labs Hiring, Bengaluru Aerospace Jobs',
        canonical: 'https://drexoriumlabs.vercel.app/careers',
        ogType: 'website',
        ogImage: 'https://drexoriumlabs.vercel.app/assets/hero_cleanroom_lab.png',
      }
    };

    const currentMeta = PAGE_SEO[activePage] || PAGE_SEO['home'];

    // 2. Update Document Title
    document.title = currentMeta.title;

    // Helper function to update or create meta tags
    const setMetaTag = (selectorAttr, selectorVal, content) => {
      let element = document.querySelector(`meta[${selectorAttr}="${selectorVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(selectorAttr, selectorVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper function to update canonical link
    const setCanonicalLink = (href) => {
      let element = document.querySelector('link[rel="canonical"]');
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', 'canonical');
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Update standard meta tags
    setMetaTag('name', 'description', currentMeta.description);
    setMetaTag('name', 'keywords', currentMeta.keywords);
    setMetaTag('name', 'author', 'Raj Patil (Founder & CEO, Drexorium Labs)');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'ai-search', 'index, follow');
    setCanonicalLink(currentMeta.canonical);

    // Update Open Graph tags
    setMetaTag('property', 'og:title', currentMeta.title);
    setMetaTag('property', 'og:description', currentMeta.description);
    setMetaTag('property', 'og:url', currentMeta.canonical);
    setMetaTag('property', 'og:type', currentMeta.ogType);
    setMetaTag('property', 'og:image', currentMeta.ogImage);
    setMetaTag('property', 'og:site_name', 'Drexorium Labs');

    // Update Twitter Card tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', currentMeta.title);
    setMetaTag('name', 'twitter:description', currentMeta.description);
    setMetaTag('name', 'twitter:image', currentMeta.ogImage);
    setMetaTag('name', 'twitter:url', currentMeta.canonical);

    // 3. Construct Interconnected Entity Schema Graph (Schema.org Standard Compliant)
    const baseGraphNodes = [
      // Node A: Founder & CEO Person Entity (Cross-linked with founderOf & sameAs)
      {
        '@type': 'Person',
        '@id': 'https://rajpatil-port.vercel.app/#person',
        'name': 'Raj Patil',
        'jobTitle': 'Founder & Chief Executive Officer',
        'url': 'https://rajpatil-port.vercel.app/',
        'image': 'https://drexoriumlabs.vercel.app/assets/raj_patil_founder.jpg',
        'description': 'Founder & CEO of Drexorium Labs and Founder of Zydrakon AI. Specialist in aerospace engineering, GSLV heavy propulsion systems, and deep learning mission telemetry.',
        'worksFor': {
          '@id': 'https://drexoriumlabs.vercel.app/#organization'
        },
        'founderOf': [
          { '@id': 'https://drexoriumlabs.vercel.app/#organization' },
          { '@id': 'https://zydrakon-ai-website.vercel.app/#organization' }
        ],
        'knowsAbout': [
          'Aerospace Engineering',
          'GSLV Heavy Launch Vehicles',
          'OrbitNet AI Telemetry',
          'Microgravity Space Biotechnology',
          'Deinococcus radiodurans Extremophiles'
        ],
        'sameAs': [
          'https://rajpatil-port.vercel.app/',
          'https://github.com/lostxmusafir',
          'https://www.linkedin.com/in/rajpatilai',
          'https://twitter.com/rajpatil_space'
        ]
      },

      // Node B: Primary Organization (Drexorium Labs) with explicit ImageObject logo
      {
        '@type': 'Organization',
        '@id': 'https://drexoriumlabs.vercel.app/#organization',
        'name': 'Drexorium Labs',
        'url': 'https://drexoriumlabs.vercel.app',
        'logo': {
          '@type': 'ImageObject',
          '@id': 'https://drexoriumlabs.vercel.app/#logo',
          'url': 'https://drexoriumlabs.vercel.app/assets/gslv_booster_ground_ai.png',
          'caption': 'Drexorium Labs Aerospace Logo'
        },
        'legalName': 'Drexorium Labs Private Limited',
        'founder': {
          '@id': 'https://rajpatil-port.vercel.app/#person'
        },
        'description': 'Pioneering aerospace engineering research institute specializing in GSLV heavy launch systems, OrbitNet AI telemetry, and microgravity space biotechnology.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Bengaluru',
          'addressRegion': 'Karnataka',
          'addressCountry': 'India'
        },
        'sameAs': [
          'https://zydrakon-ai-website.vercel.app/',
          'https://github.com/lostxmusafir/drexorium'
        ],
        'relatedLink': [
          'https://zydrakon-ai-website.vercel.app/'
        ],
        'knowsAbout': [
          'Aerospace Systems',
          'Artificial Intelligence',
          'Space Biotechnology',
          'GSLV Rocket Launchers',
          'Microfluidic Lab-on-a-Chip'
        ]
      },

      // Node C: Sister AI Venture / Software Application Entity (Zydrakon AI)
      {
        '@type': 'Organization',
        '@id': 'https://zydrakon-ai-website.vercel.app/#organization',
        'name': 'Zydrakon AI',
        'url': 'https://zydrakon-ai-website.vercel.app/',
        'founder': {
          '@id': 'https://rajpatil-port.vercel.app/#person'
        },
        'description': 'Advanced artificial intelligence research lab developing neural architectures for edge computing, mission telemetry, and autonomous decision systems.'
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://zydrakon-ai-website.vercel.app/#software',
        'name': 'Zydrakon AI Engine',
        'applicationCategory': 'Artificial Intelligence',
        'operatingSystem': 'Space-Grade Edge Linux / Embedded RTOS',
        'creator': {
          '@id': 'https://rajpatil-port.vercel.app/#person'
        },
        'publisher': {
          '@id': 'https://zydrakon-ai-website.vercel.app/#organization'
        }
      },

      // Node D: WebSite Schema
      {
        '@type': 'WebSite',
        '@id': 'https://drexoriumlabs.vercel.app/#website',
        'url': 'https://drexoriumlabs.vercel.app',
        'name': 'Drexorium Labs',
        'description': 'Decoding The Cosmos. Powering The Ascent.',
        'publisher': {
          '@id': 'https://drexoriumlabs.vercel.app/#organization'
        },
        'copyrightHolder': {
          '@id': 'https://drexoriumlabs.vercel.app/#organization'
        }
      },

      // Node E: WebPage Entity Loop Node (Links every page to Organization, Founder, & WebSite)
      {
        '@type': 'WebPage',
        '@id': `${currentMeta.canonical}#webpage`,
        'url': currentMeta.canonical,
        'name': currentMeta.title,
        'description': currentMeta.description,
        'about': {
          '@id': 'https://drexoriumlabs.vercel.app/#organization'
        },
        'creator': {
          '@id': 'https://rajpatil-port.vercel.app/#person'
        },
        'publisher': {
          '@id': 'https://drexoriumlabs.vercel.app/#organization'
        },
        'isPartOf': {
          '@id': 'https://drexoriumlabs.vercel.app/#website'
        }
      }
    ];

    // Page-specific schema additions
    const pageSpecificNodes = [];

    // BreadcrumbList for deep navigation hierarchy
    const breadcrumbList = {
      '@type': 'BreadcrumbList',
      '@id': `${currentMeta.canonical}#breadcrumb`,
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://drexoriumlabs.vercel.app/'
        }
      ]
    };

    if (activePage !== 'home') {
      const pageNames = {
        'about-us': 'About Us',
        'ai-analytics': 'AI Research & Analytics',
        'launch-systems': 'Orbital Launch Systems',
        'space-biotech': 'Space BioTech',
        'drone-tech': 'Drone Technology',
        'missions': 'Space Missions Tracker',
        'careers': 'Careers'
      };
      breadcrumbList.itemListElement.push({
        '@type': 'ListItem',
        'position': 2,
        'name': pageNames[activePage] || activePage,
        'item': currentMeta.canonical
      });
    }
    pageSpecificNodes.push(breadcrumbList);

    // Page Specific Schemas
    if (activePage === 'ai-analytics') {
      pageSpecificNodes.push({
        '@type': 'SoftwareApplication',
        '@id': 'https://drexoriumlabs.vercel.app/ai-analytics#orbitnet',
        'name': 'OrbitNet-Bio Neural Transformer Framework',
        'applicationCategory': 'ResearchApplication',
        'operatingSystem': 'Space-Grade Edge Linux / Embedded RTOS',
        'description': 'Deep neural transformer model trained for 0.42ms single-cell classification under orbital microgravity.',
        'creator': { '@id': 'https://zydrakon-ai-website.vercel.app/#organization' },
        'publisher': { '@id': 'https://drexoriumlabs.vercel.app/#organization' }
      });
    } else if (activePage === 'launch-systems') {
      pageSpecificNodes.push({
        '@type': 'Product',
        '@id': 'https://drexoriumlabs.vercel.app/launch-systems#gslv-mk3',
        'name': 'GSLV-MK3 Heavy Launch Vehicle Architecture',
        'description': 'Heavy-lift rocket launcher featuring twin S200 solid boosters, Vikas liquid core engine, and C25 cryogenic upper stage.',
        'manufacturer': { '@id': 'https://drexoriumlabs.vercel.app/#organization' },
        'category': 'Aerospace Propulsion Engine'
      });
    } else if (activePage === 'drone-tech') {
      pageSpecificNodes.push({
        '@type': 'Product',
        '@id': 'https://drexoriumlabs.vercel.app/drone-tech#aeromars',
        'name': 'AeroMars Autonomous Scout Drone',
        'description': 'High-endurance autonomous scouting drone equipped with 100 FPS edge-AI vision for terrain scouting and hazard avoidance.',
        'manufacturer': { '@id': 'https://drexoriumlabs.vercel.app/#organization' },
        'category': 'Autonomous Aerospace Robotics'
      });
    } else if (activePage === 'careers') {
      const jobTitles = [
        'Aerospace Propulsion Systems Engineer',
        'Deep Learning Mission Telemetry Architect',
        'Space Microbiology Bio-Cassette Specialist',
        'Autonomous Flight Operations Intern'
      ];
      jobTitles.forEach((jobTitle, index) => {
        pageSpecificNodes.push({
          '@type': 'JobPosting',
          '@id': `https://drexoriumlabs.vercel.app/careers#job-${index + 1}`,
          'title': jobTitle,
          'description': `Full-time engineering position at Drexorium Labs working on GSLV launch vehicles and space biotechnology under Founder Raj Patil.`,
          'hiringOrganization': { '@id': 'https://drexoriumlabs.vercel.app/#organization' },
          'jobLocation': {
            '@type': 'Place',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Bengaluru',
              'addressRegion': 'Karnataka',
              'addressCountry': 'India'
            }
          },
          'employmentType': index === 3 ? 'INTERN' : 'FULL_TIME'
        });
      });
    }

    // Assemble unified JSON-LD graph payload
    const jsonLdGraph = {
      '@context': 'https://schema.org',
      '@graph': [...baseGraphNodes, ...pageSpecificNodes]
    };

    // Inject JSON-LD into Head
    let scriptTag = document.querySelector('script[id="json-ld-seo-graph"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('id', 'json-ld-seo-graph');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdGraph, null, 2);

  }, [activePage]);

  return null;
}
