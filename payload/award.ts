import { IAward } from '../component/award/IAward';

const award: IAward.Payload = {
  disable: false,

  list: [
    {
      title: '2023 광광데이터 활용 공모전',
      subTitle: '장려상',
      at: '2023-11',
      descriptions: [
        {
          content: "영화 데이터를 활용한 스냅샷 어플리케이션 '슬레이트' 개발",
        },
      ],
    },
    {
      title: '삼성 청년 SW 아카데미 자율프로젝트',
      subTitle: '우수상',
      at: '2023-11',
      descriptions: [
        {
          content: "API 모니터링 서비스 '탈라리아' 개발",
        },
      ],
    },
    {
      title: '삼성 청년 SW 아카데미 공통프로젝트',
      subTitle: '우수상',
      at: '2023-08',
      descriptions: [
        {
          content: "향수 추천 SNS 서비스 '데칼코마니' 개발",
        },
      ],
    },
    {
      title: '교내 프로그래밍 대회',
      subTitle: '동상',
      at: '2021-10',
      descriptions: [],
    },
  ],
};

export default award;
