import { IContent, IAccordion, IExpansionPanel } from './../../app/interfaces/icontent';

const PATENTPREFACE: IExpansionPanel = {
    title: "Preface",
    description: "",
    content:
    {
        elements: [
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "This guidance was used as testimony by Mr. Edmund Chung in a hearing at the US Senate on U.S.-Japan IPR issues (1988). The same guidance was featured in the March and May editions of the Overseas Journal of AIPPI Japan, and was sold as a booklet in the United States.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "We have shared this guidance over the years when visiting our valued clients. With the coronavirus pandemic, it has been impossible to go and see our clients face to face.  Because of this, we have prepared this condensed version of the guidance in the hopes that it will be useful.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
        ]
    }
};


const PATENTOVERVIEW: IExpansionPanel = {
    title: "Overview of Japanese Patent and IP system",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "Who are the main actors in intellectual property activities?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In Japan, the main actors are the Japan Patent Office (JPO), Intellectual Property High Court (IP High Court) and the Tokyo and Osaka District Courts.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The JPO handles the creation of IP rights through examinations (patents, utility models, designs and trademarks) and also the review of issued IP rights through the JPO Board of Appeal examinations, which are typically invalidity trials.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The IP High Court hears cases coming from the JPO Board of Appeal, and also has jurisdiction over appeals from the Tokyo and Osaka District Courts.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In addition to these organizations, Japanese Customs acts as the border enforcement authority that covers patents, designs, trademarks, and other IP rights.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "With the advent of Standard Essential Patents (SEPs), patent issues have spread so as to no longer be limited to just individual companies.  The Ministry of Economy & Industry (METI) and the Fair Trade Commission have increasingly become important policy makers in Intellectual Property Rights (IPR). In the future, we should pay close attention to how they guide policy and make regulations and laws.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Is the JP Patent System fast?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Even in normal examination, a first office action is generally issued in a patent application in 9.3 months from the request for examination.  It takes 14.1 months on average to issue a patent (JPO annual report 2019).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The Japanese patent examination system enables more forward-planning by patentees.  By using the expedited examination system, the timescales for patent procurement can be shortened so as to meet your business plans.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "If all goes to plan, the patent can be granted within 6-8 months of the filing of the application in cases of expedited examination.  In particular, the process can be further smoothed out by conducting an interview with the examiner during the course of examination.  In doing so, we are able to discuss any issues based on amendments and get a sense of the examiner’s views regarding the patentability of the application.  Examiner interviews are as valuable as or better than the processing of additional Office Actions, increasing the certainty and speed of processing.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

        ]
    }
};

const PATENTFILINGROUTES: IExpansionPanel = {
    title: "Filing routes for foreign applicants",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "Entry from PCT route",
                        type: "h2",
                        classes: null,
                    }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Entry term",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Entry term for a national state application based on a PCT Application in Japan is 30 months from the earliest priority date. No late entry system is provided.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The Patent Law provides a relief system for cases that do not enter into Japan by the deadline. However, the current conditions for the relief are very strict, and a legitimate reason for not having been able to meet the deadline is required.  To implement this procedure, the applicant must submit a request for restoration.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Translation",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A Japanese translation must be submitted by the later of (a) 30 months from the earliest priority date, or (b) if the entry is made in the last 2 months of the 30 month period, 2 additional months after the entry date into Japan is automatically given without any additional fee.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Necessary information and documents",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ul",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "A copy of PCT application (or its publication number), if published;",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "A copy of the PCT request and copies of claims, specification and drawings,",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Copy of amendment of Article 19 and 34.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Power of Attorney",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Check points",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ul",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "If you need to change the applicant, please check if the change is recorded in checkbox PCT/IB/306. If it is not recorded, but there is wish to change the applicant in Japan, the assignment must be recorded at the JPO.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Please check the checkbox 304 if the Priority Documents are received by the World Intellectual Property Organization (WIPO), and send us the priority document if it is not recorded. ",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Please check if a claim of a grace period is necessary. A claim for a grace period and submission of supporting exhibit must be submitted within 30 days from the national processing date.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "For Paris Route",
                        type: "h2",
                        classes: null,
                    }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Priority due date",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The priority term is 12 months from the earliest priority application.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The priority term is not extendable. Accordingly, the priority claim expires upon the lapse of 12 months. The Patent Act includes a priority restoration system for restoration of a priority claim for a patent applicant that was not filed within the priority term.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A request for restoration must be filed within two months from the priority due date together with supporting evidence, and a fee.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Translation filing due date",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "An application can be filed in Japanese or English, or any foreign language. If filed in a foreign language such as English, a Japanese translation must be submitted within 14 months from the priority date. Therefore, if an application is filed on the last date of the priority, the applicant is automatically given 2 months to file a translation.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Necessary information and documents",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ul",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "Applicant name and address",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Inventor name and address",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Claims, Specification and drawings",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Priority date, number and country",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },

            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Priority documents can be submitted through the WIPO DAS system. To do so, please provide the access code to use DAS.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "list",
                objs: [
                    {
                        type: "ul",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "Power of Attorney",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },

            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A Japanese patent application can be filed without a Power of Attorney (PoA). However, in later stages, the application cannot be divided or appealed without a PoA. In order to ensure smooth patent prosecution, we request a PoA when we represent a client. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A general power of attorney form may be submitted to the JPO in order to cover all future cases. A General Power of Attorney system is very convenient compared to a non-general power of attorney that must be executed and filed individually for each patent application.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "No notarization or legalization is required for the Power of Attorney.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

        ]
    }
};

