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
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "April 29, 2021",
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
                            text: "Yasunori Ohtsuka",
                            url: null,
                            routerlink: "/professional/1",
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
                            text: "With the proliferation of Standard Essential Patents (SEPs), patent issues have spread so as to no longer be limited to just individual companies.  The Ministry of Economy & Industry (METI) and the Fair Trade Commission have increasingly become important policy makers in Intellectual Property Rights (IPR). In the future, we should pay close attention to how they guide policy and make regulations and laws.",
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
                            text: "Even in a normal examination, a first office action is generally issued in a patent application in 9.3 months from the request for examination.  It takes 14.1 months on average fo a patent to be issued (JPO annual report 2019).",
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
                            text: "The Japanese patent examination system enables more forward planning by patentees.  By using the expedited examination system, the timescales for patent procurement can be shortened so as to meet your business plans.",
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
                            text: "If all goes to plan, the patent may be granted within 6-8 months of the filing of the application in cases of expedited examination.  In particular, the process can be further smoothed out by conducting an interview with the examiner during the course of examination.  In doing so, we are able to discuss any issues based on amendments and get a sense of the examiner’s views regarding the patentability of the application.  Examiner interviews are as valuable as or better than the processing of additional Office Actions, increasing the certainty and speed of processing.",
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
                            text: "The entry term for a national state application based on a PCT Application in Japan is 30 months from the earliest priority date. No late entry system is provided.",
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
                        text: "Points to check",
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
                                    text: "If you need to change the applicant, please check if the change is recorded in checkbox PCT/IB/306. If it is not recorded, but you wish to change the applicant in Japan, the assignment must be recorded at the JPO.",
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
                                    text: "Please check if a claim of a grace period is necessary. A claim for a grace period and supporting exhibits must be submitted within 30 days from the national processing date.",
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
                        text: "Paris Route",
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
                            text: "The priority term is not extendable. Accordingly, the priority claim expires upon the lapse of 12 months. The Patent Act includes a priority restoration system for restoration of a priority claim for a patent application that was not filed within the priority term.",
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
                        text: "Due date for filing translation",
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
                        text: "Claim Fees",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "There is no limit to the number of independent claims and the number of different categories of claims in a claim set. Multiply-dependent claims are allowed and each claim is only counted once.",
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
                            text: "The examination fee, appeal against Examiner’s rejection fee, and annuities are calculated according to the number of claims. Even if there are more than 3 independent claims, and there are more than 15 or 20 claims, no special excess fee is required.",
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
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Micro, small and medium entities can obtain fee reduction according to the JPO fee reduction program. For more details, please refer to 'Official Fee Reduction for Small and Medium Entities' below.",
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
                        text: "Patent Specification Requirements",
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
                        text: "Drawings Requirements",
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
                        text: "Inventorship",
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
                            text: "However, the JPO will accept correction of inventorship to add or remove an inventor while the patent application is pending before the JPO.  After issuance of the patent, correction of inventorship is impossible. The last chance to amend inventorship is at the issuance fee payment. ",
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
                type: "table",
                objs: [{
                    rows: [{
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Eligibility",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "The invention must be statutory.",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "29 preamble",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Novelty",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Must be new under the principle of absolute novelty",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "29(1)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Inventive Step",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Must have inventive step over known prior art at the patent filing",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "29(2)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Enablement",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "The specification/drawings must be clear and sufficient as to enable a person ordinarily skilled in the art to work or reproduce the invention.",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "36(4)(i)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Support",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "The invention must be described in the specification/drawings at the patent filing.",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "36(6)(i)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Clarity",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "The invention must be clear in the claims.",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "36(6)(ii)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Unity of Invention",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Claims must be directed to one invention or closely related inventions. If this is satisfied, a single application can set forth multiple categories of claims.",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "37",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Double Patenting (First to File)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "paragraph",
                                    objs: [{
                                        spans: [
                                            {
                                                text: "This entails conflict with claims of the applicant or others.",
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
                                                text: "This circumstance is frequently found between the claims of a divisional application and its parent application.",
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
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "39",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "Secret prior art rejection",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "An earlier filing/priority application constitutes secret prior art when published after the filing of the present application",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "29-2",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4: null,
                        column5: null,
                        column6: null,
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },],
                    cols: ["Requirements", "Description", "Article"]
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "Novelty (Article 29(1)(i)-(iii)) in more detail",
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
                        text: "How can I enjoy the grace period?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "To rescue the applicant from the publication of an invention, a 12-month grace period is provided. The grace period covers either of the following two cases:",
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
                            text: "(a)	Loss of novelty of an invention due to an act including sales, presentations to investors, and presentations in any academic groups by a person having the right to obtain a patent (with the exception of an invention being published on the patent, utility, design or trademark gazette by a person having the right to obtain a patent).",
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
                            text: "The Examination Guidelines allow the effect of the grace period claimed for the first publication to the later publication when the first and later publications are only closely related (for example, the relationship between broadcasting and re-broadcasting). If there is no such relationship between the publications, a grace period must be claimed for each individual publication. According to this practice, if there are multiple publications, a grace period must be claimed for each publication.",
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
                        text: "Inventive Step (Article 29(2)) in more detail",
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
                        text: "The Enablement Requirement (Article 36(4)(i)) in more detail",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The specification must substantively describe the invention. Therefore, simply reciting the claimed invention in the specifications or describing mere desired outcomes does not satisfy the enablement requirement (Article 36(4)(i)). It is recommended to describe sufficient embodiments to support the claims. If the claims go beyond the embodiments, an enablement objection will be issued.",
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
                        text: "The Support Requirement (Article 36(6)(i)) in more detail",
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
                            text: "This Article presents a test that is used to check if the technical ideas described in the embodiments can be generalized up to the claimed invention by one of ordinary skill in the art. If so, the claimed invention will be affirmed to satify the support requirement. If not, the claim will be reject for not satisfying the support requirement.",
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
                        text: "The Clarity Requirement (Article 36(6)(ii)) in more detail",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [
                    {
                        type: "span",
                        objs: [{
                            text: "In Japan patent claims must clearly define the scope of the invention because the determination of novelty and inventive step, and claim construction is conducted on the basis of the claims.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
                        }]
                    }]
            },

            {
                type: "paragraph",
                objs: [
                    {
                        text: "A clarity objection will be issued if the claim itself or its wording is ambiguous.",
                        url: null,
                        routerlink: null,
                        tooltip: null,
                        classes: ["noselect"]
                    }]
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
                        text: "Unity of Invention",
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
                            text: "According to the Examination Guidelines, the claims must share the same or a related 'special technical feature'. This special technical feature must be a novel feature distinguishable over the prior art. If the application satisfies this requirement, the claims may include a product claim, a claim for a machine/device for manufacturing the product, and also other categories or types of claims. ",
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
                            text: "The response to a unity of invention objection may be addressed by amending the claims to include the special technical feature. It may also be addressed by responding to the prior art rejection.  Another option to address a unity of invention rejection is to cancel claims that are the subject of the unity of invention objection.  Generally, the option of cancelling claims is the most common as the chance of success by traversing a unity of invention objection is relatively low under the Japanese patent practice.",
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
                        text: "How should computer program related inventions be claimed?",
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
                        text: "What are the requirements for business models?",
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
                        text: "Should the Specification disclose experimental results in chemical and medical inventions?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes, it should. The Examination Guidelines require disclosure on how to make and use a chemical or medical product, since it may be relatively difficult to understand this on the basis of their structures or names. For example, in the case of an invention of a medicine with a specified use, examples which establish an efficacy for the use are usually required in the specification. Importantly, addition of examples is not usually admitted after filing the application. Therefore, the specification at the time of patent filing should disclose one or more representative examples.",
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
                        text: "Can we use Markush-type claims?",
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
                        text: "What are requirements for product-by-process claims?",
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
    title: "Examination system and acceleration of examination",
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
                            text: "If faster examination is necessary, the applicant can request an accelerated examination (see 'Is it possible to request an Accelerated Examination?' below for more details).",
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
            {
                type: "header",
                objs: [
                    {
                        text: "What is the basic examination procedure?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The examination procedure for a PCT application is described below with reference to the following figure.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "titledimage",
                objs: [
                    {
                        title: "Examination procedure through the PCT route",
                        img:
                        {
                            folder: "patentmanual",
                            filename: "examinationflow.png",
                            classes: ["medium"]
                        }
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "(S1) A priority application is filed (establishing the priority date).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S2) The PCT application is filed.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S3)	A national phase entry application is filed in Japan (within 30 months from the first priority date).",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S4)	A Japanese translation is filed within 2 months of the entry date.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S5)	A request for examination is filed within 3 years of the international (PCT) filing date.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S6)	An Examiner examines the application.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S7)	A Notice of Allowance (Grant) is issued if no reasons for rejection are found.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S8)	The issue fee must be paid within 30 days from the Grant.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S9)	Within the issue fee payment term, a divisional application can be filed.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S10) The patent will be published in the patent gazette about one month after the registration.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S11) If a reason for rejection is found, a First Office Action (OA) is issued. The response term for an OA is 3 months. This term can be extended by a maximum of 3 months upon request.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S12) The Examiner examines the response, and makes a decision to grant or reject the application. If, however, the response raises a new reason for rejection, a second non-final or a Final OA is issued. The progression of examination is swift after the First OA; the average time between issuance of the First OA and the final decision is about 5 months.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S13) If a response to the first or second OA does not overcome the reasons for rejection, a Final Rejection is issued. An appeal with/without amendment against the Final Rejection may be filed 4 months from the mailing date of the Final Rejection.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S14) Appeal with amendment, the primary Examiner reconsiders the appeal.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S15) If the Examiner accepts the amendment as patentable, the patent application will be granted.  Otherwise, the application is then examined by the Board of Appeal.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S16) Appeal without amendment goes directly to the Board of Appeal.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S17) It is possible to file a divisional application with or without an appeal to the Board of Appeal.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S18) The assigned panel at the Board of Appeal examines the appeal. In the course of examination, the panel examines the Appeal and reviews the examination history, and also conducts additional searches if necessary.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S19) According to the panel’s review, a new OA is necessary, the panel will issue an OA. The applicant can respond the OA with necessary amendment, and also can file a divisional application within the response term.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S20) If the panel cannot find a ground for rejection, the panel grants the application.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S21) If the reason for refusal is not overcome by the appeal or subsequent response, the panel will finally reject the application.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
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
                            text: "(S22) The only option for fighting a rejection at the Board of Appeal is to appeal to the Intellectual Property High Court. In this case, an appeal brief must be filed within 120 days of the date of reception of the Board of Appeal’s decision.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["noselect"]
                        }
                    ],
                    classes: null
                }]
            }
        ]
    }
};

