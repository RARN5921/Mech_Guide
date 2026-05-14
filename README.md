# MECH-GUIDE: 기계 설계 보조 플랫폼

MECH-GUIDE는 기계 설계 엔지니어를 위한 종합 보조 플랫폼입니다. AI 기반 시각 분석, 규격 추천 엔진, 3D CAD 라이브러리, 재질 최적화 및 커머스 연동 기능을 제공합니다.

## 주요 기능

1.  **설계 어드바이저 (Visual Advisor)**: 설계 스케치나 이미지를 업로드하여 AI 분석 및 피드백을 받습니다.
2.  **규격 추천 엔진 (Selection Engine)**: 설계 파라미터를 입력하여 최적의 볼트, 베어링, 기어비 등의 규격을 산출합니다.
3.  **CAD 라이브러리 (CAD Library)**: 주요 기계 부품의 3D 모델을 웹에서 바로 확인하고 다운로드합니다.
4.  **재질 최적화 (Material Optimizer)**: 사용 환경에 가장 적합한 재질을 추천받고 특성을 비교합니다.
5.  **커머스 커넥터 (Commerce Connector)**: 선정된 부품을 주요 공급사(MISUMI, WBN 등)에서 즉시 확인하고 구매를 진행합니다.

## 기술 스택

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4, Framer Motion (애니메이션)
- **3D Rendering**: @react-three/fiber, @react-three/drei (Three.js)
- **Icons**: Lucide React

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build
```
