var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {     
    if (this.readyState === 4) {
        var sky = document.getElementById('sky');
        var temp = document.getElementById('temp');
        var rain = document.getElementById('rain');

        var parsed = JSON.parse(this.responseText);    
 
        for (i in parsed.response.body.items.item) {
            var cur = parsed.response.body.items.item[i];    
            if(cur.category == "SKY"){
                switch(cur.fcstValue){
                    case "1":
                        sky.innerHTML = "맑음";
                        break;
                    case "3":
                        sky.innerHTML = "구름많음";
                        break;
                    case "4":
                        sky.innerHTML = "흐림";
                        break;
                }
            }
            else if(cur.category =="PTY"){
                switch(cur.fcstValue){      //이거 나중에 아이콘으로 바꾸기
                    case "0":
                        rain.innerHTML="없음";
                        break;
                    case "1":
                    case "5":
                    case "6":
                        rain.innerHTML="비";
                        break;
                    case "2":
                        rain.innerHTML="비/눈";
                        break;               
                    case "3":
                    case "7":
                        rain.innerHTML="눈";
                        break;            
                    case "4":
                        rain.innerHTML="소나기";
                        break;                                                                                             
                }
            }
            else if(cur.category == "TMP"){
                temp.innerHTML = cur.fcstValue + "℃"
            }

            //여기아래 id = bookName인 input에다가 맑음,눈,비 같은걸 넣어주는 코드를 추가해주자
            var bookName = document.getElementById("bookName");
            switch(rain.textContent){
                case "없음":
                    switch(sky.textContent){
                        case "맑음":
                            var index_temp = temp.textContent.substring(0,2);   //'C부분 자르고 숫자만 끄집어오기
                            if(index_temp < 10){        //parseInt 안해도 알아서 형변환 되는지 잘 되길래 그냥 함
                                bookName.value = "추운 날";
                            }
                            else if(index_temp >30){
                                bookName.value = "더운 날";
                            }
                            else{
                                bookName.value = "맑은 날";
                            }
                            break;
                        case "구름많음":
                        case "흐림":
                            bookName.value = "흐린 날";
                            break;
                    }
                    break;
                case "비":
                case "비/눈":
                case "소나기":
                    bookName.value = "비오는 날";
                    break;
                case "눈":
                    bookName.value = "눈오는 날";
                    break;
            }
        }
    }
});

function displayResponse(){

    var today = new Date();


    var url = "http://localhost:3000/weather"
    //현재날짜를 자동으로 받자.
    var base_date = today.toISOString().substring(0,10).replace(/-/g,'');       //YYYYMMDD로 변환
    var hh = today.getHours();
    hh = hh > 10 ? hh : "0" + hh;
    var mm = today.getMinutes() > 10 ? today.getMinutes() : "0" + today.getMinutes();
    var base_time;
    //단기예보 조회 가능 시간 : 02:10, 05:10, 08:10, 11:10, 14:10, 17:10, 20:10, 23:10
    if( 2 < hh  &&  hh <= 5){
        base_time = "0200";
    }
    else if( 5< hh && hh <= 8){
        base_time = "0500";
    }
    else if( 8< hh && hh <= 11){
        base_time = "0800";
    }
    else if( 11< hh && hh <= 14){
        base_time = "1100";
    }
    else if( 14< hh && hh <= 17){
        base_time = "1400";
    }
    else if( 17< hh && hh <= 20){
        base_time = "1700";
    }
    else if( 20< hh && hh <= 23){
        base_time = "2000";
    }
    else if( 23< hh && hh <= 0){
        base_time = "2300";
    }
    else{
        base_time = "2300";
        var yesterday = new Date(today.setDate(today.getDate() - 1));       //어제 날짜 기준으로 보기
        yesterday = yesterday.toISOString().substring(0,10).replace(/-/g,'');
    }




    //단기 예보는 특정 시간대에만 조회가 가능해서 이렇게 짬.
    //base_time = base_time < 10 ? '0' + base_time : base_time;
    //base_time = base_time + '00';                                               //HHMM형식
    var nx = document.getElementsByClassName("hide")[0].value;
    var ny = document.getElementsByClassName("hide")[1].value;

    var dataType = "json";
    

    url = url + "?" + "base_date="+base_date +"&base_time="+base_time +"&nx="+nx +"&ny="+ny +"&dataType="+dataType 
    console.log(url);
    xhr.open("GET", url);
    xhr.send();

}