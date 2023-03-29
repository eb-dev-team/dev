# Commit Message Style Guide

## Message structure

    type(option): Subject (issue)    // -> 제목
    \n
    body(option)             //  -> 본문
    \n
    footer(option)           // -> 꼬리말

- type: 종류
- Subject: 50자 이하, 마침표 x, 동사 먼저, 첫글자 대문자
- body: 무엇을 왜 했는지
- footer: 이슈 트래커

## Subject types

    feat: 신규 개발
    fix: 버그를 고침
    design: Ui 변경
    !BREAKING CHANGE: 큰 변화가 있는 경우
    !HOTFIX: 그 밖에 치명적인 버그를 고쳐야하는 경우
    style: 코드 포맷만 변경
    refactor: 리팩토링
    perf: 성능개선
    comment: 주석 관련
    docs: 문서 수정
    test: 테스트 코드 관련
    chore: 빌드 태스크, 패키지 매니저 설정
    rename: 파일, 폴더 이름이나 위치 변경
    remove: 파일 삭제
    add: 기타 문서, 파일 추가

## Footer types

    fixes: 수정 중
    resolves: 해결
    ref: 참고
    related to: 관련 이슈(해결 x)

### Example

    ix(map): 변경 범례 (#9999)

    날씨 범례 변경 (최종)

    resolves: #9999
    ref: #9
    related to: #99, #999
    
#### 로컬에서 삭제한 브랜치 정리

    git fetch --all --prune
