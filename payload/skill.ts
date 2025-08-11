import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Javascript',
    },
    {
      title: 'HTML/CSS',
    },
    {
      title: 'Python',
    },
    {
      title: 'C++',
    },
  ],
};

const frameworksLibraries: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
    {
      title: 'JPA',
    },
    {
      title: 'Spring Batch',
    },
    {
      title: 'Spring Security',
    },
  ],
};

const infraDatabases: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'SQL Server',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'PostgreSQL',
    },
    {
      title: 'Linux',
    },
    {
      title: 'AWS EC2',
    },
    {
      title: 'Docker',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools',
  items: [
    {
      title: 'Jenkins',
    },
    {
      title: 'Git',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Jenkins',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    frameworksLibraries,
    infraDatabases,
    tools
  ],
};

export default skill;
