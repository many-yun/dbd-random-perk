# Dead by Daylight random perk site
![image](https://user-images.githubusercontent.com/92010078/195531226-fdfb85dd-0748-4400-8f65-cd5b0c84b720.png)
스팀 게임 '데드 바이 데이라이트'를 기반으로 한 랜덤 퍽 사이트입니다.(kr)<br>
게임 플레이어들에게 플레이의 재미를 더하기 위해 외국 랜덤퍽 사이트를 바탕으로 한국 유저들이 더욱 편리하게 사용할 수 있도록 보안, 제작하였습니다.<br>
생존자/살인마의 퍽과 아이템, 애드온 그리고 오퍼링을 랜덤하게 뽑을 수 있으며, 자신이 소유하고 있는 캐릭터를 선택함에 따라 퍽의 개수가 제한됩니다.<br>

<b>배포 사이트 : https://dbd-random-perks-kr.netlify.app/<br><br></b>


# 목차
[1. CREATED](#created) <br>
[2. 추후 추가 예정 기능](#추후-추가-예정-기능)<br>
[3. 기술 스택](#기술-스택)<br>
[4. 설치 및 실행](#설치-및-실행)<br>
[5. First time on this Site?](#first-time-on-this-site)<br>
[6. 구현 기능 설명](#구현-기능-설명)<br>
[7. Figma](#figma)<br>
[8. 폴더 구조](#폴더-구조)


## CREATED
사이트에 사용된 모든 정보는 나무위키의 DEAD BY DAYLIGHT/기술 문서에서 가져왔으며, 이미지는 https://deadbydaylight.fandom.com/ 에서 가져왔습니다.<br>
본 사이트는 상업적 용도가 아니며, 포트폴리오용으로 제작되었습니다.


## 추후 추가 예정 기능
+ 오늘의 추천퍽 -> 하루에 한 번 추천퍽이 랜덤으로 생성됩니다.


## 기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
</div>
<br>

## 설치 및 실행
```
& git clone https://github.com/many-yun/dbd-random-perk.git
& npm i
& npm start
```

## First time on this Site?
![Honeycam 2022-10-12 00-52-26](https://user-images.githubusercontent.com/92010078/195141697-ca7c9844-8b93-47c2-9279-455d6bcb0c32.gif)
- 사이트 이용자는 메인페이지에서 살인마/생존자를 선택할 수 있습니다. 선택 시 해당 페이지로 이동합니다.<br><br>

![Honeycam 2022-10-12 00-55-01](https://user-images.githubusercontent.com/92010078/195141746-9b4e4242-95da-4099-89d9-1f44aeee1097.gif)
- 각 섹션의 레버를 클릭해 랜덤한 기술(퍽)/아이템(+애드온),오퍼링을 뽑을 수 있으며, 각 이미지에 마우스 호버시 상세 정보가 표시됩니다.<br>
기술 섹션에서는 각 이미지를 클릭해 개별적으로 랜덤한 퍽을 뽑을 수 있습니다.<br><br>

![Honeycam 2022-10-13 16-28-25](https://user-images.githubusercontent.com/92010078/195530643-860a6137-61b2-4825-a2c7-46e36e100fa8.gif)
- 살인마 페이지에서 선택창에서 원하는 살인마를 선택하거나 무기 아이콘을 클릭해 랜덤으로 살인마를 뽑을 수 있습니다.<br><br>

![Honeycam 2022-10-12 00-57-45](https://user-images.githubusercontent.com/92010078/195142060-9898aa97-7d6d-4e9d-9f4e-343f7a0dcb58.gif)
- 살인마/생존자의 캐릭터 섹션에서 유저가 소유한 캐릭터를 선택할 수 있습니다.<br>
게임 내에서 각 기술(퍽)은 기본적으로 기술을 가진 캐릭터를 가지고 있어야 사용이 가능합니다. 하단의 '캐릭터' 섹션에서 사용자가 가지고 있는 캐릭터를 선택하여 기술들을 제한할 수 있습니다.<br>
ex) 캐릭터 섹션의 '로리'를 선택 해제시 해당 캐릭터의 전용 기술인 '유일한 생존자', '집착의 대상', '결정적인 일격'이 기술 목록에서 제외됩니다.<br>
- 살인마/생존자의 캐릭터 소유 유무는 따로 저장되며, 이는 브라우저의 localStorage에 저장되어 데이터가 유지됩니다.<br>
- 첫 사이트 방문 시 캐릭터 섹션의 체크박스는 기본적으로 전부 활성화 되어있습니다.<br><br>

## 구현 기능 설명
- api가 따로 있지 않아 직접 json파일을 만들어 제작하였습니다. <br>
퍽(기술), 아이템/애드온, 캐릭터 파일을 각각 구성하여 페이지의 섹션별로 컴포넌트를 구성하였습니다(perks, itemAddon, killerAddon, checkbox). 
<br>아이템/애드온 섹션을 제외한 나머지 섹션은 공통이며, survivor, killer 페이지에서 해당하는 데이터를 불러와 사용됩니다.

- 선택된 캐릭터의 id가 useState 배열에 저장되며, 캐릭터의 id는 기술 목록 데이터의 name과 같습니다. '기술' 섹션에서 배열 내에 있는 id로 필터링되어 각 캐릭터의 고유 기술이 목록에서 바로 추가/제외되도록 렌더링됩니다.

- 애드온은 아이템의 여부에 따라서 변경됩니다. 아이템이 랜덤으로 선택되면 애드온 또한 그 내에서 랜덤으로 변경됩니다. ((addonsInfo.filter(data => data.item === itemsInfo[itemRandomNum].tag)) 중복 불가능.

- 캐릭터 섹션의 체크박스 체크 여부는 로컬스토리지에 저장됩니다. 첫 페이지 방문 시 체크박스는 기본적으로 전부 활성화 되어있습니다. 전체선택/해제 버튼을 눌러 일괄 변경이 가능합니다. 


## Figma

https://www.figma.com/file/CqjcL9kKTSlkv1wH7Bh30x/dbd_random_perks?node-id=0%3A1

![image](https://user-images.githubusercontent.com/92010078/178775864-47381504-db80-46a0-b3d6-7c2a40f357c7.png)

심플...

## 폴더 구조
```
├─ public
└─ src
    ├─ components
    │   ├─ Checkbox.jsx
    │   ├─ HowtoUse.jsx
    │   ├─ ItemAddon.jsx
    │   ├─ KillerAddon.jsx
    │   ├─ Offering.jsx
    │   ├─ Perks.jsx
    │   ├─ PrettyGoodJobSoFar.jsx
    ├─ info
    │   └─ characters.json
    │   └─ items.json
    │   └─ offerings.json
    │   └─ perks.json
    ├─ pages
    │   ├─ Survivor.jsx
    │   ├─ Killer.jsx
    │   └─ Main.jsx
    ├─ utils
    │   └─ getImageURL.js
    ├─ App.js
    ├─ App.css
    └─ index.js
```

