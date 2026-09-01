/**
 * AMNEEV VISION SCHOOL — Centralized Content Configuration
 *
 * All verified institutional data, headlines, descriptions, navigation,
 * academic details, admissions guide, collaborations, and contact details.
 */

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const siteContent = {
  // Institutional Core Information
  school: {
    name: "AMNEEV Vision School",
    shortName: "AMNEEV",
    tagline: "Shaping Minds. Building Futures.",
    motto: "Shaping Minds, Building Futures: Excellence and Ethics for a Global World.",
    coreIdea: "A school where ambition meets belonging.",
    location: "Sai City, Udaypura, Farrukhabad Road, NH-92, Etawah, Uttar Pradesh 206001, India",
    city: "Etawah",
    state: "Uttar Pradesh",
    pincode: "206001",
    country: "India",
    affiliation: "CBSE-Affiliated Senior Secondary School",
    cbseAffiliationNo: "2131535",
    schoolCode: "70350",
    establishedYear: 2011,
    yearsOfExcellence: "15+",
    classesOffered: "Nursery to Class XII",
    admissionsYear: "2026–27",
    registrationFee: "₹1,500",
    phone: "+91-9219600500",
    phoneDisplay: "+91 92196 00500",
    email: "admissions@amneevvision.edu.in", // Verified pattern placeholder
    officeHours: "Monday – Saturday: 8:00 AM – 3:30 PM (IST)",
    principal: {
      name: "Mr. Pankaj Sharma",
      title: "Principal",
      qualifications: "M.Sc., M.Ed., Educational Leadership",
      message: `At AMNEEV Vision School, our commitment goes far beyond academic instruction. We see each student as an individual of boundless potential, curiosity, and moral depth. In a rapidly transforming global landscape, true education is not merely the accumulation of facts—it is the cultivation of resilient character, critical reasoning, and empathetic leadership.
      
With our robust CBSE curriculum, the groundbreaking innovation fostered in our Atal Tinkering Lab, our comprehensive sports and arts ecosystem, and our accredited NCC cadet wing, we provide our learners in Etawah with opportunities that rival the finest institutions anywhere in the country. We invite parents and learners to join a community where ambition is matched with deep belonging.`,
    },
  },

  // Key Public Statistics ("At A Glance")
  stats: [
    { value: "15+", label: "Years of Excellence", sublabel: "Guiding learners since 2011" },
    { value: "2300+", label: "Enrolled Students", sublabel: "From Nursery to Class XII" },
    { value: "72", label: "Smart Classrooms", sublabel: "Digitally-equipped learning spaces" },
    { value: "6", label: "Advanced Laboratories", sublabel: "Science, Computing & ATL" },
    { value: "18,141+", label: "Sq. Metres Campus", sublabel: "Spacious green academic grounds" },
    { value: "99%", label: "Parent Satisfaction", sublabel: "Verified feedback rating" },
  ],

  // Academic / Technology Collaborations
  collaborations: [
    {
      name: "IIT Madras",
      type: "Vocational & Emerging Skills Course",
      description: "Advanced technological problem solving and foundational engineering exposure.",
    },
    {
      name: "British Council",
      type: "Global Language & Cultural Proficiency",
      description: "International standard communication skills and communicative pedagogy.",
    },
    {
      name: "Microsoft Teams",
      type: "Digital Classroom Ecosystem",
      description: "Collaborative blended learning platforms and secure student digital workspaces.",
    },
    {
      name: "Cambridge Education Lab",
      type: "Curriculum Enrichment & Assessment",
      description: "Inquiry-based foundational science and progressive critical thinking modules.",
    },
    {
      name: "Extramarks",
      type: "Smart Classroom Digital Curriculum",
      description: "Visual 3D pedagogy and adaptive assessments integrated across all 72 classrooms.",
    },
    {
      name: "Kreedo",
      type: "Early Childhood Experiential Learning",
      description: "Montessori-aligned tactile learning system for Nursery to UKG learners.",
    },
  ],

  // Navigation Hierarchy
  navigation: {
    main: [
      {
        label: "School",
        href: "/about",
        children: [
          { label: "About AMNEEV", href: "/about", description: "Our 15-year heritage, mission, and leadership." },
          { label: "Vision & Philosophy", href: "/about#philosophy", description: "Shaping minds with ethics and modern curiosity." },
          { label: "Principal's Message", href: "/about#principal", description: "A message from Mr. Pankaj Sharma." },
          { label: "Campus & Facilities", href: "/campus", description: "18,141 sq. m. campus, 72 classrooms & 6 labs." },
        ],
      },
      {
        label: "Learning",
        href: "/academics",
        children: [
          { label: "Academic Overview", href: "/academics", description: "CBSE curriculum & holistic pedagogy." },
          { label: "Early Years (Nursery–UKG)", href: "/early-years", description: "Kreedo experiential foundation for young learners." },
          { label: "Middle School (Classes I–VIII)", href: "/middle-school", description: "Inquiry, core disciplines, and analytical rigor." },
          { label: "Senior School (Classes IX–XII)", href: "/senior-school", description: "Board excellence, science, commerce, and humanities." },
          { label: "Atal Tinkering Lab (STEM)", href: "/innovation", description: "Robotics, microcontrollers, and design thinking." },
        ],
      },
      {
        label: "Life at AMNEEV",
        href: "/student-life",
        children: [
          { label: "Student Life Overview", href: "/student-life", description: "Daily rhythm, clubs, wellness, and houses." },
          { label: "Sports & Athletics", href: "/sports", description: "Football, cricket, basketball, track & physical grit." },
          { label: "Arts, Music & Culture", href: "/arts", description: "Visual expression, performing arts, and annual fest." },
          { label: "NCC & Youth Leadership", href: "/ncc", description: "Discipline, service, national pride, and character." },
        ],
      },
      {
        label: "Campus",
        href: "/campus",
      },
      {
        label: "Admissions",
        href: "/admissions",
        children: [
          { label: "Admissions 2026–27", href: "/admissions", description: "Overview, eligibility, and key dates." },
          { label: "Admission Process", href: "/admissions/process", description: "Four clear steps from enquiry to enrollment." },
          { label: "Fee Guidelines & Policy", href: "/admissions/fees", description: "Transparent fee structure and registration rules." },
          { label: "Schedule a Campus Tour", href: "/contact#visit", description: "Experience AMNEEV in person with your child." },
        ],
      },
    ],
    secondary: [
      { label: "News", href: "/news" },
      { label: "Events", href: "/events" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },

  // 6 Core Pillars ("More Than a Classroom")
  pillars: [
    {
      number: "01",
      title: "Learn",
      category: "Academic Excellence",
      description: "CBSE curriculum enriched by digital smart classrooms, individualized teacher mentoring, and Cambridge critical thinking pedagogy.",
      href: "/academics",
    },
    {
      number: "02",
      title: "Explore",
      category: "Innovation & STEM",
      description: "A government-sanctioned Atal Tinkering Lab where students prototype robotics, IoT sensors, and design thinking solutions.",
      href: "/innovation",
    },
    {
      number: "03",
      title: "Move",
      category: "Sports & Athletics",
      description: "Expansive multi-sport grounds fostering physical stamina, competitive discipline, team leadership, and lifelong health.",
      href: "/sports",
    },
    {
      number: "04",
      title: "Create",
      category: "Arts, Music & Culture",
      description: "Spacious music studios, fine art ateliers, and dramatic stages giving voice to expressive imagination and Indian cultural roots.",
      href: "/arts",
    },
    {
      number: "05",
      title: "Lead",
      category: "NCC & Character",
      description: "Accredited National Cadet Corps unit building civic responsibility, resilience, patriotic duty, and commanding self-confidence.",
      href: "/ncc",
    },
    {
      number: "06",
      title: "Belong",
      category: "Community & Wellbeing",
      description: "A safe, supportive, and values-driven school culture where every student is seen, respected, and championed.",
      href: "/student-life",
    },
  ],

  // Learning Pathways
  learningStages: [
    {
      id: "early-years",
      stage: "EARLY YEARS",
      grades: "Nursery – UKG",
      headline: "Curiosity ignited through joyful discovery.",
      description: "Powered by the Kreedo experiential early-learning framework, our foundational classrooms engage young minds through multi-sensory materials, phonetic awareness, language discovery, and social play.",
      features: ["Montessori-aligned sensorial materials", "Phonetics and early numeracy", "Safe, vibrant child-first activity rooms", "Social-emotional foundation"],
      href: "/early-years",
    },
    {
      id: "middle-school",
      stage: "FOUNDATION & MIDDLE YEARS",
      grades: "Classes I – VIII",
      headline: "Building rigorous concepts and questioning minds.",
      description: "A structured transition from foundational literacy and numeracy to disciplined analytical inquiry. Students engage with interactive science, mathematics labs, bilingual fluency, and introductory ATL modules.",
      features: ["Extramarks smart classroom modules", "Hands-on science and computer labs", "Introductory coding & robotics", "Competitive sports and visual arts"],
      href: "/middle-school",
    },
    {
      id: "senior-school",
      stage: "SENIOR SCHOOL",
      grades: "Classes IX – XII",
      headline: "Academic distinction, career readiness, and character.",
      description: "Comprehensive preparation for CBSE Secondary and Senior Secondary Board Examinations. Offering Science, Commerce, and Humanities streams with dedicated faculty guidance, entrance readiness, and IIT Madras vocational enrichment.",
      features: ["CBSE Board excellence track", "Science, Commerce & Humanities streams", "Advanced laboratory experimentation", "Career counselling & entrance mentorship"],
      href: "/senior-school",
    },
  ],

  // 4-Step Admissions Walkthrough
  admissionsProcess: [
    {
      step: "01",
      title: "Enquire",
      description: "Submit an online inquiry form or call our admissions desk at +91 92196 00500 to receive the prospective family handbook.",
    },
    {
      step: "02",
      title: "Visit Campus",
      description: "Take a personalized guided tour of our 18,141 sq. m. campus, classrooms, Atal Tinkering Lab, and sports facilities.",
    },
    {
      step: "03",
      title: "Register",
      description: "Complete the official registration form with requisite documentation and submit the registration fee of ₹1,500.",
    },
    {
      step: "04",
      title: "Join AMNEEV",
      description: "Following age-appropriate interaction and verification, receive confirmation and welcome orientation into the AMNEEV family.",
    },
  ],

  // Frequently Asked Questions
  faqs: [
    {
      question: "What is the affiliation status and curriculum of AMNEEV Vision School?",
      answer: "AMNEEV Vision School is a full-fledged senior secondary school affiliated with the Central Board of Secondary Education (CBSE), New Delhi, bearing Affiliation Number 2131535 and School Code 70350.",
    },
    {
      question: "Which classes are open for admission for the 2026–27 academic session?",
      answer: "Admissions for the 2026–27 session are open from Nursery through Class XII across all major streams (Science, Commerce, and Humanities).",
    },
    {
      question: "What is the registration fee for admission?",
      answer: "The registration fee is ₹1,500 per application. Please note that registration indicates intent and does not guarantee automatic admission, which is finalized upon interaction and document verification.",
    },
    {
      question: "What laboratory and STEM facilities are available at AMNEEV?",
      answer: "The school houses 6 specialized laboratories, including dedicated Physics, Chemistry, Biology, and Computer Science laboratories, along with a state-of-the-art Atal Tinkering Lab (ATL) for robotics, IoT, and hands-on electronics.",
    },
    {
      question: "Does the school offer National Cadet Corps (NCC) training?",
      answer: "Yes, AMNEEV Vision School features an authorized NCC unit, fostering physical discipline, civic service, camp training, and leadership development among students.",
    },
    {
      question: "Where is the campus located and how can parents visit?",
      answer: "Our campus is situated at Sai City, Udaypura, Farrukhabad Road, NH-92, Etawah, Uttar Pradesh 206001. Campus visits are welcomed Monday through Saturday during school office hours (8:00 AM to 3:30 PM).",
    },
  ],
};
