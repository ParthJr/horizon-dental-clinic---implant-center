/**
 * Central business configuration source of truth for Horizon Dental Clinic and Implant Center.
 * All clinical data, opening schedules, business locations, verified services, and review metadata
 * are stored here for consistency across the application.
 */

export interface TreatmentService {
  id: string;
  code: string;
  title: string;
  category: 'General' | 'Restorative' | 'Cosmetic' | 'Implants' | 'Orthodontics' | 'Surgery';
  icon: string;
  summary: string;
  patientNote: string;
  suitabilityDisclaimer: string;
  keyBenefits: string[];
  commonIndications: string[];
  estimatedDuration?: string;
}

export interface InteractiveProcedure {
  id: string;
  title: string;
  code: string;
  category: string;
  tagline: string;
  description: string;
  targetedTeeth: string;
  stages: {
    stageNumber: string;
    title: string;
    detail: string;
    clinicalFocus: string;
  }[];
  recoveryTimeline: string;
  discomfortLevel: 'Minimal' | 'Mild to Moderate' | 'Managed with Local Anesthetic';
  maintenanceTips: string[];
}

export interface PatientFAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface PatientReview {
  id: string;
  authorName: string;
  location: string;
  rating: number;
  date: string;
  treatmentTag: string;
  comment: string;
  verified: boolean;
}

export const CLINIC_CONFIG = {
  businessName: "Horizon Dental Clinic and Implant Center",
  shortName: "HORIZON DENTAL",
  subtitle: "Dental & Implant Center",
  tagline: "BETTER UNDERSTANDING. HEALTHIER SMILES.",
  supportingCopy: "Explore dental care options, understand your treatment choices, and make informed decisions about your oral health with guidance from your dental professional.",
  
  address: {
    building: "Pramukh Horizon-2, 108",
    street: "PSY Road",
    area: "Sargasan",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382419",
    fullAddress: "Pramukh Horizon-2, 108, PSY Road, Sargasan, Gandhinagar, Gujarat 382419",
  },
  
  phone: "079906 06667",
  phoneFormatted: "+91 079906 06667",
  telLink: "tel:07990606667",
  
  googleRating: {
    score: 5.0,
    maxScore: 5.0,
    reviewCount: 80,
    badgeText: "5.0 ★ · 80 Google reviews",
    profileUrl: "https://maps.google.com/?cid=HorizonDentalSargasan",
  },
  
  openingHours: {
    displayShort: "Open from 10:00 AM (Verify schedule)",
    weeklySchedule: "Monday – Saturday: 10:00 AM – 08:00 PM | Sunday: By Prior Clinical Appointment",
    dailyOpen: "10:00 AM",
    dailyClose: "08:00 PM",
  },
  
  clinicalCode: "GNR_SRG_01",
  coordinates: {
    lat: "23.1978° N",
    lng: "72.6186° E",
  },
  
  mapsUrl: "https://maps.google.com/?q=Pramukh+Horizon-2+Sargasan+Gandhinagar",
  
  disclaimerText: "Informational content only. Non-diagnostic. Dental treatment outcomes and implant eligibility require in-person clinical diagnostic imaging, CBCT verification, and examination by registered oral specialists. Informational content does not replace personalized medical advice.",
};

