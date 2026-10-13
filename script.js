/* =====================================================
   PATHFINDER - MAIN SCRIPT
   Phase 3-E
   Profile → Career Opportunities → Career Details
===================================================== */



/* =====================================================
   DOM ELEMENTS
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");

const profileButton =
    document.getElementById("profileButton");

const mobileProfileButton =
    document.getElementById("mobileProfileButton");

const profileModal =
    document.getElementById("profileModal");

const closeProfileModal =
    document.getElementById("closeProfileModal");

const profileForm =
    document.getElementById("profileForm");

const studentType =
    document.getElementById("studentType");

const schoolFields =
    document.getElementById("schoolFields");

const collegeFields =
    document.getElementById("collegeFields");

const schoolClass =
    document.getElementById("schoolClass");

const schoolStream =
    document.getElementById("schoolStream");

const collegeCourse =
    document.getElementById("collegeCourse");

const collegeYear =
    document.getElementById("collegeYear");

const heroStartButton =
    document.getElementById("heroStartButton");


/* =====================================================
   CAREER DETAILS MODAL
===================================================== */

const careerDetailsModal =
    document.getElementById("careerDetailsModal");

const closeCareerDetails =
    document.getElementById("closeCareerDetails");


/* =====================================================
   STORAGE
===================================================== */

const PROFILE_STORAGE_KEY =
    "pathfinderProfile";


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

if (menuButton && mobileNav) {

    menuButton.addEventListener(
        "click",
        function () {

            mobileNav.classList.toggle("active");

            const isOpen =
                mobileNav.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


/* Close mobile menu after navigation */

if (mobileNav) {

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    mobileNav.classList.remove(
                        "active"
                    );

                    if (menuButton) {

                        menuButton.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                }
            );

        }
    );

}


/* =====================================================
   PROFILE MODAL
===================================================== */

function openProfileModal() {

    if (!profileModal) return;

    profileModal.classList.add("active");

    profileModal.setAttribute(
        "aria-hidden",
        "false"
    );

    updateAcademicFields();

    document.body.classList.add(
        "modal-open"
    );

}


function closeProfile() {

    if (!profileModal) return;

    profileModal.classList.remove("active");

    profileModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


if (profileButton) {

    profileButton.addEventListener(
        "click",
        openProfileModal
    );

}


if (mobileProfileButton) {

    mobileProfileButton.addEventListener(
        "click",
        function () {

            if (mobileNav) {

                mobileNav.classList.remove(
                    "active"
                );

            }

            if (menuButton) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            openProfileModal();

        }
    );

}


if (closeProfileModal) {

    closeProfileModal.addEventListener(
        "click",
        closeProfile
    );

}


/* Close profile modal by clicking outside */

if (profileModal) {

    profileModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === profileModal
            ) {

                closeProfile();

            }

        }
    );

}


/* =====================================================
   LOAD PROFILE OPTIONS
===================================================== */

function loadProfileOptions() {

    /* ---------------- SCHOOL CLASSES ---------------- */

    if (schoolClass) {

        schoolClass.innerHTML =
            '<option value="">Select class</option>';

        const classes =
            getSchoolClasses();

        classes.forEach(
            function (item) {

                const option =
                    document.createElement("option");

                option.value =
                    item.id;

                option.textContent =
                    item.name;

                schoolClass.appendChild(
                    option
                );

            }
        );

    }


    /* ---------------- SCHOOL STREAMS ---------------- */

    if (schoolStream) {

        schoolStream.innerHTML =
            '<option value="">Select stream</option>';

        const streams =
            getSchoolStreams();

        streams.forEach(
            function (item) {

                const option =
                    document.createElement("option");

                option.value =
                    item.id;

                option.textContent =
                    item.name;

                schoolStream.appendChild(
                    option
                );

            }
        );

    }


    /* ---------------- COLLEGE COURSES ---------------- */

    if (collegeCourse) {

        collegeCourse.innerHTML =
            '<option value="">Select course</option>';

        const courses =
            getCollegeCourses();

        courses.forEach(
            function (item) {

                const option =
                    document.createElement("option");

                option.value =
                    item.id;

                option.textContent =
                    item.name;

                collegeCourse.appendChild(
                    option
                );

            }
        );

    }


    /* ---------------- COLLEGE YEARS ---------------- */

    if (collegeYear) {

        collegeYear.innerHTML =
            '<option value="">Select year</option>';

        const years =
            getCollegeYears();

        years.forEach(
            function (item) {

                const option =
                    document.createElement("option");

                option.value =
                    item.id;

                option.textContent =
                    item.name;

                collegeYear.appendChild(
                    option
                );

            }
        );

    }

}


loadProfileOptions();


/* =====================================================
   SCHOOL / COLLEGE FIELD TOGGLE
===================================================== */

function updateAcademicFields() {

    if (!studentType) return;

    const type = studentType.value;
    const isSchool = type === "school";
    const isCollege = type === "college";

    // Toggle `hidden` too; display:block cannot reveal an element
    // that still has the HTML hidden attribute.
    if (schoolFields) {
        schoolFields.hidden = !isSchool;
        schoolFields.style.display = isSchool ? "grid" : "none";
    }

    if (collegeFields) {
        collegeFields.hidden = !isCollege;
        collegeFields.style.display = isCollege ? "grid" : "none";
    }

    if (schoolClass) schoolClass.required = isSchool;
    if (schoolStream) schoolStream.required = isSchool;
    if (collegeCourse) collegeCourse.required = isCollege;
    if (collegeYear) collegeYear.required = isCollege;
}


if (studentType) {

    studentType.addEventListener(
        "change",
        updateAcademicFields
    );

}


/* =====================================================
CAREER MAPPING
Course-based career guidance
===================================================== */

/*
School students should explore courses first.
Career options will be shown after a course is selected.

College course IDs are mapped to possible career paths.
These are guidance options, not guaranteed jobs.
*/

const CAREER_MAPPING = {

"bca": [
    "software-developer",
    "frontend-developer",
    "backend-developer",
    "data-analyst",
    "qa-engineer",
    "cybersecurity-analyst"
],

"btech": [
    "software-developer",
    "frontend-developer",
    "backend-developer",
    "data-analyst",
    "qa-engineer",
    "cybersecurity-analyst"
],

"bsc": [
    "software-developer",
    "data-analyst",
    "research-assistant",
    "quality-analyst"
],

"bcom": [
    "accountant",
    "financial-analyst",
    "business-analyst",
    "marketing-executive"
],

"bba": [
    "business-analyst",
    "marketing-executive",
    "hr-executive",
    "sales-executive"
],

"ba": [
    "content-writer",
    "social-media-executive",
    "research-assistant",
    "communications-executive",
    "hr-executive"
]

};



