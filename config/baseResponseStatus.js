module.exports ={

    //Success
    SUCCESS : { "isSuccess": true, "code": 1000, "message":"성공" },

    //Request error
    DATESELECTION_YEAR_EMPTY: { "isSuccess": false, "code": 2001, "message":"년도를 입력해주세요." },
    DATESELECTION_YEAR_LENGTH: { "isSuccess": false, "code": 2002, "message":"년도는 4자리로 입력해주세요." },

    DATESELECTION_MONTH_EMPTY: { "isSuccess": false, "code": 2003, "message":"월을 입력해주세요." },
    DATESELECTION_MONTH_LENGTH: { "isSuccess": false, "code": 2004, "message":"월은 2자리로 입력해주세요" },

    DATESELECTION_DAY_EMPTY: { "isSuccess": false, "code": 2005, "message":"일을 입력해주세요." },
    DATESELECTION_DAY_LENGTH: { "isSuccess": false, "code": 2006, "message":"일은 2자리로 입력해주세요" },//날짜 입력 오류
}