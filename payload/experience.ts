import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)인바이트',
      positions: [
        {
          title: '솔루션사업부',
          startedAt: '2025-01',
          descriptions: ['ERP 생산 모듈 고도화', '신규 ERP Framework 개발'],
          skillKeywords: ['Java', 'JSP', 'Servlet', 'Javascript', 'HTML/CSS', 'SQL Server'],
        },
      ],
    },
    {
      title: '삼성 청년 SW 아카데미',
      positions: [
        {
          title: '수료(등급: 우수)',
          startedAt: '2023-01',
          endedAt: '2023-12',
          descriptions: [
            '총 1600시간 SW 교육과정 이수',
            'SW역량테스트 A+ 취득',
            '3개 프로젝트 중 2개 프로젝트 우수상 수상',
          ],
          skillKeywords: [
            'Java',
            'Spring',
            'HTML',
            'JS',
            'CSS',
            'SQL',
            'GitLab',
            'Jenkins',
            'AWS EC2',
          ],
        },
      ],
    },
  ],
};

export default experience;
