import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SurveyForm = () => {
    const navigate = useNavigate (); 
    const [ServeyInfo, setServeyInfo] = useState

    {
        "element_id": "",
        "type": "question",
        "question": {
          "question_text": "Which of these of indoor activities do you enjoy? ",
          "description_text": "You can select multiple options.",
          "type": "choice_list",
          "choice_list": {
            "choices": [
              {g
                  "choice_id": 1745870,
                  "label": "Shopping Mall" 
              },
              {
                  "choice_id": 1745871,
                  "label": "Bars & Restaurants"
              },
              {
                  "choice_id": "",
                  "label": "Movies & Entertainment"
              },
              {
                  "choice_id": "",
                  "label": "Arts & Crafts "
              },
              {
                  "choice_id": 0,
                  "label": "Other"
              }
            ],
            "settings": {
              "allows_multiple_choices": true,
              "min_number_of_choices": null,
              "max_number_of_choices": null
            }
          },
          "settings": {
            "is_required": true
          }
        }
      

}
}


export default SurveyForm;