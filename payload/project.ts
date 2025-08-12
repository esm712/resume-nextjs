import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '다이후쿠 ERP 시스템 개편',
      startedAt: '2025-01',
      where: '(주)인바이트',
      descriptions: [
        {
          content:
            '개발 공수 감축을 위한 JSP Template 제작',
        },
        {
          content:
            '쿼리 최적화 및 튜닝 작업 지원',
        },
        {
          content:
            '',
        },
      ],
    },
    {
      title: 'Global Linux Bootcamp',
      startedAt: '2017-05',
      endedAt: '2019-12',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
  ],
};

export default project;
