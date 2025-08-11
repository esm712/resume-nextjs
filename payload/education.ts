import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '삼성 청년 SW 아카데미(SSAFY)',
      subTitle: 'JAVA, WEB, SW문제해결, 관통프로젝트, 공통프로젝트, 특화프로젝트, 자율프로젝트',
      startedAt: '2023-01',
      endedAt: '2023-12',
    },
    {
      title: '가톨릭대학교',
      subTitle: '컴퓨터공학과 졸업',
      startedAt: '2016-03',
      endedAt: '2023-02',
    },
    {
      title: '제주제일고등학교',
      subTitle: '이과',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
