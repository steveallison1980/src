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

const PATENTOVERVIEW3: IExpansionPanel = {
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
        ]
    }
};
// HEREEE

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
        ]
    }
};


const PATENTACCORDION: IAccordion = {
    panels: [
        PATENTPREFACE,
        PATENTOVERVIEW,
        PATENTFILINGROUTES,
        PATENTCLAIMS,
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