const PATENTEXAMINATION: IExpansionPanel = {
    title: "Examination",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "Office Actions",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "An Examiner examines the patentability requirements of the patent application. If the Examiner finds reasons for rejection, the Examiner must notify the applicant of these reasons in writing in the form of an Office Action and invite a response from the applicant. In the response to the Office Action, the applicant needs to overcome all of the notified reasons for rejection. If the Examiner finds that any one of the notified reasons of rejections has not been overcome by the response from the applicant, the Examiner may render a Final Rejection without issuing any further non-final Office Actions.",
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
                        text: "What are the response terms and extension possibilities?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "header",
                objs: [
                    {
                        text: "Extension Request Within the Response Term",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The response term is extendable by up to three months by request with an official fee of JPY 4,200. The extension request must be filed within the response term. If the response term is extended, the applicant can enjoy a total of 6 months.",
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
                        text: "Extension After the Response Term",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Even after expiration of the response term, an applicant who has not enjoyed any extension before can file a two months extension of the response term. The request must be filed within two months from the expired response date. The extended two months term starts from the expiration date of the original office response term. The fee for this extension is JPY 51,000.",
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
                        text: "What categories of Office Actions are there?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "There are two categories of Office Actions. One is a non-final Office Action, and the other is a Final Office Action. The Final Office Action is issued to notify the applicant of the reasons for rejection that have been created due to the response to the previous Office Action. For example, a response may successfully overcome the rejections set forth in an Office Action, but the amendments then render the claims unclear. In this case, the Examiner issues a new Office Action noting that the Office Action is FINAL, reminding the applicant to respond and to amend the claims in a very restricted manner.",
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
                        text: "How should I respond to Office Actions?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The applicant is highly recommended to observe the following points in preparing arguments and amendments in response to an Office Action:",
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
                        text: "Claim amendments",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In response to the first non-final Office Action, claims can be amended freely as long as the amendments are supported by the original specification and/or drawings and as long as the special technical feature(s) of the already examined claims are not changed. New claims thus do not have to be subsumed under previous sub-claims; it is possible to add new independent claims as long as the new claims include a common or corresponding special technical feature of the already examined claims.",
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
                        text: "Arguments",
                        type: "h2",
                        classes: ["bullet"],
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "It is essential that arguments addressing the Examiner’s assertions are supported by the patent claims on file, the claim amendments.",
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
                            text: "A patentable invention should be distinguishable over the prior art by its patentable features. Such features should be new, or should describe a new combination not easily reproducible by someone skilled in the art.",
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
                            text: "We recommend that applicants review their own patent claims/embodiments to investigate whether the invention in question is different from the cited references or any combination thereof, in view of solving a technical problem and/or its technical effects. It should also be noted that when discussing the inventive step of the invention in the arguments under Japanese patent practice, it is beneficial to argue not only the distinguishing technical features (construction) of the claimed invention relative to the cited references, but also how the distinguishing technical features bring about a technical effect.",
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
                        text: "Is it possible to conduct an interview with the Examiner during the response term?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Yes. Generally, Examiners welcome requests for an interview and conduct the interview according to the Examiner Interview Guidelines, published by the JPO.",
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
                            text: "Interviews are most effective before responding to an Office Action and before filing a Request for an Appeal in response to a Final Rejection. In the case of requests for an interview after a Final Rejection has been issued, it is necessary to prepare a foundation for the interview such as an amendment or proposed argument which shows an assertive desire to file an Appeal. Examiners may reject requests for interviews if the purpose of the interview is merely to hear the possibility of a grant either during the examination or appeal stage, or if too many proposed amendments have been presented.",
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
                            text: "In the interview, we can explain to the Examiner, for example, the comparison between the claimed invention and the cited references – i.e., sound out our patentability arguments – and ask the Examiner to review and express an opinion with respect to a draft claim amendment. If the Examiner and the Applicant reach an agreement on the amendment, the application may be granted shortly thereafter.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            }
        ]
    }
};

