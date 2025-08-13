import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '(주)인바이트',
      positions: [
        {
          title: '솔루션 개발부, Java Developer',
          startedAt: '2025-01',
          descriptions: [
            'SI 프로젝트 참여 및 개발 수주',
            'JSP Servlet 기반 자체 솔루션 고도화',
            'DB 설계 및 쿼리 작성',
          ],
          skillKeywords: ['Java', 'JSP', 'Servlet', 'Javascript', 'HTML/CSS', 'SQL Server'],
        },
      ],
    },
  ],
};

export default experience;
