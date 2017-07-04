  	function loadballObjFile(url)
		{
		    var req = new XMLHttpRequest();
		    req.onreadystatechange = function () { processBallLoadObj(req) };
		    req.open("GET", url, true);
		    req.responseType = "text";
		    req.send(null);
		}
		
		function createBall(objDataIn)
		{
		   if(shaderProgArray[0])
		   {
		      //创建绘制用的物体
          ball=new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[0]); 
		   }
		   else
		   {
		      setTimeout(function(){createBall(objDataIn);},10); //定时调用createBall（）方法，只调用一次 
		   }
		}
	
		function processBallLoadObj(req)
		{
		    if (req.readyState == 4) 
		    {
		        var objStr = req.responseText;	       
		        var dataTemp=fromObjStrToObjectData(objStr);	
		        createBall(dataTemp);                     
		    }
		} 
		//加载地板模型
		function loaddbObjFile(url)
		{
		    var req = new XMLHttpRequest();
		    req.onreadystatechange = function () { processrectLoadObj(req) };
		    req.open("GET", url, true);
		    req.responseType = "text";
		    req.send(null);
		}
		
		function createrect(objDataIn)
		{
		   if(shaderProgArray[0])
		   {
		      //创建绘制用的物体
          rectdb =new ObjObject(gl,objDataIn.vertices,objDataIn.normals,objDataIn.texcoords,shaderProgArray[0]); 
		   }
		   else
		   {
		      setTimeout(function(){createrect(objDataIn);},10); //定时调用createBall（）方法，只调用一次 
		   }
		}
		
		function processrectLoadObj(req)
		{
		    if (req.readyState == 4) 
		    {
		        var objStr = req.responseText;	       
		        var dataTemp=fromObjStrToObjectData(objStr);	
		        createrect(dataTemp);                     
		    }
		} 