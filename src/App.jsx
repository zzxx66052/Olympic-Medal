import React, { useState } from 'react';
import './App.css'
import MedalForm from './componenets/MedalForm';
import MedalTable from './componenets/MedalTable';

function App() {

  // 자바스크립트 구문을 작성하는 영역
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [countryList, setCountryList] = useState([]);
  const [sortMedal, setSortMedal] = useState("gold");

  // const[inputData, setInputData] = useState({
  //   country: "",
  //   gold: 0,
  //   silver: 0,
  //   bronze: 0
  // })

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 동작을 방지

    // 중복된 국가 추가를 방지하기 위한 코드
    if(countryList.some(item => item.country === country)){
      alert("중복된 국가입니다. 새로 입력해 주세요")
      return;
    }

    // 새로운 나라 정보를 받아옴(read)
    const newCountryInfo = {country, gold:Number(gold), silver:Number(silver), bronze:Number(bronze)}
    
    //새로운 나라 정보를 countryList에 저장(Create)
    setCountryList([...countryList, newCountryInfo]) 

    // 입력 필드 초기화
    setCountry('');
    setGold('');
    setSilver('');
    setBronze('');
  };

  // 삭재버튼을 클릭했을때 데이터 값 삭제(delete)
  const handleDelete = (countryToDelete) => { 
    setCountryList(countryList.filter((item) => (item.country !== countryToDelete)));
  }

  // 업데이트 버튼을 눌렀을때 데이터 값 수정(update)
  const handleUpdate = () => {
    const findItem = countryList.find((item) => item.country === country);
    const newCountryInfo = {country, gold:Number(gold), silver:Number(silver), bronze:Number(bronze)}

    if(findItem) {
      alert("새로운 국가의 정보가 업데이트 되었습니다.");
      setCountryList(countryList.map(item =>
        item.country === country ? newCountryInfo : item
      ));  
    } else {
      alert("존재하지 않는 국가 입니다.");
    }

    setCountry('');
    setGold('');
    setSilver('');
    setBronze('');
  }

  //금메달 수에 따른 내림차순 정렬 및 총 메달수 정렬 함수
  const sortedCountryList =[...countryList].sort((a, b) => {
    const totalMedalA = a.gold + a.silver + a.bronze;
    const totalMedalB = b.gold + b.silver + b.bronze;

    if(sortMedal === "total") {
      return totalMedalB - totalMedalA; // 총 메달수에 따른 내림찿순 정렬
    } else if(sortMedal === "gold") {
      return b.gold - a.gold;
    } else if(sortMedal === "silver") {
      return b.silver - a.silver;
    } else if(sortMedal === "bronze") {
      return b.bronze - a.bronze;
    }

    return 0;
  });


  // html / css를 넣는 영역
  return (
    // form의 상단 div클래스
    <div id="root">
      <div className="container">
          {/* title이 되는 영역 */}
          <h1 className="title">2024 파리 올림픽</h1>
          <MedalForm 

            // 나라
            country={country}
            setCountry={setCountry}

            // 금메달
            gold={gold}
            setGold={setGold}

            // 은메달
            silver={silver}
            setSilver={setSilver}
            // 동메달
            bronze={bronze}
            setBronze={setBronze}
            
            handleSubmit={handleSubmit} //추가하기 버튼
            handleUpdate={handleUpdate} //업데이트 버튼
          />

          <div className="sortDiv">
            <label>정렬 기준 : </label>
            <select className="selectMedal" value={sortMedal} onChange={(e) => setSortMedal(e.target.value)}>
              <option value="gold">금메달 수 정렬</option>
              <option value="silver">은메달 수 정렬</option>
              <option value="bronze">동메달 수 정렬</option>
              <option value="total">총 메달 수 정렬</option>
            </select>
          </div>

          <MedalTable countryList={sortedCountryList} handleDelete={handleDelete}/>
      </div>
    </div>
  );
}

export default App;
