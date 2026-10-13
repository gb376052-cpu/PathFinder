/* =========================================================
   PATHFINDER - CAREER DATA
   Phase 3 - Career Intelligence Foundation
========================================================= */


/*
    IMPORTANT

    This file contains career-specific guidance.

    Later this data can be moved to:

        API
          ↓
        Backend
          ↓
        Database

    without changing the career-details UI.
*/


const CAREER_DETAILS = {


    /* =====================================================
       SOFTWARE DEVELOPER
    ====================================================== */

    "software-developer": {

        id: "software-developer",

        title: "Software Developer",

        description:
            "Design, build, test, and maintain software applications for users and organizations.",


        salary:
            "Entry-level salaries can vary widely by skills, location, company, and experience. Strong technical skills and practical projects can improve opportunities.",


        subjects: [

            "Programming Fundamentals",

            "Data Structures",

            "Database Management",

            "Operating Systems",

            "Software Engineering"

        ],


        focusAreas: [

            "Programming",

            "Problem Solving",

            "Data Structures",

            "Algorithms",

            "Software Development"

        ],


        skills: [

            "Programming",

            "Problem Solving",

            "Debugging",

            "Logical Thinking",

            "Version Control"

        ],


        technologies: [

            "Python",

            "Java",

            "JavaScript",

            "SQL",

            "Git",

            "GitHub"

        ],


        projects: [

            {
                title: "Student Management System",

                description:
                    "Build an application to manage student records, courses, and academic information."
            },

            {
                title: "Task Management Application",

                description:
                    "Create an application where users can create, update, complete, and organize tasks."
            },

            {
                title: "Expense Tracker",

                description:
                    "Build an application that records expenses and presents useful spending information."
            }

        ],


        roadmap: [

            {
                step: "Learn Programming Fundamentals",

                description:
                    "Understand variables, conditions, loops, functions, arrays, and basic programming concepts."
            },

            {
                step: "Learn Data Structures and Algorithms",

                description:
                    "Develop problem-solving ability using common data structures and algorithms."
            },

            {
                step: "Learn Databases",

                description:
                    "Understand relational databases, SQL, tables, relationships, and basic database design."
            },

            {
                step: "Learn Git and GitHub",

                description:
                    "Learn how to manage source code and collaborate on software projects."
            },

            {
                step: "Build Real Projects",

                description:
                    "Create projects that demonstrate your programming and software development skills."
            },

            {
                step: "Prepare for Internships and Jobs",

                description:
                    "Build a portfolio, practice technical interviews, and apply for relevant opportunities."
            }

        ]

    },


    /* =====================================================
       FRONTEND DEVELOPER
    ====================================================== */

    "frontend-developer": {

        id: "frontend-developer",

        title: "Frontend Developer",

        description:
            "Build interactive, responsive, and user-friendly interfaces for websites and web applications.",


        salary:
            "Entry-level salaries vary by location, company, portfolio, and technical skills. Experience with modern frontend technologies can improve opportunities.",


        subjects: [

            "Web Development",

            "Programming",

            "Computer Fundamentals",

            "Database Basics",

            "Software Engineering"

        ],


        focusAreas: [

            "Web Development",

            "JavaScript",

            "Responsive Design",

            "User Interface Development",

            "Problem Solving"

        ],


        skills: [

            "HTML",

            "CSS",

            "JavaScript",

            "Responsive Design",

            "Debugging",

            "Problem Solving"

        ],


        technologies: [

            "HTML",

            "CSS",

            "JavaScript",

            "React",

            "Git",

            "GitHub"

        ],


        projects: [

            {
                title: "Personal Portfolio",

                description:
                    "Create a responsive portfolio website showcasing your skills, projects, and learning journey."
            },

            {
                title: "E-Commerce Website",

                description:
                    "Build a product listing and shopping interface with search, filters, and responsive design."
            },

            {
                title: "Weather Dashboard",

                description:
                    "Create a weather interface that displays location-based weather information using an API."
            }

        ],


        roadmap: [

            {
                step: "Learn HTML",

                description:
                    "Understand semantic HTML, forms, links, images, tables, and page structure."
            },

            {
                step: "Learn CSS",

                description:
                    "Learn layouts, Flexbox, Grid, responsive design, animations, and modern styling."
            },

            {
                step: "Learn JavaScript",

                description:
                    "Understand variables, functions, arrays, objects, DOM manipulation, events, and asynchronous JavaScript."
            },

            {
                step: "Learn Git and GitHub",

                description:
                    "Track your code and publish projects using version control."
            },

            {
                step: "Learn a Frontend Framework",

                description:
                    "After JavaScript fundamentals, learn a framework such as React."
            },

            {
                step: "Build Portfolio Projects",

                description:
                    "Create several practical projects that demonstrate real frontend development skills."
            },

            {
                step: "Prepare for Opportunities",

                description:
                    "Improve your portfolio, resume, interview skills, and apply for internships or jobs."
            }

        ]

    },


    /* =====================================================
       BACKEND DEVELOPER
    ====================================================== */

    "backend-developer": {

        id: "backend-developer",

        title: "Backend Developer",

        description:
            "Build server-side applications, APIs, databases, authentication systems, and application logic.",


        salary:
            "Compensation varies based on technology stack, company, location, experience, and system-design skills.",


        subjects: [

            "Programming",

            "Database Management",

            "Computer Networks",

            "Operating Systems",

            "Software Engineering"

        ],


        focusAreas: [

            "Programming",

            "APIs",

            "Databases",

            "Server-side Development",

            "System Design"

        ],


        skills: [

            "Programming",

            "API Development",

            "Database Design",

            "Authentication",

            "Debugging",

            "Problem Solving"

        ],


        technologies: [

            "Node.js",

            "Python",

            "Java",

            "SQL",

            "REST APIs",

            "Git"

        ],


        projects: [

            {
                title: "Student Management API",

                description:
                    "Build an API for managing students, courses, and academic records."
            },

            {
                title: "Authentication System",

                description:
                    "Create a backend system with registration, login, authentication, and authorization."
            },

            {
                title: "E-Commerce API",

                description:
                    "Build APIs for products, users, orders, and basic shopping functionality."
            }

        ],


        roadmap: [

            {
                step: "Learn Programming",

                description:
                    "Build strong fundamentals in one programming language."
            },

            {
                step: "Learn Databases",

                description:
                    "Understand SQL, database design, relationships, and queries."
            },

            {
                step: "Learn HTTP and APIs",

                description:
                    "Understand how browsers, servers, HTTP requests, and REST APIs communicate."
            },

            {
                step: "Learn a Backend Technology",

                description:
                    "Choose a backend stack such as Node.js, Python, Java, or another suitable technology."
            },

            {
                step: "Build Backend Projects",

                description:
                    "Create APIs and applications that demonstrate practical backend skills."
            },

            {
                step: "Learn Deployment Basics",

                description:
                    "Understand hosting, environment variables, databases, and basic deployment."
            }

        ]

    },


    /* =====================================================
       DATA ANALYST
    ====================================================== */

    "data-analyst": {

        id: "data-analyst",

        title: "Data Analyst",

        description:
            "Analyze data, identify patterns, create reports, and communicate insights that support better decisions.",


        salary:
            "Salary varies by company, location, analytical skills, tools, experience, and industry.",


        subjects: [

            "Statistics",

            "Mathematics",

            "Database Management",

            "Data Analysis",

            "Business Fundamentals"

        ],


        focusAreas: [

            "Statistics",

            "Data Analysis",

            "SQL",

            "Data Visualization",

            "Business Understanding"

        ],


        skills: [

            "Analytical Thinking",

            "Statistics",

            "SQL",

            "Data Cleaning",

            "Data Visualization",

            "Communication"

        ],


        technologies: [

            "Excel",

            "SQL",

            "Python",

            "Pandas",

            "Power BI",

            "Tableau"

        ],


        projects: [

            {
                title: "Sales Analysis Dashboard",

                description:
                    "Analyze sales data and create a dashboard showing trends, products, and performance."
            },

            {
                title: "Student Performance Analysis",

                description:
                    "Analyze academic data to identify patterns and useful performance insights."
            },

            {
                title: "Customer Analysis",

                description:
                    "Study customer data to understand purchasing patterns and customer segments."
            }

        ],


        roadmap: [

            {
                step: "Learn Excel",

                description:
                    "Learn formulas, filtering, pivot tables, charts, and basic data analysis."
            },

            {
                step: "Learn Statistics",

                description:
                    "Understand averages, distributions, probability, correlation, and basic statistical reasoning."
            },

            {
                step: "Learn SQL",

                description:
                    "Learn how to retrieve, filter, join, group, and analyze data from databases."
            },

            {
                step: "Learn Data Visualization",

                description:
                    "Create meaningful dashboards and visualizations using appropriate tools."
            },

            {
                step: "Learn Python for Data Analysis",

                description:
                    "Use Python and libraries such as Pandas for data cleaning and analysis."
            },

            {
                step: "Build Data Projects",

                description:
                    "Create complete analysis projects and explain the insights you discovered."
            }

        ]

    },


    /* =====================================================
       QA ENGINEER
    ====================================================== */

    "qa-engineer": {

        id: "qa-engineer",

        title: "QA Engineer",

        description:
            "Test software applications, identify defects, and help teams deliver reliable and high-quality products.",


        salary:
            "Compensation varies according to experience, company, location, testing skills, and automation knowledge.",


        subjects: [

            "Software Engineering",

            "Programming",

            "Database Management",

            "Computer Fundamentals",

            "Software Testing"

        ],


        focusAreas: [

            "Testing",

            "Debugging",

            "Quality Assurance",

            "Automation",

            "Problem Solving"

        ],


        skills: [

            "Test Planning",

            "Bug Reporting",

            "Problem Solving",

            "Attention to Detail",

            "Basic Programming",

            "Communication"

        ],


        technologies: [

            "Selenium",

            "Postman",

            "JavaScript",

            "Python",

            "Git",

            "SQL"

        ],


        projects: [

            {
                title: "Website Testing Project",

                description:
                    "Test a web application and document functional, usability, and responsive issues."
            },

            {
                title: "API Testing Project",

                description:
                    "Test REST APIs using different request types, parameters, and expected responses."
            },

            {
                title: "Automation Testing Project",

                description:
                    "Create automated tests for important user flows in a sample web application."
            }

        ],


        roadmap: [

            {
                step: "Learn Software Testing Fundamentals",

                description:
                    "Understand test cases, test scenarios, defects, regression testing, and software quality."
            },

            {
                step: "Learn Manual Testing",

                description:
                    "Practice testing applications and documenting bugs clearly."
            },

            {
                step: "Learn API Testing",

                description:
                    "Understand HTTP requests and test APIs using appropriate tools."
            },

            {
                step: "Learn Basic Programming",

                description:
                    "Learn enough programming to understand application behavior and create automated tests."
            },

            {
                step: "Learn Automation Testing",

                description:
                    "Use an automation framework and build automated test cases."
            },

            {
                step: "Build Testing Projects",

                description:
                    "Create a testing portfolio containing test plans, bug reports, API tests, and automation examples."
            }

        ]

    },


    /* =====================================================
       ACCOUNTANT
    ====================================================== */

    "accountant": {

        id: "accountant",

        title: "Accountant",

        description:
            "Maintain financial records, prepare reports, manage accounting information, and support financial operations.",


        salary:
            "Salary varies with qualifications, accounting knowledge, certifications, organization, location, and experience.",


        subjects: [

            "Financial Accounting",

            "Cost Accounting",

            "Business Law",

            "Taxation",

            "Financial Management"

        ],


        focusAreas: [

            "Accounting",

            "Finance",

            "Taxation",

            "Financial Reporting",

            "Accuracy"

        ],


        skills: [

            "Accounting",

            "Numerical Ability",

            "Attention to Detail",

            "Financial Analysis",

            "Communication"

        ],


        technologies: [

            "Microsoft Excel",

            "Tally",

            "Accounting Software",

            "ERP Systems",

            "Spreadsheet Tools"

        ],


        projects: [

            {
                title: "Personal Finance Tracker",

                description:
                    "Create a structured spreadsheet for tracking income, expenses, savings, and categories."
            },

            {
                title: "Small Business Accounting Project",

                description:
                    "Prepare sample financial records and basic reports for a fictional small business."
            },

            {
                title: "Financial Analysis Workbook",

                description:
                    "Create an Excel workbook that analyzes financial transactions and summarizes key figures."
            }

        ],


        roadmap: [

            {
                step: "Strengthen Accounting Fundamentals",

                description:
                    "Understand journal entries, ledgers, trial balance, and financial statements."
            },

            {
                step: "Learn Excel",

                description:
                    "Use formulas, tables, filters, and basic financial analysis tools."
            },

            {
                step: "Learn Accounting Software",

                description:
                    "Gain practical familiarity with commonly used accounting software."
            },

            {
                step: "Understand Tax and Compliance Basics",

                description:
                    "Learn the relevant concepts and processes required for accounting work."
            },

            {
                step: "Practice Realistic Accounting Tasks",

                description:
                    "Work on sample business transactions and financial reporting exercises."
            }

        ]

    },


    /* =====================================================
       FINANCIAL ANALYST
    ====================================================== */

    "financial-analyst": {

        id: "financial-analyst",

        title: "Financial Analyst",

        description:
            "Analyze financial information, business performance, and market-related data to support financial decisions.",


        salary:
            "Compensation depends on organization, financial knowledge, analytical ability, qualifications, location, and experience.",


        subjects: [

            "Financial Management",

            "Accounting",

            "Economics",

            "Statistics",

            "Business Mathematics"

        ],


        focusAreas: [

            "Financial Analysis",

            "Excel",

            "Accounting",

            "Business Analysis",

            "Data Interpretation"

        ],


        skills: [

            "Financial Modeling",

            "Excel",

            "Analytical Thinking",

            "Accounting",

            "Communication"

        ],


        technologies: [

            "Microsoft Excel",

            "Power BI",

            "SQL",

            "Financial Modeling Tools",

            "Presentation Tools"

        ],


        projects: [

            {
                title: "Company Financial Analysis",

                description:
                    "Analyze sample financial statements and identify important business trends."
            },

            {
                title: "Financial Dashboard",

                description:
                    "Create a dashboard showing revenue, expenses, profit, and financial trends."
            },

            {
                title: "Budget Planning Model",

                description:
                    "Build a spreadsheet model for planning and comparing business budgets."
            }

        ],


        roadmap: [

            {
                step: "Strengthen Accounting and Finance",

                description:
                    "Build a strong foundation in accounting, financial statements, and finance concepts."
            },

            {
                step: "Master Excel",

                description:
                    "Learn formulas, pivot tables, charts, lookup functions, and financial models."
            },

            {
                step: "Learn Financial Analysis",

                description:
                    "Practice interpreting financial statements and business performance."
            },

            {
                step: "Learn Data Visualization",

                description:
                    "Present financial information using clear dashboards and visualizations."
            },

            {
                step: "Build Financial Projects",

                description:
                    "Create realistic financial analysis and modeling projects for your portfolio."
            }

        ]

    },


    /* =====================================================
       BUSINESS ANALYST
    ====================================================== */

    "business-analyst": {

        id: "business-analyst",

        title: "Business Analyst",

        description:
            "Understand business problems, analyze requirements, and help organizations improve processes and solutions.",


        salary:
            "Salary varies according to industry, company, analytical ability, communication skills, experience, and location.",


        subjects: [

            "Business Management",

            "Economics",

            "Statistics",

            "Business Communication",

            "Information Systems"

        ],


        focusAreas: [

            "Business Analysis",

            "Problem Solving",

            "Communication",

            "Data Analysis",

            "Process Improvement"

        ],


        skills: [

            "Requirement Analysis",

            "Communication",

            "Problem Solving",

            "Documentation",

            "Data Analysis"

        ],


        technologies: [

            "Excel",

            "SQL",

            "Power BI",

            "Jira",

            "Confluence",

            "Presentation Tools"

        ],


        projects: [

            {
                title: "Business Process Analysis",

                description:
                    "Document an existing business process and identify possible improvements."
            },

            {
                title: "Requirement Document",

                description:
                    "Create a sample requirement document for a software or business project."
            },

            {
                title: "Business Dashboard",

                description:
                    "Create a dashboard that communicates important business performance metrics."
            }

        ],


        roadmap: [

            {
                step: "Understand Business Fundamentals",

                description:
                    "Learn how organizations, departments, customers, and business processes work."
            },

            {
                step: "Develop Analytical Skills",

                description:
                    "Practice breaking complex problems into smaller, understandable parts."
            },

            {
                step: "Learn Documentation",

                description:
                    "Learn how to write requirements, process documents, and clear project information."
            },

            {
                step: "Learn Data Tools",

                description:
                    "Build practical skills with Excel, SQL, and visualization tools."
            },

            {
                step: "Practice Business Case Studies",

                description:
                    "Analyze realistic business problems and propose structured solutions."
            }

        ]

    },


    /* =====================================================
       MARKETING EXECUTIVE
    ====================================================== */

    "marketing-executive": {

        id: "marketing-executive",

        title: "Marketing Executive",

        description:
            "Support marketing campaigns, brand communication, customer engagement, and promotional activities.",


        salary:
            "Compensation varies by industry, organization, experience, communication ability, and marketing skills.",


        subjects: [

            "Marketing Management",

            "Business Communication",

            "Consumer Behaviour",

            "Business Management",

            "Economics"

        ],


        focusAreas: [

            "Digital Marketing",

            "Communication",

            "Content",

            "Market Research",

            "Branding"

        ],


        skills: [

            "Communication",

            "Content Creation",

            "Market Research",

            "Presentation",

            "Analytical Thinking"

        ],


        technologies: [

            "Google Analytics",

            "Canva",

            "Google Ads",

            "Meta Ads",

            "Excel",

            "Content Management Systems"

        ],


        projects: [

            {
                title: "Brand Campaign",

                description:
                    "Create a sample marketing campaign for a fictional product or service."
            },

            {
                title: "Social Media Strategy",

                description:
                    "Create a structured content and social media plan for a fictional brand."
            },

            {
                title: "Market Research Report",

                description:
                    "Research a target market and prepare a report containing customer and competitor insights."
            }

        ],


        roadmap: [

            {
                step: "Learn Marketing Fundamentals",

                description:
                    "Understand customers, markets, positioning, branding, and marketing strategy."
            },

            {
                step: "Learn Digital Marketing",

                description:
                    "Understand search, social media, content, email, and digital advertising fundamentals."
            },

            {
                step: "Develop Communication Skills",

                description:
                    "Practice writing, presentations, storytelling, and professional communication."
            },

            {
                step: "Learn Analytics",

                description:
                    "Understand basic marketing metrics and how to evaluate campaign performance."
            },

            {
                step: "Build Marketing Projects",

                description:
                    "Create campaigns, content strategies, research reports, and portfolio examples."
            }

        ]

    },


    /* =====================================================
       HR EXECUTIVE
    ====================================================== */

    "hr-executive": {

        id: "hr-executive",

        title: "HR Executive",

        description:
            "Support recruitment, employee operations, onboarding, documentation, and human resource activities.",


        salary:
            "Compensation varies by organization, location, qualifications, communication skills, and experience.",


        subjects: [

            "Human Resource Management",

            "Organizational Behaviour",

            "Business Communication",

            "Business Management",

            "Labour Relations"

        ],


        focusAreas: [

            "Communication",

            "Recruitment",

            "People Management",

            "Documentation",

            "Organization"

        ],


        skills: [

            "Communication",

            "Interviewing",

            "Organization",

            "Documentation",

            "People Skills"

        ],


        technologies: [

            "Microsoft Excel",

            "HR Management Systems",

            "Recruitment Platforms",

            "Google Workspace",

            "Presentation Tools"

        ],


        projects: [

            {
                title: "Recruitment Process Plan",

                description:
                    "Design a sample recruitment workflow from job posting to candidate onboarding."
            },

            {
                title: "Employee Onboarding Guide",

                description:
                    "Create an onboarding document for new employees joining a fictional organization."
            },

            {
                title: "Employee Survey Analysis",

                description:
                    "Analyze a sample employee survey and summarize the major findings."
            }

        ],


        roadmap: [

            {
                step: "Learn HR Fundamentals",

                description:
                    "Understand recruitment, onboarding, employee management, and organizational processes."
            },

            {
                step: "Develop Communication Skills",

                description:
                    "Improve professional writing, speaking, interviewing, and interpersonal communication."
            },

            {
                step: "Learn Recruitment Processes",

                description:
                    "Understand job descriptions, screening, interviews, and candidate coordination."
            },

            {
                step: "Learn HR Tools",

                description:
                    "Gain familiarity with spreadsheets, HR systems, documentation, and recruitment platforms."
            },

            {
                step: "Build HR Projects",

                description:
                    "Create practical recruitment, onboarding, and employee-management examples."
            }

        ]

    },


    /* =====================================================
       SALES EXECUTIVE
    ====================================================== */

    "sales-executive": {

        id: "sales-executive",

        title: "Sales Executive",

        description:
            "Build customer relationships, understand customer needs, communicate product value, and contribute to business growth.",


        salary:
            "Compensation varies by organization, industry, location, experience, and performance-based incentives.",


        subjects: [

            "Marketing",

            "Business Management",

            "Business Communication",

            "Economics",

            "Consumer Behaviour"

        ],


        focusAreas: [

            "Communication",

            "Customer Understanding",

            "Sales",

            "Negotiation",

            "Business Development"

        ],


        skills: [

            "Communication",

            "Negotiation",

            "Presentation",

            "Customer Relationship Management",

            "Problem Solving"

        ],


        technologies: [

            "CRM Software",

            "Excel",

            "Google Workspace",

            "Email Tools",

            "Presentation Software"

        ],


        projects: [

            {
                title: "Sales Pitch Project",

                description:
                    "Create and present a structured sales pitch for a fictional product."
            },

            {
                title: "Customer Persona",

                description:
                    "Create customer profiles and identify their needs, problems, and buying behaviour."
            },

            {
                title: "Sales Tracking Dashboard",

                description:
                    "Create a spreadsheet dashboard to track leads, conversions, and sales performance."
            }

        ],


        roadmap: [

            {
                step: "Learn Sales Fundamentals",

                description:
                    "Understand leads, prospects, customer needs, sales funnels, and conversions."
            },

            {
                step: "Develop Communication Skills",

                description:
                    "Improve speaking, listening, presentation, and professional communication."
            },

            {
                step: "Learn Negotiation",

                description:
                    "Practice handling objections and communicating value effectively."
            },

            {
                step: "Learn CRM Tools",

                description:
                    "Understand how customer relationship management systems support sales teams."
            },

            {
                step: "Practice Realistic Sales Scenarios",

                description:
                    "Create sales pitches, customer personas, and sample sales strategies."
            }

        ]

    },


    /* =====================================================
       CONTENT WRITER
    ====================================================== */

    "content-writer": {

        id: "content-writer",

        title: "Content Writer",

        description:
            "Create clear, useful, and engaging written content for websites, businesses, products, and digital platforms.",


        salary:
            "Earnings vary based on writing ability, specialization, experience, employer, freelance work, and portfolio quality.",


        subjects: [

            "English / Language",

            "Communication",

            "Academic Writing",

            "Research",

            "Media Studies"

        ],


        focusAreas: [

            "Writing",

            "Research",

            "Storytelling",

            "Communication",

            "Digital Content"

        ],


        skills: [

            "Writing",

            "Research",

            "Editing",

            "Grammar",

            "Communication",

            "Creativity"

        ],


        technologies: [

            "Google Docs",

            "Microsoft Word",

            "WordPress",

            "Canva",

            "Content Management Systems"

        ],


        projects: [

            {
                title: "Personal Writing Portfolio",

                description:
                    "Create a collection of articles and writing samples covering different topics."
            },

            {
                title: "Blog Website",

                description:
                    "Create a simple blog and publish structured, useful articles."
            },

            {
                title: "Product Content Project",

                description:
                    "Write product descriptions, feature explanations, and promotional content for a fictional product."
            }

        ],


        roadmap: [

            {
                step: "Strengthen Writing Fundamentals",

                description:
                    "Improve grammar, sentence structure, clarity, vocabulary, and professional writing."
            },

            {
                step: "Learn Research",

                description:
                    "Practice finding reliable information and organizing research before writing."
            },

            {
                step: "Learn Digital Content",

                description:
                    "Understand blogs, websites, product content, social media, and other digital formats."
            },

            {
                step: "Build a Writing Portfolio",

                description:
                    "Publish different types of writing samples that demonstrate your abilities."
            },

            {
                step: "Explore Professional Opportunities",

                description:
                    "Look for internships, freelance opportunities, content roles, and related positions."
            }

        ]

    },


    /* =====================================================
       SOCIAL MEDIA EXECUTIVE
    ====================================================== */

    "social-media-executive": {

        id: "social-media-executive",

        title: "Social Media Executive",

        description:
            "Plan, create, publish, and analyze content across social media platforms for organizations and brands.",


        salary:
            "Compensation varies by organization, experience, platform knowledge, creativity, and analytical skills.",


        subjects: [

            "Marketing",

            "Communication",

            "Media Studies",

            "Business Management",

            "Consumer Behaviour"

        ],


        focusAreas: [

            "Content Creation",

            "Social Media",

            "Brand Communication",

            "Analytics",

            "Audience Understanding"

        ],


        skills: [

            "Content Creation",

            "Communication",

            "Creativity",

            "Analytics",

            "Trend Research"

        ],


        technologies: [

            "Canva",

            "Meta Business Suite",

            "Google Analytics",

            "Social Media Platforms",

            "Content Scheduling Tools"

        ],


        projects: [

            {
                title: "Social Media Content Calendar",

                description:
                    "Create a one-month content calendar for a fictional brand."
            },

            {
                title: "Brand Social Page",

                description:
                    "Create a complete sample social media strategy and content set."
            },

            {
                title: "Campaign Performance Report",

                description:
                    "Analyze sample campaign metrics and prepare a performance report."
            }

        ],


        roadmap: [

            {
                step: "Learn Social Media Fundamentals",

                description:
                    "Understand major platforms, audiences, content formats, and engagement."
            },

            {
                step: "Learn Content Creation",

                description:
                    "Practice writing captions, designing visuals, and creating short-form content."
            },

            {
                step: "Learn Analytics",

                description:
                    "Understand reach, engagement, clicks, conversions, and other basic metrics."
            },

            {
                step: "Build Campaign Projects",

                description:
                    "Create sample campaigns and content calendars for fictional brands."
            },

            {
                step: "Build a Portfolio",

                description:
                    "Collect your strongest social media strategies, designs, content, and reports."
            }

        ]

    },


    /* =====================================================
       RESEARCH ASSISTANT
    ====================================================== */

    "research-assistant": {

        id: "research-assistant",

        title: "Research Assistant",

        description:
            "Support research projects through information gathering, documentation, analysis, experiments, and reporting.",


        salary:
            "Compensation varies depending on institution, research area, qualification, location, and experience.",


        subjects: [

            "Research Methods",

            "Statistics",

            "Academic Writing",

            "Subject-Specific Studies",

            "Data Analysis"

        ],


        focusAreas: [

            "Research",

            "Critical Thinking",

            "Data Analysis",

            "Academic Writing",

            "Documentation"

        ],


        skills: [

            "Research",

            "Critical Thinking",

            "Data Collection",

            "Analysis",

            "Writing",

            "Documentation"

        ],


        technologies: [

            "Excel",

            "Google Scholar",

            "Reference Management Tools",

            "Python",

            "Statistical Software"

        ],


        projects: [

            {
                title: "Literature Review",

                description:
                    "Study existing research on a selected topic and organize the findings."
            },

            {
                title: "Survey Research Project",

                description:
                    "Design a simple survey, collect responses, analyze the results, and present findings."
            },

            {
                title: "Research Report",

                description:
                    "Prepare a structured report containing research questions, methods, findings, and conclusions."
            }

        ],


        roadmap: [

            {
                step: "Learn Research Fundamentals",

                description:
                    "Understand research questions, sources, methodology, data collection, and analysis."
            },

            {
                step: "Improve Academic Writing",

                description:
                    "Learn how to structure research reports and communicate findings clearly."
            },

            {
                step: "Learn Data Analysis",

                description:
                    "Develop basic quantitative or qualitative analysis skills relevant to your field."
            },

            {
                step: "Work on Research Projects",

                description:
                    "Complete small research projects and document your methodology and findings."
            },

            {
                step: "Explore Research Opportunities",

                description:
                    "Look for research internships, academic projects, laboratories, institutions, or organizations relevant to your field."
            }

        ]

    },


    /* =====================================================
       QUALITY ANALYST
    ====================================================== */

    "quality-analyst": {

        id: "quality-analyst",

        title: "Quality Analyst",

        description:
            "Analyze products, processes, or services to identify quality issues and support continuous improvement.",


        salary:
            "Compensation varies according to industry, organization, analytical skills, location, and experience.",


        subjects: [

            "Statistics",

            "Quality Management",

            "Business Management",

            "Data Analysis",

            "Process Management"

        ],


        focusAreas: [

            "Quality",

            "Data Analysis",

            "Process Improvement",

            "Problem Solving",

            "Attention to Detail"

        ],


        skills: [

            "Analytical Thinking",

            "Problem Solving",

            "Data Analysis",

            "Documentation",

            "Attention to Detail"

        ],


        technologies: [

            "Excel",

            "SQL",

            "Power BI",

            "Quality Management Tools",

            "Reporting Tools"

        ],


        projects: [

            {
                title: "Quality Analysis Report",

                description:
                    "Analyze sample quality data and identify trends and potential improvement areas."
            },

            {
                title: "Process Improvement Study",

                description:
                    "Document a process and identify possible quality or efficiency improvements."
            },

            {
                title: "Quality Dashboard",

                description:
                    "Build a dashboard showing quality metrics and trends."
            }

        ],


        roadmap: [

            {
                step: "Learn Quality Fundamentals",

                description:
                    "Understand quality concepts, metrics, defects, standards, and improvement processes."
            },

            {
                step: "Learn Data Analysis",

                description:
                    "Use spreadsheets and analytical tools to identify patterns in quality data."
            },

            {
                step: "Develop Problem-Solving Skills",

                description:
                    "Practice identifying root causes and proposing structured improvements."
            },

            {
                step: "Build Quality Projects",

                description:
                    "Create analysis reports, dashboards, and process-improvement case studies."
            }

        ]

    },


    /* =====================================================
       CYBERSECURITY ANALYST
    ====================================================== */

    "cybersecurity-analyst": {

        id: "cybersecurity-analyst",

        title: "Cybersecurity Analyst",

        description:
            "Help organizations identify security risks, monitor systems, analyze incidents, and improve security practices.",


        salary:
            "Compensation varies by organization, location, cybersecurity skills, certifications, experience, and specialization.",


        subjects: [

            "Computer Networks",

            "Operating Systems",

            "Programming",

            "Cybersecurity Fundamentals",

            "Database Systems"

        ],


        focusAreas: [

            "Networking",

            "Security Fundamentals",

            "Operating Systems",

            "Problem Solving",

            "Security Monitoring"

        ],


        skills: [

            "Networking",

            "Linux",

            "Problem Solving",

            "Security Analysis",

            "Documentation",

            "Attention to Detail"

        ],


        technologies: [

            "Linux",

            "Wireshark",

            "Python",

            "SIEM Tools",

            "Git",

            "Networking Tools"

        ],


        projects: [

            {
                title: "Network Analysis Lab",

                description:
                    "Study network traffic in a controlled lab environment and document observations."
            },

            {
                title: "Security Monitoring Dashboard",

                description:
                    "Create a conceptual dashboard for monitoring security events in a safe test environment."
            },

            {
                title: "Security Awareness Project",

                description:
                    "Create an educational security-awareness guide covering common defensive practices."
            }

        ],


        roadmap: [

            {
                step: "Learn Computer Fundamentals",

                description:
                    "Understand computers, operating systems, files, processes, and basic system concepts."
            },

            {
                step: "Learn Networking",

                description:
                    "Understand IP addresses, protocols, ports, DNS, HTTP, and network communication."
            },

            {
                step: "Learn Linux",

                description:
                    "Develop practical command-line and system administration fundamentals."
            },

            {
                step: "Learn Security Fundamentals",

                description:
                    "Understand authentication, access control, encryption concepts, vulnerabilities, and defensive practices."
            },

            {
                step: "Build Safe Security Labs",

                description:
                    "Practice cybersecurity concepts only in authorized and controlled environments."
            },

            {
                step: "Explore Specializations",

                description:
                    "Explore areas such as security operations, cloud security, application security, or governance."
            }

        ]

    },


    /* =====================================================
       COMMUNICATIONS EXECUTIVE
    ====================================================== */

    "communications-executive": {

        id: "communications-executive",

        title: "Communications Executive",

        description:
            "Create and coordinate communication materials for organizations, teams, customers, and public audiences.",


        salary:
            "Compensation varies according to organization, industry, communication skills, location, and experience.",


        subjects: [

            "Communication",

            "English / Language",

            "Media Studies",

            "Public Relations",

            "Business Management"

        ],


        focusAreas: [

            "Professional Communication",

            "Writing",

            "Public Relations",

            "Content",

            "Presentation"

        ],


        skills: [

            "Writing",

            "Communication",

            "Editing",

            "Presentation",

            "Research",

            "Organization"

        ],


        technologies: [

            "Google Workspace",

            "Microsoft Office",

            "Canva",

            "Content Management Systems",

            "Presentation Tools"

        ],


        projects: [

            {
                title: "Company Communication Plan",

                description:
                    "Create a communication plan for a fictional organization."
            },

            {
                title: "Press Release Project",

                description:
                    "Write sample press releases and organizational announcements."
            },

            {
                title: "Presentation Portfolio",

                description:
                    "Create professional presentations explaining products, ideas, or organizational initiatives."
            }

        ],


        roadmap: [

            {
                step: "Strengthen Communication",

                description:
                    "Improve writing, speaking, presentation, and professional communication."
            },

            {
                step: "Learn Public Relations Fundamentals",

                description:
                    "Understand organizational messaging, audiences, media, and reputation."
            },

            {
                step: "Build Writing Samples",

                description:
                    "Create announcements, articles, reports, presentations, and communication plans."
            },

            {
                step: "Develop a Communication Portfolio",

                description:
                    "Collect your strongest communication projects and demonstrate different formats."
            }

            

        ]

    }


};


