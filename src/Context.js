import React, { createContext, useState } from "react";
 
const StateContext = createContext();
const StateProvider = ({ children }) => {
    
      const [nwfile, setNwFile] = useState();
      const [nwpersonalDetails, setNwPersonalDetails] = useState({f_name:'', l_name:'', cnt_nmber:'', 
      email_id:'', address:'', lnkin_id:''});
      const [nwsummery, setNwSummery] = useState({summery:''});
      const [nweducation, setNwEducation] = useState([{ course:'', university:'', course_start:'', 
      course_end:'', percent:''}]);
      const [nwworkExperience, setNwWorkExperience] = useState([{ position:'', org_name:'', work_start:'',
        work_leave:'', work_summery:''}]);
      const [nwcertification, setNwCertification] = useState([{certi_title:'', org_name:'', course_start:'',
        course_end:'', course_descr:'',}]);
      const [nwhardSkill, setNwHardSkill] = useState([{ hard_skill:'', rating:''}]);
      const [nwsoftSkill, setNwSoftSkill] = useState([{ soft_skill:'', rating:'',}]);


    return (
        <StateContext.Provider value={{ nwfile, setNwFile, nwpersonalDetails, setNwPersonalDetails, 
          nwsummery, setNwSummery, nweducation, setNwEducation , nwworkExperience, setNwWorkExperience, nwcertification, setNwCertification, nwhardSkill, setNwHardSkill,nwsoftSkill, setNwSoftSkill }}>
            {children}
        </StateContext.Provider>
    );
};

export { StateContext, StateProvider };