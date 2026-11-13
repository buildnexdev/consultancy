/**
 * SINGLE SOURCE OF TRUTH: COLLEGES DATA
 * All colleges, courses, degrees, branches, and districts are derived automatically from this file.
 * To add a new college or course, simply add an entry to the COLLEGES_DATA array.
 */

export const CONSULTANCY_INFO = {
  name: 'Siragugal Higher Education Services',
  tagline: 'Your Trusted Partner for Direct Admissions & Counseling Guidance',
  email: 'admission@siragugaledu.com',
  phone: '+91 94892 46820',
  whatsapp: '919489246820',
  address: 'No. 12, First Floor, Higher Education Tower, Near New Bus Stand, Tamil Nadu, India'
};

export const COLLEGES_DATA = [
  // 1. Dhanalakshmi Srinivasan Engineering College
  {
    id: 'dhanalakshmi-srinivasan-eng',
    name: 'Dhanalakshmi Srinivasan Engineering College (Autonomous)',
    code: '3805',
    type: 'Autonomous',
    district: 'Perambalur',
    address: 'Thuraiyur Road, Perambalur, Tamil Nadu 621212',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    fees: { min: 85000, max: 125000, display: '₹85,000 - ₹1,25,000 / Year' },
    cutoff: { min: 140, max: 182, display: '140 - 182 / 200' },
    placement: {
      averagePackage: '4.8 LPA',
      highestPackage: '18.5 LPA',
      rate: '92%',
      recruiters: ['TCS', 'Infosys', 'Wipro', 'Cognizant', 'Zoho', 'HCL']
    },
    naac: 'A',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Mechanical Engineering',
          'Biomedical Engineering'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Communication Systems',
          'CAD/CAM'
        ]
      },
      {
        degree: 'MBA',
        branches: ['Finance', 'Marketing', 'Human Resources']
      }
    ],
    facilities: ['Wi-Fi Campus', 'Separate Hostels for Boys & Girls', 'Robotics Labs', 'Fleet Buses', 'Sports Complex', 'Placement Cell'],
    highlights: 'Premier autonomous engineering college in Central Tamil Nadu with high placement records and modern campus facilities.'
  },

  // 2. Roever Engineering College
  {
    id: 'roever-engineering-college',
    name: 'Roever Engineering College',
    code: '3819',
    type: 'Self-Financing',
    district: 'Perambalur',
    address: 'Elambalur, Perambalur, Tamil Nadu 621212',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    fees: { min: 65000, max: 95000, display: '₹65,000 - ₹95,000 / Year' },
    cutoff: { min: 130, max: 170, display: '130 - 170 / 200' },
    placement: {
      averagePackage: '3.8 LPA',
      highestPackage: '12.0 LPA',
      rate: '86%',
      recruiters: ['TCS', 'Tech Mahindra', 'Cognizant', 'Sutherland', 'CSS Corp']
    },
    naac: 'B++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Mechanical Engineering',
          'Civil Engineering'
        ]
      },
      {
        degree: 'MBA',
        branches: ['General Management', 'Finance & HR']
      }
    ],
    facilities: ['Hostel Accommodation', 'Library', 'Computer Labs', 'College Buses'],
    highlights: 'Affordable engineering education with dedicated rural student scholarship assistance.'
  },

  // 3. SSN College of Engineering
  {
    id: 'ssn-college-engineering',
    name: 'SSN College of Engineering',
    code: '1315',
    type: 'Autonomous',
    district: 'Chennai',
    address: 'Old Mahabalipuram Road (OMR), Kalavakkam, Chennai 603110',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    fees: { min: 145000, max: 210000, display: '₹1,45,000 - ₹2,10,000 / Year' },
    cutoff: { min: 185, max: 199, display: '185 - 199 / 200' },
    placement: {
      averagePackage: '9.4 LPA',
      highestPackage: '64.0 LPA',
      rate: '99%',
      recruiters: ['Microsoft', 'Amazon', 'Adobe', 'Goldman Sachs', 'PayPal', 'Cognizant', 'Google']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Cyber Security',
          'Electronics & Communication Engineering (ECE)',
          'Biotechnology'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Computer Science and Engineering', 'Communication Systems', 'VLSI Design']
      }
    ],
    facilities: ['250 Acre Green Campus', 'World Class Sports Complex', 'HCL Innovation Lab', 'AC Hostels', 'High Speed WiFi'],
    highlights: 'Founded by Shiv Nadar (HCL). Renowned for highest placement packages and generous merit scholarships.'
  },

  // 4. Chennai Institute of Technology (CIT Chennai)
  {
    id: 'chennai-institute-technology',
    name: 'Chennai Institute of Technology (CIT Chennai)',
    code: '1133',
    type: 'Autonomous',
    district: 'Chennai',
    address: 'Sarathy Nagar, Kundrathur, Chennai, Tamil Nadu 600069',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
    fees: { min: 120000, max: 175000, display: '₹1,20,000 - ₹1,75,000 / Year' },
    cutoff: { min: 178, max: 196, display: '178 - 196 / 200' },
    placement: {
      averagePackage: '7.1 LPA',
      highestPackage: '40.0 LPA',
      rate: '97%',
      recruiters: ['Zoho', 'Virtusa', 'TCS Ninja & Digital', 'Accenture', 'Pegasystems', 'Kaar Tech']
    },
    naac: 'A+',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Cyber Security',
          'Robotics & Automation',
          'Information Technology (IT)'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Computer Science', 'Applied Electronics']
      }
    ],
    facilities: ['Centre of Excellence Labs', 'Industry Incubation', 'Modern Hostels', 'Sports Arena'],
    highlights: 'Top-ranked for cutting-edge COE labs backed by KUKA Robotics, Dassault Systèmes, and Virtusa.'
  },

  // 5. Rajalakshmi Engineering College
  {
    id: 'rajalakshmi-engineering-college',
    name: 'Rajalakshmi Engineering College (REC Chennai)',
    code: '1211',
    type: 'Autonomous',
    district: 'Chennai',
    address: 'Rajalakshmi Nagar, Thandalam, Chennai, Tamil Nadu 602105',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80',
    fees: { min: 115000, max: 170000, display: '₹1,15,000 - ₹1,70,000 / Year' },
    cutoff: { min: 172, max: 194, display: '172 - 194 / 200' },
    placement: {
      averagePackage: '6.2 LPA',
      highestPackage: '36.5 LPA',
      rate: '95%',
      recruiters: ['TCS Ninja/Digital', 'Infosys', 'Wipro', 'Ford', 'Hyundai', 'Zoho', 'Virtusa']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Cyber Security',
          'Electronics & Communication Engineering (ECE)',
          'Biomedical Engineering'
        ]
      },
      {
        degree: 'MBA',
        branches: ['Marketing', 'Finance', 'Systems', 'Human Resources']
      }
    ],
    facilities: ['Robotic Labs', 'AC Canteen', 'Hostels for Boys & Girls', 'Gym', 'High Speed WiFi'],
    highlights: 'Strong alumni network and dedicated core company placement drives.'
  },

  // 6. SRM Institute of Science and Technology
  {
    id: 'srm-institute-science-tech',
    name: 'SRM Institute of Science and Technology (KTR Campus)',
    code: 'SRMJEEE / Direct',
    type: 'Deemed University',
    district: 'Chennai',
    address: 'SRM Nagar, Kattankulathur, Chengalpattu / Chennai 603203',
    image: 'https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=800&q=80',
    fees: { min: 260000, max: 450000, display: '₹2,60,000 - ₹4,50,000 / Year' },
    cutoff: { min: 160, max: 195, display: 'Entrance / 160+ / 200' },
    placement: {
      averagePackage: '8.1 LPA',
      highestPackage: '57.0 LPA',
      rate: '95%',
      recruiters: ['Amazon', 'Google', 'PayPal', 'Barclays', 'Morgan Stanley', 'Siemens', 'Infosys']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Cyber Security',
          'Biomedical Engineering',
          'Electronics & Communication Engineering (ECE)'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Artificial Intelligence', 'Data Science', 'Cloud Computing']
      },
      {
        degree: 'MBA',
        branches: ['Business Analytics', 'Digital Marketing', 'Finance', 'International Business']
      }
    ],
    facilities: ['Hospital on Campus', 'Luxury Hostels', 'Metro Access', 'Olympic Pool', 'Auditorium'],
    highlights: 'Vast 250+ acre university campus with international student exchange and top Fortune 500 placements.'
  },

  // 7. St. Joseph's College of Engineering
  {
    id: 'st-josephs-engineering-college',
    name: "St. Joseph's College of Engineering",
    code: '1317',
    type: 'Autonomous',
    district: 'Chennai',
    address: 'OMR, Semmancheri, Chennai, Tamil Nadu 600119',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    fees: { min: 110000, max: 165000, display: '₹1,10,000 - ₹1,65,000 / Year' },
    cutoff: { min: 170, max: 192, display: '170 - 192 / 200' },
    placement: {
      averagePackage: '5.8 LPA',
      highestPackage: '26.0 LPA',
      rate: '93%',
      recruiters: ['Cognizant', 'TCS', 'Infosys', 'Zoho', 'Wipro', 'Mindtree']
    },
    naac: 'A+',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Biotechnology'
        ]
      },
      {
        degree: 'MBA',
        branches: ['Finance', 'Marketing', 'Human Resources']
      }
    ],
    facilities: ['Free Bus Transport', 'Dining Hall', 'Hostels', 'Central Library'],
    highlights: 'Reputed for academic discipline, student care, and consistent mass IT recruitments.'
  },

  // 8. PSG College of Technology
  {
    id: 'psg-college-technology',
    name: 'PSG College of Technology',
    code: '2006',
    type: 'Government / Govt Aided',
    district: 'Coimbatore',
    address: 'Avinashi Road, Peelamedu, Coimbatore, Tamil Nadu 641004',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    fees: { min: 95000, max: 180000, display: '₹95,000 - ₹1,80,000 / Year' },
    cutoff: { min: 190, max: 199.5, display: '190 - 199.5 / 200' },
    placement: {
      averagePackage: '8.2 LPA',
      highestPackage: '38.0 LPA',
      rate: '98%',
      recruiters: ['Google', 'Microsoft', 'Amazon', 'Cisco', 'Qualcomm', 'Zoho', 'TCS']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Robotics & Automation',
          'Electronics & Communication Engineering (ECE)',
          'Mechanical Engineering'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Structural Engineering', 'Power Electronics', 'VLSI Design']
      },
      {
        degree: 'MBA',
        branches: ['Marketing', 'Finance', 'Human Resources', 'Supply Chain']
      }
    ],
    facilities: ['Digital Library', 'Incubation Center', 'Hostel with AC/Non-AC', 'Indoor Sports Arena', 'R&D Labs'],
    highlights: 'One of the most prestigious engineering colleges in South India with legendary industrial ties and high average pay packages.'
  },

  // 9. Kumaraguru College of Technology
  {
    id: 'kumaraguru-college-tech',
    name: 'Kumaraguru College of Technology (KCT)',
    code: '2712',
    type: 'Autonomous',
    district: 'Coimbatore',
    address: 'Chinnavedampatti, Saravanampatty, Coimbatore 641049',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    fees: { min: 110000, max: 160000, display: '₹1,10,000 - ₹1,60,000 / Year' },
    cutoff: { min: 178, max: 195, display: '178 - 195 / 200' },
    placement: {
      averagePackage: '6.4 LPA',
      highestPackage: '31.0 LPA',
      rate: '94%',
      recruiters: ['Bosch', 'Amazon', 'Cognizant', 'Soliton', 'Thoughtworks', 'Accenture', 'Zoho']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Mechanical Engineering',
          'Biotechnology'
        ]
      },
      {
        degree: 'MBA',
        branches: ['Innovation & Entrepreneurship', 'Finance', 'Human Resource']
      }
    ],
    facilities: ['KCT Garage Lab', 'Forge Innovation Accelerator', 'Hi-Tech Hostels', 'Synthetic Track', 'Food Courts'],
    highlights: 'Vibrant startup ecosystem, renowned automotive teams, and excellent placement packages.'
  },

  // 10. Coimbatore Institute of Technology (CIT)
  {
    id: 'cit-coimbatore',
    name: 'Coimbatore Institute of Technology (CIT)',
    code: '2007',
    type: 'Government / Govt Aided',
    district: 'Coimbatore',
    address: 'Civil Aerodrome Post, Peelamedu, Coimbatore 641014',
    image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fa1?auto=format&fit=crop&w=800&q=80',
    fees: { min: 80000, max: 140000, display: '₹80,000 - ₹1,40,000 / Year' },
    cutoff: { min: 185, max: 198, display: '185 - 198 / 200' },
    placement: {
      averagePackage: '7.5 LPA',
      highestPackage: '33.0 LPA',
      rate: '96%',
      recruiters: ['TCS', 'Infosys', 'Robert Bosch', 'Qualcomm', 'Honeywell', 'Zoho']
    },
    naac: 'A',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Electrical & Electronics Engineering (EEE)'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Embedded Systems', 'Computer Science']
      }
    ],
    facilities: ['Campus Hostels', 'Central Computing Facility', 'Sports Grounds', 'Library'],
    highlights: 'Historic government-aided institution offering top quality engineering at low fees.'
  },

  // 11. SASTRA Deemed to be University
  {
    id: 'sastra-deemed-university',
    name: 'SASTRA Deemed to be University',
    code: 'JEE + +2',
    type: 'Deemed University',
    district: 'Tiruchirappalli',
    address: 'Tirumalaisamudram, Trichy - Thanjavur Highway, Tamil Nadu 613401',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    fees: { min: 165000, max: 230000, display: '₹1,65,000 - ₹2,30,000 / Year' },
    cutoff: { min: 180, max: 197, display: '180 - 197 / 200' },
    placement: {
      averagePackage: '8.8 LPA',
      highestPackage: '42.0 LPA',
      rate: '97%',
      recruiters: ['TCS Research', 'Amazon', 'Microsoft', 'Tata Motors', 'Oracle', 'Cognizant']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Cyber Security',
          'Robotics & Automation',
          'Biotechnology',
          'Information Technology (IT)'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Advanced Computing', 'Bioinformatics']
      },
      {
        degree: 'Law',
        branches: ['BA LLB (Hons)', 'BBA LLB (Hons)']
      }
    ],
    facilities: ['Hub for Artificial Intelligence', 'Vast Library with 2Lakh+ Books', 'AC Hostel', 'Sports Complex'],
    highlights: 'Consistently ranked among the top 30 universities in India with exceptional research culture.'
  },

  // 12. Dhanalakshmi Srinivasan University (DSU Trichy)
  {
    id: 'dhanalakshmi-srinivasan-university',
    name: 'Dhanalakshmi Srinivasan University (DSU Trichy)',
    code: 'Direct / Entrance',
    type: 'Deemed University',
    district: 'Tiruchirappalli',
    address: 'NH-45, Samayapuram, Tiruchirappalli, Tamil Nadu 621112',
    image: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
    fees: { min: 95000, max: 150000, display: '₹95,000 - ₹1,50,000 / Year' },
    cutoff: { min: 140, max: 180, display: '140 - 180 / 200' },
    placement: {
      averagePackage: '5.2 LPA',
      highestPackage: '22.0 LPA',
      rate: '91%',
      recruiters: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'IBM', 'Tech Mahindra']
    },
    naac: 'A',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Biomedical Engineering'
        ]
      },
      {
        degree: 'MBBS',
        branches: ['General Medicine & Surgery']
      },
      {
        degree: 'B.Pharm',
        branches: ['Pharmacy Practice', 'Pharmaceutics']
      },
      {
        degree: 'B.Sc Nursing',
        branches: ['Nursing Care']
      },
      {
        degree: 'MBA',
        branches: ['Hospital Management', 'Finance', 'Human Resources']
      }
    ],
    facilities: ['Integrated Medical & Engineering Campus', 'Separate AC Hostels', 'Hi-tech Robotics Lab', 'Transport'],
    highlights: 'State of the art 100+ acre university campus with medical college attachment and guaranteed placements.'
  },

  // 13. Saranathan College of Engineering
  {
    id: 'saranathan-college-engineering',
    name: 'Saranathan College of Engineering',
    code: '3819',
    type: 'Autonomous',
    district: 'Tiruchirappalli',
    address: 'Venkateswara Nagar, Panjappur, Trichy 620012',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    fees: { min: 85000, max: 130000, display: '₹85,000 - ₹1,30,000 / Year' },
    cutoff: { min: 150, max: 185, display: '150 - 185 / 200' },
    placement: {
      averagePackage: '4.9 LPA',
      highestPackage: '20.0 LPA',
      rate: '90%',
      recruiters: ['Infosys', 'TCS', 'Wipro', 'Zoho', 'Hexaware']
    },
    naac: 'A',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Mechanical Engineering'
        ]
      },
      {
        degree: 'MBA',
        branches: ['Finance', 'Marketing', 'Systems']
      }
    ],
    facilities: ['City Connected Campus', 'Separate Hostels', 'Laboratories', 'Sports Complex'],
    highlights: 'Trusted autonomous engineering college in Trichy known for solid discipline and high placement.'
  },

  // 14. Thiagarajar College of Engineering
  {
    id: 'thiagarajar-college-eng',
    name: 'Thiagarajar College of Engineering (TCE Madurai)',
    code: '5008',
    type: 'Government / Govt Aided',
    district: 'Madurai',
    address: 'Thiruparankundram, Madurai, Tamil Nadu 625015',
    image: 'https://images.unsplash.com/photo-1568792923760-d70635a89fa1?auto=format&fit=crop&w=800&q=80',
    fees: { min: 75000, max: 130000, display: '₹75,000 - ₹1,30,000 / Year' },
    cutoff: { min: 185, max: 198, display: '185 - 198 / 200' },
    placement: {
      averagePackage: '7.8 LPA',
      highestPackage: '34.0 LPA',
      rate: '96%',
      recruiters: ['Honeywell', 'TVS Motors', 'Zoho', 'Amazon', 'Cisco', 'Texas Instruments']
    },
    naac: 'A+',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Mechanical Engineering',
          'Civil Engineering'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Computer Science and Engineering', 'Environmental Engineering']
      }
    ],
    facilities: ['Historic Heritage Campus', 'Honeywell Innovation Lab', 'Hostels', 'Central Library', 'Outdoor Stadium'],
    highlights: 'South Tamil Nadu’s top destination for engineering, backed by strong research and low fee structure.'
  },

  // 15. Velammal College of Engineering and Technology
  {
    id: 'velammal-college-eng-madurai',
    name: 'Velammal College of Engineering and Technology',
    code: '5986',
    type: 'Autonomous',
    district: 'Madurai',
    address: 'Madurai - Tuticorin Ring Road, Viraganoor, Madurai 625009',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    fees: { min: 90000, max: 140000, display: '₹90,000 - ₹1,40,000 / Year' },
    cutoff: { min: 160, max: 188, display: '160 - 188 / 200' },
    placement: {
      averagePackage: '5.2 LPA',
      highestPackage: '19.5 LPA',
      rate: '92%',
      recruiters: ['TCS', 'Infosys', 'Zoho', 'Cognizant', 'Kaar Tech']
    },
    naac: 'A',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)'
        ]
      }
    ],
    facilities: ['Hostel Accommodation', 'Air-Conditioned Labs', 'Placement Cell', 'Fleet Buses'],
    highlights: 'High campus placement rate in Madurai with strong IT industry focus.'
  },

  // 16. Bannari Amman Institute of Technology
  {
    id: 'bannari-amman-institute-tech',
    name: 'Bannari Amman Institute of Technology (BIT Sathyamangalam)',
    code: '2702',
    type: 'Autonomous',
    district: 'Salem',
    address: 'Alathukombai, Sathyamangalam / Salem Region 638401',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80',
    fees: { min: 98000, max: 140000, display: '₹98,000 - ₹1,40,000 / Year' },
    cutoff: { min: 172, max: 194, display: '172 - 194 / 200' },
    placement: {
      averagePackage: '5.9 LPA',
      highestPackage: '28.0 LPA',
      rate: '93%',
      recruiters: ['Cognizant', 'TCS', 'Soliton', 'Robert Bosch', 'Zoho', 'L&T Technology']
    },
    naac: 'A+',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)',
          'Biotechnology',
          'Electrical & Electronics Engineering (EEE)'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Software Engineering', 'Biotechnology']
      },
      {
        degree: 'MBA',
        branches: ['Agribusiness', 'Marketing', 'Finance']
      }
    ],
    facilities: ['180 Acre Eco-Campus', 'Learning Factory', 'Residential Hostels', 'Sports Grounds', 'Fast Wi-Fi'],
    highlights: 'Innovative "Special Lab" learning ecosystem where students master real software products from 1st year.'
  },

  // 17. Sona College of Technology
  {
    id: 'sona-college-technology',
    name: 'Sona College of Technology',
    code: '2618',
    type: 'Autonomous',
    district: 'Salem',
    address: 'Junction Main Road, Salem, Tamil Nadu 636005',
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
    fees: { min: 95000, max: 145000, display: '₹95,000 - ₹1,45,000 / Year' },
    cutoff: { min: 160, max: 188, display: '160 - 188 / 200' },
    placement: {
      averagePackage: '5.4 LPA',
      highestPackage: '24.0 LPA',
      rate: '91%',
      recruiters: ['TCS', 'Infosys', 'Wipro', 'Capgemini', 'Zoho', 'Cognizant']
    },
    naac: 'A',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Mechanical Engineering',
          'Civil Engineering'
        ]
      },
      {
        degree: 'MBA',
        branches: ['Human Resources', 'Finance', 'Production']
      }
    ],
    facilities: ['Robotics Centre', 'Hostels', 'Sports Facility', 'Central Library'],
    highlights: 'Salem city heart location, excellent research projects with ISRO and top IT placements.'
  },

  // 18. Vellore Institute of Technology (VIT Vellore)
  {
    id: 'vit-vellore',
    name: 'Vellore Institute of Technology (VIT Vellore)',
    code: 'VITEEE / Direct',
    type: 'Deemed University',
    district: 'Vellore',
    address: 'Katpadi, Vellore, Tamil Nadu 632014',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    fees: { min: 198000, max: 350000, display: '₹1,98,000 - ₹3,50,000 / Year' },
    cutoff: { min: 175, max: 198, display: 'VITEEE Rank / 175+ / 200' },
    placement: {
      averagePackage: '9.2 LPA',
      highestPackage: '1.02 Crore',
      rate: '98%',
      recruiters: ['Microsoft', 'Amazon', 'PayPal', 'Qualcomm', 'Intel', 'Deloitte']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Cyber Security',
          'Electronics & Communication Engineering (ECE)'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Computer Science and Engineering', 'Software Engineering', 'VLSI Design']
      },
      {
        degree: 'MBA',
        branches: ['Business Analytics', 'Finance', 'Marketing', 'Operations']
      }
    ],
    facilities: ['World Class Campus', 'Smart Classrooms', 'Luxury Hostels', 'Olympic Sports Complexes'],
    highlights: 'Ranked in India’s top 15 universities with over 900+ visiting recruiters and super dream job offers.'
  },

  // 19. BMS College of Engineering
  {
    id: 'bms-college-engineering',
    name: 'BMS College of Engineering',
    code: 'KCET / COMEDK',
    type: 'Autonomous',
    district: 'Bangalore',
    address: 'Bull Temple Road, Basavanagudi, Bengaluru, Karnataka 560019',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    fees: { min: 180000, max: 280000, display: '₹1,80,000 - ₹2,80,000 / Year' },
    cutoff: { min: 180, max: 196, display: 'KCET / COMEDK Top Rank' },
    placement: {
      averagePackage: '9.1 LPA',
      highestPackage: '50.0 LPA',
      rate: '97%',
      recruiters: ['Amazon', 'Adobe', 'Samsung', 'Cisco', 'Mercedes-Benz', 'Deloitte', 'Intel']
    },
    naac: 'A++',
    courses: [
      {
        degree: 'B.Tech / B.E.',
        branches: [
          'Computer Science and Engineering (CSE)',
          'Artificial Intelligence & Data Science (AI & DS)',
          'Information Technology (IT)',
          'Electronics & Communication Engineering (ECE)'
        ]
      },
      {
        degree: 'M.Tech / M.E.',
        branches: ['Machine Design', 'Computer Science']
      },
      {
        degree: 'MBA',
        branches: ['Finance', 'Marketing', 'Human Resources']
      }
    ],
    facilities: ['Silicon Valley Heart Location', 'Incubation Centre', 'Modern Hostels', 'Sports Complex', 'Auditoriums'],
    highlights: 'Located in the heart of Bangalore with prime tech company networking and stellar salary packages.'
  }
];