/* =========================================================
   CAREER DATA HELPERS
========================================================= */


/*
    Get one career by ID.
*/

function getCareerDetails(careerId) {

    return CAREER_DETAILS[careerId] || null;

}


/*
    Check whether career details exist.
*/

function hasCareerDetails(careerId) {

    return Boolean(
        CAREER_DETAILS[careerId]
    );

}

/* =========================================================
   MISSING CAREERS FOR COURSES WITH NO CAREER LINKS
========================================================= */

function addCareer(id, title, description, subjects, focusAreas, skills,
                   technologies, projects, roadmap) {

    CAREER_DETAILS[id] = {
        id,
        title,
        description,
        salary:
            "Salary varies with qualifications, registration or licensing " +
            "requirements, organization, location, and experience.",
        subjects,
        focusAreas,
        skills,
        technologies,
        projects: projects.map(([title, description]) => ({ title, description })),
        roadmap: roadmap.map(([step, description]) => ({ step, description }))
    };

}

addCareer("design-engineer", "Design Engineer",
    "Design, analyse and improve machines, structures or products using engineering principles.",
    ["Engineering Mathematics", "Engineering Mechanics", "Thermodynamics", "Strength of Materials", "Engineering Drawing"],
    ["Core Engineering Concepts", "CAD Design", "Problem Solving", "Analysis"],
    ["Technical Drawing", "Analytical Thinking", "Problem Solving", "Teamwork"],
    ["AutoCAD", "SolidWorks", "MATLAB", "Microsoft Excel"],
    [["CAD Model of a Mechanical Part", "Design and model a simple part with proper dimensions."],
     ["Small Prototype Project", "Build a working prototype and document the design process."]],
    [["Strengthen Core Subjects", "Build a strong base in mathematics, mechanics and your branch subjects."],
     ["Learn CAD Tools", "Practise 2D drawing and 3D modelling in a CAD tool."],
     ["Build Projects", "Complete mini and major projects in your branch."],
     ["Do an Internship", "Gain industry exposure in a manufacturing or design company."],
     ["Prepare for Placements", "Revise core subjects and practise aptitude and interviews."]]);

