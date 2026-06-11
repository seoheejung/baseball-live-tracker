# Baseball Live Tracker

> Kafka와 WebSocket 기반 실시간 야구 경기 알림 Chrome 확장 프로그램

## 개요

Baseball Live Tracker는 야구 경기 이벤트를 실시간으로 수집하고, Kafka 기반 이벤트 파이프라인을 통해 처리한 뒤 Chrome Extension으로 전달하는 학습용 프로젝트다.

이 프로젝트는 단순한 경기 정보 조회 앱이 아니라, 실시간 데이터 수집, 메시지 큐 기반 비동기 처리, WebSocket 브로드캐스트, 브라우저 알림 흐름을 직접 구현하는 것을 목표로 한다.

---

## 핵심 기능

* 야구 경기 이벤트 수집
* Kafka Producer를 통한 이벤트 발행
* Kafka Consumer를 통한 이벤트 처리
* WebSocket 기반 실시간 이벤트 전송
* Chrome Extension Popup UI
* 응원 팀 선택
* 실시간 스코어 표시
* 득점, 홈런, 선수 교체 등 주요 이벤트 알림
* 최근 경기 이벤트 로그 저장

---

## 기술 스택

* Node.js
* TypeScript
* Kafka
* WebSocket
* Chrome Extension Manifest V3
* Docker Compose

---

## 전체 구조

```text
Game Feed
    ↓
Backend Producer
    ↓
Kafka
    ↓
Backend Consumer
    ↓
WebSocket Server
    ↓
Chrome Extension
    ↓
Popup / Notification
```

---

## 프로젝트 구조

```text
BaseballLiveTracker
├─ backend
│  ├─ src
│  │  ├─ api
│  │  ├─ websocket
│  │  ├─ producer
│  │  ├─ consumer
│  │  ├─ events
│  │  └─ config
│  ├─ test
│  └─ package.json
│
├─ extension
│  ├─ src
│  │  ├─ popup
│  │  ├─ background
│  │  ├─ storage
│  │  └─ notifications
│  ├─ public
│  │  └─ manifest.json
│  └─ package.json
│
├─ infra
│  └─ docker-compose.yml
│
├─ docs
│  ├─ phase1.md
│  ├─ phase2.md
│  └─ architecture.md
│
└─ README.md
```

---

## 이벤트 예시

```json
{
  "gameId": "2026-06-12-LG-DOO",
  "inning": 7,
  "inningHalf": "TOP",
  "homeTeam": "DOO",
  "awayTeam": "LG",
  "homeScore": 3,
  "awayScore": 5,
  "eventType": "SCORE",
  "message": "LG 7회초 1득점",
  "timestamp": "2026-06-12T10:21:00Z"
}
```

---

## 진행 단계

* [ ] Phase 1. Chrome Extension 기본 UI
* [ ] Phase 2. Mock WebSocket Server
* [ ] Phase 3. Kafka Producer / Consumer
* [ ] Phase 4. 실시간 경기 이벤트 반영
* [ ] Phase 5. 알림 / 팀 즐겨찾기
* [ ] Phase 6. Docker Compose 구성
* [ ] Phase 7. README / 시연 문서화

---

## 상태

진행 예정
