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
          content: '개발 공수 감축을 위한 JSP Template 제작',
        },
        {
          content: '쿼리 최적화 및 튜닝 작업 지원',
        },
        {
          content: '100개 이상의 생산 모듈 화면 및 데이터 바인딩 작업',
        },
      ],
    },
    {
      title: "API 모니터링 서비스 '탈라리아' 개발",
      startedAt: '2023-10',
      endedAt: '2023-11',
      where: '삼성 청년 SW 아카데미',
      descriptions: [
        {
          content:
            'docker-java(OpenSource)를 활용하여 컨테이너의 CPU, Memory 실시간 사용률 모니터링 기능 개발',
        },
        {
          content: 'Spring Batch를 활용하여 API 사용량 모니터링 기능 개발',
        },
        {
          content: '정제된 로그 데이터 추출을 위한 로그 파서 개발',
        },
        {
          content: '@JobScope를 활용하여 JobInstance 동시성 문제 해결',
        },
      ],
    },
    {
      title: "향수 추천 SNS 서비스 '데칼코마니' 개발",
      startedAt: '2023-07',
      endedAt: '2023-08',
      where: '삼성 청년 SW 아카데미',
      descriptions: [
        {
          content: '캐시테이블을 활용하여 랜더링 속도 약 10초에서 1초로 개선',
        },
        {
          content: 'Jenkins를 활용하여 CI/CD 개발',
        },
        {
          content: 'TF-IDF(문서간 유사도)를 활용한 향수 추천 기능 개발',
        },
      ],
    },
  ],
};

export default project;
