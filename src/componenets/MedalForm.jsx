import React from 'react';
import InputField from './InputField';

const CountryForm = ({ country, setCountry, gold, setGold, silver, setSilver,
     bronze, setBronze, handleSubmit, handleUpdate }) => {
        return (
                <form onSubmit={handleSubmit} className="formGroup">
                        <InputField
                            label = "국가명"
                            type = "text"
                            value={country}
                            placeholder="국가를 입력하세요"
                            onChange={(e) => setCountry(e.target.value)}
                        />

                        <InputField 
                            label = "금메달"
                            type = "number"
                            value={gold}
                            onChange={(e) => setGold(e.target.value)}
                        />

                        <InputField 
                            label = "은메달"
                            type = "number"
                            value={silver}
                            onChange={(e) => setSilver(e.target.value)}
                        />

                        <InputField 
                            label = "동메달"
                            type = "number"
                            value={bronze}
                            onChange={(e) => setBronze(e.target.value)}
                        />
                        <div className="btnGroup">
                            <button type="submit">국가추가</button>
                            <button type="button" onClick={handleUpdate}>업데이트</button>
                        </div>
                </form>
            
        );
    };
        
export default CountryForm;