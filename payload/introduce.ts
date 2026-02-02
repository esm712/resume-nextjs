import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '**구조적 개선으로 비지니스의 지속 가능성을 확보하는 개발자**',
    '1년의 실무 기간 동안 레거시 시스템 고도화부터 최신 아키텍처 적용까지, 서비스의 안정성과 확장성을 확보하기 위해 끊임없이 고민해왔습니다.',
    '**첫째, 객체지향 원칙을 준수하며 유지보수성이 높은 설계를 지향합니다.** 단순 CRUD 구조를 넘어 Command와 Query 책임을 분리(CQRS)하고, 외부 변화에 유연한 Port & Adapter 패턴을 도입하며 도메인 중심 설계의 중요성을 깨달았습니다. 이를 통해 요구사항 변경에도 핵심 비즈니스 로직을 견고하게 유지하는 코드를 작성하려 노력합니다.',
    '**둘째, 성능 병목을 지표로 파악하고 실질적인 개선을 이끌어냅니다.** 향수 추천 서비스 개발 당시, TF-IDF 로직의 부하를 해결하기 위해 캐시 테이블을 도입하여 렌더링 속도를 90% 개선한 경험이 있습니다. 또한, 실시간 리소스 모니터링 기능을 직접 구현하며 시스템 지표를 모니터링하고 장애를 예측하는 역량을 키웠습니다.',
    '**셋째, 개발 프로세스 효율화를 통해 팀의 생산성에 기여합니다.** Jira와 Gitlab 연동으로 협업 비용을 줄이고, Blue-Green 방식의 CI/CD 파이프라인을 구축하여 무중단 배포 환경을 경험했습니다.',
    '이러한 경험을 바탕으로, 귀사에서 기술적 도전 과제를 주도적으로 해결하며 사용자에게 신뢰받는 서비스를 만들고 싶습니다.',
  ],
  sign: 'sungmin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