/* =====================================================
   PROFILE STORAGE
===================================================== */

function saveProfile(profile) {

    localStorage.setItem(
        PROFILE_STORAGE_KEY,
        JSON.stringify(profile)
    );

}


function getSavedProfile() {

    const savedProfile =
        localStorage.getItem(
            PROFILE_STORAGE_KEY
        );

    if (!savedProfile) {

        return null;

    }


    try {

        return JSON.parse(
            savedProfile
        );

    } catch (error) {

        console.error(
            "Could not read saved profile.",
            error
        );

        return null;

    }

}


/* =====================================================
   PROFILE FORM SUBMIT
===================================================== */

if (profileForm) {

    profileForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const profileName =
                document.getElementById(
                    "profileName"
                );


            const name =
                profileName
                    ? profileName.value.trim()
                    : "";


            const type =
                studentType
                    ? studentType.value
                    : "";


            if (!name || !type) {

                alert(
                    "Please complete your profile details."
                );

                return;

            }


            const profile = {

                name: name,

                studentType: type

            };


            /* ---------------- SCHOOL ---------------- */

            if (type === "school") {

                const selectedClass =
                    schoolClass
                        ? schoolClass.value
                        : "";

                const selectedStream =
                    schoolStream
                        ? schoolStream.value
                        : "";


                if (
                    !selectedClass ||
                    !selectedStream
                ) {

                    alert(
                        "Please select your class and stream."
                    );

                    return;

                }


                profile.class =
                    selectedClass;

                profile.stream =
                    selectedStream;

            }


            /* ---------------- COLLEGE ---------------- */

            if (type === "college") {

                const selectedCourse =
                    collegeCourse
                        ? collegeCourse.value
                        : "";

                const selectedYear =
                    collegeYear
                        ? collegeYear.value
                        : "";


                if (
                    !selectedCourse ||
                    !selectedYear
                ) {

                    alert(
                        "Please select your course and year."
                    );

                    return;

                }


                profile.course =
                    selectedCourse;

                profile.year =
                    selectedYear;

            }


            /* SAVE */

            saveProfile(profile);


            /* CLOSE PROFILE */

            closeProfile();


            /* UPDATE UI */

            updateProfileButton();

            renderPersonalizedDashboard(
                profile
            );

            // Continue directly into the relevant academic journey.
            if (window.pathfinderOpenExplorerForProfile) {
                window.pathfinderOpenExplorerForProfile(profile);
                if (profile.studentType === "school") {
                    document.getElementById("careerDashboard")?.classList.remove("dashboard-visible");
                }
                return;
            }

            /* Scroll to dashboard */

            const dashboard =
                document.getElementById(
                    "careerDashboard"
                );


            if (dashboard) {

                setTimeout(
                    function () {

                        dashboard.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    },
                    150
                );

            }

        }
    );

}


/* =====================================================
   UPDATE PROFILE BUTTON
===================================================== */

function updateProfileButton() {

    const profile =
        getSavedProfile();


    if (!profile) return;


    /*
       Keep the original button design.
       Only update accessible label/title.
    */

    if (profileButton) {

        profileButton.setAttribute(
            "title",
            `Profile: ${profile.name}`
        );

        profileButton.setAttribute(
            "aria-label",
            `Open profile for ${profile.name}`
        );

    }


    if (mobileProfileButton) {

        mobileProfileButton.setAttribute(
            "title",
            `Profile: ${profile.name}`
        );

        mobileProfileButton.setAttribute(
            "aria-label",
            `Open profile for ${profile.name}`
        );

    }

}


/* =====================================================
   GET CAREER IDS FOR PROFILE
===================================================== */

function getCareerIdsForProfile(
    profile
) {

    if (!profile) {

        return [];

    }


    if (profile.studentType === "college") {
        const profileCourse = getCollegeProfileCourse(profile.course);
        if (profileCourse && profileCourse.catalogCourseId) {
            const catalogIds = getCourseCareerIds(profileCourse.catalogCourseId);
            if (catalogIds.length) return catalogIds;
        }
        return CAREER_MAPPING[profile.course] || [];
    }

    // School students explore relevant courses first; do not show jobs
    // before a course has been selected.
    if (profile.studentType === "school") return [];


    return [];

}


/* =====================================================
   CREATE ELEMENT
===================================================== */

function createElement(
    tag,
    className,
    text
) {

    const element =
        document.createElement(tag);


    if (className) {

        element.className =
            className;

    }


    if (
        text !== undefined &&
        text !== null
    ) {

        element.textContent =
            text;

    }


    return element;

}


/* =====================================================
   RENDER PERSONALIZED DASHBOARD
===================================================== */

function renderPersonalizedDashboard(
    profile
) {

    const dashboard =
        document.getElementById(
            "careerDashboard"
        );


    if (!dashboard) {

        console.warn(
            "careerDashboard element not found."
        );

        return;

    }

    dashboard.classList.add("dashboard-visible");


    const studentName =
        document.getElementById(
            "dashboardStudentName"
        );


    const academicInfo =
        document.getElementById(
            "dashboardAcademicInfo"
        );


    const subjects =
        document.getElementById(
            "dashboardSubjects"
        );


    const focusAreas =
        document.getElementById(
            "dashboardFocusAreas"
        );


    const careerGrid =
        document.getElementById(
            "careerOpportunityGrid"
        );


    /* ---------------- NAME ---------------- */

    if (studentName) {

        studentName.textContent =
            profile.name || "Student";

    }


    /* ---------------- ACADEMIC INFO ---------------- */

    if (academicInfo) {

        academicInfo.textContent =
            getAcademicProfileLabel(
                profile
            );

    }


    /* ---------------- SUBJECTS ---------------- */

    if (subjects) {

        renderSimpleTags(
            subjects,
            getAcademicSubjects(
                profile
            )
        );

    }


    /* ---------------- FOCUS AREAS ---------------- */

    if (focusAreas) {

        renderSimpleTags(
            focusAreas,
            getAcademicFocusAreas(
                profile
            )
        );

    }


    /* ---------------- CAREERS ---------------- */

    if (careerGrid) {

        renderCareerCards(
            profile,
            careerGrid
        );

    }


    /* SHOW DASHBOARD */

    dashboard.style.display =
        "block";

}


/* =====================================================
   ACADEMIC PROFILE LABEL
===================================================== */

