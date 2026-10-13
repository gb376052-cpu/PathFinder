/* =========================================================
   PATHFINDER — ACADEMIC DATA LAYER
   Phase 1: Core Data Structure
========================================================= */

/*
  This is a structured starter catalog, not an exhaustive
  national course database.

  School journey:
  Class + Stream -> Courses -> Course Details

  College journey:
  Current Degree -> Academic Guidance -> Careers

  Course eligibility must be verified against the target
  institution's official admission requirements.
*/

const PATHFINDER_DATA = {

    version: "1.0.0",

    school: {
        classes: [
            { id: "class-11", name: "Class 11" },
            { id: "class-12", name: "Class 12" }
        ],

        streams: [
            {
                id: "pcm",
                name: "Science — PCM",
                description: "Physics, Chemistry and Mathematics",
                subjects: ["Physics", "Chemistry", "Mathematics"],
                courseIds: [
                    "btech-cse",
                    "btech-core",
                    "bca",
                    "bsc-computer-science",
                    "bsc-information-technology",
                    "bsc-mathematics",
                    "bsc-physics",
                    "bsc-statistics",
                    "barch"
                ]
            },
            {
                id: "pcb",
                name: "Science — PCB",
                description: "Physics, Chemistry and Biology",
                subjects: ["Physics", "Chemistry", "Biology"],
                courseIds: [
                    "mbbs",
                    "bds",
                    "bpharm",
                    "bsc-nursing",
                    "bsc-biotechnology",
                    "bsc-microbiology",
                    "bsc-agriculture",
                    "bsc-life-sciences"
                ]
            },
            {
                id: "pcmb",
                name: "Science — PCMB",
                description: "Physics, Chemistry, Mathematics and Biology",
                subjects: [
                    "Physics",
                    "Chemistry",
                    "Mathematics",
                    "Biology"
                ],
                courseIds: [
                    "btech-cse",
                    "btech-core",
                    "bca",
                    "bsc-computer-science",
                    "bsc-information-technology",
                    "bsc-mathematics",
                    "bsc-physics",
                    "mbbs",
                    "bds",
                    "bpharm",
                    "bsc-nursing",
                    "bsc-biotechnology",
                    "bsc-microbiology",
                    "bsc-agriculture",
                    "bsc-life-sciences"
                ]
            },
            {
                id: "commerce-maths",
                name: "Commerce with Mathematics",
                description: "Commerce subjects with Mathematics",
                subjects: [
                    "Accountancy",
                    "Business Studies",
                    "Economics",
                    "Mathematics"
                ],
                courseIds: [
                    "bcom",
                    "bcom-honours",
                    "bba",
                    "ba-economics",
                    "bsc-statistics",
                    "integrated-management"
                ]
            },
            {
                id: "commerce",
                name: "Commerce without Mathematics",
                description: "Commerce subjects without Mathematics",
                subjects: [
                    "Accountancy",
                    "Business Studies",
                    "Economics"
                ],
                courseIds: [
                    "bcom",
                    "bcom-honours",
                    "bba",
                    "integrated-management"
                ]
            },
            {
                id: "humanities",
                name: "Humanities / Arts",
                description: "Humanities and social science subjects",
                subjects: [
                    "History",
                    "Political Science",
                    "Geography",
                    "Sociology",
                    "Psychology",
                    "Languages"
                ],
                courseIds: [
                    "ba",
                    "ba-psychology",
                    "ba-english",
                    "ba-political-science",
                    "ba-journalism",
                    "bba",
                    "integrated-management"
                ]
            },
            {
                id: "other",
                name: "Other / Mixed Subjects",
                description: "Explore options based on your actual subjects",
                subjects: [],
                courseIds: [
                    "bca",
                    "bba",
                    "bcom",
                    "ba",
                    "bsc-computer-science"
                ]
            }
        ]
    },

    courses: [
        {
            id: "btech-cse",
            name: "B.Tech / B.E. in Computer Science",
            shortName: "B.Tech CSE",
            category: "engineering",
            duration: "Usually 4 years",
            description: "Study computing, programming, algorithms and software systems.",
            streamIds: ["pcm", "pcmb"],
            subjectRequirements: [
                "Mathematics and the required science subjects"
            ],
            eligibilityNote: "Subject requirements and entrance exams vary by institution.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "software-developer",
                "frontend-developer",
                "backend-developer",
                "data-analyst",
                "qa-engineer",
                "cybersecurity-analyst"
            ]
        },
        {
            id: "btech-core",
            name: "B.Tech in Core Engineering",
            shortName: "B.Tech Engineering",
            category: "engineering",
            duration: "Usually 4 years",
            description: "Explore engineering branches such as Mechanical, Civil, Electrical and Electronics.",
            streamIds: ["pcm", "pcmb"],
            subjectRequirements: ["Mathematics and required science subjects"],
            eligibilityNote: "Branch availability and admission criteria depend on the institution.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: []
        },
        {
            id: "bca",
            name: "Bachelor of Computer Applications",
            shortName: "BCA",
            category: "computer-science",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study computer applications, programming and software development.",
            streamIds: ["pcm", "pcmb", "commerce-maths", "commerce", "humanities", "other"],
            subjectRequirements: ["Computer science or mathematics may be required by some institutions."],
            eligibilityNote: "Some colleges accept students from multiple streams; others have subject requirements.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "software-developer",
                "frontend-developer",
                "backend-developer",
                "qa-engineer",
                "data-analyst"
            ]
        },
        {
            id: "bsc-computer-science",
            name: "B.Sc. Computer Science",
            shortName: "B.Sc. CS",
            category: "computer-science",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study computer science concepts, programming and computational problem-solving.",
            streamIds: ["pcm", "pcmb", "other"],
            subjectRequirements: ["Mathematics or other specified subjects may be required."],
            eligibilityNote: "Check each university's subject and admission criteria.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "software-developer",
                "backend-developer",
                "data-analyst",
                "qa-engineer"
            ]
        },
        {
            id: "bsc-information-technology",
            name: "B.Sc. Information Technology",
            shortName: "B.Sc. IT",
            category: "information-technology",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study computing, information systems, databases and IT infrastructure.",
            streamIds: ["pcm", "pcmb", "other"],
            subjectRequirements: ["Requirements vary by institution."],
            eligibilityNote: "Verify the institution's subject requirements before applying.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "software-developer",
                "backend-developer",
                "qa-engineer",
                "cybersecurity-analyst",
                "data-analyst"
            ]
        },
        {
            id: "bsc-mathematics",
            name: "B.Sc. Mathematics",
            shortName: "B.Sc. Maths",
            category: "science",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study mathematical reasoning, algebra, calculus and related fields.",
            streamIds: ["pcm", "pcmb"],
            subjectRequirements: ["Mathematics at the qualifying level"],
            eligibilityNote: "Minimum marks and subject requirements vary by institution.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["data-analyst", "research-assistant", "financial-analyst"]
        },
        {
            id: "bsc-physics",
            name: "B.Sc. Physics",
            shortName: "B.Sc. Physics",
            category: "science",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study classical and modern physics, mathematics and experimental methods.",
            streamIds: ["pcm", "pcmb"],
            subjectRequirements: ["Physics and usually Mathematics"],
            eligibilityNote: "Check the university's subject combination and admission rules.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["research-assistant", "quality-analyst"]
        },
        {
            id: "bsc-statistics",
            name: "B.Sc. Statistics",
            shortName: "B.Sc. Statistics",
            category: "science",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study probability, statistical analysis and quantitative methods.",
            streamIds: ["pcm", "pcmb", "commerce-maths"],
            subjectRequirements: ["Mathematics is commonly required"],
            eligibilityNote: "Eligibility differs between institutions.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["data-analyst", "financial-analyst", "research-assistant"]
        },
        {
            id: "barch",
            name: "Bachelor of Architecture",
            shortName: "B.Arch",
            category: "architecture",
            duration: "Usually 5 years",
            description: "Study architectural design, building systems and the built environment.",
            streamIds: ["pcm"],
            subjectRequirements: ["Prescribed subjects and qualifying criteria"],
            eligibilityNote: "Subject rules, aptitude tests and admission requirements must be checked for the relevant year and institution.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: []
        },
        {
            id: "mbbs",
            name: "Bachelor of Medicine and Bachelor of Surgery",
            shortName: "MBBS",
            category: "medicine",
            duration: "Typically 5.5 years including internship in India",
            description: "Professional medical education and clinical training.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Required Physics, Chemistry and Biology subjects"],
            eligibilityNote: "Medical admission requires meeting the applicable national and institutional rules, including entrance requirements.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: []
        },
        {
            id: "bds",
            name: "Bachelor of Dental Surgery",
            shortName: "BDS",
            category: "healthcare",
            duration: "Typically 5 years including internship",
            description: "Professional education in dentistry and oral healthcare.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Required science subjects"],
            eligibilityNote: "Entrance and eligibility requirements apply.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: []
        },
        {
            id: "bpharm",
            name: "Bachelor of Pharmacy",
            shortName: "B.Pharm",
            category: "pharmacy",
            duration: "Usually 4 years",
            description: "Study medicines, pharmaceutical sciences and pharmacy practice.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Physics, Chemistry and an accepted third subject combination"],
            eligibilityNote: "Confirm the applicable pharmacy admission rules and accepted subject combinations.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: []
        },
        {
            id: "bsc-nursing",
            name: "B.Sc. Nursing",
            shortName: "B.Sc. Nursing",
            category: "healthcare",
            duration: "Usually 4 years",
            description: "Study nursing practice, patient care and healthcare sciences.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Required science subjects, commonly including Biology"],
            eligibilityNote: "Eligibility and registration requirements apply.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: []
        },
        {
            id: "bsc-biotechnology",
            name: "B.Sc. Biotechnology",
            shortName: "B.Sc. Biotechnology",
            category: "life-sciences",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study biological systems and their applications in technology and research.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Science subject requirements vary"],
            eligibilityNote: "Check the programme's accepted subject combinations.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["research-assistant", "quality-analyst"]
        },
        {
            id: "bsc-microbiology",
            name: "B.Sc. Microbiology",
            shortName: "B.Sc. Microbiology",
            category: "life-sciences",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study microorganisms, laboratory methods and biological processes.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Science subject requirements vary"],
            eligibilityNote: "Check the programme's accepted subjects and admission criteria.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["research-assistant", "quality-analyst"]
        },
        {
            id: "bsc-agriculture",
            name: "B.Sc. Agriculture",
            shortName: "B.Sc. Agriculture",
            category: "agriculture",
            duration: "Usually 4 years",
            description: "Study crop science, soils, agricultural systems and farm management.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Accepted science or agriculture subject combination"],
            eligibilityNote: "Accepted subject combinations and entrance rules vary.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: []
        },
        {
            id: "bsc-life-sciences",
            name: "B.Sc. Life Sciences",
            shortName: "B.Sc. Life Sciences",
            category: "life-sciences",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Explore biology and related life-science disciplines.",
            streamIds: ["pcb", "pcmb"],
            subjectRequirements: ["Required science subjects"],
            eligibilityNote: "Check the programme-specific admission criteria.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["research-assistant", "quality-analyst"]
        },
        {
            id: "bcom",
            name: "Bachelor of Commerce",
            shortName: "B.Com",
            category: "commerce",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study accounting, business, economics and financial systems.",
            streamIds: ["commerce-maths", "commerce", "other"],
            subjectRequirements: ["Institution-specific requirements"],
            eligibilityNote: "Many programmes accept different streams, but admission criteria vary.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["accountant", "financial-analyst", "business-analyst"]
        },
        {
            id: "bcom-honours",
            name: "B.Com. Honours / Specialised Commerce Degree",
            shortName: "B.Com. Honours",
            category: "commerce",
            duration: "Depends on programme structure",
            description: "A more specialised commerce degree with deeper study in selected areas.",
            streamIds: ["commerce-maths", "commerce"],
            subjectRequirements: ["As specified by the institution"],
            eligibilityNote: "Programme names, duration and admission rules differ by university.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["accountant", "financial-analyst", "business-analyst"]
        },
        {
            id: "bba",
            name: "Bachelor of Business Administration",
            shortName: "BBA",
            category: "management",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study management, marketing, business operations and organisations.",
            streamIds: ["commerce-maths", "commerce", "humanities", "other"],
            subjectRequirements: ["Institution-specific requirements"],
            eligibilityNote: "Some programmes require entrance tests or specific qualifying marks.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "business-analyst",
                "marketing-executive",
                "hr-executive",
                "sales-executive"
            ]
        },
        {
            id: "ba",
            name: "Bachelor of Arts",
            shortName: "B.A.",
            category: "arts-humanities",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study humanities, social sciences or languages based on chosen subjects.",
            streamIds: ["humanities", "other"],
            subjectRequirements: ["Depends on the chosen programme and institution"],
            eligibilityNote: "Subject prerequisites may apply to specialised programmes.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "content-writer",
                "communications-executive",
                "research-assistant",
                "social-media-executive"
            ]
        },
        {
            id: "ba-psychology",
            name: "B.A. / B.Sc. Psychology",
            shortName: "Psychology",
            category: "psychology",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study human behaviour, psychological theory and research methods.",
            streamIds: ["humanities", "other"],
            subjectRequirements: ["Programme-specific requirements"],
            eligibilityNote: "Professional practice as a psychologist requires further qualifications and applicable registration or licensing where relevant.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["research-assistant", "hr-executive"]
        },
        {
            id: "ba-english",
            name: "B.A. English",
            shortName: "B.A. English",
            category: "arts-humanities",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study literature, language, critical reading and writing.",
            streamIds: ["humanities", "other"],
            subjectRequirements: ["Programme-specific requirements"],
            eligibilityNote: "Confirm subject and admission requirements with the institution.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["content-writer", "communications-executive"]
        },
        {
            id: "ba-political-science",
            name: "B.A. Political Science",
            shortName: "Political Science",
            category: "social-sciences",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study political systems, governance, public policy and international relations.",
            streamIds: ["humanities", "other"],
            subjectRequirements: ["Programme-specific requirements"],
            eligibilityNote: "Check the chosen institution's admission criteria.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["research-assistant", "communications-executive"]
        },
        {
            id: "ba-journalism",
            name: "B.A. Journalism / Mass Communication",
            shortName: "Journalism",
            category: "media-communications",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study reporting, media production, communication and storytelling.",
            streamIds: ["humanities", "other"],
            subjectRequirements: ["Programme-specific requirements"],
            eligibilityNote: "Portfolio, entrance or language requirements may apply.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "content-writer",
                "communications-executive",
                "social-media-executive"
            ]
        },
        {
            id: "ba-economics",
            name: "B.A. / B.Sc. Economics",
            shortName: "Economics",
            category: "economics",
            duration: "Usually 3–4 years, depending on programme structure",
            description: "Study markets, economic systems, policy and quantitative analysis.",
            streamIds: ["commerce-maths"],
            subjectRequirements: ["Mathematics may be required for some programmes"],
            eligibilityNote: "Check whether the chosen university requires Mathematics.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: ["financial-analyst", "business-analyst", "research-assistant"]
        },
        {
            id: "integrated-management",
            name: "Integrated Management Programme",
            shortName: "Integrated Management",
            category: "management",
            duration: "Depends on the programme",
            description: "An integrated undergraduate and postgraduate route in management at selected institutions.",
            streamIds: ["commerce-maths", "commerce", "humanities"],
            subjectRequirements: ["Institution-specific qualifying subjects and marks"],
            eligibilityNote: "Entrance examinations and selection rules vary by institution.",
            detailSections: ["subjects", "skills", "jobs", "careers"],
            careerIds: [
                "business-analyst",
                "marketing-executive",
                "hr-executive",
                "sales-executive"
            ]
        }
    ],

    college: {
        years: [
            { id: "1", name: "1st Year" },
            { id: "2", name: "2nd Year" },
            { id: "3", name: "3rd Year" },
            { id: "4", name: "4th Year" },
            { id: "final", name: "Final Year" }
        ],

        /*
          Profile setup choices. These are broad categories,
          not an exhaustive list of every degree in India.
        */
        courses: [
            { id: "bca", name: "BCA", category: "computer-science", catalogCourseId: "bca" },
            { id: "btech", name: "B.Tech / B.E.", category: "engineering", catalogCourseId: "btech-cse" },
            { id: "bsc", name: "B.Sc.", category: "science", catalogCourseId: "bsc-computer-science" },
            { id: "bcom", name: "B.Com", category: "commerce", catalogCourseId: "bcom" },
            { id: "bba", name: "BBA", category: "management", catalogCourseId: "bba" },
            { id: "ba", name: "B.A.", category: "arts-humanities", catalogCourseId: "ba" },
            { id: "other", name: "Other degree / diploma", category: "other", catalogCourseId: null }
        ]
    }
};


