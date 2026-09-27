export const site = {
  name: "Muhammad Rokanuzzaman Mollah",
  role: "IT, Cloud & Cybersecurity Consultant",
  monogram: "MRM",
  email: "rokan@rokanuzzaman.com",
  linkedin: "https://www.linkedin.com/in/rokanuzzamanmollah/",
  footerBrand: "LOOMCHIP",
  footerLink: "https://loomchip.com",
  available: false,
  photo: {
    src: "/profile.webp",
    alt: "Portrait of Muhammad Rokanuzzaman Mollah",
  },
} as const;

export const nav = [
  { href: "#about", label: "ABOUT" },
  { href: "#services", label: "SERVICES" },
  { href: "#projects", label: "WORK" },
  { href: "#experience", label: "EXPERIENCE" },
] as const;

export const hero = {
  eyebrow: "ICT · CLOUD · CYBERSECURITY",
  headline: ["ICT CONSULTANT &", "PROFESSIONAL TRAINER"] as const,
  intro: "Muhammad Rokanuzzaman Mollah — ICT, Cloud & Cybersecurity Expert. 23+ years of experience across government, banking and enterprise IT.",
  badge: "ICT, Cloud & Cybersecurity Consultant",
};
// export const hero = {
//   eyebrow: "CLOUD · CYBERSECURITY · ENTERPRISE ARCHITECTURE",
//   headline: ["INFORMATION", "TECHNOLOGY"] as const,
//   intro:
//     "Muhammad Rokanuzzaman Mollah — IT, Cloud & Cybersecurity Expert. 23 years designing, securing, and running the systems enterprises depend on.",
//   badge: "AVAILABLE FOR ENGAGEMENTS",
// };

export const ticker = [
  "AZURE",
  "AWS",
  "ORACLE OCI",
  "CYBERSECURITY",
  "ZERO TRUST",
  "ENTRA ID",
  "MICROSOFT 365",
  "ITIL",
  "ISO 27001",
  "DATA CENTER",
  "DISASTER RECOVERY",
  "ENTERPRISE ARCHITECTURE",
];

export const about = {
  heading: "Building secure, reliable technology for organizations.",
  // heading: "Two decades turning complex estates into resilient, secure, well-governed platforms.",
  paragraphs: [
    "I work with organizations that need experienced leadership across cloud, cybersecurity, infrastructure and IT operations, whether as a consultant, technical advisor or senior team member.",
    "I help solve complex technology challenges, improve operational reliability, strengthen security, guide transformation initiatives and ensure IT investments support real business goals.",
  ],
  stats: [
    { value: "23+", label: "YEARS IN IT" },
    { value: "3,500+", label: "USERS SUPPORTED" },
    { value: "99%", label: "SYSTEM AVAILABILITY" },
  ],
  highlight: {
title: "IT Infrastructure Head | Out of Country Postal Vote (IT Supported)",
description: "Leading secure and reliable IT infrastructure operations to support seamless postal voting services for overseas citizens.",
},
};

export const skills = [
  {
    name: "Cloud Architecture",
    items: [
      "Microsoft Azure",
      "AWS",
      "Oracle OCI",
      "Hybrid Cloud",
      "Private Cloud",
      "Cloud Migration",
    ],
  },
  {
    name: "Cybersecurity",
    items: [
      "Zero Trust",
      "IAM",
      "Microsoft Entra ID",
      "MFA",
      "PIM",
      "DLP",
      "SIEM",
      "SOAR",
      "XDR",
      "ISO 27001",
    ],
  },
  {
    name: "IT Infrastructure",
    items: [
      "Tier-4 Data Centers",
      "Hyper-V",
      "Active Directory",
      "Exchange Server",
      "Cisco HyperFlex",
      "Routing & Switching",
      "Firewalls",
      "VPN",
      "DR / BCP",
    ],
  },
  {
    name: "IT Service & Consulting",
    items: [
      "ITIL Practices",
      "SLA / KPI Management",
      "Enterprise Architecture",
      "Technology Governance",
      "Vendor Management",
    ],
  },
];

export const services = [
  {
    name: "Cloud Strategy & Architecture",
    desc: "Designing Azure, AWS, Oracle OCI, hybrid and private cloud environments for government and enterprise organizations.",
  },
  {
    name: "IT Infrastructure Architecture",
    desc: "Architecture and modernization of enterprise infrastructure, networks, servers, virtualization platforms and data centers.",
  },
  {
    name: "Cybersecurity & Identity",
    desc: "Advisory and implementation support for Zero Trust, IAM, Microsoft Entra ID, DLP, SIEM, XDR and enterprise security controls.",
  },
  {
    name: "Data Center & Disaster Recovery",
    desc: "Advisory for mission-critical data centers, disaster recovery environments, business continuity planning and infrastructure resilience.",
  },
  {
    name: "IT Service Management",
    desc: "Designing IT operational models covering SLA governance, incident management, problem management, change management and service excellence.",
  },
  {
    name: "Technology Governance",
    desc: "Supporting project governance, vendor management, technology procurement, stakeholder coordination, risk management and technical documentation.",
  },
];

