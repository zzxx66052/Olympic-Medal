import React from 'react';

const MedalTable = ({countryList, handleDelete}) => {
    return(
        <>
            {countryList.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>국가명</th>
                            <th>금메달</th>
                            <th>은메달</th>
                            <th>동메달</th>
                            <th>액션</th>
                        </tr>
                    </thead>

                    <tbody>
                        {countryList.map((item) => (
                        <tr key={item.country}>
                            <td>{item.country}</td>
                            <td>{item.gold}</td>
                            <td>{item.silver}</td>
                            <td>{item.bronze}</td>
                            <td>

                            <button className="deleteBtn" onClick={() => handleDelete(item.country)}>
                                <span className="text">삭제</span>
                                <span className="icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 
                                3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span>
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                ) : (
                        <p>현재 추가된 국가가 없습니다!</p>
                    )
            }
        </>  
    );
};

export default MedalTable;