function getAcademicProfileLabel(
    profile
) {

    if (
        profile.studentType ===
        "college"
    ) {

        const course =
            getCollegeCourses().find(
                function (item) {

                    return (
                        item.id ===
                        profile.course
                    );

                }
            );


        const year =
            getCollegeYears().find(
                function (item) {

                    return (
                        item.id ===
                        profile.year
                    );

                }
            );


        return (
            `${course?.name || "College"} • ` +
            `${year?.name || "Current Year"}`
        );

    }


    if (
        profile.studentType ===
        "school"
    ) {

        const classItem =
            getSchoolClasses().find(
                function (item) {

                    return (
                        item.id ===
                        profile.class
                    );

                }
            );


        const streamItem =
            getSchoolStreams().find(
                function (item) {

                    return (
                        item.id ===
                        profile.stream
                    );

                }
            );


        return (
            `${classItem?.name || "School"} • ` +
            `${streamItem?.name || "Stream"}`
        );

    }


    return "Academic profile";

}


/* =====================================================
   ACADEMIC SUBJECTS
===================================================== */

function getAcademicSubjects(
    profile
) {

    if (
        profile.studentType ===
        "college"
    ) {

        const subjects = {

            bca: [
                "Programming",
                "Database Management",
                "Web Development",
                "Computer Networks"
            ],

            btech: [
                "Programming",
                "Data Structures",
                "Database Systems",
                "Computer Networks"
            ],

            bsc: [
                "Mathematics",
                "Programming",
                "Statistics",
                "Research Methods"
            ],

            bcom: [
                "Accounting",
                "Business Economics",
                "Financial Management",
                "Business Law"
            ],

            bba: [
                "Management",
                "Marketing",
                "Finance",
                "Business Communication"
            ],

            ba: [
                "Communication",
                "Research",
                "Writing",
                "Social Sciences"
            ]

        };


        return (
            subjects[
                profile.course
            ] || [
                "Core Subjects",
                "Communication",
                "Research"
            ]
        );

    }


    const schoolSubjects = {

        science: [
            "Mathematics",
            "Science",
            "Computer Science",
            "Research"
        ],

        commerce: [
            "Accountancy",
            "Business Studies",
            "Economics",
            "Mathematics"
        ],

        humanities: [
            "History",
            "Political Science",
            "English",
            "Social Sciences"
        ],

        other: [
            "Core Subjects",
            "Communication",
            "General Knowledge"
        ]

    };


    return (
        schoolSubjects[
            profile.stream
        ] || []
    );

}


/* =====================================================
   ACADEMIC FOCUS AREAS
===================================================== */

function getAcademicFocusAreas(
    profile
) {

    if (
        profile.studentType ===
        "college"
    ) {

        const focus = {

            bca: [
                "Programming",
                "Web Development",
                "Problem Solving",
                "Projects"
            ],

            btech: [
                "Core Engineering",
                "Problem Solving",
                "Technology",
                "Projects"
            ],

            bsc: [
                "Analysis",
                "Research",
                "Technical Skills",
                "Projects"
            ],

            bcom: [
                "Finance",
                "Accounting",
                "Business Analysis",
                "Communication"
            ],

            bba: [
                "Management",
                "Marketing",
                "Business Analysis",
                "Leadership"
            ],

            ba: [
                "Communication",
                "Research",
                "Writing",
                "Critical Thinking"
            ]

        };


        return (
            focus[
                profile.course
            ] || [
                "Communication",
                "Research",
                "Practical Skills"
            ]
        );

    }


    const schoolFocus = {

        science: [
            "Mathematics",
            "Technology",
            "Problem Solving",
            "Research"
        ],

        commerce: [
            "Finance",
            "Business",
            "Analysis",
            "Communication"
        ],

        humanities: [
            "Communication",
            "Writing",
            "Research",
            "Critical Thinking"
        ],

        other: [
            "Communication",
            "Problem Solving",
            "Digital Skills"
        ]

    };


    return (
        schoolFocus[
            profile.stream
        ] || []
    );

}


/* =====================================================
   RENDER SIMPLE TAGS
===================================================== */

function renderSimpleTags(
    container,
    items
) {

    container.innerHTML = "";


    const list =
        Array.isArray(items)
            ? items
            : [];


    if (!list.length) {

        const empty =
            createElement(
                "span",
                "",
                "Information will be added soon."
            );

        container.appendChild(
            empty
        );

        return;

    }


    list.forEach(
        function (item) {

            const tag =
                createElement(
                    "span",
                    "dashboard-tag",
                    item
                );

            container.appendChild(
                tag
            );

        }
    );

}


/* =====================================================
   RENDER CAREER CARDS
===================================================== */

function renderCareerCards(
    profile,
    careerGrid
) {

    careerGrid.innerHTML = "";


    const careerIds =
        getCareerIdsForProfile(
            profile
        );


    if (!careerIds.length) {

        renderEmptyCareerState(
            careerGrid,
            "Career paths are being expanded for this academic background."
        );

        return;

    }


    let renderedCount = 0;


    careerIds.forEach(
        function (careerId) {

            /*
               IMPORTANT:
               career-data.js is the single source
               for career information.
            */

            const career =
                getCareerDetails(
                    careerId
                );


            if (!career) {

                console.warn(
                    `Career data not found for: ${careerId}`
                );

                return;

            }


            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "career-opportunity-card";


            card.dataset.careerId =
                career.id;


            /* ICON */

            const icon =
                createElement(
                    "div",
                    "career-card-icon",
                    getCareerIcon(
                        career.id
                    )
                );


            /* TITLE */

            const title =
                createElement(
                    "h3",
                    "",
                    career.title
                );


            /* DESCRIPTION */

            const description =
                createElement(
                    "p",
                    "",
                    career.description
                );


            /* BUTTON */

            const button =
                createElement(
                    "button",
                    "career-explore-button",
                    "View Career Details →"
                );


            button.type =
                "button";


            button.dataset.careerId =
                career.id;


            button.setAttribute(
                "aria-label",
                `View details for ${career.title}`
            );


            button.addEventListener(
                "click",
                function () {

                    openCareerDetails(
                        career.id
                    );

                }
            );


            card.appendChild(icon);

            card.appendChild(title);

            card.appendChild(description);

            card.appendChild(button);


            careerGrid.appendChild(card);


            renderedCount++;

        }
    );


    if (renderedCount === 0) {

        renderEmptyCareerState(
            careerGrid,
            "Career information is currently unavailable."
        );

    }

}


/* =====================================================
   CAREER ICONS
===================================================== */