// ==========================================
// DYNAMIC AUTOMATIC HELPER FUNCTIONS
// (Builds lists dynamically so nothing is hardcoded twice)
// ==========================================

/**
 * Automatically extracts all unique districts from COLLEGES_DATA
 */
export const getAllDistricts = (colleges = COLLEGES_DATA) => {
  const set = new Set();
  colleges.forEach(c => {
    if (c.district) set.add(c.district);
  });
  return Array.from(set).sort();
};

/**
 * Automatically extracts all unique degrees across all colleges
 */
export const getAllDegrees = (colleges = COLLEGES_DATA) => {
  const set = new Set();
  colleges.forEach(c => {
    c.courses?.forEach(crs => {
      if (crs.degree) set.add(crs.degree);
    });
  });
  return Array.from(set).sort();
};

/**
 * Automatically extracts all unique branches for a given degree (or all branches if degree is omitted)
 */
export const getBranchesForDegree = (degree, colleges = COLLEGES_DATA) => {
  const set = new Set();
  colleges.forEach(c => {
    c.courses?.forEach(crs => {
      if (!degree || degree === 'All Degrees' || crs.degree.toLowerCase() === degree.toLowerCase()) {
        crs.branches?.forEach(b => set.add(b));
      }
    });
  });
  return Array.from(set).sort();
};

