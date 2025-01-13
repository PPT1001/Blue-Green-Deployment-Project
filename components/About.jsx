import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import {
  User2,
  MailIcon,
  LocationIcon,
  PhoneCall,
  HomeIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  School2Icon,
  MedalIcon,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Pragash Sasitharan",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+94 77 972 4396",
  },
  {
    icon: <MailIcon size={20} />,
    text: "Pragash1001@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Colombo, Sri Lanka",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "BSc (Hons) in Computer Science",
  },
  {
    icon: <Calendar size={20} />,
    text: "1st, October 2005",
  },
];

const qualificationsData = [
  {
    title: "education",
    data: [
      {
        icon: <GraduationCap size={20} />,
        title: "BSc (Hons) in Computer Science",
        subtitle: "University of Westminster",
        date: "2023 - Present",
      },
      {
        icon: <School2Icon size={20} />,
        title: "Cambridge International A/Ls",
        subtitle: "Royal Institute International School",
        date: "2020 - 2022",
      },
      {
        icon: <School2Icon size={20} />,
        title: "Cambridge International O/Ls",
        subtitle: "Royal Institute International School",
        date: "2019 - 2020",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "IFS R&D International",
        role: "DevOps Engineer Intern",
        date: "06/2023 - Present",
      },
      {
        company: "Axle Global",
        role: "Full Stack Developer (Freelance)",
        date: "11/2023 - Present",
      },
    ],
  },
];

const acheivementsData = [
  {
    competition: "Innovation Nation Sri Lanka 2023",
    award: "Top 10 Finalists Colombo North Provincial Competition",
    issuedBy: "IEEE Young Professionals Sri Lanka",
  },
  {
    competition: "Idealize 2023",
    award: "Finalists | People's Choice Award | Web App Excellence Award",
    issuedBy: "AIESEC University of Moratuwa",
  },
  {
    competition: "The Aquathon",
    award: "1st Runners Up",
    issuedBy: "IEEE Student Branch of Informatics Institute of Technology",
  },
  {
    competition: "Young Environmentalists' Challenge 2020",
    award: "2nd Runners Up",
    issuedBy: "Deakin University, Australia",
  },
];

const volunteering = [
  {
    title: "Volunteering Experience",
    data: [
      {
        title:
          "Treasurer of IEEE Robotics and Automation Society of IIT for Term 2023/2024",
      },
      {
        title:
          "Finance and Partnerships Team Member of IEEE Sri Lanka Student Activities Committee 2023/2024",
      },
      {
        title:
          "Logistics Team Member of IEEE Innovation Nation Sri Lanka 2023 - IEEE Young Professionals Sri Lanka",
      },
      {
        title:
          "Industry Outreach Team Member of IX 23 - IEEE Student Branch of Informatics Institute of Technology",
      },
      {
        title:
          "Junior & Senior Prefect of Royal Institute International School",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 text-center xl:mb-16 mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* Image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/Pragash2.png"
            />
          </div>
          {/* Tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              {/* Tab Lists */}
              <TabsList className="w-full grid xl:grid-cols-4 xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="acheivements"
                >
                  Acheivements
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="volunteering"
                >
                  Volunteering
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center items-center xl:text-left">
                    <h3 className="h3 mb-4">Passionate Software Engineer</h3>
                    <p className="subtitle text-center max-auto xl:mx-0">
                      I specialise in crafiting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaing
                      user experience.
                    </p>
                    {/* Icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div className="ml-2">{item.text}</div>
                        </div>
                      ))}
                    </div>
                    {/* Language */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Tamil, Sinhala</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* Experience and Education Wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <div className="capitalize font-medium">
                            {getData(qualificationsData, "experience").title}
                          </div>
                        </div>
                        <div className="border-b border-border"></div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "experience").data.map(
                            (item, index) => {
                              const { company, role, date } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 dark:bg-primary">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {date}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <div className="capitalize font-medium">
                            {getData(qualificationsData, "education").title}
                          </div>
                        </div>
                        <div className="border-b border-border"></div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationsData, "education").data.map(
                            (item, index) => {
                              const { title, subtitle, date } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2 dark:bg-primary">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {title}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {subtitle}
                                    </div>
                                    <div className="text-base font-medium">
                                      {date}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="acheivements">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Acheivements
                    </h3>
                    <div className="grid gap-y-8">
                      {acheivementsData.map((item, index) => {
                        const { competition, award, issuedBy } = item;
                        return (
                          <div key={index}>
                            <div className="flex gap-x-4 items-center">
                              {/* Add an acheivement icon */}
                              <MedalIcon size={28} className="text-primary" />
                              <div>
                                <div className="font-semibold text-xl leading-none mb-2">
                                  {competition}
                                </div>
                                <div className="text-lg leading-none text-muted-foreground mb-4">
                                  {award}
                                </div>
                                <div className="text-base font-medium">
                                  {issuedBy}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="volunteering">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">Experiences in Volunteering</h3>
                    <div className="mb-16 ">
                      <div className="border-b border-border mb-4"></div>
                      <div>
                        {getData(
                          volunteering,
                          "Volunteering Experience"
                        ).data.map((item, index) => {
                          const { title } = item;
                          return (
                            //Add a circle icon

                            <div
                              className="text-center subtitle xl:text-left mx-auto xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium">{title}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
