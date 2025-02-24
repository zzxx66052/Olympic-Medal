# 2024 Paris Olympics

## 프로젝트 설명
2024 파리 올림픽을 기념하기 위한 국가 메달 기록 웹 페이지이다.
사용자는 국가를 기준으로 메달의 수를 추가, 수정 및 삭제할 수 있으며, 메달 수에 따라 정렬할 수 있습니다.

## 기능
-국가 추가(Create) : 국가 이름과 메달 수 (금, 은, 동)을 입력하여 국가를 추가합니다. 중복 국가를 추가할 경우 경고 메세지를 표시하고 국가를 입력하지 않고 데이터를 입력할경우 국가를 입력하라고 표시를 해줍니다.
-데이터 읽기(Read) : state 저장소를 이용해 데이터를 저장하고 해당 데이터 값을 jsx구역에서 읽어와서 페이지에 나타나도록 해줍니다.
-국가 수정(Update) : 존재하는 국가의 메달 수를 수정합니다.존재하지 않는 국가를 수정하고자 하면 경고 메세지를 띄웁니다.
-국가 삭저(Delete) : 선택한 국가를 기준으로 해당 데이터값을 삭제합니다.

## 컴포넌트 별 분리
-App.jsx : 메인이 되는 jsx입니다. 각 데이터를 state를 통해 저장을 하고 필요한 기능들을 구현한 함수를 가지고 있으며 jsx부분에서 해당 함수를 호출하는 기능을 합니다.

-MedalForm.jsx : 폼 데이터를 담은 jsx입니다. 폼에서 사용하는 input 데이터를 가지고 있으며 부모인 app.jsx로 데이터값을 전달해주는 자식 jsx입니다.

-MedalTable.jsx : 폼에서 입력한 데이터 값을 table을 통해 화면에 나타내주는 컴포넌트 입니다. 

-InputField.jsx : Form에서 사용하는 Input필드의 값이 중복적으로 사용이 되기에 재사용성을 위해 Input태그를 컴포넌트로 묶어서 App.jsx에 불러오게했습니다.