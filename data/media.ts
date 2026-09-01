/**
 * AMNEEV VISION SCHOOL — Centralized Media Asset Configuration
 *
 * All placeholder media assets (images and videos) are managed here.
 * When real school assets become available, update the URLs in this file
 * without changing any page components or layout structures.
 */

export interface MediaAsset {
  url: string;
  alt: string;
  caption?: string;
  poster?: string;
  aspectRatio?: string;
}

export const schoolMedia = {
  // Hero Video & Fallback Image
  hero: {
    // Elegant, cinematic video placeholder of campus & student learning
    video: "https://assets.mixkit.co/videos/preview/mixkit-group-of-students-walking-in-a-corridor-41666-large.mp4",
    poster: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    alt: "AMNEEV Vision School students walking together in campus corridor with books and bags",
  },

  // School Philosophy & Campus Intro
  philosophy: {
    url: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop",
    alt: "Engaged teacher mentoring students during an interactive classroom discussion",
    caption: "Holistic education nurturing curiosity and resilience in every learner.",
  },

  // 6 Core Pillars ("More Than a Classroom")
  pillars: {
    learn: {
      url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200&auto=format&fit=crop",
      alt: "Students actively engaged in deep academic study and collaborative learning",
      title: "Academic Excellence",
    },
    explore: {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
      alt: "Student assembling and testing robotics components in an innovation lab",
      title: "Innovation & STEM",
    },
    move: {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
      alt: "Students running and training on lush green athletics grounds",
      title: "Sports & Athletics",
    },
    create: {
      url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop",
      alt: "Student playing musical instruments in dedicated acoustic arts studio",
      title: "Arts & Culture",
    },
    lead: {
      url: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1200&auto=format&fit=crop",
      alt: "Student leaders standing together with confidence and discipline",
      title: "NCC & Youth Leadership",
    },
    belong: {
      url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
      alt: "School community gathered under trees sharing a warm moment",
      title: "Community & Belonging",
    },
  },

  // Learning Stages
  learning: {
    earlyYears: {
      url: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop",
      alt: "Young children exploring sensory learning materials in bright early years room",
      grades: "Nursery to UKG",
    },
    middleSchool: {
      url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      alt: "Middle school students collaborating over science models in classroom",
      grades: "Classes I to VIII",
    },
    seniorSchool: {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
      alt: "Senior secondary students participating in a rigorous seminar discussion",
      grades: "Classes IX to XII",
    },
  },

  // Academic Excellence & Labs
  academics: {
    scienceLab: {
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
      alt: "High school student conducting experiment in chemistry laboratory with glassware",
    },
    computerLab: {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      alt: "Computer science students programming at modern desktop workstations",
    },
    library: {
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
      alt: "Spacious multi-tier school library with sunlit study tables and vast book collection",
    },
    smartClassroom: {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
      alt: "Interactive smart board session in a sunlit modern classroom",
    },
  },

  // Atal Tinkering Lab / STEM
  stem: {
    atlLab: {
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1400&auto=format&fit=crop",
      alt: "Students assembling robotic prototypes and microcontrollers at Atal Tinkering Lab workbench",
    },
    electronics: {
      url: "https://images.unsplash.com/photo-1563770660941-20978e870e26?q=80&w=1200&auto=format&fit=crop",
      alt: "Close-up of sensor circuits, soldering tools, and robotics components",
    },
  },

  // Campus & Infrastructure (18,141 sq. m)
  campus: {
    aerial: {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop",
      alt: "Modern expansive educational campus with red brick architecture and green lawns",
    },
    corridor: {
      url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop",
      alt: "Sunlit open-air school corridor overlooking central green quadrangle",
    },
    sportsGround: {
      url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
      alt: "Expansive green athletic field with track markings under open blue sky",
    },
    assemblyHall: {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
      alt: "Modern indoor auditorium and multi-purpose assembly arena",
    },
  },

  // Sports & Athletics
  sports: {
    football: {
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
      alt: "School football squad in training on expansive turf",
    },
    cricket: {
      url: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=1200&auto=format&fit=crop",
      alt: "Student batsman taking stance at cricket pitch during practice",
    },
    basketball: {
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
      alt: "High school basketball match in modern floodlit court",
    },
    athletics: {
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
      alt: "Student sprinters crossing track finish line with determination",
    },
  },

  // Arts, Music & Performance
  arts: {
    painting: {
      url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
      alt: "Student working on oil canvas easel in sunlit art studio",
    },
    music: {
      url: "https://images.unsplash.com/photo-1514320777578-61466b772d5c?q=80&w=1200&auto=format&fit=crop",
      alt: "Students rehearsing Indian classical and acoustic instruments in music room",
    },
    dance: {
      url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop",
      alt: "Students performing traditional cultural dance on stage",
    },
    theatre: {
      url: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1200&auto=format&fit=crop",
      alt: "Dramatic annual play performance with stage lighting",
    },
  },

  // NCC & Leadership
  ncc: {
    drill: {
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
      alt: "NCC cadets marching in synchronized ceremonial formation on school grounds",
    },
    leadership: {
      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
      alt: "Student council leader addressing peer group during assembly",
    },
  },

  // Principal Portrait
  principal: {
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    alt: "Mr. Pankaj Sharma, Principal of AMNEEV Vision School",
    name: "Mr. Pankaj Sharma",
    role: "Principal, AMNEEV Vision School",
  },

  // Community Stories & Testimonials (Marked as placeholder per policy)
  stories: [
    {
      id: "student-1",
      category: "STUDENT",
      name: "Aarav Sharma (Placeholder)",
      grade: "Class XII — Science Stream",
      quote: "At AMNEEV, I discovered that asking difficult questions is welcomed. Working in the Atal Tinkering Lab transformed my understanding of physics from formulas to real prototypes.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      tag: "Robotics & CBSE Scholar",
    },
    {
      id: "parent-1",
      category: "PARENT",
      name: "Dr. S. Verma & Mrs. Verma (Placeholder)",
      grade: "Parents of Class V & IX Students",
      quote: "What stands out about AMNEEV is how every teacher knows our children personally. The balance between academic rigour, sports, and values gives us deep confidence in their future.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
      tag: "Parents for 7 Years",
    },
    {
      id: "alumni-1",
      category: "ALUMNI",
      name: "Priyanka Mishra (Placeholder)",
      grade: "Batch of 2021 — IIT Aspirant",
      quote: "The foundational discipline from NCC and the mentoring by our teachers in Etawah laid the exact habits of mind that carried me through competitive engineering entrances.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
      tag: "Engineering Undergraduate",
    },
    {
      id: "teacher-1",
      category: "TEACHER",
      name: "Ms. Neha Gupta (Placeholder)",
      grade: "Senior Secondary Mathematics Faculty",
      quote: "Teaching at AMNEEV means nurturing curiosity alongside conceptual mastery. Our smart classrooms and individualized attention allow us to reach every student's potential.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      tag: "10+ Years at AMNEEV",
    },
  ],

  // News & Events
  news: [
    {
      id: "news-1",
      title: "AMNEEV Students Showcase Innovative Prototypes at Regional Science Exhibition",
      date: "September 2026",
      category: "Innovation & ATL",
      excerpt: "Demonstrating cutting-edge problem solving, our senior secondary innovators presented automated agricultural sensor systems developed in the Atal Tinkering Lab.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "news-2",
      title: "Annual Sports Meet Concludes with Record Student Participation in Track and Field",
      date: "August 2026",
      category: "Sports & Athletics",
      excerpt: "Over 800 student athletes competed across 24 track and field disciplines, embodying the school motto of teamwork, grit, and fair play on our 18,141 sq. m. campus.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000&auto=format&fit=crop",
    },
    {
      id: "news-3",
      title: "Admissions Open for Academic Year 2026–27 from Nursery to Class XII",
      date: "August 2026",
      category: "Admissions Announcement",
      excerpt: "Prospective parents are invited to schedule campus tours and register for 2026–27 admissions. Comprehensive CBSE curriculum with holistic co-curricular programs.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
    },
  ],

  // Events
  events: [
    {
      id: "event-1",
      title: "Annual Day & Cultural Panorama 2026",
      date: "Nov 14, 2026",
      time: "04:30 PM – 08:30 PM",
      location: "Main Auditorium, AMNEEV Campus",
      category: "Culture",
    },
    {
      id: "event-2",
      title: "Inter-School Science & Robotics Symposium",
      date: "Dec 05, 2026",
      time: "09:00 AM – 03:00 PM",
      location: "Atal Tinkering Lab & Multi-purpose Hall",
      category: "STEM",
    },
    {
      id: "event-3",
      title: "Parent-Teacher Collaborative Forum (Grades IX–XII)",
      date: "Dec 18, 2026",
      time: "10:00 AM – 01:30 PM",
      location: "Senior Wing Classrooms",
      category: "Academics",
    },
  ],

  // Gallery Images with categories for interactive lightbox
  gallery: [
    {
      id: "g-1",
      title: "Interactive Smart Classroom Seminar",
      category: "Academics",
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-2",
      title: "Hands-on Chemistry Lab Session",
      category: "Academics",
      url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-3",
      title: "Robotics Prototyping at ATL",
      category: "Academics",
      url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-4",
      title: "Campus Central Courtyard & Greenery",
      category: "Campus",
      url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-5",
      title: "Sunlit Senior Corridor Architecture",
      category: "Campus",
      url: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-6",
      title: "Comprehensive Central Library",
      category: "Campus",
      url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-7",
      title: "Inter-School Football Championship Match",
      category: "Sports",
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-8",
      title: "Athletics Sprint Practice on Field",
      category: "Sports",
      url: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-9",
      title: "Basketball Court Team Drills",
      category: "Sports",
      url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-10",
      title: "Classical & Contemporary Music Rehearsal",
      category: "Arts",
      url: "https://images.unsplash.com/photo-1514320777578-61466b772d5c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-11",
      title: "Fine Arts & Canvas Expression Studio",
      category: "Arts",
      url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-12",
      title: "NCC Ceremonial Flag Parade",
      category: "Student Life",
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-13",
      title: "Student Collaborative Group Research",
      category: "Student Life",
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "g-14",
      title: "Annual Day Theatrical Presentation",
      category: "Events",
      url: "https://images.unsplash.com/photo-1469488865564-c2de10f69f96?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  // Call to action background
  admissionsCta: {
    url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop",
    alt: "Graduating students celebrating with academic confidence and optimism",
  },
};