export const projects = [
  {
    tag: "GOVERNMENT IT",
    year: "2025 — PRESENT",
    title: "Out of Country Voting System",
    desc: "Providing ICT leadership and technical support for the Bangladesh Election Commission’s Out of Country Voting System Development & Implementation project, including secure Postal Ballot infrastructure, cloud operations and regulatory compliance.",
    result: "→ Secure government digital voting infrastructure",
  },

  {
    tag: "BANKING IT",
    year: "2024 — 2025",
    title: "Enterprise Microfinance Technology Platform",
    desc: "Led technical operations and supported the implementation of mission-critical Microfinance Software at Grameen Bank, covering service availability, incident management, security hardening, performance optimization and vendor coordination.",
    result: "→ Strengthened availability and operational reliability",
  },

  {
    tag: "IT OPERATIONS",
    year: "2022 — 2023",
    title: "Enterprise IT Operations & Governance",
    desc: "Directed end-to-end IT service delivery, infrastructure operations, procurement and vendor management at Grameen Communications while serving as Deputy General Manager, Head of IT and Acting Managing Director.",
    result: "→ Established stronger IT operations and governance",
  },

  {
    tag: "ERP",
    year: "2021 — 2022",
    title: "Enterprise ERP Transformation",
    desc: "Led ERP implementation across multiple Hamid Group business units, coordinating infrastructure readiness, technology vendors, deployment, operational transition and user adoption.",
    result: "→ ERP successfully deployed across 5 locations",
  },

  {
    tag: "RESILIENCE",
    year: "2021 — 2022",
    title: "IT Infrastructure & Service Transformation",
    desc: "Modernized infrastructure operations through proactive monitoring, standardized support, structured incident management, preventive maintenance, backup strategy and disaster recovery preparedness.",
    result: "→ System availability improved to 99%",
  },

  {
    tag: "DATA CENTER",
    year: "2011 — 2020",
    title: "Government Data Center Projects",
    desc: "Served as Project Manager for government data center initiatives involving PDB, DESCO, REB and DPDC, supporting infrastructure planning, technical coordination, implementation and vendor management.",
    result: "→ Delivered infrastructure support for major government organizations",
  },

  {
    tag: "ENTERPRISE IT",
    year: "2011 — 2020",
    title: "Multi-Site Enterprise Infrastructure",
    desc: "Managed enterprise IT services at Bitopi Group covering Active Directory, networking, business applications, digital security, infrastructure monitoring, capacity planning and business continuity.",
    result: "→ Supported 1,100+ users across 9 locations",
  },
];

export const experience = [
  {
    years: "Aug 2025 — Present",
    role: "Consultant – Information Technology",
    org: "Bangladesh Election Commission",
  },
  {
    years: "Jan 2024 — Aug 2025",
    role: "Senior System Expert (IT Technical Team Lead)",
    org: "Grameen Bank",
  },
  {
    years: "Aug 2022 — Dec 2023",
    role: "Deputy General Manager – Infrastructure & IT Operations",
    org: "Grameen Communications",
  },
  {
    years: "Apr 2021 — Jul 2022",
    role: "Head of Information Technology",
    org: "Hamid Group",
  },
  {
    years: "Nov 2011 — Nov 2020",
    role: "Manager – Information Technology",
    org: "Bitopi Group",
  },
  {
    years: "Apr 2005 — Sep 2011",
    role: "IT Officer",
    org: "City Group",
  },
  {
    years: "Jan 2004 — Mar 2005",
    role: "IT Instructor",
    org: "Bangladesh Army Computer Club",
  },
  {
    years: "Jan 2003 — Dec 2003",
    role: "Software Engineer",
    org: "Angel Computers",
  },
];

export const education = [
  {
    years: "2003",
    degree: "M.Sc. in Computer Science",
    school: "National University",
  },
  {
    years: "2001",
    degree: "B.Sc. in Computer Science & Engineering",
    school: "National University",
  },
];

export const certs = [
  "Oracle Cloud Infrastructure Foundations Associate",
  "AWS Certified Solutions Architect – Associate",
  "Microsoft Azure Solutions Architect Expert",
  "Microsoft Cybersecurity Architect Expert",
  "Microsoft Security Operations Analyst Associate",
  "Microsoft Identity and Access Administrator Associate",
  "Microsoft Information Security Administrator Associate",
  "Microsoft Azure AI Engineer Associate",
  "Microsoft DevOps Engineer Expert",
  "Microsoft Certified Trainer",
  "MCSE – Productivity",
  "Windows Server Hybrid Administrator Associate",
  "MCSA – Windows Server 2016",
  "MCP",
  "Microsoft Azure Administrator Associate",
  "Microsoft Azure Database Administrator Associate",
  "Cisco Certified Network Professional – CCNP",
  "Cisco Certified Network Associate – CCNA",
  "Cisco Certified Specialist – Data Center Operations",
  "ISO 27001 Lead Implementer",
];

export const posts = [
  {
    date: "AUG 2026",
    title: "Landing zones are a product, not a project",
    blurb:
      "Why cloud foundations rot when treated as one-off builds, and how to fund them like platforms.",
    href: "#blog",
  },
  {
    date: "MAY 2026",
    title: "Zero trust without the vendor bingo",
    blurb:
      "A pragmatic sequencing of identity, segmentation and monitoring that works on real budgets.",
    href: "#blog",
  },
  {
    date: "FEB 2026",
    title: "ITIL 4 for teams that ship daily",
    blurb:
      "Reconciling change enablement with continuous delivery — governance that speeds you up.",
    href: "#blog",
  },
];

export const testimonials = [
  {
    quote:
      "He rebuilt our cloud foundation while the business kept running. Zero downtime, and the auditors were happier than we’ve ever seen them.",
    who: "CIO",
    org: "Regional Bank",
  },
  {
    quote:
      "The rare consultant who can brief the board in the morning and pair with engineers in the afternoon.",
    who: "CTO",
    org: "Fintech Scale-up",
  },
  {
    quote:
      "Our security posture went from reactive to certified in under a year. The roadmap he left us is still our playbook.",
    who: "Head of IT",
    org: "Government Agency",
  },
];

export const contact = {
  heading: ["Let's build something", "that lasts."] as const,
};
