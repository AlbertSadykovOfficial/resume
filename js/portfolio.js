function delete_portfolio(portfolio_id)
{
    let Handler = function(Request)
    {
        let response = Request.responseText;
        
        if (response == "true")
        {
            document.getElementById("portfolio_"+portfolio_id).remove();
        }
        else
        {
            alert("Не удалось удалить");
        }
       
    }
  
    request = "portfolio_id=" + portfolio_id;
    ajaxRequest("POST", location.origin + "/pages/profile/remove_portfolio/index.php", request, Handler);
}


function duplicate_portfolio(portfolio_id)
{
    let Handler = function(Request)
    {
        let response = Request.responseText;
        
        if (response == 'true')
        {
            alert("Создано");            }
        else
        {
            alert("Не удалось сделать дубликат");
        }
       
    }
  
    request = "portfolio_id=" + portfolio_id;
    ajaxRequest("POST", location.origin + "/pages/profile/duplicate_portfolio/index.php", request, Handler);
}