function getCareerIcon(
    careerId
) {

    const icons = {

        "software-developer": "💻",

        "frontend-developer": "🌐",

        "backend-developer": "⚙️",

        "data-analyst": "📊",

        "qa-engineer": "🧪",

        "accountant": "🧾",

        "financial-analyst": "💰",

        "business-analyst": "📈",

        "marketing-executive": "📣",

        "hr-executive": "👥",

        "sales-executive": "🤝",

        "content-writer": "✍️",

        "social-media-executive": "📱",

        "research-assistant": "🔬",

        "quality-analyst": "✅",

        "cybersecurity-analyst": "🔐",

        "communications-executive": "💬"

    };


    return (
        icons[careerId] ||
        "💼"
    );

}


/* =====================================================
   EMPTY CAREER STATE
===================================================== */

function renderEmptyCareerState(
    container,
    message
) {

    container.innerHTML = "";


    const wrapper =
        createElement(
            "div",
            "empty-career-state"
        );


    const icon =
        createElement(
            "div",
            "empty-career-icon",
            "🧭"
        );


    const title =
        createElement(
            "h3",
            "",
            "Career paths will appear here"
        );


    const description =
        createElement(
            "p",
            "",
            message
        );


    wrapper.appendChild(icon);

    wrapper.appendChild(title);

    wrapper.appendChild(description);


    container.appendChild(
        wrapper
    );

}


/* =====================================================
   OPEN CAREER DETAILS
===================================================== */

function openCareerDetails(
    careerId
) {

    if (!careerDetailsModal) {

        console.warn(
            "Career details modal not found."
        );

        return;

    }


    const career =
        getCareerDetails(
            careerId
        );


    if (!career) {

        alert(
            "Career information is currently unavailable."
        );

        return;

    }


    /* ---------------- ELEMENTS ---------------- */

    const title =
        document.getElementById(
            "careerDetailsTitle"
        );


    const description =
        document.getElementById(
            "careerDetailsDescription"
        );


    const salary =
        document.getElementById(
            "careerSalary"
        );


    const subjects =
        document.getElementById(
            "careerSubjects"
        );


    const focusAreas =
        document.getElementById(
            "careerFocusAreas"
        );


    const skills =
        document.getElementById(
            "careerSkills"
        );


    const technologies =
        document.getElementById(
            "careerTechnologies"
        );


    const projects =
        document.getElementById(
            "careerProjects"
        );


    const roadmap =
        document.getElementById(
            "careerRoadmap"
        );


    /* ---------------- BASIC INFO ---------------- */

    if (title) {

        title.textContent =
            career.title;

    }


    if (description) {

        description.textContent =
            career.description;

    }


    if (salary) {
        salary.textContent = career.salary ||
            "Compensation varies by location, employer, skills and experience.";
    }

    const responsibilities = document.getElementById("careerResponsibilities");
    if (responsibilities) {
        const defaults = [
            "Work on tasks related to the role and its business or user goals.",
            "Collaborate with teammates and communicate progress clearly.",
            "Review work, solve problems and continue learning relevant tools."
        ];
        renderCareerTags(responsibilities, career.responsibilities || defaults);
    }

    const hiringRequirements = document.getElementById("careerHiringRequirements");
    if (hiringRequirements) {
        const requirements = career.hiringRequirements || [
            "Review the specific job description for required education, skills and experience.",
            "Build relevant projects or practical work that demonstrates your abilities.",
            "Prepare a resume and practise role-related interview questions.",
            "Internship, certification and degree requirements vary by employer; no single path guarantees hiring."
        ];
        renderCareerTags(hiringRequirements, requirements);
    }

    /* ---------------- SUBJECTS ---------------- */

    if (subjects) {

        renderCareerTags(
            subjects,
            career.subjects
        );

    }


    /* ---------------- FOCUS ---------------- */

    if (focusAreas) {

        renderCareerTags(
            focusAreas,
            career.focusAreas
        );

    }


    /* ---------------- SKILLS ---------------- */

    if (skills) {

        renderCareerTags(
            skills,
            career.skills
        );

    }


    /* ---------------- TECHNOLOGIES ---------------- */

    if (technologies) {

        renderCareerTags(
            technologies,
            career.technologies
        );

    }


    /* ---------------- PROJECTS ---------------- */

    if (projects) {

        renderCareerProjects(
            projects,
            career.projects
        );

    }


    /* ---------------- ROADMAP ---------------- */

    if (roadmap) {

        renderCareerRoadmap(
            roadmap,
            career.roadmap
        );

    }


    /* ---------------- OPEN ---------------- */

    careerDetailsModal.classList.add(
        "active"
    );


    careerDetailsModal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );


    /* Scroll modal to top */

    const modalContainer =
        careerDetailsModal.querySelector(
            ".career-details-container"
        );


    if (modalContainer) {

        modalContainer.scrollTop = 0;

    }

}


/* =====================================================
   CAREER TAGS
===================================================== */

function renderCareerTags(
    container,
    items
) {

    container.innerHTML = "";


    const list =
        Array.isArray(items)
            ? items
            : [];


    if (!list.length) {

        const empty =
            createElement(
                "span",
                "career-tag",
                "Information coming soon."
            );

        container.appendChild(
            empty
        );

        return;

    }


    list.forEach(
        function (item) {

            const tag =
                createElement(
                    "span",
                    "career-tag",
                    item
                );


            container.appendChild(
                tag
            );

        }
    );

}


/* =====================================================
   CAREER PROJECTS
===================================================== */

function renderCareerProjects(
    container,
    projects
) {

    container.innerHTML = "";


    const list =
        Array.isArray(projects)
            ? projects
            : [];


    if (!list.length) {

        const empty =
            createElement(
                "p",
                "",
                "Project suggestions will be added soon."
            );

        container.appendChild(
            empty
        );

        return;

    }


    list.forEach(
        function (project) {

            const card =
                createElement(
                    "div",
                    "career-project-card"
                );


            const title =
                createElement(
                    "h4",
                    "",
                    project.title
                );


            const description =
                createElement(
                    "p",
                    "",
                    project.description
                );


            card.appendChild(title);

            card.appendChild(
                description
            );


            container.appendChild(
                card
            );

        }
    );

}


/* =====================================================
   CAREER ROADMAP
===================================================== */

function renderCareerRoadmap(
    container,
    roadmap
) {

    container.innerHTML = "";


    const list =
        Array.isArray(roadmap)
            ? roadmap
            : [];


    if (!list.length) {

        const empty =
            createElement(
                "p",
                "",
                "Career roadmap information will be added soon."
            );

        container.appendChild(
            empty
        );

        return;

    }


    list.forEach(
        function (item, index) {

            const step =
                createElement(
                    "div",
                    "career-roadmap-step"
                );


            /*
               Career-data.js uses:

               step:
               description:

               So "step" is the actual
               roadmap title.
            */

            const number =
                createElement(
                    "div",
                    "career-roadmap-number",
                    String(index + 1)
                );


            const content =
                createElement(
                    "div",
                    "career-roadmap-content"
                );


            const title =
                createElement(
                    "h4",
                    "",
                    item.step ||
                    `Step ${index + 1}`
                );


            const description =
                createElement(
                    "p",
                    "",
                    item.description || ""
                );


            content.appendChild(
                title
            );


            content.appendChild(
                description
            );


            step.appendChild(
                number
            );


            step.appendChild(
                content
            );


            container.appendChild(
                step
            );

        }
    );

}