const PATENTAPPEAL: IExpansionPanel = {
    title: "Appeal against Examiner’s Final Rejection",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "What options are available after Final Rejection?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "There are three options for responding to an Examiner’s rejection.",
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
                                    text: "Appeal to Board of Appeal with/without amendment within 4 months (not extendable) from the final rejection.  A substantive amendment such as adding further limitations to claims is possible.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Appeal to Board of Appeal with/without divisional application within 4 months from the final rejection.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "File a divisional application within 4 months from the final rejection to start a new prosecution, instead of filing an Appeal.",
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
                        text: "Reconsideration by the primary Examiner for the appeal with amendment",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In the case an appeal with amendment is filed, the Examiner who rejected the application in the first round of examination will reconsider the case in view of the amendment. Specifically, the amendment is reviewed by the primary Examiner before the case proceeds to a full examination by the Board of Appeal. This stage is completed very quickly. If the Examiner finds that the amendment overcomes the previous rejection, the application will be granted by the Examiner. If not, the Examiner will issue an Examiner’s Pre-Review Report (EPRR) and send the appealed case to the Board of Appeal (BOA) for full examination.",
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
                            text: "Accordingly, when amendments can be presented to overcome rejections, an appeal with an amendment tends to be the most effective.",
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
                            text: "Indeed, according to the statistics based on the JPO Annual Report, more than 50% of appealed cases are allowed in the Examiner’s Pre-Review.",
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
                type: "table",
                objs: [{
                    rows: [{
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "2017",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "18,591",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "9,801 (53%)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "6,407",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column5:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "6,146",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column6:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "2,744",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "2018",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "16,536",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "8,893 (54%)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "5,749",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column5:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "5,509",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column6:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "2,315",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },

                    {
                        column1:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "2019",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column2:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "16,699",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column3:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "8,389 (50%)",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column4:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "6,000",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column5:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "4,995",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column6:
                        {
                            elements: [
                                {
                                    type: "span",
                                    objs: [{
                                        text: "2,332",
                                        url: null,
                                        routerlink: null,
                                        tooltip: null,
                                        classes: ["noselect"]
                                    }]
                                }]
                        },
                        column7: null,
                        column8: null,
                        column9: null,
                        column10: null
                    },],
                    cols: ["Year", "Number of Appeals", "Allowed in Pre-Review", "Transferred to BOA", "Allowed at  BOA", "Rejected at BOA"]
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "How is an un-Amended Appeal examined?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "An un-amended appeal is directly forwarded to trial examination by the Board of Appeal consisting of a panel of three or five Board Examiners without undergoing a preliminary examination by the primary Examiner.",
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
                        text: "How does the Board of Appeals Examine a Case?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The examination by the Board of Appeal is performed by a collegial body which usually consists of three trial Examiners. The examination is conducted in written form and there is no oral hearing.  However, a request for an interview with the Board is possible.",
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
                            text: "The role of the examination is not limited to a mere review of the Examiner’s rejection. If the panel is going to reverse the Examiner’s rejection, the body must further examine the application for any further grounds of rejection. If a new ground of rejection is found, the body must issue a new Office Action and often cites new references. The applicant can respond to the Office Action with argument and necessary amendments. The Board will make a final decision upon receipt of the response.",
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
                        text: "Why should a divisional application be filed together with an Appeal?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "This approach is undertaken if the applicant wishes to contest the Final Rejection as well as to further prosecute new claims. Any results of the appeal examination can be beneficially reflected in the divisional examination.",
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
                        text: "Why should a divisional application be filed without an Appeal?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Filing a divisional application in lieu of the appeal is an option where the applicant wishes to prosecute the application with a new claim or a claim that falls beyond the scope of permissible amendment.  One can choose to file a divisional application that functions only as a re-filing of the case. A divisional application must be filed within the period for filing an Appeal, i.e. 4 months from the final rejection.",
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
                        text: "Is it possible to reopen the prosecution?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "After filing the Appeal, an applicant cannot withdraw the Appeal to reopen prosecution. Therefore, at the time of filing the Appeal, one should consider whether one wishes to file a divisional application as a precaution.",
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

const PATENTAMENDMENT: IExpansionPanel = {
    title: "Amendment of patent claims during pendency",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "When can I make an amendment and what is the scope in which such an amendment is possible?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A patent applicant can amend the claims, specification and drawings if necessary. However, the timing for amendments and the scope in which amendment is possible are prescribed under the Patent Act, Article 17 bis.",
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
                        text: "Amendment Scope",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Before issuance of OA, any time after patent filing*1",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Unlimited, as long as supported by the original disclosure",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "After OA but before final OA, response term of the OA",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Amended claims should include a common or corresponding special technical feature of the examined claims",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Response to final OA and Final Rejection, response term of the OA and at the timing of filing an Appeal",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "No broadening; only limitations within the current claim element",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                    ],
                    cols: ["Status of the Application", "Scope in which Amendment Possible"]
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "*1: In a Japanese patent application filed based on a PCT application, an entered case cannot be amended until the expiration of the 30 month entry term or after the filing of a request for examination.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["footnote"]
                        }
                    ],
                    classes: null
                }]
            },
            {
                type: "header",
                objs: [
                    {
                        text: "What are the details regarding Amendments in response to a non-final Office Action?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "After issuance of any Office Action, the window for amendment is limited within the Office Action response term.",
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
                            text: "There are two conditions for an amendment that is filed in response to a non-Final Office Action.",
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
                            text: "The first condition is that the amendment must be within the scope of the original disclosure.",
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
                            text: "The second condition is that the amended claims must have a common or corresponding special technical feature (the same novel technical feature) of at least one of the independent examined claims. This requirement is called “prohibition of shift amendment of claims” which involves a prohibition against an amendment that impermissibly shifts the original subject matter of the claims away from the special technical feature.",
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
                            text: "If the applicant would like to pursue a claim which does not have much technical relevance to the examined claim limitations, they should consider filing a divisional patent application.",
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
                            text: "In the case of amendments that do not meet these requirements, the patent application may be rejected as a 'shift amendment'.",
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
                        text: "What limitations are there for Amendments in a Response to a Final Office Action?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Amendments made in response to a final Office Action or Final Rejection must satisfy the requirements for amendments submitted in response to a first Office Action, and in addition are limited to the following:",
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
                                    text: "Cancellation of a claim or claims",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Restriction of the claim element(s) of currently pending claims",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Correction of errors",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Clarification of an unclear description",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            }
                        ],
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Amendments that do not meet these requirements are dismissed, and the patent application will be Finally Rejected based on the previous Office Action.",
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
                            text: "Here, if you would like to further pursue the patent application, the options are to file for an appeal or file a divisional application, but whether one undertakes one of these strategies will depend on the reasons for the final rejection.",
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
                        text: "What are the Support Requirements for the Amendment?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The Patent Act requires that the amendment must be supported by the original disclosure (claims, specification, or drawings). The amendment, if not supported, should be dismissed as new matter.",
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
                            text: "The Examination Handbook requires applicants to underline the amendments and indicate the support in the original specification.",
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
                            text: "The amendment need not be literally supported by the original disclosure if such amendment is substantially disclosed in the original disclosure. However, in this case, it would be helpful to provide justification for the support to promote understanding by the Examiner.",
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
                        text: "Is it possible to make Correction(s) of translation errors?",
                        type: "h2",
                        classes: null,
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A rule for correction of translation errors (Article 17-2(3)) is applicable to a Japanese application that is first filed in a foreign language (examples, PCT application filed in English).",
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
                            text: "This rule is also applicable to a Paris route Japanese patent application and any divisional applications that are filed first in English text in Japan.",
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
                            text: "This rule is not applied to a patent application that is first filed using a Japanese translation for a Paris route application or a divisional application.",
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
                            text: "If the correction of translation errors is requested, the already submitted Japanese claims and specification can be corrected based upon the English text and the introduction of new matter is accepted provided that the new matter is within the scope of the original English text.",
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
                            text: "This rule can be used not only for translation errors, but also for a situation where we need an appropriate wording to argue patentability and/or support in Office Action response work.",
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
                            text: "The current official fee for a Correction of translation errors for a pending application is JPY 19,000.",
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
                            text: "Translation errors may also be corrected after a patent has been granted, provided that the re-translation does not broaden or change the claim.",
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

const PATENTDIVISIONAL: IExpansionPanel = {
    title: "Divisional Applications",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "What are the requirements for divisional applications?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A patent application that contains two or more inventions can be divided into one or more patent applications. The divisional application is entitled to the benefit of the parent application. The two major requirements for a valid divisional patent application are as follows:",
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
                        text: "New claims without introducing new matter",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The claimed invention in a divisional application must be supported by the specification of the  parent application. No new matter can be added. If new matter is added, the divisional application will not be regarded as a valid divisional application.",
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
                        text: "No double patenting issues",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The divisional invention must not be substantially the same as the invention claimed in the parent patent. The claims of a divisional application be broader than the claims of the parent.  If the claimed inventions of a divisional and its parent are regarded as mirror images of each other, they will be deemed identical and cause a double patenting issue. It is a requirement that there must be a non-obvious difference of at least one element between the original and divisional application.",
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
                        text: "When is it possible to file divisional applications?",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
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
                                    text: "Any time before receipt of a first Office Action",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "During the response term for the Office Action",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "During the term for filing an Appeal against the Final Rejection by the primary Examiner (except for the Final Rejection by the Board of Appeal)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Within 30 days from the Notice of Allowance (at the first examination stage, not at the Board of Appeal)",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "The divisional application can be a basis for filing of a further divisional application",
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
                        text: "What are effective uses of a Divisional Patent Application?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "header",
                objs: [
                    {
                        text: "What are effective uses of a Divisional Patent Application?",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Keep your application pending in a condition such that it is possible to introduce necessary claims or claim amendments.",
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
                        text: "Re-filing after Final Rejection",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Changes that can be made to an application after the receipt of a Final Rejection are limited.  Often, necessary amendments or arguments are not allowed due to the amendment restrictions. Accordingly, it can be desirable to have a system that allows a patent application to be re-filed so as to be able to continue patent prosecution as is provided by various jurisdictions around the world.",
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
                            text: "In the United States, a re-filing of a patent application is accomplished by filing a Request for Continued Examination (RCE). Unfortunately, there is no RCE in Japan.  Rather, a re-filing of a patent application in Japan is accomplished by filing a divisional application after a final rejection.",
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
                            text: "A fresh new patent application divided from the parent application can start with one or more fresh new claims.",
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
                        text: "Expansion or shift of claims",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In response to a final Office Action, the broadening of the scope of the claims is impermissible. If the claim coverage is less than desirable, a divisional application is the only way to pursue broadened claims.",
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
                        text: "Further prosecution of rejected claims",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "If there are any unpatentable claims in the claim set, the application will be rejected. To secure prompt allowance of the allowable claims, while continuing prosecution of the rejected claims, a divisional application should be considered. Typically, the rejected claims are filed in the divisional application for further prosecution, while the allowable claim(s) remain in the original application which can then be promptly granted as a patent.",
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
                        text: "A fall-back position",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "During the JPO Board of Appeal examination there is no guarantee of an opportunity to amend the claims. It may be strategically advantageous to prepare a divisional application to provide for greater freedom of prosecution to maximize flexibility in protecting a given invention.",
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

const PATENTTERM: IExpansionPanel = {
    title: "Patent Term",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "How long is a patent term in Japan?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The patent term is 20 years from the filing date (Article 67(1)).",
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
                            text: "The calculation of this 20-year term is not from the priority date, but from the application date in Japan. If the patent is derived from a PCT application, the 20-year term is calculated from the international filing date of the PCT application.",
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
                            text: "In the case of a divisional application, the 20-year term for a patent term is calculated from the application date of the parent.",
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
                        text: "When will a patent be effective after issuance of a notice of allowance?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A patent is usually registered within 3 days from the issue fee payment. Upon the patent registration, the patent is effective. The patent will be published in the patent gazette about one month after the registration.",
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
                            text: "The presumption of negligence is imposed on a patent infringer only based on the publication of the issued patent. Therefore, if one wishes to obtain damages due to infringement before issuance of the patent, it is necessary to provide a warning to a patent infringer in the period before the patent publication.",
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
                        text: "Is there any protection for an invention prior to obtaining a patent?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Before obtaining a patent, an invention does not have any exclusive protection. When the patent application is published in the non-examined patent publication, the patent applicant may receive compensation from a third party for practicing the claimed invention as expressed in the published application (Article 65). The applicant has the right to request payment for a license from a third party practicing the claimed invention who has knowledge that the patent application has been made public. This right to compensation for practicing the invention as expressed in a  published patent application is enforceable after registration of the patent, and will require proof of the subjective fact that the third party was practicing the claimed invention with the knowledge that the claimed invention as expressed in the patent application was made public. Therefore, when planning to enforce a right to compensation for practicing the claimed invention as expressed in a published patent application, generally it is necessary to send a warning letter to the third party in advance (Article 65(1)).",
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
                        text: "Is it possible to extend the patent term?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "header",
                objs: [
                    {
                        text: "Applicable patent inventions",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Some products such as a pharmaceutical product require administrative approval, and without such approval, the product cannot be sold. Thus, Article 67(2) of the Patent Act provides an extension of term of patent rights up to a duration of 5 years for cases in which there was a period of time during which a patent invention directed to a specific field, including a pharmaceutical patent invention, could not be practiced for reasons of safety tests and public approval.",
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
                            text: "Patents which are eligible for such extensions are related to agricultural chemicals, pharmaceuticals, pharmaceuticals for extracorporeal diagnostic use, products for regenerative medicine, and the like, and include substance, use, method of manufacture, and combination drug patents. Pharmaceuticals are not limited to those for human use and include pharmaceuticals for animal use. Patents for pharmaceutical intermediates, catalysts, and manufacturing apparatuses cannot be extended. Patents for medical devices cannot be extended as well.",
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
                        text: "Requirements and procedure",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "To obtain and extension, an application for a patent term extension needs to be filed. The time window for applying for the extension is after the patent registration, up to the original expiration date (20 years from the application date) (Article 67-2(3)). However, in a case where extension is applied for after 6 months before the original expiration date, advance procedures must be completed (Article 67-2-2). Further, an application for extension must be completed within 3 months from the administrative approval of the product (Enforcement Order, Article 3).",
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
                            text: "Extensions are applied for by the patentee (Article 67-3(iv)). Further, it is necessary that the patentee or registered exclusive licensee (Senyo-Jisshiken) has obtained administrative approval of the product.",
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
                            text: "The JPO will examine (1) whether the patent could or could not be practiced without approval, and (2) that the extended term is correct.  The JPO may also examine other related issues.",
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
                            text: "The extendable term is the duration of time from the latest of the starting date of clinical trials, the date of application of approval, and the date of registration of the patent, to the date on which the certificate of approval is received. However, the extended term cannot exceed 5 years.",
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
                        text: "Scope of extended patents",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The effect of extended patent rights is limited to the product which is subject to the approval (Article 68-2). For example, in a case where a patent is extended based on approval for stomach cancer, the effect of the extended patent is limited to the use of stomach cancer. On the other hand, in a case where a patent is extended based on approval for a particular dosage form, it is a case-by-case determination whether the extended patent covers other dosage forms.",
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

const PATENTFEES: IExpansionPanel = {
    title: "Official Fees",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "How much does patent prosecution cost?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The official fees related to patent prosecution are indicated in the following table.",
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
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Patent application fee via PCT",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "14000",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Patent application fee via Paris route",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "14000",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Patent application filed in English",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "22000",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Request for examination fee",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "124,000 + 3600 × number of claims (PCT case, search conducted other than the JPO)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Appeal fee (against Examiner’s rejection)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "124,000 + 3600 × number of claims",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Filing divisional application fee",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "14000 (22000)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Extension fee",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "4200",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                    ],
                    cols: ["As of February, 2021", "Fee (JPY)"]
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The key points are that the fee for filing a patent application is a flat fee of JPY 14,000 irrespective of the length of the patent specification, while the request for examination, request for trial, and annuities, etc., are the sum of a basic fee and an additional fee for each claim. With respect to fees calculated as a function of the number of claims, note that the JPO does not have a special additional fee or increased fee for excess claims, that is, the per-claim fee is fixed regardless of the number of claims. These additional fees are calculated for the total number of claims, irrespective of whether they are independent or dependent claims. For example, the request for examination fee for an application with 20 claims is JPY 196,000 (for the PCT route).",
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
                        text: "How much does a patent annuity cost?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The key points are that the fee for filing a patent application is a flat fee of JPY 14,000 irrespective of the length of the patent specification, while the request for examination, request for trial, and annuities, etc., are the sum of a basic fee and an additional fee for each claim. With respect to fees calculated as a function of the number of claims, note that the JPO does not have a special additional fee or increased fee for excess claims, that is, the per-claim fee is fixed regardless of the number of claims. These additional fees are calculated for the total number of claims, irrespective of whether they are independent or dependent claims. For example, the request for examination fee for an application with 20 claims is JPY 196,000 (for the PCT route).",
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
                        text: "Official Fees (Maintenance)",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Annuity (1st through 3rd years)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "2,100 + (200) × (Number of Claims)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Annuity (4th through 6th years)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "6,400 + (500) × (Number of Claims)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Annuity (7th through 9th years)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "19,300 + (1,500) × (Number of Claims)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Annuity (10th through 25th years)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "55,400 + (4,300) × (Number of Claims)",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                    ],
                    cols: ["Item", "Fees (Japanese Yen)"]
                }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The issue fee (which corresponds to the 1st through 3rd year annuities) must be paid according to the number of granted claims. On the other hand, for subsequent annuity payments, i.e. the 4th year annuity and onwards, the number of claims can be reduced, and the annuity payments can accordingly be lowered, by abandoning unnecessary claims.",
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
                            text: "After the 4th year annuity, all subsequent annuities must be paid before the next due date. In the event that timely payment is missed, a 6-month grace period is provided which allows later payment with the fine of double payment.",
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
                            text: "In addition, if there is a legitimate reason (i.e., an error made despite due care) for not having been able to make the late payment, another grace period is provided, which is the shorter one of: (i) 12 months from the expiration of the first 6-month grace period; or (ii) 2 months from when the legitimate reason ceases to apply.",
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
                            text: "While the first 6-month grace period is guaranteed upon payment of the doubled fee, it is rather difficult to prove due care so as to obtain the second grace period. The JPO requires the presence of totally unpredictable or unavoidable circumstances in order to obtain the second grace period. For example, the JPO explains that a simple human error does not constitute due care.",
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
                        text: "Official Fee Reduction for Small and Medium Entities",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The JPO introduced the Official Fee Reduction program from April 1, 2019.",
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
                            text: "According to this program, the fees have been reduced to 1/2 or 1/3 of their request for examination fees and also patent annuities of the 1st to 10th year.",
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
                            text: "In order to obtain the fee reduction, the applicant must select a category to which the company belongs to. In the application, no documentary evidence is required.",
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
                            text: "We have summarized the categories, requirements and respective reduction rates in the table.",
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
                        text: "1． <<Small & Medium Entities>> Reduced to 1/2",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Manufacturing, construction, transportation, etc.",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 300",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 300 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "examination fees and annuity for 1st to 10th years ⇒ reduced to 1/2",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Excludes entities under the control of a large entity",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Wholesale",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 100",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 100 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "TODO: \"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "TODO: \"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Service",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 100",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 50 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Retailing",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 50",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 50 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Rubber products manufacturing industry",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 900",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 300 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Software and information processing service",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 300",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 300 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Hotel business",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 200",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 50 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                    ],
                    cols: ["Type of business", "Number of employees", "Amount of capital (JPY)", "Reduction", "Note"]
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "2．<<Small & Medium Venture Entities>> Reduced to 1/3",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Capital of ≦ JPY 300 million",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Less than 10 years from the date on which business was started",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Request for examination fees and patent annuity fees for 1st to 10th years ⇒ reduced to 1/3",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Excludes entities under the control of a large entity",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },],
                    cols: ["Size", "Conditions", "Reduction", "Note"]
                }]
            },

            {
                type: "header",
                objs: [
                    {
                        text: "3． <<Micro Entities>> Reduced to 1/3",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Commerce or service",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 5",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Request for examination fees Patent fees of 1st to 10th years ⇒ reduced to 1/3",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Excludes entities under the control of a large entity",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Others",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "up to 20",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "\"",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                    ],
                    cols: ["Industry fields", "Number of employees", "Reduction", "Note"]
                }]
            },
        ]
    }
};

