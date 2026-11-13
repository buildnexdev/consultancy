# Siragugal Higher Education Services - Admission Discovery & Lead Portal

A streamlined, student-first admissions portal built with **React 18**, **React Router**, **Tailwind CSS**, and **Vite**, engineered with a single goal: **to collect student admission enquiries and deliver them directly to the consultancy admin's email via Formspree.**

---

## 📁 Project Architecture & File Structure

```
c:\MAMP\htdocs\consultancy\
├── .env                         # Formspree endpoint config (VITE_FORMSPREE_ID)
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite configuration (base: './' for MAMP compatibility)
├── tailwind.config.js           # Tailwind theme configuration
├── index.html                   # Entry HTML with Google Fonts
│
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # HashRouter, global modal manager & routes
│   ├── index.css                # Tailwind directives & smooth styling
│   │
│   ├── data/
│   │   └── colleges.js          # ⭐ SINGLE SOURCE OF TRUTH: All 19 colleges, courses,
│   │                            #   fees, cutoffs, placements, plus dynamic helper
│   │                            #   extractors (getAllDistricts, getAllDegrees, etc.)
│   │
│   ├── components/
│   │   ├── Header.jsx           # Sticky header with "Free Admission Guidance" CTA
│   │   ├── Footer.jsx           # Footer with office details, email, links & admin portal
│   │   ├── CollegeCard.jsx      # 3-col desktop / 2-col tablet / 1-col mobile card
│   │   ├── FilterBar.jsx        # Live search, degree, branch, district, fee slider & live count
│   │   ├── EnquiryForm.jsx      # ⭐ CORE FORM: 10-digit phone check, honeypot anti-spam,
│   │   │                        #   dependent degree->branch dropdown, multi-select, Formspree POST
│   │   ├── CollegeDetailModal.jsx # Full college details view with all courses, fees, placements
│   │   ├── FloatingContact.jsx  # Floating mobile contact button (Call / WhatsApp / Form)
│   │   ├── WhyChooseUs.jsx      # 4 core advisory pillars
│   │   ├── CoursesSection.jsx   # Overview of academic streams & specializations
│   │   ├── HowItWorks.jsx       # 3-step admission process
│   │   ├── Testimonials.jsx     # Student and parent success reviews
│   │   └── FAQ.jsx              # Frequently asked questions accordion
│   │
│   └── pages/
│       ├── HomePage.jsx         # Hero with embedded EnquiryForm near the top, top colleges
│       ├── CollegesPage.jsx     # Full directory with 12-per-page pagination & all filters
│       └── CollegeDetailPage.jsx # Dedicated college page (/college/:id) with sticky guidance
│
├── api/
│   ├── submit-lead.php          # Local MAMP lead receiver & backup logger
│   └── leads.json               # Auto-saved backup copy of all student enquiries
│
├── admin-leads.php              # Local MAMP admin viewer with 1-click Call & WhatsApp
├── college-listing.php          # Direct Apache/MAMP PHP bridge for collegemoc reference URL
└── index.php                    # Apache/MAMP index bridge
```

---

## 🚀 How to Run the Project

### Option A: Local Development (Vite Live Server)
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port displayed in terminal).

### Option B: Run in MAMP (Apache / PHP)
1. Start your MAMP Apache server.
2. In your browser, navigate to:
   - `http://localhost/consultancy/`
   - or `http://localhost/consultancy/college-listing.php`
3. Check received student leads anytime at:
   - `http://localhost/consultancy/admin-leads.php`

### Option C: Production Build
```bash
npm run build
```
Generates production assets in `/dist` and automatically syncs with `/assets`.

---

## ➕ How to Add a New College

You **NEVER** need to edit multiple files or hardcode dropdowns! All districts, courses, branches, and filters are generated automatically from `src/data/colleges.js`.

### Step:
Open [src/data/colleges.js](file:///c:/MAMP/htdocs/consultancy/src/data/colleges.js) and append your new college object inside the `COLLEGES_DATA` array:

```javascript
{
  id: 'my-new-college',                        // Unique lowercase slug
  name: 'Karpagam College of Engineering',     // Full official college name
  code: '2710',                                // TNEA counseling code
  type: 'Autonomous',                          // 'Autonomous' | 'Self-Financing' | 'Government / Govt Aided' | 'Deemed University'
  district: 'Coimbatore',                      // District (automatically added to dropdown!)
  address: 'Myleripalayam Village, Othakkalmandapam, Coimbatore, Tamil Nadu 641032',
  image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
  fees: { 
    min: 85000, 
    max: 135000, 
    display: '₹85,000 - ₹1,35,000 / Year' 
  },
  cutoff: { 
    min: 155, 
    max: 185, 
    display: '155 - 185 / 200' 
  },
  placement: {
    averagePackage: '5.2 LPA',
    highestPackage: '24.0 LPA',
    rate: '94%',
    recruiters: ['TCS', 'Zoho', 'Cognizant', 'Infosys', 'Wipro']
  },
  naac: 'A',                                  // Optional: 'A++', 'A+', 'A'
  courses: [
    {
      degree: 'B.Tech / B.E.',                // Automatically added to Degree dropdown!
      branches: [                             // Automatically added to Branch dropdown!
        'Computer Science and Engineering (CSE)',
        'Artificial Intelligence & Data Science (AI & DS)',
        'Cyber Security',
        'Electronics & Communication Engineering (ECE)'
      ]
    },
    {
      degree: 'MBA',
      branches: ['Finance', 'Marketing', 'Human Resources']
    }
  ],
  facilities: ['Wi-Fi Campus', 'Separate Hostels', 'Hi-Tech Labs', 'Fleet Buses', 'Sports Complex'],
  highlights: 'Autonomous institution in Coimbatore with strong IT placements and modern COE labs.'
}
```

Once saved:
1. The new college appears immediately in the directory.
2. Its district is automatically added to the District filter and enquiry form.
3. Its degrees and branches are automatically added to the dependent course/branch dropdowns.

---

## 📧 Formspree Configuration

- Active Formspree endpoint: `https://formspree.io/f/mppdwdly`
- Configured in [.env](file:///c:/MAMP/htdocs/consultancy/.env) as `VITE_FORMSPREE_ID=mppdwdly`.
- Form payload includes:
  - `_subject: "New Admission Enquiry – [Student Name] ([Course])"`
  - `_gotcha`: Hidden honeypot anti-spam field
  - Student Name, Parent Name, Mobile (10-digit Indian validation), Email, Current City, 12th Cut-off Mark, Preferred Degree, Preferred Branch, Preferred District, Target College(s), and Student Message.