const PATENTCLAIMS: IExpansionPanel = {
    title: "Claims, specification and other documents necessary in Japan ",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "Acceptable Claims",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Any style of claim is acceptable in Japan, and it will not be necessary to modify the original claims to comply with Japanese claim practice.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "However, if the patent claims are directed to non-patentable subject matter, it is recommended to rewrite the claims in Japanese form.  For example, in the case of an invention of a method for surgery, therapy, or diagnosis of humans normally practiced by medical doctors (“medical activity”), such a method is not a patentable invention since it is not an “industrially applicable invention” under the Patent Act, Article 29(1). Thus, the applicant needs to amend the claims to describe the medical activity performed by the medical equipment instead of claiming the activity practiced by medical doctors.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Claim Fee",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The patent application fee is flat fee system regardless of the number of claims.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "There is no limit to the number of independent claims and the number of different category claims in a claim set. A multiply dependent claim system is allowed and each claim is only counted once.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The examination fee, appeal against Examiner’s rejection fee, and annuities are calculated according to the number of claims. Even if the number of independent claims exceeds 3, and the number of claims exceeds 15 or 20, no special excess fee is required.  ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "For example, the request for examination fee as of February 2021 is calculated as follows: ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "base fee ( JPY124,000) + the number of claims × JPY3,600",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["underline"]
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Requirements of Patent Specification?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The Japanese Patent Act, Article 36(4) (i) requires that an invention be described with sufficiently clarity and completeness that the invention can be carried out by a person skilled in the art at the time of patent application. It should be noted that the invention cannot be completed by adding further description after filing.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "According to Rule 24-2 (Agency Regulations), the specification must discuss the problem to be solved by the invention, its solution, and other matters necessary for a person ordinarily skilled in the art to which the invention pertains to understand the technical significance of the invention.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A description of the invention, advantages of the embodiment of the invention, and advantages are demonstrated through examples.  Comparative examples can be helpful for patentability arguments in later prosecution before the Japanese Patent Office and the Courts.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Requirements of Drawings?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Drawings are considered to be part of the invention disclosure.  Consequently, the Japanese Patent Act requires drawings to be translated. If the drawings are clear, we may be able to later rely on the disclosure in the drawings in patentability arguments in later prosecution.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The JPO does not accept color drawings.  However, the JPO accepts color drawings as reference materials.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Inventorship?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Under Japanese practice, the inventorship is determined based on the full disclosure of the patent application including the patent claims, specification, and drawings. The JPO requires that all inventors who contributed to the invention described in the specification and drawings be listed.  Thus, in Japan, inventorship is not determined by looking solely at the patent claims such as is the case in other countries.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "According to the JPO practice, the inventorship need not be changed when the claims are amended, cancelled or filed in a divisional application. Under the JPO practice, an amendment of the inventorship is only required where there is an error in the list of the inventors. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "However, the JPO will accept correction of inventorship by adding or removing an inventor while the patent application is pending before the JPO.  After issuance of the patent, any correction of inventorship is impossible. The last chance to amend inventorship is at the issue fee payment. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Is Assignment Required?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In Japan, patent applications can be filed in the name of an assignee. An assignment is not required to prove the assignment. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "However, an assignment is required for the assignment of a pending application or issued patent to take effect.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In order to record an assignment, the pending patent application must be identified by the patent application number (not by a publication number) or, in the case of an issued patent, by the patent number.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "No notarization or legalization is required for the deed of assignment.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

        ]
    }
};