const PATENTOPPOSITION: IExpansionPanel = {
    title: "Patent Opposition",
    description: "",
    content:
    {
        elements: [
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The patent opposition system is essentially a reexamination system for reviewing the validity of an issued patent.  The reexamination process begins when a third party files an opposition within 6 months of a patent being published.",
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
                            text: "Under the Patent Act, there are two routes for cancelling or invalidating a patent.  The first is a patent opposition and the second is a patent invalidation trial. The opposition system is simpler and the opposition procedure is less complicated and quicker compared to a patent invalidation trial.",
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
                        text: "What are Grounds for Opposition?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "An opposition may be filed based on any of the following grounds.",
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
                        type: "nl",
                        elements: [
                            {
                                type: "span",
                                objs: [{
                                    text: "Addition of new matter in an amendment",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Lack of novelty, lack of inventive step, double patenting and others",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Lack of enablement requirement and support requirement, or clarity requirement",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            }
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
                            text: "An opposition may not be filed based on a violation of the rules for a joint application or derivation. For such grounds, the only way to challenge a patent is through an invalidation trial.",
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
                        text: "What is the Procedure for an Opposition?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The time period within which to file an opposition is 6 months from the patent publication date.",
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
                            text: "All grounds for the opposition and evidence must be submitted within the opposition term.",
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
                            text: "The official fee for filing the opposition is JPY 16,500 (US $157), plus JPY2,400 (US $23) per claim.",
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
                            text: "The JPO forwards a copy of the opposition brief to the patentee. However, the patentee cannot respond to the opposition brief at this time because the examination of the opposition has not yet started.",
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
                            text: "The opposition is examined first by a panel of Board of Appeal Examiners. If the panel decides that any patent claim may be the subject of a cancellation procedure, the JPO issues a Notice of Patent Cancellation and institutes the opposition.",
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
                            text: "Upon receipt of the Notice, the patentee can respond to the notice with arguments and/or claim amendments, if necessary (First Review).",
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
                            text: "The response from the patentee is examined (Second Review) by the Examiners considering the opponent’s opinion.  The opponent will have an opportunity to submit arguments. Limited new prior art may be introduced in the arguments.",
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
                            text: "If the patent is still not considered to be patentable at the Second review, an Advanced Notice of Cancellation is issued. The patentee can respond to the Notice with both arguments and amendments. Usually, this will be the last chance for a response that includes an amendment.",
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
                            text: "The opposition will be rejected if the patent is maintained without institution of the opposition, or if the opposition is instituted, but the patent is determined to be valid in the proceeding.",
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
                            text: "If the opponent loses the opposition, the opponent cannot file any arguments or appeal against the decision. The only further measure available to the opponent is to file for an invalidation trial to the JPO.",
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
                            text: "Since the prohibition against double jeopardy does not apply to the decision of opposition, the prior art materials introduced in the opposition process can also be used in an invalidation trial.",
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
                            text: "If the patent is cancelled (in part or whole), the patentee can file an appeal to the IP High Court against the JPO decision.",
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

const PATENTINVALIDATION: IExpansionPanel = {
    title: "Patent Invalidation",
    description: "",
    content:
    {
        elements: [
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A trial for invalidation is provided as a system for resolving patent disputes as an administrative solution regarding the validity of patents at the JPO Board of Appeal.",
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
                            text: "In fact, when a patentee files a patent infringement suit, the accused infringer often files a patent invalidation trial as a counter action.",
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
                            text: "The invalidation trial is an adversarial system, in which both parties participate in the trial procedure.",
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
                        text: "Explanation of invalidation trial procedure and comments on the key steps",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "titledimage",
                objs: [
                    {
                        title: "Invalidation trial procedure",
                        img:
                        {
                            folder: "patentmanual",
                            filename: "invalidationflow.png",
                            classes: ["medium"]
                        }
                    }]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "S1: An invalidation request initiates a trial for invalidation.",
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
                            text: "When the invalidation request is recorded at the JPO, the patentee cannot amend the claims.",
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
                            text: "Amendment is only available within the invalidation procedure.",
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
                            text: "S2: The assigned panel at the Board of Appeal forwards a copy of the invalidation brief to the patentee. The patentee is given a term of 90 days to respond. Only within this response term can the patentee amend the claims.",
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
                            text: "S3 & S4:  A response from the patentee is forwarded to the petitioner.",
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
                            text: "S5: Preparation for Oral Hearing.",
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
                            text: "The panel studies the invalidation brief and the patentee’s response and sends questions to the parties for the Oral Hearing.",
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
                            text: "S6: Oral Hearing",
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
                            text: "A chief Examiner among the panel acts as an administrative judge in an oral hearing.",
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
                            text: "Both parties must attend the hearing and present their arguments.",
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
                            text: "In the hearing, there are questions from the Examiners and arguments between the parties.",
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
                            text: "Both parties can file supplemental arguments and clarification.",
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
                            text: "S7: Render provisional decision",
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
                            text: "When the panel considers any claims to be invalid, a Provisional Notice of Invalidity is issued to the patentee.",
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
                            text: "S8 and S9: The patentee can argue against the Provisional Invalidation Notice and may also amend the claims only within the response term.",
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
                            text: "S10: The petitioner can rebut the response of the patentee. In the case where the claims are amended, a submission of additional prior art references and arguments by the petitioner is permitted.",
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
                            text: "S11: Decision",
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
                            text: "The panel thoroughly studies the responses of both parties and makes a final decision. If the Notice of Invalidity is overcome by the patentee’s response, a validity decision will be rendered. If not, the Board issues a Decision of Invalidity.",
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
                            text: "S12: Appeal to IP High Court.",
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
                            text: "The losing party can appeal the decision to the IP High Court. The appeal term for a foreign resident is 120 days from the decision.",
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
                            text: "The IP High Court is an appellate court which examines whether there are any errors in the JPO decision. Accordingly, an appeal with a claim amendment or introduction of substantive new prior art at the IP High Court is not permitted.",
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
                        text: "Comparison between the opposition system and invalidation system",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Since the trials for opposition/invalidity have many similarities and differences, important items are listed below.",
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
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Eligible person for filing",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "any person",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "interested person",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Filing period",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "6 months from patent publication date",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "any time after patent issuance",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Grounds for filing",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "mainly lack of novelty and inventive step, new matter issues",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "all grounds for patentability requirements",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Effects of filing",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "prohibition of voluntary amendments of patent; but cannot automatically stay the pending patent litigation",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Same as on the left",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "procedures/method of proceeding",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Ex parte procedures, conducted in principal between the JPO and patentee; Interview request from patentee side is acceptable.",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Inter partes procedures, conducted between the petitioner and patentee;",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "method of proceeding",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "conducted by documentary proceedings.",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Oral hearing is provided during the proceeding.",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Advance notice of final disposition",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Advance Notice will be given prior to final disposal and provides an opportunity for arguments/amendment, if the Board considered the patent to be cancelled.",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Same as on the left",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Official Fees",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "JPY 16500 +JPY2400 per number of target claims",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "JPY 49500 +JPY5500 per number of target claims",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },

                        {
                            column1:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "Time length",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "about 7.2 months (JPO 2018）",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column3:
                            {
                                elements: [
                                    {
                                        type: "span",
                                        objs: [{
                                            text: "about 11.1 months (JPO 2018）",
                                            url: null,
                                            routerlink: null,
                                            tooltip: null,
                                            classes: ["noselect"]
                                        }]
                                    }]
                            },
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },
                    ],
                    cols: ["", "Patent Opposition", "Patent Invalidation"]
                }]
            },
        ]
    }
};

const PATENTCORRECTION: IExpansionPanel = {
    title: "Trials for Correction of Issued Patent Claims",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "How to Correct issued Patent Claims",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Amendments to patent claims, the specification, or drawings after patent issuance is only possible through a Trial for Correction. An amendment request is usually examined by a panel of three Board of Appeal Examiners. A patentee may request a correction at any time, except for the period in which an opposition or invalidation trial is pending. Correction is provided as a counter action against the attack on a patent through an invalidation trial or opposition against a patent. If an invalidation trial or opposition is started earlier, the patentee cannot file a trial for correction. In such cases, correction of the patent must be done within the respective invalidation trial procedure or the patent opposition procedure.",
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
                            text: "Claim amendments must be of a limiting nature and cannot broaden the scope of the claim. A patented claim can be amended to conform to the English text if the original application was filed in the English language provided that there is no broadening of the claim.",
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
                        text: "What are the requirements for a Patent Claim Correction?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A trial for correction must be directed to one of the following:",
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
                                    text: "Cancellation of a claim or claims.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Restriction of claim or claims. The claimed invention must be patentable after the restriction.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Correction of errors. The claimed invention must be patentable after the correction.",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Clarification of an unclear description. The claimed invention must be patentable after the clarification.",
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
                            text: "Since a Trial for Correction cannot be requested after a patentee has been served with an invalidation brief or a patent opposition, it is recommended that if a patent dispute is expected, the descriptions of the claims and specification should be thoroughly checked, and if necessary, a Trial for Correction should be requested as soon as possible.",
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
                            text: "A Trial for Correction can be requested during an ongoing infringement trial, provided that an invalidation trial has not been requested by the other party. Furthermore, there is no limit to the number of times a patentee can request a trial for correction.",
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
                            text: "The examination of a correction trial is a fast process. The results of a correction trial are typically received around 3 months after filing the request.",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        }
                    ],
                    classes: null
                }]
            }
        ]
    }
};

