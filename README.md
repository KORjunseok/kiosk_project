# kiosk_project
키오스크 프로젝트 입니다. 

작성한 API와 ERD를 보면서 개발을 진행하는 게 목적입니다. 누구라도 보다가 잘못된 방향으로 하고 있다고 생각하시면 피드백은 언제나 환영입니다 ^^ (게더, 슬랙DM 모두 환영)  

--- 

## 프로젝트 설명

- **회원가입 및 로그인**

  -   공통 기능. 최소한의 정보만을 수집하는 회원가입. 현재 구상 내용은 회원가입한 인원이라고 비회원과 다른 기능은 없음.
    대략적인 완성 이후 추후 고민해볼 예정.

- **상품 관리**

  -   고객에게 노출 되는 메뉴판 역할을 담당. 주문 시 item 테이블을 참고하여 주문하게 된다. 

- **발주 관리**

  -   특정 상품의 재고를 파악하여, 관리자 입장에서 발주함. item 테이블과 stock_item 테이블 사용 
   
- **주문 관리**

  -   고객이 주문(item 테이블 참고)을 하여 주문번호, 가격 등을 반환 받는다. 관리자 입장과 고객 입장 두 가지 측면 고려

- **옵션 관리**

  -   주문 시 같이 사용할 예정인 옵션. 주문 후 본인이 선택한 옵션만을 보여준다. 보통은 옵션만을 수정하거나 삭제하지 않으므로 최소한 기능(Read)을 구현 

API
https://app.gitbook.com/o/pr9la6jkw1bSh5tjAHnO/s/Kw9BFUH0BHB7HRzCIZ9w/api/api-4

ERD
https://drawsql.app/teams/oh-junseoks-team/diagrams/kiosk-project

![image](https://github.com/KORjunseok/kiosk_project/assets/131343782/9971caa4-7748-4ecd-ae6b-9d328dc091ed)