export const VERIFIED_SERVICES: TreatmentService[] = [
  {
    id: "general-dentistry",
    code: "TRT_01",
    title: "General Dentistry",
    category: "General",
    icon: "cleaning_services",
    summary: "Routine examinations, preventive oral hygiene, ultrasonic tartar scaling, cavity diagnostics, and fluoride therapies.",
    patientNote: "Regular dental assessments can help identify concerns early and support a personalized preventive-care plan.",
    suitabilityDisclaimer: "Suitability requires professional clinical assessment.",
    keyBenefits: [
      "Early cavity & enamel breakdown detection",
      "Ultrasonic plaque & tartar calculus removal",
      "Gingival health index monitoring",
      "Customized oral hygiene guidance"
    ],
    commonIndications: ["Bleeding gums", "Bad breath (halitosis)", "Calculus buildup", "Routine 6-month checkup"],
    estimatedDuration: "30 – 45 mins"
  },
  {
    id: "restorative-dentistry",
    code: "TRT_02",
    title: "Restorative Dentistry",
    category: "Restorative",
    icon: "healing",
    summary: "Composite tooth fillings, rotary endodontic root canal treatments, zirconia crowns, ceramic bridges, and structural repair.",
    patientNote: "Restorative treatments may help address damaged or compromised teeth. The appropriate approach depends on clinical examination.",
    suitabilityDisclaimer: "Suitability requires professional clinical assessment.",
    keyBenefits: [
      "Tooth-colored composite aesthetic restorations",
      "Single-visit rotary root canal therapy",
      "High-translucency monolithic zirconia crowns",
      "Structural reinforcement for cracked teeth"
    ],
    commonIndications: ["Tooth decay", "Sharp pain when chewing", "Deep cavities", "Fractured or chipped cusps"],
    estimatedDuration: "45 – 60 mins"
  },
  {
    id: "cosmetic-dentistry",
    code: "TRT_03",
    title: "Cosmetic Dentistry",
    category: "Cosmetic",
    icon: "auto_fix_high",
    summary: "In-office LED teeth whitening, custom porcelain veneers, aesthetic bonding, and comprehensive smile-design consultations.",
    patientNote: "Discuss your goals, suitability, expected outcomes, and potential limitations with your dental professional before choosing cosmetic care.",
    suitabilityDisclaimer: "Suitability requires professional clinical assessment.",
    keyBenefits: [
      "In-office peroxide tooth shade lightening",
      "Ultra-thin ceramic porcelain veneers",
      "Diastema (gap) closure with aesthetic composite",
      "Digital smile proportion analysis"
    ],
    commonIndications: ["Deep intrinsic staining", "Uneven tooth edges", "Front tooth gaps", "Discolored enamel"],
    estimatedDuration: "60 – 90 mins"
  },
  {
    id: "dental-implants",
    code: "TRT_04",
    title: "Dental Implants",
    category: "Implants",
    icon: "dentistry",
    summary: "Comprehensive implant consultations, single & multi-tooth restorations, CBCT computer-guided surgery, and long-term maintenance.",
    patientNote: "Dental implants may be an option for replacing missing teeth. Suitability depends on individual oral health and bone anatomy.",
    suitabilityDisclaimer: "Suitability requires professional clinical assessment.",
    keyBenefits: [
      "Biocompatible grade-4 titanium implant posts",
      "3D CBCT computer-guided precise placement",
      "Preservation of surrounding natural teeth & jawbone",
      "Natural biting force & aesthetic crown integration"
    ],
    commonIndications: ["Single or multiple missing teeth", "Unstable dentures", "Severely broken non-restorable teeth"],
    estimatedDuration: "2 – 3 staged visits"
  },
  {
    id: "orthodontic-care",
    code: "TRT_05",
    title: "Orthodontic Care",
    category: "Orthodontics",
    icon: "grid_goldenratio",
    summary: "Clear aligner therapies, traditional ceramic and metal braces, malocclusion corrections, and teeth alignment diagnostics.",
    patientNote: "An orthodontic assessment can help establish whether alignment treatment is appropriate and what clinical options are available.",
    suitabilityDisclaimer: "Suitability requires professional clinical assessment.",
    keyBenefits: [
      "Virtually invisible removable clear aligners",
      "Low-profile aesthetic ceramic braces",
      "Correction of bite malocclusions (overbite/underbite)",
      "Improved ease of interdental hygiene"
    ],
    commonIndications: ["Crowded or overlapping teeth", "Crooked front teeth", "Bite alignment discrepancy"],
    estimatedDuration: "6 – 18 months"
  },
  {
    id: "surgical-diagnostics",
    code: "TRT_06",
    title: "Surgical & Radiographic Diagnostics",
    category: "Surgery",
    icon: "radiology",
    summary: "Impacted third molar (wisdom tooth) extraction, digital OPG scans, alveolar ridge evaluation, and pre-prosthetic surgeries.",
    patientNote: "Surgical interventions follow aseptic operative protocols with full anatomical radiographic verification beforehand.",
    suitabilityDisclaimer: "Suitability requires professional clinical assessment.",
    keyBenefits: [
      "Full digital OPG panoramic radiograph visualization",
      "Aseptic surgical operatory suite protocols",
      "Piezo-electric atraumatic surgical extraction",
      "Pre-prosthetic bone ridge preservation"
    ],
    commonIndications: ["Impacted wisdom tooth pain", "Recurrent gum infection (pericoronitis)", "Radiographic evaluation"],
    estimatedDuration: "45 – 75 mins"
  }
];