/**
 * Automatically extracts all college types
 */
export const getAllCollegeTypes = (colleges = COLLEGES_DATA) => {
  const set = new Set();
  colleges.forEach(c => {
    if (c.type) set.add(c.type);
  });
  return Array.from(set).sort();
};

/**
 * Returns colleges filtered by degree, branch, and district for dependent multi-selects
 */
export const getFilteredCollegesForSelect = ({ degree, branch, district }, colleges = COLLEGES_DATA) => {
  return colleges.filter(c => {
    if (district && district !== 'All Districts' && c.district.toLowerCase() !== district.toLowerCase()) {
      return false;
    }
    if (degree && degree !== 'All Degrees') {
      const matchDegree = c.courses?.some(crs => crs.degree.toLowerCase() === degree.toLowerCase());
      if (!matchDegree) return false;
    }
    if (branch && branch !== 'All Branches') {
      const matchBranch = c.courses?.some(crs => 
        crs.branches?.some(b => b.toLowerCase().includes(branch.toLowerCase()))
      );
      if (!matchBranch) return false;
    }
    return true;
  });
};

// Fallback exports for backward compatibility
export const DISTRICTS = ['All Districts', ...getAllDistricts()];
export const COURSES = getAllDegrees().map(d => ({ id: d.toLowerCase().replace(/[^a-z]/g, ''), name: d, stream: d }));
export const SPECIALIZATIONS = ['All Specializations', ...getBranchesForDegree()];