const PATENTLITIGAION: IExpansionPanel = {
    title: "Patent Litigation",
    description: "",
    content:
    {
        elements: [
            {
                type: "header",
                objs: [
                    {
                        text: "Typical Patent Litigation in Japan",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In principle, as no specific discovery process is available in litigation, all of the patent litigations filed before the courts proceed to “trial sessions” to be held before judges where each party submits its briefs and produces evidence.",
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
                            text: "A typical patent litigation goes to the first stage where the court reviews the infringement issue and validity of patent issues. It normally takes several rounds of preparatory proceedings (benron junbi tetsuzuki) followed by an explanatory session on technical matters. If the court believes the patent concerned is infringed, then the proceedings move to the second stage of damage calculation and then to a conclusion. It is common that a patent litigation is settled following a recommendation for settlement by the court that forms the conclusion through the trial proceedings.",
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
                            text: "Below is an overview of patent litigations in Japan based on the data as of the year 2021 collected and analyzed by the IP High Court.",
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
                            text: "From 2014 to 2019, 68% of patent litigations before the Tokyo District Court and the Osaka District Court were concluded by judicial decisions, while remaining 32 % were concluded by settlement. In addition, 46% of the judicial decisions issued in for patent litigation proceedings found no infringement (against patentee), while 20% thereof found patent infringement (in favor of patentee). Of the cases settled, 24% of the settlements include clauses promising the cession of infringing activities and/or monetary payments which can be seen in favor of patentees.",
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
                            text: "Based on the above data, it can be said that half of the infringement claims by patentees before the court are upheld or recognized to certain extent and the other half dismissed.",
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
                            text: "(Number of judgements and settlements at Tokyo and Osaka District Courts from 2014 to 2019, resource IP High Court)",
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
                type: "titledimage",
                objs: [
                    {
                        title: "Examination procedure through the PCT route",
                        img:
                        {
                            folder: "patentmanual",
                            filename: "litigationpiegraph.png",
                            classes: ["medium"]
                        }
                    }]
            },
            {
                type: "header",
                objs: [
                    {
                        text: "Court systems for patent infringement cases",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Patent litigation must start at the Tokyo or Osaka District Court which have exclusive jurisdiction over patent infringement cases. The Tokyo District Court has exclusive jurisdiction over cases in the Eastern portion of Japan, and the Osaka District court has exclusive jurisdiction over cases in the Western portion of Japan. The IP High Court located in Tokyo, which is a special branch of the Tokyo High Court, exclusively handles all patent cases from the Tokyo District Court and the Osaka District Court as well as any suit against appeal/trial made by the JPO.",
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
                            text: "The Tokyo District Court has four IP divisions and the Osaka District Court has two IP divisions. One bench consists of three judges in a main action. The IP High Court has four ordinary divisions and one Special Division (Grand Panel), the latter of which consists of five judges including four presiding judges of each of the divisions. The Supreme Court is the final court to hear appeals from the IP High Court. However, the Supreme Court has broad discretion as to whether to accept a petition for acceptance of final appeal from parties for discretional review (jokoku juri moshitate), unless there is a ground for mandatory review of appeal (jokoku), such as a violation of the Constitution.",
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
                        text: "Who can file a patent infringement lawsuit?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A patent holder or exclusive licensee who registers a license in the patent register at the JPO (Senyo Jisshikensha) can file a lawsuit seeking an injunction and compensation for damages. A non-registered exclusive licensee (Dokusenteki Tsujo Jisshikensha) can claim compensation for its own damages.",
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
                        text: "Who can represent the parties of a patent infringement lawsuit?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A party is free to have a legal representation in the Japanese civil procedures. In practice, however, it is common to have attorneys-at-law (Bengoshi) legally represent patent infringement cases. It is also common that patent attorneys (Benrishi) work together with attorneys-at law and these patent attorneys can co-represent patent infringement cases together with the said attorneys-at-law, provided that such patent attorneys have passed the Specific Infringement Lawsuit Counsel Examination.",
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
                        text: "Who bears the burden of proof?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The burden of proving the cause of action as well as the damages suffered lies with the plaintiff. To prevail in a main action, the plaintiff must prove by a “high probability” standard that infringement of the plaintiff’s patent occurred, as opposed to a “preponderance of the evidence” standard that is used in other countries. However, there are some provisions in the Patent Act which help the plaintiff to meet the standard of proof, such as presumption of negligence of an infringer and presumption of the amount of damages incurred by the infringement (See Question 16.10).",
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
                            text: "Unlike the United States, there is no specific discovery process in Japan and the onus of producing evidence to the court will fall heavily on the plaintiff. However, the Patent Act provides that in patent infringement proceedings, the court, at the request of a party, may order the other party to produce documents that are needed to prove the infringement or to calculate the damages caused by the infringement. However, such an order may not be enforced if the person in possession of the documents has a legitimate reason for refusing to produce them.",
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
                            text: "Also, the Patent Act has recently introduced the concept of on-site inspection in which the court can appoint, upon the request of a party, a fair and neutral expert to enter the premises of the alleged infringer to examine documents, devices and the like under strict conditions (Article 105-2).",
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
                        text: "To what extent should a specific claim be stated in the complaint?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "As no specific discovery process is available in the Japanese civil proceedings, the plaintiff needs to investigate and analyze the accused product or process and prepare well before commencing patent litigation. Based on the investigation and analysis, the plaintiff is required to describe in its complaint the identity of the accused product or process, and structures or features thereof.  In addition, the plaintiff must provide a comparison between said structures or features and corresponding elements of each claim of the patent. Also, the plaintiff needs to describe in the complaint the approximate amount of damages he/she claims (which is used for calculation of stamp duties), the plaintiff can amend such amount in the subsequent proceedings.",
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
                        text: "Is a prior cease and desist letter a prerequisite for filing a patent infringement lawsuit?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "A prior cease and desist letter is not a prerequisite for a patent holder to file a lawsuit seeking injunction and compensation for damages.  However, it is quite common for a patent holder to first send such letter to the alleged infringer, inter alia, to explore the possibility to stopping the infringing activity and/or settle the case without filing a lawsuit. Please note that in Japan sending a cease and desist letter to retail stores could be treated as a patent holder’s misrepresentation to customers which is subject to an injunction and damage claim under the Unfair Competition Prevention Law.",
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
                        text: "Issues in the trial and how to proceed with the lawsuit (steps of trial at the court)",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The court adopts a so-called “two-step” review of infringement cases.  In the first stage, the court first reviews whether the defendant’s product or process infringes the plaintiff’s patent (infringement issues) and also addresses validity issues if the validity of the patent is contested by the defendant. When any validity issues are cleared and the court believes the patent to be infringed, the court will disclose its opinion to the parties.  Thereafter, the proceedings then move to the second stage which involves damages calculations unless both parties agree to settle the case. Also, if the court determines that there is no infringement or that the patent is invalid in the first stage, the court ends the trial and will hand down its judgment in favour of the defendant unless both parties agree to settle the case.",
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
                            text: "In the Tokyo District Court’s practice, after the first oral hearing (to be held in court), the discussion is mainly conducted in preparatory hearing sessions (benron junbi tetsuzuki) held in judicial chambers in which the presiding judge and other judges analyze the issues involved until they are able to reach a conclusion regarding infringement.",
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
                        text: "How much time is normally required for the overall court proceedings?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Patent litigation is initiated by the filing of a complaint and the production of documentary evidence by the Plaintiff. The court then serves the complaint on the defendant and sets the date for the first oral hearing and a due date for the answer to be submitted by the defendant.",
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
                            text: "The patent litigation process model published by the Tokyo District Court anticipates about five (5) rounds of preparatory proceedings (benron junbi tetsuzuki) to complete an infringement phase (the first stage) after the first oral hearing. During the preparatory proceedings, both parties exchange their briefs and produce their evidence. Explanatory sessions regarding technical matters will commonly be provided by both parties at the final phase of the first stage to have a better understanding of the technical issues.",
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
                            text: "At the fifth round of preparatory proceedings, according to the above model, the court discloses to the parties its opinion on the infringement. If the court determines that there is no infringement of patentee’s patent (or finds any reasons in favor of the defendant), the court ends the preparatory proceedings and closes the trial at the second oral hearing, or the Court can make a recommendation of settlement. In the case when the court determines that the defendant infringes the plaintiff’s patent and no recommendation for settlement is made, the court then proceeds to the second stage of calculation of damages. The model anticipates about three (3) more rounds of preparatory proceedings for the second stage.",
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
                            text: "It is common for a patent infringement case to take one year at the district court level and another several months if appealed to the IP High Court.",
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
                        text: "Expected progress of typical patent infringement proceedings in the model (the first stage)",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "header",
                objs: [
                    {
                        text: "First Oral Hearing",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },

            {
                type: "table",
                objs: [{
                    rows: [
                        {
                            column1:
                            {
                                elements: [

                                    {
                                        type: "image",
                                        objs: [
                                            {
                                                folder: "patentmanual",
                                                filename: "arrow.png",
                                                classes: ["small"]
                                            }
                                        ]
                                    },]
                            },
                            column2:
                            {
                                elements: [
                                    {
                                        type: "table",
                                        objs: [{
                                            rows: [
                                                {
                                                    column1:
                                                    {
                                                        elements: [
                                                            {
                                                                type: "span",
                                                                objs: [{
                                                                    text: "Plaintiff:",
                                                                    url: null,
                                                                    routerlink: null,
                                                                    tooltip: null,
                                                                    classes: ["noselect"]
                                                                }]
                                                            }]
                                                    },
                                                    column2:
                                                    {
                                                        elements: [
                                                            {
                                                                type: "span",
                                                                objs: [{
                                                                    text: "Statement of the complaint, production of fundamental documentary evidence",
                                                                    url: null,
                                                                    routerlink: null,
                                                                    tooltip: null,
                                                                    classes: ["noselect"]
                                                                }]
                                                            }]
                                                    },
                                                    column3: null,
                                                    column4: null,
                                                    column5: null,
                                                    column6: null,
                                                    column7: null,
                                                    column8: null,
                                                    column9: null,
                                                    column10: null
                                                },

                                                {
                                                    column1:
                                                    {
                                                        elements: [
                                                            {
                                                                type: "span",
                                                                objs: [{
                                                                    text: "Defendant:",
                                                                    url: null,
                                                                    routerlink: null,
                                                                    tooltip: null,
                                                                    classes: ["noselect"]
                                                                }]
                                                            }]
                                                    },
                                                    column2:
                                                    {
                                                        elements: [
                                                            {
                                                                type: "span",
                                                                objs: [{
                                                                    text: "Statement of the answer (presentation of summary of respondent’s arguments), production of fundamental documentary evidence",
                                                                    url: null,
                                                                    routerlink: null,
                                                                    tooltip: null,
                                                                    classes: ["noselect"]
                                                                }]
                                                            }]
                                                    },
                                                    column3: null,
                                                    column4: null,
                                                    column5: null,
                                                    column6: null,
                                                    column7: null,
                                                    column8: null,
                                                    column9: null,
                                                    column10: null
                                                },
                                            ],
                                            cols: ["", ""]
                                        }]
                                    },]
                            },
                            column3: null,
                            column4: null,
                            column5: null,
                            column6: null,
                            column7: null,
                            column8: null,
                            column9: null,
                            column10: null
                        },],
                    cols: ["", ""]
                }]
            },


            {
                type: "header",
                objs: [
                    {
                        text: "First Preparatory Proceedings",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "TODO: TABLE?",
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
                        text: "Second Preparatory Proceedings",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "TODO: TABLE?",
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
                        text: "Third Preparatory Proceedings",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "TODO: TABLE?",
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
                        text: "Fourth Preparatory Proceedings (the climax of the litigation)",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "TODO: TABLE?",
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
                        text: "Fifth Preparatory Proceedings",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "TODO: TABLE?",
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
                        text: "Are there any legal measurements to help the plaintiff (patent holder) to prove its claims in the proceedings?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "There are several means provided for in the Patent Act to help the plaintiff to prove its claims in patent litigation proceedings such as the following:",
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
                        text: "Presumption of negligence (Article 103)",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "An infringer of a patent right or exclusive license of another person is presumed negligent in the commission of the act of infringement.",
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
                        text: "Presumption of producing products by patented process (Article 104)",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Where the invention of a process of producing a product has been patented and the product was not publicly known in Japan prior to the filing of the patent application, a product identical to such product shall be presumed to have been produced by the patented process.",
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
                        text: "Presumption of amount of damages (Article 102)",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The plaintiff bears the burden of proof of the amount of actual damages incurred by the act of infringement of the defendant. However, considering the difficulty for the plaintiff to prove the amount of actual damages caused by the infringement, the Patent Act provides three types of presumptions where the amounts determined by way of the following are presumed to be the amount of damages: (i) “lost profits” calculated based on the infringer’s sales quantity with the patent holder’s profit rate; (ii) license fees that the patent holder would have obtained had the infringements not occurred; and (iii) profits made by the infringer (unjust enrichment).",
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
                            text: "The Patent Act was revised in 2019 (effective on April 1, 2020) as follows:",
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
                                    text: "The patent holder can seek “lost profits” within the limits of an amount proportionate to the production/sales capacity of the patent holder ('capacity').",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "Since the IP High Court decision on September 25, 2006, the courts had not included the portion of “lost profits” beyond the patent holder’s capacity in the amount of damages. The revision allows the patent holder to claim such a portion as being equivalent to license fees for the relevant license if given to the infringer (Article 102(1)(ii)).",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            },
                            {
                                type: "span",
                                objs: [{
                                    text: "In the calculation of the amount of damages presumed by license fees, the court may consider the amount of license fees that would have been negotiated and agreed upon based on the presumption of infringement. License fees that presume infringement will be higher than those that are actually negotiated and agreed upon in practice (Article 102(4)).",
                                    url: null,
                                    routerlink: null,
                                    tooltip: null,
                                    classes: ["noselect"]
                                }]
                            }
                        ],
                        classes: null,
                    },
                ]
            },
            {
                type: "header",
                objs: [
                    {
                        text: "Expert opinion for calculation of damages (Article 105-2-11)",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Where, upon the request of a party, the court orders that an expert opinion be obtained for the calculation of damages arising from the act of infringement, the other party shall explain to the expert witness the matters necessary for the expert witness's opinion.",
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
                        text: "Determination of reasonable amount of damage (Article 105-3)",
                        type: "h2",
                        classes: ["bullet"],
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Where the court has determined that there are damages to be awarded and it is extremely difficult, due to the nature of the circumstances, to prove the facts necessary to determine the amount of damages, the court may determine a reasonable amount of damages based on oral arguments and the result of the examination of evidence.",
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
                        text: "What defenses are available to the defendant?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In patent infringement proceedings, the defendant submits the answer to the complaint before the first oral hearing and briefs any number of times during the subsequent proceedings. The defendant commonly provides (i) a non-infringement defense and (ii) an invalidity defense.",
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
                            text: "A non-infringement defense is that the accused product or process does not fall within the technical scope of the patented invention. An invalidity defense covers almost all reasons for patent invalidity including novelty, non-obviousness (inventive step) and clarity issues. The invalidity defense will not, however, actually invalidate the patent in this proceeding as invalidity is determined in an invalidation trial before the JPO.  If an invalidity defense is successfully allowed by the court, the plaintiff cannot enforce the patent right against the defendant of the case.",
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
                            text: "Also, the defendant can simultaneously initiate a patent invalidation trial before the JPO.",
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
                            text: "Further, the defendant may claim that he/she has been practicing the invention covered by the patent prior to the grant of such patent, without knowledge of the patent (“prior use”), or that he/she used the invention for the purpose of experiment or research. Parallel import or a gray market defense could also be argued under certain conditions.",
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
                            text: "As a general rule for tortious acts, the right to claim compensation for damages incurred by the act of patent infringement lapses by prescription if it is not exercised within three years from the time when the patent holder comes to know of the damages and the identity of the alleged infringer, or within 20 years from the act of infringement.",
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
                        text: "Can the defendant just deny the plaintiff’s allegation of patent infringement?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In patent infringement proceedings, when the defendant (alleged infringer) wishes to deny an allegation about the accused product or process, the defendant is required to actively rebut the allegation by clarifying the alleged act of infringement. If there are reasonable grounds that prevent the defendant from making such a clarification, however, he/she is not required to do so.",
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
                            text: "This is not a shifting of the burden of proof and the purpose is to expedite the proceedings. For example, if the plaintiff identifies that the accused process that the defendant employs as “A-B-C-D” and if the defendant wishes to deny this allegation, he/she needs to clarify that his/her process is actually “A-B-C-E”, for example.",
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
                        text: "Consider filing a request for patent invalidation with the JPO",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In addition to non-infringement arguments and invalidity arguments in the court proceedings, it is very often that the defendant files a request for a trial for patent invalidation with the JPO Board of Appeal.",
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
                            text: "Under the Japanese law, the JPO is the only authority that can invalidate the issued patent. However, the court has a power to review the validity issues of the accused patent when the validity question is raised in the proceeding. If the defendant proved the invalidity of the patent, the court could deny the infringement and damage claim.",
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
                            text: "When a request for a trial for patent invalidation is filed, the JPO will proceed with the trial promptly, keeping in mind that the relevant patent infringement case proceeds in parallel.",
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
                            text: "Advantages for requesting a trial for invalidation is that the validity of the patent is examined by the eyes of technical experts and is managed by the Board of Appeal Examiners to focus on the issues raised by the petitioner or by the Examiners.",
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
                        text: "Does invalidation trial at the JPO stay the court proceedings?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The court may, if it considers it necessary, stay the court proceedings until the trial decision before the JPO becomes final and binding. In practice, however, the court rarely stays its patent infringement proceedings.",
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
                            text: "As the IP High Court exclusively handles all patent cases from the Tokyo and Osaka District Courts and all litigations for rescinding a trial decision by the JPO, even when decisions of the court and the JPO are not consistent, it is expected that the same bench of the IP High Court will review both relevant cases together in practice, and where feasible, render consistent decisions.",
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
                        text: "Is a declaratory judgment of non-infringement available for an alleged infringer?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "An alleged infringer can seek from the court a declaratory judgment of non-infringement. To be precise, the alleged infringer files a motion in the court to confirm that the patent holder concerned (the defendant) does not have the right to seek a permanent injunction and/or compensation for damages against the alleged infringer (the plaintiff). The alleged infringer needs to show the fact establishing the benefit of seeking confirmation, i.e., the existence of an actual dispute. In this regard, a cease and desist letter from a patent holder indicating that the recipient (the alleged infringer) is infringing the patent normally satisfies this requirement.",
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
                        text: "How are expert opinions used in the patent infringement proceedings?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "In patent infringement proceedings, both parties commonly submit to the court expert opinions and present their arguments in their briefs relying on such expert opinions. Also, the court can designate an independent expert if it considers it necessary. However, it is not common for the court to allow witness testimony including expert witness testimony.",
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
                            text: "Expert opinion for calculation of damages can be available in the damage proving stage and the court designates, upon the request of a party, a fair expert such as a public certified accountant to calculate the amount of damages (Article 105-2-11).",
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
                            text: "The Patent Act has recently introduced on-site inspection in which the court may appoint, upon the request of a party, a fair and neutral expert to enter the premises of the alleged infringer to examine documents, device and the like under strict conditions (Article 105-2).",
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
                        text: "Settlement",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Parties to a patent dispute are free to settle out-of-court or in the court proceedings at any time. In practice, the court often recommends a settlement (judicial settlement) in patent infringement proceedings. Depending on cases and parties thereto, the court sometimes makes a recommendation of settlement at an early stage but typically does so when it discloses its opinion on the infringement after it reaches the conclusion, and after the second stage (damage proving stage) is concluded.",
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
                            text: "The judicial settlement can cover not only the patent dispute before the court but also any other relevant issues between the parties; for instance, other patents which are not subject to the current litigation, and other patent litigations pending outside Japan. Also, a judicial settlement can cover any business arrangements between the parties which are not necessarily regulated by the Patent Act.",
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
                            text: "When a settlement, a waiver, or an acknowledgement of a claim is entered in the judicial record of settlement, that entry has the same effect as a final and binding judgment.",
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
                        text: "Who bears the court costs and attorneys’ fees at the conclusion of the proceedings?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "The court orders the losing party to bear court costs such as stamp duties. Unlike the United States, the court will not order the losing party to bear “all attorneys’ fees” incurred by the prevailing party. However, the court normally orders the losing party to bear approximately 10% of the damages awarded by the court to be deemed as attorneys’ fees incurred by the prevailing party.",
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
                        text: "Once the plaintiff obtains compensation for damages and thereafter the JPO invalidates the patent, can the defendant claim the return of compensation?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "When the court’s judgment of patent infringement in favor of the plaintiff becomes final and conclusive and thereafter the JPO determines that the patent concerned is to be revoked or invalidated and such a decision becomes final and binding, the defendant cannot claim in subsequent retrial proceedings that that patent is revoked or invalidated. Thus, the plaintiff is not required in the retrial proceedings to return the compensation it received. This restriction will also apply to a case when the JPO subsequently determines that the registration of the patent term extension must be invalidated.",
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
                            text: "On the other hand, if the prior final and conclusive judgement is an injunction and the JPO’s subsequent determination is to invalidate the patent concerned, the injunction is to be lifted, and the defendant can work the invention accordingly.",
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
                        text: "Are there any means for dispute resolution except for litigation?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "Parties can choose any out-of-court means to solve patent disputes (Alternative Dispute Resolutions or “ADR”) if they so agree.",
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
                            text: "Arbitration is a typical ADR and an arbitration award has the same effect as a final and conclusive judgement under the Arbitration Act. Though arbitration can be used on an ad-hoc basis, there are several certified institutions which provide ADR services, such as the Japan Intellectual Property Arbitration Center (JIPAC) and the Japan Commercial Arbitration Association (JCAA). In September 2018, the International Arbitration Center in Tokyo (IACT) was established. These institutions also provide mediation services.",
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
                            text: "Please note that judicial mediation (chotei) is also available before the Court. In 2019, the court started its new operation of judicial mediation regarding intellectual property (“IP mediation”) which is available in the Tokyo District Court and the Osaka District Court, provided that both parties submit their agreement on jurisdiction. A mediation committee consisting of IP court judges, attorneys-at-law and patent attorneys etc. hears a dispute and reviews arguments and relevant materials. Then the committee provides its opinion and, where appropriate, its mediation proposal to the parties. It is expected that the committee will provide its opinion and mediation proposal before or at the third meeting. When an agreement is reached between the parties during the proceedings and it is entered in a judicial record, such an entry has the same effect as a judicial settlement.",
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
                        text: "Is it possible to inspect and copy case records of patent litigations of other companies?",
                        type: "h2",
                        classes: null,
                    }
                ]
            },
            {
                type: "paragraph",
                objs: [{
                    spans: [
                        {
                            text: "While the court does not publish a case record of a pending case online, such case record can be publicly available at the relevant court. Any person may file a request to inspect a case record with the court clerk of the relevant court where a particular case is pending, by identifying the case number. With regard to a case record involving oral arguments that are prohibited from being disclosed to the public pursuant to the Constitution and the Court Act, only a party to the case and an interested party can request to inspect such relevant portion of the case records.",
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
                            text: "On the other hand, only an ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        },
                        {
                            text: "interested party",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["bold"]
                        },
                        {
                            text: " to the case can copy the case records.",
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
                            text: "The court may also rule, upon the request of a party in the case, to limit the persons that may request to inspect or copy part of said case record in which the relevant confidential information is entered or recorded to the parties to the case.",
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
                            text: "Please note that a preliminary disposition case is not open to the public and only parties to the case and an ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        },
                        {
                            text: "interested party",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["bold"]
                        },
                        {
                            text: " can inspect and copy such case records.",
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
                            text: "An ",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: null
                        },
                        {
                            text: "interested party",
                            url: null,
                            routerlink: null,
                            tooltip: null,
                            classes: ["bold"]
                        },
                        {
                            text: " in connection with a preliminary disposition is a third party whose rights or legal benefits under public law or private law are directly or indirectly affected by the case concerned, and a third party whose factual or economic benefits are affected is not an interested party. A company that has concern about a stable supply of parts of another company which are subject to a preliminary disposition is not treated as an interested party and thus cannot inspect and copy the case record of the preliminary disposition.",
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
        PATENTBASICPATENTREQS,
        PATENTCONSIDERATIONSTECHFIELDS,
        PATENTEXAMANDACCEL,
        PATENTEXAMINATION,
        PATENTAPPEAL,
        PATENTAMENDMENT,
        PATENTDIVISIONAL,
        PATENTTERM,
        PATENTFEES,
        PATENTOPPOSITION,
        PATENTINVALIDATION,
        PATENTCORRECTION,
        PATENTLITIGAION

        // HEREEE
    ]
};

export const PATENTGUIDANCECONTENT: IContent = {
    elements: [
        {
            type: "header",
            objs: [{
                text: "Guidance on Japanese Patent Practice",
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

// // TABLE TEMPLATE
// {
//     type: "table",
//     objs: [{
//         rows: [
//         {
//             column1:
//             {
//                 elements: [
//                     {
//                         type: "span",
//                         objs: [{
//                             text: "",
//                             url: null,
//                             routerlink: null,
//                             tooltip: null,
//                             classes: ["noselect"]
//                         }]
//                     }]
//             },
//             column2:
//             {
//                 elements: [
//                     {
//                         type: "span",
//                         objs: [{
//                             text: "",
//                             url: null,
//                             routerlink: null,
//                             tooltip: null,
//                             classes: ["noselect"]
//                         }]
//                     }]
//             },
//             column3: null,
//             column4: null,
//             column5: null,
//             column6: null,
//             column7: null,
//             column8: null,
//             column9: null,
//             column10: null
//         },],
//         cols: ["", ""]
//     }]
// },