const PATENTBASICPATENTREQS: IExpansionPanel = {
    title: "Basic Patentability Requirements",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "What are patentability items?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "See the following table.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "elementgrid",
                objs: [{
                    gap: "20px",
                    percent: "30",
                    elements: [
                        {
                            type: "header",
                            objs: [
                                {
                                    text: "Requirements",
                                    type: "h3", // may need to consider making smaller
                                    classes: null,
                                }]
                        },
                        {
                            type: "header",
                            objs: [
                                {
                                    text: "Description",
                                    type: "h3", // may need to consider making smaller
                                    classes: null,
                                }]
                        },
                        {
                            type: "header",
                            objs: [
                                {
                                    text: "Article",
                                    type: "h3", // may need to consider making smaller
                                    classes: null,
                                }]
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Eligibility",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "The invention must be statutory.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "29 preamble",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Novelty",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Must be new under the principle of absolute novelty",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "29(1)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Inventive Step",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Must have inventive step over known prior art at the patent filing",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "29(2)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Enablement",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "The specification/drawings must be clear and sufficient as to enable a person ordinarily skilled in the art to work or reproduce the invention.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "36(4)(i)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Support",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "The invention must be described in the specification/drawings at the patent filing.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "36(6)(i)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Clarity",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "The invention must be clear in the claims.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "36(6)(ii)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Unity of Invention",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Claims must be directed to one invention or closely related inventions. If this is satisfied, a single application can set forth multiple categories of claims.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "37",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Double Patenting (First to File)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },

                        {
                            type: "elementgrid",
                            objs: [{
                                gap: "20px",
                                percent: "100",
                                elements: [
                                    {
                                        type: "span",
                                        objs: [
                                            {
                                                text: "This entails conflict with claims of the applicant or others.",
                                                url: null,
                                                routerlink: null,
                                                tooltip: null,
                                                classes: null
                                            }
                                        ],
                                    },
                                    {
                                        type: "br",
                                        objs: null
                                    },
                                    {
                                        type: "span",
                                        objs: [
                                            {
                                                text: "This circumstance is frequently found between the claims of a divisional application and its parent application.",
                                                url: null,
                                                routerlink: null,
                                                tooltip: null,
                                                classes: null
                                            }
                                        ],
                                    },
                                ]
                            },]
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "39",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },
                        {
                            type: "br",
                            objs: null
                        },

                        {
                            type: "span",
                            objs: [
                                {
                                    text: "Secret prior art rejection",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "An earlier filing/priority application constitutes secret prior art when published after the filing of the present application",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },
                        {
                            type: "span",
                            objs: [
                                {
                                    text: "29-2",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: null
                                }
                            ],
                        },

                        {
                            type: "br",
                            objs: null
                        },
                    ]
                },]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Please describe Novelty (Article 29(1)(i)-(iii)) in more detail.",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The Japanese Patent Act adopts the first-to-file system and requires absolute novelty. Accordingly, the patentable invention must neither be publicly known nor publicly used in Japan or anywhere in the world; the invention must not be described in any publications distributed in Japan or in any other country, including patent and non-patent publications; and the invention must not be on any website in Japan or in any other country prior to the time of filing. Here, the time of filing refers to the actual time of filing or the time of filing the priority application, if a priority claim is in effect.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "How to enjoy the Grace period?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "To rescue the applicant from the publication of invention, a 12-month grace period is provided. The grace period covers either of the following two cases:",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "(a)	Loss of novelty of an invention due to an act, including sales, presentations to investors, and presentations in any academic groups, by a person having the right to obtain a patent (with the exception of an invention being published on the patent, utility, design or trademark gazette by a person having the right to obtain a patent).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "(b)	Loss of novelty of an invention against the will of a person having the right to obtain a patent; for example, if a third party exhibits an invention without permission, or if an employee maliciously leaks information or industrial espionage is involved.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "To claim a grace period in case (a), the applicant must establish the effective filing date in Japan within 12 months from the publication. At the JP filing, the grace period must be claimed and supporting evidence also must be filed timely.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In the case of a novelty destroying act as described in case (b) above, the applicant/patent holder must prove that the novelty was lost against their wishes. The burden of proof is on the applicant.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "If there are multiple publications, do I have to claim a grace period for each publication?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The Examination Guidelines allow the effect of the grace period claimed for the first publication to the later publication when the first and later publications are only closely related (for example, the relationship between broadcasting and its rebroadcast). If there is no such relationship between the publications, a grace period must be claimed for each individual publication. According to this practice, if there are multiple publications, a grace period must be claimed for each publication.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Please describe Inventive Step (Article 29(2)) in more detail.",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "An invention must have an inventive step over the prior art as of the patent filing date.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Since differences in technology cannot be measured quantitatively, issues such as whether or not the motivation for the invention existed in the prior art and whether or not the technical effects of the claimed invention are distinguishable over prior known technology are important in determining patentability.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In the inventive-step assessment, the Examiner must determine if the closest reference can be used as a base in combination with a second reference. If so, there must be some teaching or other motivation that would direct a skilled person to combine the references to achieve the claimed invention. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Under Japanese examination practice, a finding of such teaching or motivation, or other auxiliary factors that would have prompted the skilled person to combine a reference with the main reference to achieve the claimed invention, forms the foundation of the examination procedure.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In response to the inventive-step rejection, telling the story of the invention and unique advantages of the invention on the basis of the specification can produce a more persuasive argument rather than simply denying the citations.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Please describe the Enablement Requirement (Article 36(4)(i)) in more detail.",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The specification must substantively describe the invention. Therefore, simply reciting the claimed invention in the specifications or describing mere desired outcomes do not satisfy the enablement requirement (Article 36(4)(i)). It is recommended to describe sufficient embodiments to support the claims. If the claims go beyond the embodiments, an enablement objection will be issued.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Please describe the Support Requirement (Article 36(6)(i)) in more detail.",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In Japan, a patent is granted for the disclosed invention. The scope of the patent cannot go beyond the scope of what could have been predicted from the embodiments in the disclosure (Article 36(6)(i)).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "This Article presents a test that is used to check if the technical ideas described in the embodiments can be generalized up to the claimed invention by one of ordinary skill in the art. If the claim is in an area where it can be generalized, the support requirement is affirmed. If the boundary is crossed, the support requirement is denied.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Please describe the Clarity Requirement (Article 36(6)(ii)) in more detail.",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ul",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "In Japan patent claims must clearly define the scope of the invention because the determination of novelty and inventive step, and claim construction is conducted on the basis of the claims.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },

                            {
                                type: "span",
                                objs: [{
                                    text: "A clarity objection is issued if the claim itself or its wording is ambiguous.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "If the technical relationship between the claim elements is not clearly defined, a clarity objection will be issued.  This type of clarity objection is often accompanied by a prior art rejection.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Clarity objections are typically issued when certain terms or phases are included in patent claims.  Examples of such terms or phrases include “about”, “approximately”, “preferably”, “desirably”, etc.  For claims defined by numerical limitations or ranges, an upper and lower limitation should be defined. In such situations, if no upper or lower limitations are recited in a claim, a clarity objection may be issued. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "What are requirements for Unity of Invention?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Patent Act Article 37 requires unity of invention and permits the inclusion of any number of independent claims in one patent application, even if they belong to different categories of invention, provided that the patent claims share a common inventive concept over the prior art. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Unity of Invention is determined in the course of the substantive examination in order to ascertain which claims should be examined.  After examining the case for unity of invention, the Examiners will examine only those claims that share unity or are closely related and will issue a unity of invention objection if appropriate in an Office Action. Usually, a unity of invention rejection is issued together with other issues, such as novelty and inventiveness issues. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "According to the Examination Guidelines, the claims must share the same or a related special technical feature. This special technical feature must be a novel feature distinguishable over the prior art. If the application satisfies this requirement, the claims may include a product claim, a claim for a machine/device for manufacturing the product, and also other categories or types of claims. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The response to a unity of invention objection may be addressed by amending the claims to include the special technical feature. It may also be addressed by responding to the prior art rejection.  Another option to address a unity of invention rejection is to cancel claims that are the subject of the unity of invention objection.  Generally, the option of cancelling claims is the most common pathways as the chance of success by traversing a unity of invention objection is relatively low under the Japanese patent practice.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "What is a secret prior art rejection (Article 29-2)?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The Patent Law, Article 29-2 provides for secret prior art. If the claimed invention is anticipated by secret prior art, the application shall be rejected. Secret prior art comprises another person’s application whose filing/priority date is earlier than that of the present application and whose publication date is after the filing date of the present application.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "However, this provision shall not apply in a situation where: the inventor(s) of the later invention are identical to the inventor(s) of the earlier invention; or the later applicant(s) is/are identical to the earlier applicant(s) at the application date of the later application.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "This secret prior art rejection may rely on a single reference, and a patentability argument against the cited reference need only to point out a substantial difference between the claims and the cited reference.  This contrasts with an obviousness-type rejection in that a secret prior art rejection does not require non-obviousness arguments.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

        ]
    }
};

const PATENTCONSIDERATIONSTECHFIELDS: IExpansionPanel = {
    title: "Considerations Specific to Certain Technical Fields and Claim Types",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "How to claim computer program related inventions?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In Japan, computer program inventions are categorized as statutory product inventions under the Patent Act. The Guidelines define a program as “a set of numbered instructions given to a computer to make it perform a particular information processing.“ A software invention must be recited in a claim as a combination of multiple functions performed by the a computer (Guidelines, Part VII, Chapter 1). ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The following examples are claim format recommended in the Guidelines.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            // [Example of process claim] 
            {
                type: "br",
                objs: null
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "[Example of process claim] ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "“A program which makes a computer execute procedure A, procedure B, procedure C, ...”",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            // [Example of product claim]
            {
                type: "br",
                objs: null
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "[Example of product claim]",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "“A program which makes a computer operate as means A, means B, means C, …”",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            // [Example of product claim] 
            {
                type: "br",
                objs: null
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "[Example of product claim] ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "“A program which makes a computer realize function A, function B, function C”",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "br",
                objs: null
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The most important thing is to describe in the claim the function that the program causes a computer to execute. If the limitation can also be interpreted to mean that a person executes the function as opposed to the computer, the claimed invention as a whole may be objected to as a non-statutory invention.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Further, in Japanese Practice, a computer program itself is a product invention (Article 2(3)), and if the computer program invention is titled as, for example, “computer program product” or “non-transitory computer-readable storage medium”, clarity or non-statutory objections may be issued.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },



            {
                type: "header",
                objs: [
                    {
                        text: "What are requirements for business models?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Inventions related to business models, like computer program inventions, are statutory inventions if they are defined to achieve or solve a technical problem using computers or software. The Guidelines require that claims describe specifically how the software works in coordination with hardware to solve a technical problem.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Are medicines and medical devices patentable subject matter?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes, a medical product such as a drug and a medical device is unquestionably patentable in Japan.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Are medical acts patentable subject matter?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "No, a method for surgery, therapy, or diagnosis of humans is unpatentable subject matter in Japan. For example, a claim such as \"A method of treating YYY disease with an active pharmaceutical ingredient XXX\" will be summarily rejected as ineligible.  As such we would rewrite this claim to \"A medicament comprising an active pharmaceutical ingredient XXX for the treatment of YYY disease\", i.e., using the second medical use format. Similarly, we advise claiming a medical device which has a specific function suitable for performing surgery/therapy/diagnosis, rather than claiming a method of surgery/therapy/diagnosis using the medical device.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Should the Specification disclose experimental results in Chemical and Medical Inventions?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes, it should. The Examination Guidelines requires disclosure on how to make and use a chemical or medical product, since it may be relatively difficult to understand this on the basis of their structures or names. For example, in the case of an invention of a medicine with a specified use, examples which establish an efficacy for the use are usually required in the specification. Importantly, addition of examples is not usually admitted after filing the application. Therefore, the specification at the time of patent filing should disclose one or more representative examples.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Can a product invention be defined by properties?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes, it can. When claiming a product defined by properties, the specification at the time of filing should disclose experimental results and/or the mechanism of how a product having such properties is obtained. Further, the specification should disclose a method for measuring the property or a standard showing the method.  Such standards may be, for example, JIS (Japanese Industrial Standards), ISO (International Organization for Standardization), ASTM (American Society for Testing and Materials), and DIN (Deutsches Institut für Normung).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "We can also employ a technical term indicating a property in the claims. In this event, we may need to define the technical term in the specification, especially if the technical term is ambiguous. For example, it has been decided that \"average molecular weight\" is ambiguous because it encompasses \"weight-average molecular weight\", \"viscosity-average molecular weight\", and \"number-average molecular weight\". We can also employ a numerical formula to define a property, however, the specification should disclose experimental results and/or a theoretical explanation regarding the mechanism of how the numerical formula is derived.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Can we use a Markush-Type claims?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes, we can. In the Japanese patent practice, Markush-type claims, i.e., expression of a chemical substance and composition written in an alternative form, are acceptable. When using them, it is preferable to disclose examples of all alternative forms of a product in the specification. However, if alternative forms share chemical properties, the specification does not have to disclose examples of all alternative forms.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "What are requirements for Product-by-Process Claims?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "They are allowed, but subject to some conditions. Product-by-process claims are only acceptable if it is not possible, or it is entirely impractical, to directly define the product by its structure or characteristics, according to a ruling by the Supreme Court and the JPO's Guidelines. If these conditions are not met, the Examiner may reject a product-by-process claim as being indefinite. Therefore, we generally advise clients to define a product by its structure or characteristics. Please also note that the scope of the product-by-process claim includes products which are prepared by a different process, which may raise a hurdle in terms of novelty and inventive step analysis.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

        ]
    }
};

const PATENTEXAMANDACCEL: IExpansionPanel = {
    title: "Examination system and Acceleration of Examination",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "When does the examination of the application begin?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The examination of a patent application is initiated by a request for examination (Article 48-3).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The period for requesting examination of a patent application is 3 years from the effective filing date.  The request for examination for a divisional application whose effective filing date is more than three years old, must be filed within 30 days from the division date.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "If the request is not filed before the deadline, the application is deemed to have been withdrawn. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In principle, patent applications are examined in the order in which requests for examination have been filed. The waiting time for a first Office Action in 2019 is on average 9.5 months, depending upon the technical field of the invention.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "If faster examination is necessary, the applicant can request an accelerated examination (see Question 6.3 for more details).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Can a third party also can file a request for examination?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Anyone, including an applicant as well as a third party, can file a request for examination of a patent application. When the request for examination is filed by a third party, the patent applicant is notified thereof.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The third party may also submit to the Examiner pertinent prior art references that raise questions of patentability, which the Examiner will take into consideration.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Is it possible to request an Accelerated Examination?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes, it is possible. The JPO provides for accelerated examination procedures. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The JPO will advance an application out of turn for examination if a proper request for accelerated examination is requested. For accelerated examination, the JPO examines and issues Office Actions within 2.5 months on average in 2019 (see the JPO annual report 2020).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "For Japanese patent applications filed under the Paris Convention, the JPO will start accelerated examination immediately upon receipt of the patent application. ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "However, in the case of Japanese patent applications filed by way of the Patent Cooperation Treaty (PCT), the JPO must wait for documents to be received from WIPO. Therefore, depending on the timing of the request for accelerated examination, it may not be possible to proceed with the examination immediately.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "All Paris and PCT route patent applications are entitled to an accelerated examination request.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Is it possible to further accelerate the examination?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes. In addition to the Accelerated Examination, a Super Accelerated Examination (SAE) is possible. Via an SAE, an Office Action can be obtained even faster than via the (normal) Accelerated Examination. The JPO aims to issue a first Office Action within one month of the request for an SAE. Applicants, in turn, are requested to respond quickly.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The SAE requires the following two requirements:",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ol",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "The invention must be worked or planned to be worked within two (2) years of the application.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },

                            {
                                type: "span",
                                objs: [{
                                    text: "The patent application must be a PCT or the Paris route application.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Is Patent Prosecution Highway (PPH) Program available?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes. The Patent Prosecution Highway (PPH) program was introduced as a route for an accelerated examination. If a foreign counterpart application filed in the United States, Europe, China, Korea, or a number of other contracting countries is issued as a patent, granted or indicated as to be granted, the applicant may request the PPH program relying on one of the granted patents in order to implement an accelerated examination of the patent application in Japan. The PPH program is also available for PCT applications.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "With the PPH program, the Japanese claims must sufficiently correspond to the issued or allowed foreign counterpart claims. However, Japanese Examiners will conduct a search in the same manner as for ordinary applications. If prior art is discovered, the Examiner will issue an Office Action.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "What documents/data are required to file a PPH request?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The following documents/data are required:",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ul",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "Identification of the base patent application, country, and filing number (serial number)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Copies of the Office Actions and responses (can be abbreviated, if available to the JPO through the DAS system)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Copies of the granted claims (can be abbreviated if available to the JPO through the DAS system)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Copies of the Notice of Allowance (can be abbreviated if available to the JPO through the DAS system)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "A list of the Cited References (can be abbreviated if available to the JPO through the DAS system)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Copies of Non-patent literature cited by the Examiner (in PDF format)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },

            // HEREEE

            // TODO: Add image of section 6 

            {
                type: "header",
                objs: [
                    {
                        text: "Preface",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ol",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },

                            {
                                type: "span",
                                objs: [{
                                    text: "",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },
        ]
    }
};

const PATENTOVERVIEW2: IExpansionPanel = {
    title: "Overview of Japanese Patent and IP system",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "Preface",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ol",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },

                            {
                                type: "span",
                                objs: [{
                                    text: "",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },
        ]
    }
};

const PATENTOVERVIEW1: IExpansionPanel = {
    title: "Overview of Japanese Patent and IP system",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "Preface",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "list",
                objs: [
                    {
                        type: "ol",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },

                            {
                                type: "span",
                                objs: [{
                                    text: "",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                        ],
                        classes: null,
                    },
                ]
            },
        ]
    }
};

const PATENTACCORDION: IAccordion = {
    panels: [

        PATENTPREFACE,
        PATENTOVERVIEW,
        PATENTFILINGROUTES,
        PATENTCLAIMS,
        PATENTBASICPATENTREQS,
        PATENTCONSIDERATIONSTECHFIELDS,

        PATENTEXAMANDACCEL,

        // HEREEE
    ]
};

export const PATENTGUIDANCECONTENT: IContent = {
    elements: [
        {
            type: "header",
            objs: [{
                text: "Guidance on Japanese Patent Practice for Foreign Patent Applicant",
                type: "h1",
                classes: null
            }]
        },
        {
            type: "span",
            objs: [{
                text: "April 29, 2021",
                url: null,
                routerlink: null,
                tooltip: null,
                classes: null,
            }]
        },
        {
            type: "br",
            objs: null
        },
        {
            type: "span",
            objs: [{
                text: "Yasunori Ohtsuka",
                url: null,
                routerlink: "/professional/1",
                tooltip: "",
                classes: null,
            }]
        },
        // {
        //     type: "br",
        //     objs: null
        // },
        // {
        //     type: "span",
        //     objs: [{
        //         text: "Hideo Sugawara",
        //         url: null,
        //         routerlink: "/professional/16",
        //         tooltip: "",
        //         classes: null,
        //     }]
        // },
        {
            type: "br",
            objs: null
        },
        {
            type: "br",
            objs: null
        },
        {
            type: "accordion",
            objs: [PATENTACCORDION]
        }]
}