addCareer("architect", "Architect",
    "Plan and design buildings and spaces that are functional, safe and visually appealing.",
    ["Architectural Design", "Building Construction", "Structures", "History of Architecture", "Building Services"],
    ["Design Thinking", "Drawing and Visualisation", "Construction Knowledge", "Presentation"],
    ["Creativity", "Spatial Thinking", "Sketching", "Communication"],
    ["AutoCAD", "SketchUp", "Revit", "Adobe Photoshop"],
    [["Residential Plan and Elevation", "Prepare plans, sections and elevations for a small house."],
     ["Design Portfolio", "Compile your best studio work into a presentable portfolio."]],
    [["Learn Design Fundamentals", "Practise sketching, drawing and basic design principles."],
     ["Learn Design Software", "Get comfortable with CAD and 3D visualisation tools."],
     ["Build a Portfolio", "Collect studio projects, models and drawings."],
     ["Complete Internship", "Work under a practising architect or firm."],
     ["Complete Registration Requirements", "Check registration rules of the relevant council in your country."]]);

addCareer("medical-officer", "Medical Officer",
    "Diagnose, treat and care for patients in hospitals, clinics and public health settings.",
    ["Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology"],
    ["Clinical Knowledge", "Patient Communication", "Decision Making", "Ethics"],
    ["Empathy", "Communication", "Stress Management", "Observation"],
    ["Hospital Information Systems", "Diagnostic Equipment", "Medical Reference Tools"],
    [["Case Presentation", "Prepare and present a structured clinical case study."],
     ["Community Health Awareness Activity", "Plan a basic health awareness session with a guide."]],
    [["Build Strong Fundamentals", "Focus on core medical subjects each year."],
     ["Gain Clinical Exposure", "Learn through supervised clinical postings."],
     ["Complete Internship", "Finish the mandatory internship period."],
     ["Complete Licensing Requirements", "Follow the registration rules of the relevant medical council."],
     ["Consider Specialisation", "Explore postgraduate options through the relevant entrance exams."]]);