/* =====================================================
   CLOSE CAREER DETAILS
===================================================== */

function closeCareerDetailsModal() {

    if (!careerDetailsModal) {
        return;
    }


    careerDetailsModal.classList.remove(
        "active"
    );


    careerDetailsModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


if (closeCareerDetails) {

    closeCareerDetails.addEventListener(
        "click",
        closeCareerDetailsModal
    );

}


/* Close by clicking overlay */

if (careerDetailsModal) {

    careerDetailsModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                careerDetailsModal
            ) {

                closeCareerDetailsModal();

            }

        }
    );

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Escape"
        ) {

            return;

        }


        if (
            careerDetailsModal &&
            careerDetailsModal.classList.contains(
                "active"
            )
        ) {

            closeCareerDetailsModal();

        }


        if (
            profileModal &&
            profileModal.classList.contains(
                "active"
            )
        ) {

            closeProfile();

        }

    }
);


/* =====================================================
   HERO START BUTTON
===================================================== */

if (heroStartButton) {

    heroStartButton.addEventListener(
        "click",
        function () {

            const profile =
                getSavedProfile();


            if (profile) {

                if (profile.studentType === "school" && window.pathfinderOpenExplorerForProfile) {
                    window.pathfinderOpenExplorerForProfile(profile);
                    return;
                }

                const dashboard =
                    document.getElementById(
                        "careerDashboard"
                    );


                if (dashboard) {

                    dashboard.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    return;

                }

            }


            openProfileModal();

        }
    );

}


/* =====================================================
   RESTORE SAVED PROFILE
===================================================== */

const resetSavedProfileButton =
    document.getElementById("resetSavedProfileButton");

if (resetSavedProfileButton) {
    resetSavedProfileButton.addEventListener("click", function () {
        localStorage.removeItem(PROFILE_STORAGE_KEY);

        if (profileForm) profileForm.reset();

        updateAcademicFields();
        updateProfileButton();

        // Leave the form open so a new profile can be entered immediately.
        if (profileModal) {
            profileModal.classList.add("active");
            profileModal.setAttribute("aria-hidden", "false");
        }
    });
}


function restoreSavedProfile() {

    const profile =
        getSavedProfile();


    if (!profile) {

        return;

    }


    /* ---------------- NAME ---------------- */

    const profileName =
        document.getElementById(
            "profileName"
        );


    if (profileName) {

        profileName.value =
            profile.name || "";

    }


    /* ---------------- TYPE ---------------- */

    if (studentType) {

        studentType.value =
            profile.studentType || "";

    }


    updateAcademicFields();


    /* ---------------- SCHOOL ---------------- */

    if (
        profile.studentType ===
        "school"
    ) {

        if (schoolClass) {

            schoolClass.value =
                profile.class || "";

        }


        if (schoolStream) {

            schoolStream.value =
                profile.stream || "";

        }

    }


    /* ---------------- COLLEGE ---------------- */

    if (
        profile.studentType ===
        "college"
    ) {

        if (collegeCourse) {

            collegeCourse.value =
                profile.course || "";

        }


        if (collegeYear) {

            collegeYear.value =
                profile.year || "";

        }

    }


    updateProfileButton();


    /*
       Most important:
       Restore complete career dashboard
       from saved profile.
    */

    renderPersonalizedDashboard(
        profile
    );

}


/* =====================================================
   INITIAL STATE
===================================================== */

updateAcademicFields();

restoreSavedProfile();


/* =====================================================
   DEBUG INFORMATION
===================================================== */

console.log(
    "PathFinder loaded successfully."
);


console.log(
    "Career data available:",
    typeof CAREER_DETAILS !== "undefined"
);


console.log(
    "Saved profile:",
    getSavedProfile()
);


/* =====================================================
   END OF SCRIPT
===================================================== */

