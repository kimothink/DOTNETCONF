# .NET Conf 2026 @ Seoul

2026년 11월 26일 목요일 10:00–18:00 (한국 시간)  
서울특별시 종로구 종로1길 50, 더케이트윈타워 A동 13층

## 페이지

`2026/index.html`이 행사 페이지입니다. 루트 페이지는 `2026/`으로 이동합니다.
빌드 과정이 없는 HTML/CSS/JavaScript 정적 사이트입니다.

## 발표자 수정

`2026/speakers.js`에 발표자 10명 자리가 있습니다. 첫 두 항목은 이호원, 박상만 발표자이며 나머지 8개 항목의 빈 값을 채우면 공개됩니다.
사진은 `2026/assets/`에 저장하고 `image`에 상대 경로를 입력하세요.
첨부 순서에 따라 첫 인물 사진을 이호원, 두 번째 인물 사진을 박상만으로 배치했습니다. 필요하면 두 image 값을 교환하세요.
세션 순서는 발표 시간표를 의미하지 않습니다. 등록 링크와 세션별 시간은 제공되지 않아 표시하지 않았습니다.

## GitHub Pages 배포

GitHub에 공개 저장소 `DOTNETCONF`를 생성한 다음 이 디렉터리에서 실행합니다.

```powershell
gh auth login
gh repo create DOTNETCONF --public --source=. --remote=origin --push
gh api --method POST repos/kimothink/DOTNETCONF/pages -f build_type=workflow
gh workflow run pages.yml
```

이미 저장소를 만들었다면 `gh repo create` 대신 해당 원격 주소를 등록하고 push하세요.
Settings → Pages → Source를 GitHub Actions로 설정해도 됩니다.
배포 주소는 `https://kimothink.github.io/DOTNETCONF/2026/`입니다.

로컬 확인은 이 디렉터리에서 정적 서버를 실행해 `/2026/`을 여세요.
후원사 이미지는 제공된 외부 URL을 사용합니다.