addCareer("dental-surgeon", "Dental Surgeon",
    "Diagnose and treat dental and oral health conditions and promote oral hygiene.",
    ["Dental Anatomy", "Oral Pathology", "Dental Materials", "Periodontology", "Oral Surgery"],
    ["Clinical Skills", "Manual Dexterity", "Patient Care", "Hygiene Standards"],
    ["Precision", "Patience", "Communication", "Empathy"],
    ["Dental Instruments", "Dental X-ray Systems", "Practice Management Software"],
    [["Oral Hygiene Awareness Material", "Create simple educational material for patients."],
     ["Clinical Case Log", "Maintain a structured record of supervised cases."]],
    [["Learn Core Subjects", "Build a strong base in dental and basic medical sciences."],
     ["Practise Pre-Clinical Skills", "Develop hand skills in the lab."],
     ["Gain Clinical Exposure", "Treat patients under supervision."],
     ["Complete Internship", "Finish the mandatory internship period."],
     ["Complete Registration Requirements", "Follow the rules of the relevant dental council."]]);

addCareer("pharmacist", "Pharmacist",
    "Prepare and dispense medicines, advise on their safe use, and support healthcare teams.",
    ["Pharmaceutics", "Pharmaceutical Chemistry", "Pharmacology", "Pharmacognosy", "Pharmacy Practice"],
    ["Drug Knowledge", "Patient Counselling", "Accuracy", "Regulations"],
    ["Attention to Detail", "Communication", "Responsibility", "Record Keeping"],
    ["Pharmacy Management Software", "Drug Reference Databases", "Microsoft Excel"],
    [["Drug Information Sheet", "Prepare an easy-to-read information sheet for a common medicine."],
     ["Pharmacy Inventory Sheet", "Build a simple stock and expiry tracking sheet."]],
    [["Build Core Knowledge", "Learn pharmaceutics, chemistry and pharmacology."],
     ["Gain Practical Experience", "Complete lab work and practical training."],
     ["Do an Internship", "Train in a hospital, community or industrial pharmacy."],
     ["Complete Registration Requirements", "Follow the rules of the relevant pharmacy council."],
     ["Explore Career Options", "Compare hospital, retail, industry and research roles."]]);

