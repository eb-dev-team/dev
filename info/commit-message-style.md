# Commit Message Style Guide

## Message structure
    type(option): Subject    // -> 제목
    \n
    body(option)                    //  -> 본문
    \n
    footer(option)                  // -> 꼬리말

- type: 종류
- Subject: 50자 이하, 마침표 x, 동사 먼저, 첫글자 대문자
- body: 무엇을 왜했는지
- footer: 이슈 트래커


## Subject types
    Feat: 신규 개발
    Fix: 버그를 고침
    Design: Ui 변경
    !BREAKING CHANGE: 큰 변화가 있는 경우
    !HOTFIX: 그바게 치명적인 버그를 고쳐야하는 경우
    Style: 코드 포맷만 변경
    Refactor: 리팩토링
    Comment: 주석 관련
    Docs: 문서 수정
    Test: 테스트 코드 관련
    Chore: 빌드 태스크, 패키지 매니저 설정
    Rename: 파일, 폴더 이름이나 위치 변경
    Remove: 파일 삭제

## footer types
    Fixes: 수정중
    Resolves: 해결
    Ref: 참고
    Related to: 관련 이슈(해결 x)

### Example
    Fix(map): "변경 범례"
    
    날씨 범례 변경 (최종)

    Resolves: #9999 
    Ref: #9
    Related to: #99, #999