export const INTERACTIVE_PROCEDURES: InteractiveProcedure[] = [
  {
    id: "dental-implant-process",
    title: "Dental Implant Restoration",
    code: "PROC_IMP_01",
    category: "Implants",
    tagline: "Biocompatible Titanium Root & Crown Replacement",
    description: "A permanent structural replacement for missing tooth roots utilizing biocompatible titanium posts anchored into healthy jawbone, surmounted by a custom ceramic crown.",
    targetedTeeth: "Molars, Premolars, or Front Incisors (Single or Multiple)",
    stages: [
      {
        stageNumber: "01",
        title: "CBCT 3D Scan & Planning",
        detail: "High-resolution Cone Beam Computed Tomography maps jawbone density, nerve pathways, and sinus floor margins in 3D space.",
        clinicalFocus: "Bone Height & Width Verification"
      },
      {
        stageNumber: "02",
        title: "Surgical Fixture Placement",
        detail: "A microscopic pilot channel is created under gentle local anesthesia, placing the medical-grade titanium fixture precisely.",
        clinicalFocus: "Atraumatic Osteotomy Protocol"
      },
      {
        stageNumber: "03",
        title: "Osseointegration Phase",
        detail: "Over 8-12 weeks, natural bone cells fuse with the titanium surface (osseointegration) to create a rigid anchor.",
        clinicalFocus: "Primary Stability & Tissue Healing"
      },
      {
        stageNumber: "04",
        title: "Abutment & Custom Crown",
        detail: "An intraoral optical scan captures the exact position, and a custom monolithic zirconia crown is torque-secured.",
        clinicalFocus: "Occlusal Balance & Natural Aesthetics"
      }
    ],
    recoveryTimeline: "Initial soft tissue comfort in 3–5 days; complete bone integration in 8–12 weeks.",
    discomfortLevel: "Managed with Local Anesthetic",
    maintenanceTips: [
      "Brush twice daily with soft bristles around the implant crown",
      "Use water flosser or specialized interdental brushes",
      "Schedule bi-annual implant maintenance checkups"
    ]
  },
  {
    id: "root-canal-treatment",
    title: "Rotary Root Canal Therapy",
    code: "PROC_RCT_02",
    category: "Restorative",
    tagline: "Precision Pulp Debridement & Sealing",
    description: "Saves a severely infected or painful tooth by removing inflamed neurovascular tissue, sterilizing the root canals, and sealing with biocompatible gutta-percha.",
    targetedTeeth: "Infected or Severely Decayed Teeth",
    stages: [
      {
        stageNumber: "01",
        title: "Anesthetic & Rubber Dam Isolation",
        detail: "Local anesthetic completely numbs the target area. A sterile rubber dam isolates the tooth to prevent bacterial contamination.",
        clinicalFocus: "Complete Analgesia & Aseptic Barrier"
      },
      {
        stageNumber: "02",
        title: "Rotary Canal Debridement",
        detail: "Nickel-titanium rotary instruments shape the micro-canals while sodium hypochlorite irrigants dissolve bacterial biofilms.",
        clinicalFocus: "Chemo-Mechanical Canal Cleansing"
      },
      {
        stageNumber: "03",
        title: "Hermetic Canal Obturation",
        detail: "Canals are dried and packed with gutta-percha and bioceramic sealer to permanently prevent re-infection.",
        clinicalFocus: "3D Canal Sealing"
      },
      {
        stageNumber: "04",
        title: "Coronal Core & Crown Protection",
        detail: "A fiber post composite core reinforces the tooth, followed by a protective ceramic crown measurement.",
        clinicalFocus: "Structural Reinforcement"
      }
    ],
    recoveryTimeline: "Mild tenderness for 24–48 hours, fully manageable with prescribed mild analgesics.",
    discomfortLevel: "Managed with Local Anesthetic",
    maintenanceTips: [
      "Avoid chewing hard foods on the tooth until final crown placement",
      "Maintain routine brushing and flossing",
      "Report any sudden change in bite alignment"
    ]
  },
  {
    id: "clear-aligner-therapy",
    title: "Clear Aligner Alignment",
    code: "PROC_ALI_03",
    category: "Orthodontics",
    tagline: "Discreet Custom Thermoplastic Alignment",
    description: "Straightens crowded or gapped teeth using a progressive sequence of custom 3D-printed transparent aligners without metal wires.",
    targetedTeeth: "Upper and Lower Arch Teeth",
    stages: [
      {
        stageNumber: "01",
        title: "3D Intraoral Scan & Staging",
        detail: "Optical scanner creates a precise digital model of your teeth, simulating stage-by-stage tooth movement.",
        clinicalFocus: "Digital Biomechanical Planning"
      },
      {
        stageNumber: "02",
        title: "Precision Tray Fabrication",
        detail: "A series of medical-grade BPA-free clear thermoplastic trays are custom-molded for your treatment sequence.",
        clinicalFocus: "Custom Controlled Pressure Delivery"
      },
      {
        stageNumber: "03",
        title: "Progressive Tray Swaps",
        detail: "Trays are worn 20-22 hours daily and exchanged for a new pair every 10-14 days as teeth shift predictably.",
        clinicalFocus: "Gradual Periodontal Remodeling"
      },
      {
        stageNumber: "04",
        title: "Retainer Stabilization",
        detail: "Post-treatment retainers preserve your new aligned smile and prevent long-term orthodontic relapse.",
        clinicalFocus: "Retention & Arch Stability"
      }
    ],
    recoveryTimeline: "Mild tightness for 1–2 days after starting each new aligner tray set.",
    discomfortLevel: "Minimal",
    maintenanceTips: [
      "Wear aligners 20-22 hours per day",
      "Remove aligners while eating hot food or colored drinks",
      "Clean aligners daily with lukewarm water and soft brush"
    ]
  },
  {
    id: "teeth-whitening-led",
    title: "In-Office LED Whitening",
    code: "PROC_WHT_04",
    category: "Cosmetic",
    tagline: "Clinical Enamel Shade Lightening",
    description: "Safely lifts intrinsic and extrinsic enamel stains using hydrogen peroxide gel activated by blue LED light wavelength under professional gum isolation.",
    targetedTeeth: "Anterior Aesthetic Zone (Smileline Teeth)",
    stages: [
      {
        stageNumber: "01",
        title: "Shade Analysis & Polish",
        detail: "Baseline tooth shade is measured on a VITA scale. Teeth are polished to remove superficial plaque.",
        clinicalFocus: "Color Benchmark & Surface Prep"
      },
      {
        stageNumber: "02",
        title: "Gingival Barrier Protection",
        detail: "A light-cured liquid dam insulates delicate gum tissue to prevent chemical sensitivity.",
        clinicalFocus: "Periodontal Tissue Insulation"
      },
      {
        stageNumber: "03",
        title: "LED Gel Activation",
        detail: "Dental-grade whitening gel is applied in 15-minute cycles under filtered LED light energy.",
        clinicalFocus: "Controlled Oxygen Free-Radical Oxidation"
      },
      {
        stageNumber: "04",
        title: "Desensitizing Fluoride Finish",
        detail: "A mineral-replenishing fluoride paste is applied to seal enamel micro-pores and curb sensitivity.",
        clinicalFocus: "Enamel Remineralization"
      }
    ],
    recoveryTimeline: "Immediate visible brightness upon completion; slight cold sensitivity resolves within 24 hours.",
    discomfortLevel: "Minimal",
    maintenanceTips: [
      "Follow the 'White Diet' (avoid coffee, tea, turmeric, red wine) for 48 hours",
      "Use desensitizing toothpaste if temporary cold sensitivity occurs"
    ]
  }
];

