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
            '1개의 페이지마다 초기화 로직부터 공통 외부라이브러리 함수까지 전부 선언해주어야했던 부분의 문제 해결을 위해 JSP Template를 제작하여 생산성 향상에 기여',
        },
        {
          content: '서브쿼리를 사용하던 부분을 조인쿼리로 풀어내어 쿼리속도 25퍼 향상에 기여',
        },
        {
          content:
            'ERP 시스템의 복잡한 쿼리를 분석하고 CTE로 분리하여 SQL 가독성을 높였고, 비지니스 로직이 명확하게 드러나도록 개선, 덕분에 운영 이슈 발생시 문제 지점을 빠르게 파악할 수 있어 협업 효율과 운영 안정성이 향상됨',
        },
        {
          content:
            '생산 계획 및 관리 모듈, 품질 관리 모듈에서 특정 수주에 대한 설비, 예산, 운송, 수출, 품질을 영업 모듈, 구매 모듈과 연계하여 개발',
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
            'docker-java(OpenSource)를 활용하여 컨테이너의 리소스 모니터링 기능을 개발하였고, heap memory, cpu의 Threshold를 warn 70%, error 80%로 잡고 발생 시점에 webhook으로 알림을 보내주는 서비스 개발',
        },
        {
          content:
            '병렬적인 로그 처리를 위하여 Nginx의 conf를 수정하여 HttpStatus별로 로그를 분류하고 Spring Batch가 로그데이터를 5초간의 로그데이터를 분석하여 API 사용량을 모니터링 기능을 개발함',
        },
        {
          content: '정제된 로그 데이터 추출을 위한 로그 파서 개발',
        },
        {
          content:
            '로그데이터 처리를 하는 과정에서 로그 파일들이 겹쳐서 읽히는 동시성 문제가 발생하였고 @JobScope를 활용하여 JobInstance 동시성 문제 해결',
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
