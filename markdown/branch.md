# project branch
> 프로젝트의 브랜치는 git-flow를 사용해서 진행합니다.

### Branch 구성
1. master
정식 출시 되는 브랜치. master/HEAD는 소프트웨어의 최신 배포판 버전이 들어있다.
2. develop
개발 서버 브랜치
3. feature
기능 개발하는 브랜치. develop/HEAD에서 파생되고 개발이 끝나면 develop에 merge된다.
4. release
릴리즈 버전 브랜치. release 브랜치는 develop 브랜치를 기반으로 생성된다. QA 테스트가 릴리즈 브랜치를 기준으로 진행.
5. hotfix

### 설정
git-flow를 사용해서 설정. `git flow init`