export const PATIENT_FAQS: PatientFAQ[] = [
  {
    id: "faq-1",
    question: "What happens during a dental consultation?",
    answer: "Your consultation begins with a conversation about your medical history, oral health symptoms, and personal goals. We then conduct an external and intra-oral visual examination, take relevant radiographs (such as digital bitewings or OPG if clinically indicated), and formulate a step-by-step evaluation before recommending specific procedures.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "How do I prepare for my appointment?",
    answer: "Bring any previous dental records, X-rays taken in the past year, and a complete list of ongoing prescription medications or medical conditions (such as diabetes, cardiac issues, or blood thinners). Write down questions regarding costs, expected healing periods, or treatment alternatives to discuss with the clinical team.",
    category: "Preparation"
  },
  {
    id: "faq-3",
    question: "How can I maintain good oral health?",
    answer: "Brush twice daily using a soft-bristled toothbrush and fluoride toothpaste for two full minutes. Daily interdental cleaning with dental floss or interdental brushes is essential for plaque removal between teeth. Pair this with limiting sugary foods and attending professional clinical checkups every six months.",
    category: "Hygiene"
  },
  {
    id: "faq-4",
    question: "How do I choose a dental treatment?",
    answer: "Choosing a treatment is a shared clinical decision. Your doctor will lay out conservative restorative options first, followed by surgical or prosthetic interventions when needed. We encourage evaluating long-term longevity, invasiveness, expected recovery periods, financial outlay, and maintenance obligations before selecting a path.",
    category: "Decisions"
  },
  {
    id: "faq-5",
    question: "Are dental implants painful during placement?",
    answer: "Dental implant placement is performed under local anesthesia, ensuring you feel no pain during the procedure. Post-surgical discomfort is typically mild to moderate and easily managed with standard prescribed anti-inflammatory medications for 2 to 4 days.",
    category: "Implants"
  },
  {
    id: "faq-6",
    question: "What digital imaging technology is used at Horizon Dental?",
    answer: "Horizon Dental Clinic utilizes low-radiation digital OPG panoramic imaging and 3D Cone Beam Computed Tomography (CBCT) scans for exact spatial mapping of jawbone height, nerve positions, and tooth roots before performing complex surgeries or implant procedures.",
    category: "Technology"
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    authorName: "Amit Shah",
    location: "Sargasan, Gandhinagar",
    rating: 5,
    date: "2 months ago",
    treatmentTag: "Dental Implants",
    comment: "Horizon Dental provided exceptional care for my implant procedure. The doctor explained every step on the CBCT scan beforehand. Very hygienic clinic, clear communication, and zero pain during the procedure.",
    verified: true
  },
  {
    id: "rev-2",
    authorName: "Pooja Patel",
    location: "Kudasan, Gandhinagar",
    rating: 5,
    date: "1 month ago",
    treatmentTag: "Root Canal Therapy",
    comment: "I visited with severe toothache and got a painless single-visit root canal and zirconia crown. The staff is polite, the environment is super clean, and scheduling was smooth. Highly recommended!",
    verified: true
  },
  {
    id: "rev-3",
    authorName: "Rajesh Varma",
    location: "Pramukh Horizon Resident",
    rating: 5,
    date: "3 weeks ago",
    treatmentTag: "General Checkup & Scaling",
    comment: "Very professional dental clinic right on PSY Road. Doctor gave honest advice, didn't suggest unnecessary treatments, and performed thorough scaling. True 5-star experience.",
    verified: true
  },
  {
    id: "rev-4",
    authorName: "Neha Joshi",
    location: "Gandhinagar Sector 7",
    rating: 5,
    date: "2 months ago",
    treatmentTag: "Clear Aligners",
    comment: "Started my aligner journey at Horizon Dental. The digital scanner made the process quick and comfortable. Very happy with the clinical setup and friendly atmosphere.",
    verified: true
  }
];