addCareer("staff-nurse", "Staff Nurse",
    "Provide patient care, support doctors and promote health in hospitals and community settings.",
    ["Fundamentals of Nursing", "Anatomy and Physiology", "Community Health Nursing", "Medical-Surgical Nursing", "Nutrition"],
    ["Patient Care", "Clinical Practice", "Communication", "Safety Standards"],
    ["Compassion", "Teamwork", "Observation", "Stress Management"],
    ["Patient Monitoring Equipment", "Hospital Information Systems"],
    [["Patient Care Plan", "Prepare a structured care plan for a sample case."],
     ["Health Education Activity", "Plan a short community health talk with a guide."]],
    [["Learn Nursing Fundamentals", "Build core knowledge of care and patient safety."],
     ["Complete Clinical Training", "Learn in wards under supervision."],
     ["Complete Internship", "Finish the required internship period."],
     ["Complete Registration Requirements", "Follow the rules of the relevant nursing council."],
     ["Explore Specialisations", "Look at critical care, community health and other areas."]]);

addCareer("agriculture-officer", "Agriculture Officer",
    "Advise farmers, support crop planning and help apply modern agricultural practices.",
    ["Agronomy", "Soil Science", "Plant Pathology", "Horticulture", "Agricultural Economics"],
    ["Crop Management", "Soil and Water", "Extension and Communication", "Sustainable Farming"],
    ["Field Observation", "Communication", "Problem Solving", "Data Recording"],
    ["Soil Testing Kits", "Microsoft Excel", "GIS Basics"],
    [["Crop Plan for a Season", "Prepare a crop plan with inputs, timing and expected needs."],
     ["Soil Health Study", "Collect and interpret basic soil test data."]],
    [["Learn Core Agriculture", "Build a base in crops, soil and plant protection."],
     ["Gain Field Experience", "Complete farm practicals and rural training."],
     ["Build Communication Skills", "Practise explaining techniques to farmers."],
     ["Prepare for Exams or Jobs", "Check government, private and research openings."],
     ["Consider Higher Studies", "Explore postgraduate options in agriculture."]]);

/* Link new careers to their courses */
const EXTRA_COURSE_CAREERS = {
    "btech-core": ["design-engineer"],
    "barch": ["architect"],
    "mbbs": ["medical-officer"],
    "bds": ["dental-surgeon"],
    "bpharm": ["pharmacist"],
    "bsc-nursing": ["staff-nurse"],
    "bsc-agriculture": ["agriculture-officer"]
};

PATHFINDER_DATA.courses.forEach(course => {
    const extra = EXTRA_COURSE_CAREERS[course.id];
    if (extra) {
        course.careerIds = [...new Set([...(course.careerIds || []), ...extra])];
    }
});