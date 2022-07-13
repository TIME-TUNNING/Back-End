const dateService = require("../User/dateService");
const {response, errResponse} = require("../../../config/response");


exports.postDate=async function(req, res) {

    /*Body: year, month, day*/
    const{year, month, day} = reqbody;

    if(!year)
        return res.send(response(baseResponse.DATESELECTION_YEAR_EMPTY));

    if(year.length!=4)
        return res.send(response(baseResponse.DATESELECTION_YEAR_LENGTH));
    

    if(!month)
        return res.send(response(baseResponse.DATESELECTION_MONTH_EMPTY));

    if(month.length!=2)
        return res.send(response(baseResponse.DATESELECTION_MONTH_LENGTH));
    

    if(!day)
        return res.send(response(baseResponse.DATESELECTION_DAY_EMPTY));

    if(day.length!=2)
        return res.send(response(baseResponse.DATESELECTION_DAY_LENGTH));


    const dateSelectionResponse = await dateService.selectDay(
        year,
        month,
        day
    );
    
    return res.send(dateSelectionResponse);
};