/* =====================================================
   COURSE EXPLORER — SCHOOL-FIRST GUIDANCE
   Uses PATHFINDER_DATA and CAREER_DETAILS as the source
===================================================== */
(function initPathfinderExplorer() {
    const explorer = document.getElementById("pathExplorer");
    const grid = document.getElementById("courseExplorerGrid");
    const details = document.getElementById("courseDetails");
    const selectedContent = document.getElementById("selectedCourseContent");
    const title = document.getElementById("pathExplorerTitle");
    const description = document.getElementById("pathExplorerDescription");
    const backButton = document.getElementById("backToCourses");
    if (!explorer || !grid || !details || !selectedContent ||
        typeof PATHFINDER_DATA === "undefined") return;

    const icons = {
        engineering: "⚙️", "computer-science": "💻", "information-technology": "🖥️",
        science: "🔬", architecture: "🏛️", medicine: "🩺", healthcare: "🩺",
        pharmacy: "💊", agriculture: "🌱", commerce: "📊", management: "📈",
        "arts-humanities": "📚", humanities: "📚", default: "🎓"
    };
    const $ = (tag, className, textValue) => {
        const el = document.createElement(tag);
        if (className) el.className = className;
        if (textValue !== undefined && textValue !== null) el.textContent = textValue;
        return el;
    };
    const addTextList = (parent, values, className = "detail-tag-list") => {
        const list = $("div", className);
        const cleanValues = [...new Set((Array.isArray(values) ? values : [])
            .filter(value => typeof value === "string")
            .map(value => value.trim())
            .filter(Boolean))];
        cleanValues.forEach(value => list.appendChild($("span", "detail-tag", value)));
        if (!list.childElementCount) list.appendChild($("p", "muted-copy", "Detailed guidance for this area is not yet available in the starter catalog."));
        parent.appendChild(list);
    };
    const courseGuidance = {
        "bba": { subjects: ["Principles of Management", "Marketing", "Business Economics", "Accounting", "Human Resource Management", "Business Communication"], skills: ["Communication", "Problem Solving", "Excel & Data Handling", "Presentation", "Teamwork"] },
        "bcom": { subjects: ["Financial Accounting", "Business Law", "Economics", "Taxation", "Cost Accounting", "Business Statistics"], skills: ["Accounting Software", "Excel", "Financial Analysis", "Attention to Detail"] },
        "bcom-honours": { subjects: ["Advanced Accounting", "Corporate Finance", "Business Law", "Taxation", "Economics", "Auditing"], skills: ["Financial Analysis", "Excel", "Research", "Accounting Tools"] },
        "bca": { subjects: ["Programming Fundamentals", "Database Management", "Web Development", "Computer Networks", "Data Structures", "Software Engineering"], skills: ["Programming", "SQL", "Problem Solving", "Git", "Web Development"] },
        "btech-cse": { subjects: ["Programming", "Data Structures & Algorithms", "Operating Systems", "Database Systems", "Computer Networks", "Software Engineering"], skills: ["Programming", "Git", "Problem Solving", "Testing", "System Design Basics"] },
        "bsc-computer-science": { subjects: ["Programming", "Algorithms", "Computer Architecture", "Operating Systems", "Databases", "Discrete Mathematics"], skills: ["Programming", "Analysis", "Debugging", "Research", "Projects"] },
        "ba": { subjects: ["Chosen Major Subject", "Social Sciences or Humanities", "Academic Writing", "Research Methods", "Communication"], skills: ["Writing", "Research", "Critical Thinking", "Communication"] },
        "mbbs": { subjects: ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology", "Clinical Practice"], skills: ["Clinical Reasoning", "Communication", "Patient Care", "Teamwork"] },
        "bpharm": { subjects: ["Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacology", "Pharmacognosy", "Pharmacy Practice"], skills: ["Accuracy", "Lab Skills", "Medication Safety", "Documentation"] },
        "bsc-nursing": { subjects: ["Nursing Foundations", "Anatomy & Physiology", "Community Health", "Medical-Surgical Nursing", "Patient Safety"], skills: ["Patient Care", "Communication", "Clinical Observation", "Teamwork"] }
    };
    const getCourseValues = (course, kind) => {
        const direct = kind === "subjects" ? (course.subjects || course.coreSubjects) : (course.skills || course.technologies);
        if (Array.isArray(direct) && direct.length) return direct;
        const fallback = courseGuidance[course.id] && courseGuidance[course.id][kind];
        if (fallback && fallback.length) return fallback;
        if (kind === "subjects") {
            const byCategory = {
                engineering: ["Mathematics", "Physics", "Engineering Fundamentals", "Problem Solving", "Practical Labs"],
                medicine: ["Human Biology", "Anatomy & Physiology", "Clinical Foundations", "Patient Safety"],
                healthcare: ["Human Biology", "Healthcare Fundamentals", "Patient Safety", "Clinical Practice"],
                pharmacy: ["Pharmaceutical Sciences", "Chemistry", "Pharmacology", "Lab Practice"],
                commerce: ["Accounting", "Economics", "Business Law", "Finance", "Statistics"],
                management: ["Management Principles", "Marketing", "Business Economics", "Accounting", "Communication"],
                "arts-humanities": ["Humanities", "Social Sciences", "Research Methods", "Academic Writing"],
                "life-sciences": ["Biology", "Chemistry", "Research Methods", "Laboratory Practice"]
            };
            return byCategory[course.category] || ["Core concepts", "Applied learning", "Research or practical work", "Institution-specific syllabus"];
        }
        return ["Communication", "Problem Solving", "Research", "Practical Projects"];
    };
    const sectionCard = (heading, intro, values, actionLabel, onClick) => {
        const card = $("article", "course-info-card");
        card.appendChild($("div", "course-info-icon", heading === "Core Subjects" ? "📘" : heading === "Skills & Technologies" ? "🛠️" : heading === "Job Opportunities" ? "💼" : "🚀"));
        card.appendChild($("h4", "", heading));
        card.appendChild($("p", "", intro));
        const preview = (values || []).slice(0, 3);
        addTextList(card, preview);
        const button = $("button", "text-action", actionLabel || "View more →");
        button.type = "button";
        button.addEventListener("click", onClick);
        card.appendChild(button);
        return card;
    };
    function renderCourses(courses, headingText, descriptionText) {
        explorer.hidden = false;
        grid.hidden = false;
        details.hidden = true;
        selectedContent.innerHTML = "";
        if (title) title.textContent = headingText;
        if (description) description.textContent = descriptionText;
        grid.innerHTML = "";
        if (!courses.length) {
            grid.appendChild($("p", "empty-state", "No matching courses are available in the current starter catalog. Try another stream or verify options with your institution."));
            return;
        }
        courses.forEach(course => {
            const card = $("article", "course-explorer-card");
            card.appendChild($("div", "course-card-icon", icons[course.category] || icons.default));
            card.appendChild($("span", "course-duration", course.duration || "Duration varies"));
            card.appendChild($("h3", "", course.shortName || course.name));
            card.appendChild($("p", "", course.description || "Explore this academic pathway."));
            const eligibility = $("p", "course-eligibility-note", course.eligibilityNote || "Check official admission criteria.");
            card.appendChild(eligibility);
            const button = $("button", "primary-button", "Explore course →");
            button.type = "button";
            button.addEventListener("click", () => renderCourseDetails(course.id));
            card.appendChild(button);
            grid.appendChild(card);
        });
    }
    function renderCourseDetails(courseId) {
        const course = getCourseById(courseId);
        if (!course) return;
        grid.hidden = true;
        details.hidden = false;
        selectedContent.innerHTML = "";
        const intro = $("div", "selected-course-intro course-title-reveal");
        intro.setAttribute("aria-live", "polite");
        intro.appendChild($("span", "section-label", (course.category || "ACADEMIC PATH").replaceAll("-", " ").toUpperCase()));
        intro.appendChild($("h2", "", course.name));
        intro.appendChild($("p", "", course.description || ""));
        intro.appendChild($("p", "course-meta-line", "Typical duration: " + (course.duration || "Varies by institution")));
        intro.appendChild($("p", "course-eligibility-note", "Eligibility: " + (course.eligibilityNote || "Confirm requirements with the institution offering the course.")));
        selectedContent.appendChild(intro);
        // Reveal the selected course first, then cascade its related cards into place.
        requestAnimationFrame(() => intro.classList.add("course-title-reveal-active"));

        const careerIds = getCourseCareerIds(courseId);
        const careers = careerIds.map(id => (typeof CAREER_DETAILS !== "undefined" ? CAREER_DETAILS[id] : null)).filter(Boolean);
        const subjects = getCourseValues(course, "subjects");
        const skillValues = [...new Set([...getCourseValues(course, "skills"), ...careers.flatMap(c => [...(c.skills || []), ...(c.technologies || [])])])];
        const sectionGrid = $("div", "course-info-grid");
        sectionGrid.appendChild(sectionCard("Core Subjects", "Typical topics to explore during this course. Compare these with your college syllabus.", subjects, "View subjects →", () => renderExpandedSection(course, "subjects", subjects)));
        sectionGrid.appendChild(sectionCard("Skills & Technologies", "Build practical and transferable skills alongside your studies.", skillValues, "View skills →", () => renderExpandedSection(course, "skills", skillValues)));
        sectionGrid.appendChild(sectionCard("Job Opportunities", careers.map(c => c.title).join(", ") || "Career options depend on your branch, electives, projects and further training.", careers.map(c => c.title), "View opportunities →", () => renderJobOptions(course, careers)));
        sectionGrid.appendChild(sectionCard("Careers & Future Paths", "Explore further study, specialization and adjacent career routes.", careers.map(c => c.title), "View future paths →", () => renderFuturePaths(course, careers)));
        selectedContent.appendChild(sectionGrid);
        Array.from(sectionGrid.children).forEach((card, index) => {
            card.classList.add("course-card-enter");
            card.style.setProperty("--card-order", index);
            requestAnimationFrame(() => card.classList.add("course-card-enter-active"));
        });

        const note = $("p", "catalog-disclaimer", "This is a starter guidance catalog, not an official eligibility or placement guarantee. Course structures, admission criteria, job requirements and compensation vary by institution, employer and location.");
        selectedContent.appendChild(note);
        if (backButton) backButton.focus({preventScroll:true});
    }
    function clearAndShowHeading(course, heading, introText) {
        selectedContent.innerHTML = "";
        const header = $("div", "detail-subview-header");
        const back = $("button", "secondary-button", "← Back to course overview");
        back.type = "button";
        back.addEventListener("click", () => renderCourseDetails(course.id));
        header.appendChild(back);
        header.appendChild($("h3", "", heading));
        header.appendChild($("p", "", introText));
        selectedContent.appendChild(header);
        return selectedContent;
    }
    function renderExpandedSection(course, type, values) {
        const headings = {subjects:"Core Subjects", skills:"Skills & Technologies"};
        const content = clearAndShowHeading(course, headings[type] || "Course details", "Use this as a learning checklist and compare it with your official course syllabus.");
        addTextList(content, values, "detail-tag-list expanded-tags");
        if (type === "subjects") {
            const extra = $("div", "guidance-panel");
            extra.appendChild($("h4", "", "How to use this list"));
            extra.appendChild($("p", "", "Start with your current syllabus, strengthen fundamentals, and add practical work where possible. Subject names and depth vary by institution."));
            content.appendChild(extra);
        }
    }
    function renderJobOptions(course, careers) {
        const content = clearAndShowHeading(course, "Job Opportunities", "These are possible roles to research—not guaranteed outcomes from completing a course.");
        if (!careers.length) {
            content.appendChild($("p", "empty-state", "No linked job profiles are included for this course in the current catalog. This avoids suggesting unsupported role mappings. Explore the course syllabus and institution-specific career services for relevant options."));
            return;
        }
        const cards = $("div", "career-option-grid");
        careers.forEach(career => {
            const card = $("article", "career-option-card");
            card.appendChild($("h4", "", career.title));
            card.appendChild($("p", "", career.description || ""));
            card.appendChild($("p", "muted-copy", "Requirements vary by employer. Review the role details before planning your learning path."));
            const button = $("button", "primary-button", "View job details →");
            button.type = "button";
            button.addEventListener("click", () => {
                if (typeof openCareerDetails === "function") openCareerDetails(career.id);
                else renderCareerInPage(course, career);
            });
            card.appendChild(button);
            cards.appendChild(card);
        });
        content.appendChild(cards);
    }
    function renderCareerInPage(course, career) {
        const content = clearAndShowHeading(course, career.title, career.description || "");
        [["Responsibilities", career.responsibilities || ["Work on role-related tasks and collaborate with a team."]],
         ["Study topics", career.subjects], ["Skills", career.skills], ["Tools & technologies", career.technologies],
         ["Projects to build", (career.projects || []).map(p => p.title + ": " + p.description)],
         ["Roadmap", (career.roadmap || []).map(p => p.step + ": " + p.description)]].forEach(([heading, values]) => {
            const block = $("section", "guidance-panel");
            block.appendChild($("h4", "", heading));
            addTextList(block, values);
            content.appendChild(block);
        });
        const salary = $("p", "catalog-disclaimer", "Salary: " + (career.salary || "Varies by location, employer, skills and experience."));
        content.appendChild(salary);
    }
    function renderFuturePaths(course, careers) {
        const content = clearAndShowHeading(course, "Careers & Future Paths", "Possible directions depend on your interests, skills, course choices and further learning.");
        const paths = [
            ["Further study", "Consider postgraduate study, professional certifications or specialization relevant to this course."],
            ["Projects and portfolio", "Build projects related to your subject area and document what you learned."],
            ["Internships and experience", "Look for internships, research opportunities, practical training or supervised experience where appropriate."],
            ["Adjacent careers", careers.length ? careers.map(c => c.title).join(" • ") : "Research roles that align with this course and verify their entry requirements."]
        ];
        paths.forEach(([h, p]) => {
            const block = $("section", "guidance-panel");
            block.appendChild($("h4", "", h));
            block.appendChild($("p", "", p));
            content.appendChild(block);
        });
    }
    function openExplorerForProfile(profile) {
        if (!profile) return;
        if (profile.studentType === "school") {
            const stream = getSchoolStreams().find(item => item.id === profile.stream);
            renderCourses(getCoursesForStream(profile.stream),
                (stream ? stream.name : "School") + " — Recommended Course Explorer",
                "Based on your selected stream. These are possible pathways, not an admission eligibility decision.");
        } else if (profile.studentType === "college") {
            const selected = getCollegeProfileCourse(profile.course);
            const catalogCourseId = selected && selected.catalogCourseId;
            if (catalogCourseId && getCourseById(catalogCourseId)) {
                renderCourseDetails(catalogCourseId);
                explorer.hidden = false;
            } else {
                renderCourses(getAllCourses(), "Explore Academic Paths",
                    "Choose a course area to review subjects, skills and possible career routes.");
            }
        }
        const section = document.getElementById("eligibility");
        if (section) section.scrollIntoView({behavior:"smooth", block:"start"});
    }

    window.pathfinderOpenExplorerForProfile = openExplorerForProfile;

    // Make the two academic-path cards genuine entry points.
    const eligibilityCards = document.querySelectorAll(".eligibility-card");
    eligibilityCards.forEach((card, index) => {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        const activate = () => {
            const saved = typeof getSavedProfile === "function" ? getSavedProfile() : null;
            if (saved && saved.studentType === (index === 0 ? "school" : "college")) {
                openExplorerForProfile(saved);
            } else if (typeof openProfileModal === "function") {
                openProfileModal();
                if (studentType) {
                    studentType.value = index === 0 ? "school" : "college";
                    if (typeof updateAcademicFields === "function") updateAcademicFields();
                }
            }
        };
        card.addEventListener("click", activate);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
        });
    });
    if (backButton) backButton.addEventListener("click", () => {
        const profile = typeof getSavedProfile === "function" ? getSavedProfile() : null;
        if (profile && profile.studentType === "school") openExplorerForProfile(profile);
        else renderCourses(getAllCourses(), "Explore Academic Paths", "Select a course to explore its subjects, skills and possible careers.");
    });

    // Turn static roadmap/career cards into working links to the existing career detail modal.
    function bindStaticCareerCards(selector) {
        document.querySelectorAll(selector).forEach(card => {
            const heading = card.querySelector("h3");
            if (!heading) return;
            const normalized = heading.textContent.toLowerCase();
            let career = null;
            if (typeof CAREER_DETAILS !== "undefined") {
                career = Object.values(CAREER_DETAILS).find(item => {
                    const t = (item.title || "").toLowerCase();
                    return t === normalized ||
                        (normalized.includes("software") && t.includes("software")) ||
                        (normalized.includes("data analyst") && t.includes("data analyst")) ||
                        (normalized.includes("digital marketing") && t.includes("marketing")) ||
                        (normalized.includes("ui/ux") && (t.includes("design") || t.includes("ui/ux")));
                });
            }
            if (!career) return;
            card.tabIndex = 0;
            card.setAttribute("role", "button");
            const open = () => typeof openCareerDetails === "function" && openCareerDetails(career.id);
            card.addEventListener("click", open);
            card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
        });
    }
    bindStaticCareerCards(".roadmap-card");
    bindStaticCareerCards(".career-card");

    // Close mobile navigation after selecting any in-page link.
    const mobileNav = document.getElementById("mobileNav");
    const menuButton = document.getElementById("menuButton");
    if (mobileNav) mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
        mobileNav.classList.remove("active");
        if (menuButton) menuButton.setAttribute("aria-expanded", "false");
    }));

    // If the user has already saved a profile, restore the right journey.
    const saved = typeof getSavedProfile === "function" ? getSavedProfile() : null;
    if (saved && saved.studentType === "school") {
        renderCourses(getCoursesForStream(saved.stream),
            (getSchoolStreams().find(s => s.id === saved.stream)?.name || "School") + " — Recommended Course Explorer",
            "Choose a course to explore subjects, skills, job opportunities and future paths.");
    }
})();