/* =========================================================
   DATA HELPERS
========================================================= */

function getSchoolClasses() {
    return PATHFINDER_DATA.school.classes;
}

function getSchoolStreams() {
    return PATHFINDER_DATA.school.streams;
}

function getCollegeCourses() {
    return PATHFINDER_DATA.college.courses;
}

function getCollegeYears() {
    return PATHFINDER_DATA.college.years;
}

function getAllCourses() {
    return PATHFINDER_DATA.courses;
}

function getCourseById(courseId) {
    return PATHFINDER_DATA.courses.find(
        course => course.id === courseId
    ) || null;
}

function getCoursesForStream(streamId) {
    const stream = PATHFINDER_DATA.school.streams.find(
        item => item.id === streamId
    );

    if (!stream) {
        return [];
    }

    return stream.courseIds
        .map(courseId => getCourseById(courseId))
        .filter(Boolean);
}

function getStreamsForCourse(courseId) {
    const course = getCourseById(courseId);

    if (!course) {
        return [];
    }

    return course.streamIds
        .map(streamId =>
            PATHFINDER_DATA.school.streams.find(
                stream => stream.id === streamId
            )
        )
        .filter(Boolean);
}

function getCourseCareerIds(courseId) {
    const course = getCourseById(courseId);
    return course ? [...course.careerIds] : [];
}

function getCollegeProfileCourse(courseId) {
    return PATHFINDER_DATA.college.courses.find(
        course => course.id === courseId
    ) || null;
}