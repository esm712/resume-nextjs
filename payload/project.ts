import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '다이후쿠 ERP 시스템 개편',
      startedAt: '2025-01',
      endedAt: '2026-02',
      where: '(주)인바이트',
      descriptions: [
        {
          content: '**수주 연계 혼합 BOM(자체/외주) 검증 로직** 및 **품질 시각화 대시보드** 개발',
          descriptions: [
            {
              content: '[DB 성능 개선] 프로시저 전면 수정 및 CTE 활용 쿼리 최적화로 **배치/조회 속도 약 30% 향상**',
            },
            {
              content: '[UI/UX 개발] 불량 데이터 추적 차트 및 통계 보고서 신규 개발로 **검증 시간 83% 단축(일 2시간 → 20분)**',
            },
            {
              content: 'BOM 전개 사전 필터링을 통해 수량 및 금액 **데이터 오차율 0% 확보**',
            },
          ],
        },
        {
          content: '**MVC 기반 프론트 컨트롤러 도입**을 통한 로깅(Logging) 모듈 공통화 및 구조 개선',
          descriptions: [
            {
              content: '[아키텍처 개선] **프론트 컨트롤러 패턴을 설계 및 도입**하여 모든 요청(Request)의 진입점 통합',
            },
            {
              content: '[공통 모듈화] 로깅 기능을 프론트 컨트롤러로 분리(Decoupling)하여 **표준화된 로그 일괄 적재** 구현',
            },
            {
              content: '보일러플레이트 코드 제거를 통해 **코드 라인 수(LOC) 약 50% 감소** 및 핵심 로직 가독성 극대화',
            },
          ],
        },
        {
          content: '신규 API 데이터 **통신 포맷 전환(XML → JSON)** 및 성능 개선',
          descriptions: [
            {
              content: '데이터 통신 표준을 XML에서 JSON 방식으로 전면 전환하여 **복잡한 파싱 로직 제거**',
            },
            {
              content: '**JSON 직렬화/역직렬화** 및 **HTTP/2.0 업그레이드** 병행 적용',
            },
            {
              content: '네트워크 페이로드 감소로 **웹 응답 속도 15~30% 개선** 및 신규 API **개발 리드타임 단축**',
            },
          ],
        },
        {
          content: '프론트엔드 개발 환경 및 생산성 개선',
          descriptions: [
            {
              content: 'JSP 템플릿 개발을 도입하여 **프론트엔드 개발 생산성 50% 향상**',
            },
          ],
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
          content: '자체 모니터링 기능 개발',
          descriptions: [
            {
              content: 'docker-java(OpenSource)를 사용하여 리소스 모니터링',
            },
            {
              content: '리소스 Threshold warn 70%, error 80% 이상 -> Webhook 알림 전송',
            },
          ],
        },
        {
          content: '로그 분류 프로세스 고도화',
          descriptions: [
            {
              content: 'Nginix conf 수정을 통한 로그 분류 -> 데이터 처리 속도 75% 상승',
            },
            {
              content: '정제 로그 데이터 추출 파서 개발',
            },
            {
              content: '@JopScope를 통한 로그 파일 동시성 오류 해결',
            },
          ],
        },
      ],
    },
    {
      title: "위시리스트 기반 저축 도우미 서비스 '아끼미' 개발",
      startedAt: '2023-08',
      endedAt: '2023-10',
      where: '삼성 청년 SW 아카데미',
      descriptions: [
        {
          content: '아키텍처 고도화',
          descriptions: [
            {
              content: "Port&Adapter 패턴 적용('만들면서 배우는 클린 아키텍처' 참고)",
            },
            {
              content: 'CRUD 구조를 Command Query 구조로 개선 -> Transactional 최적화에 유리',
            },
          ],
        },
        {
          content: '개발 편의성 개선',
          descriptions: [
            {
              content: 'Jira Issue와 Gitlab branch 연동 -> 개발 프로세스 단축',
            },
          ],
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
          content: '렌더링 속도 개선',
          descriptions: [
            {
              content: '캐시테이블 활용 렌더링 속도 90% 개선',
            },
          ],
        },
        {
          content: '향수 추천 로직 개발',
          descriptions: [
            {
              content: 'TF-IDF(문서간 유사도) 활용',
            },
          ],
        },
        {
          content: 'CI/CD 구축',
          descriptions: [
            {
              content: 'Jenkins를 활용한 Blue-Green 배포',
            },
          ],
        },
      ],
    },
    {
      title: '모노리식 아키텍처에서 유스케이스 기반으로 마이크로서비스 식별 연구',
      startedAt: '2022-01',
      endedAt: '2022-12',
      where: '소프트웨어공학 연구실',
      descriptions: [
        {
          content: '데이터 전처리',
          descriptions: [
            { content: '불용어 제거 모듈 개발' },
            { content: 'TF-IDF를 활용한 컴포넌트 벡터화' },
          ],
        },
        {
          content: '클러스터링',
          descriptions: [
            {
              content: 'Bunch 논문 기반 실험 및 결과 정리',
            },
            {
              content: '유스케이스 기반 실행 비율 계산 모듈 개발',
              href: 'https://github.com/esm712/classify-microservice',
            },
          ],
        },
        {
          content: '논문 작성',
          descriptions: [{ content: '유스케이스 기반 알고리즘 수도코드 작성' }],
        },
      ],
    },
  ],
};

export default project;