/* ===== Theme and home-page interactions ===== */
(() => {
    const toggle = document.getElementById("themeToggle");
    const initial = localStorage.getItem("pathfinder-theme") === "dark" ? "dark" : "light";

    function setTheme(theme) {
        document.documentElement.dataset.theme = theme;
        if (toggle) {
            toggle.textContent = theme === "dark" ? "☀️" : "🌙";
            toggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
            toggle.title = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
        }
        localStorage.setItem("pathfinder-theme", theme);
    }
    setTheme(initial);
    if (toggle) toggle.addEventListener("click", () => {
        setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });

    document.querySelectorAll("[data-quick-start]").forEach(button => {
        button.addEventListener("click", () => {
            if (button.dataset.quickStart === "profile") {
                if (typeof openProfileModal === "function") openProfileModal();
                else document.getElementById("profileButton")?.click();
            } else {
                document.getElementById("careers")?.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    document.querySelectorAll(".eligibility-card").forEach((card, index) => {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", index === 0 ? "Explore school paths" : "Explore college paths");
        const activate = () => {
            if (typeof openProfileModal === "function") openProfileModal();
            else document.getElementById("profileButton")?.click();
        };
        card.addEventListener("click", activate);
        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
        });
    });
})();



/* ===== PathFinder Home Slider Behaviour ===== */
(() => {
    const slider = document.getElementById("homeSlider");

    if (!slider || slider.dataset.initialized === "true") return;
    slider.dataset.initialized = "true";

    const slides = Array.from(slider.querySelectorAll(".pf-slide"));
    const dots = Array.from(slider.querySelectorAll(".pf-dot"));
    const previousButton = slider.querySelector(".pf-slider-prev");
    const nextButton = slider.querySelector(".pf-slider-next");

    if (!slides.length) return;

    let currentIndex = 0;
    let autoPlay;

    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;
            slide.classList.toggle("active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });

        dots.forEach((dot, i) => {
            const isActive = i === currentIndex;
            dot.classList.toggle("active", isActive);
            dot.setAttribute("aria-current", isActive ? "true" : "false");
        });
    }

    function stopAutoPlay() {
        window.clearInterval(autoPlay);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlay = window.setInterval(() => {
            showSlide(currentIndex + 1);
        }, 5000);
    }

    previousButton?.addEventListener("click", () => {
        showSlide(currentIndex - 1);
        startAutoPlay();
    });

    nextButton?.addEventListener("click", () => {
        showSlide(currentIndex + 1);
        startAutoPlay();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            startAutoPlay();
        });
    });

    slider.addEventListener("mouseenter", stopAutoPlay);
    slider.addEventListener("mouseleave", startAutoPlay);
    slider.addEventListener("focusin", stopAutoPlay);
    slider.addEventListener("focusout", startAutoPlay);

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    });

    showSlide(0);
    startAutoPlay();
})();


/* ===== Fix Home navigation ===== */

document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const homeSection = document.getElementById("home");

        if (homeSection) {
            homeSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", "#home");
        }

        // Close mobile menu if it is open.
        const mobileNav = document.getElementById("mobileNav");
        const menuButton = document.getElementById("menuButton");

        if (mobileNav) {
            mobileNav.classList.remove("active");
        }

        if (menuButton) {
            menuButton.setAttribute("aria-expanded", "false");
        }
    });
});



/* ===== Reliable Home navigation fix ===== */

document.addEventListener("click", function (event) {
    const homeLink = event.target.closest('a[href="#home"]');

    if (!homeLink) return;

    event.preventDefault();

    const homeSection = document.getElementById("home");

    if (homeSection) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        history.replaceState(null, "", "#home");
    }

    const mobileNav = document.getElementById("mobileNav");
    const menuButton = document.getElementById("menuButton");

    if (mobileNav) {
        mobileNav.classList.remove("active");
    }

    if (menuButton) {
        menuButton.setAttribute("aria-expanded", "false");
    }
}, true);