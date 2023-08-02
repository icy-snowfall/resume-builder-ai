import React, { createContext, useState } from "react";
 
const StateContext = createContext();
const StateProvider = ({ children }) => {
    const [nwExstngRole, setNwExstngRole] = useState([{ roles: "" }]);
    const [nwBonusPoint, setNwBonusPoint] = useState([{b_point : ''}]);
    const [nwQuaRequ, setNwQuaRequ] = useState([{q_n_R : ''}]);
    const [nwCity, setNwCity] = useState({ location: [] });
    const [nwPositionData , setNwPositionData] = useState({
        position:'',
        sub_position:'',
        position_role:'',
        you_work_closely :''
      })

    return (
        <StateContext.Provider value={{ nwExstngRole, setNwExstngRole, nwBonusPoint, setNwBonusPoint, 
          nwQuaRequ, setNwQuaRequ,nwCity, setNwCity, nwPositionData , setNwPositionData }}>
            {children}
        </StateContext.Provider>
    );
};

export { StateContext, StateProvider };