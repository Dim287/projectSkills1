    $(document).ready(function(){

        var genres = []
        var top1
        var top2
        var top3
        var data
        

        console.log("ready");

        var data;
    
        $.ajax({
            
            url:"imdb5000datasetcleaned.csv", 
            dataType:"text", 
            async: false,
            
            success: function(result){
                
                var JSONfile = csvJSON(result);
                
                data = JSON.parse(JSONfile);



                data.forEach(movie => {

                    //console.log(movie["genres"])

                    var moveieGenres = movie["genres"].split("|")

                    moveieGenres.forEach(genre => {

                        if(genres.includes(genre)){

                        }else{

                            genres.push(genre)
                        }
                        
                    });


                    
                });
                
            }   
        })
        
        genres.splice(genres.indexOf("Action"),1)
        genres.splice(genres.indexOf("Drama"),1)
        genres.splice(genres.indexOf("Comedy"),1)

        console.log("Edit");


        genres.forEach(element => {

            $("#more").append('<br><div id="filter'+element+'" class="moreItem">'+element+'<input value="hello" type="checkbox" class="filterCheckbox" id="'+element+'"></div>')
            
        });



        $(".filterCheckbox").on("change", function(){

            //console.log(genres)



                

        checkedBox = $(".filterCheckbox:checkbox:checked")
        for(i=0;i<checkedBox.length;i++){
            console.log(checkedBox[i].id)
        }


        })

        $("#more").hover(function(){

            $(".moreItem").css("display", "inline") 

        }, function(){

            $(".moreItem").css("display", "none")

        })

        function csvJSON(csv){

            var lines=csv.split("\n");
    
            var result = [];
    
            var headers=lines[0].split(",");
    
            for(var i=1;i<lines.length;i++){
    
                var obj = {};
                var currentline=lines[i].split(",");
    
                for(var j=0;j<headers.length;j++){
                    obj[headers[j]] = currentline[j];
                }
    
                result.push(obj);
    
            } 
            //return result; //JavaScript object
            return JSON.stringify(result); //JSON
        }

        })