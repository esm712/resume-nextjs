import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '객체지향 설계(OOP)와 마이크로서비스 아키텍처(MSA)에 관심이 많은 신입 백엔드 개발자입니다. 도전적인 문제를 마주할 때마다 깊이 고민하고, 해결 방법을 탐색하며 성장해왔습니다.',
    '특히 Java와 Spring Boot를 활용한 프로젝트를 진행하면서 OOP 원칙을 기반으로 유지보수가 쉬운 구조를 설계해보았고, 리눅스 기반의 자체 시스템 모니터링을 구축해본 경험도 있습니다.',
    '이러한 경험을 바탕으로, 실제 서비스 환경에서 발생하는 기술적 문제를 주도적으로 해결하며 비즈니스 가치 창출에 기여하는 개발자가 되고자 합니다. 협업을 통해 더 나은 결과를 만드는 과정에서 즐거움을 느끼며, 기술뿐만 아니라 커뮤니케이션에서도 성장하는 것을 추구합니다. 앞으로도 배움과 도전을 멈추지 않겠습니다.'
  ],
  sign: 'sungmin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
