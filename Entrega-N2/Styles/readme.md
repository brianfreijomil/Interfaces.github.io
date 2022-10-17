*,*:after, *:before{
    margin: 0; 
      padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing:  border-box;
    box-sizing: border-box;
  } 

  #loading-content{
    background-color: #aaa;
    height: 100%;
    width: 100%;
    position: fixed;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    z-index: 10000;
  }
  
   #loading{
    border: 15px solid #ccc;
    border-top-color: yellow;
    border-top-style: groove;
    height: 100px;
    width: 100px;
    border-radius: 100%;
  
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    -webkit-animation:  efecto-load 1.5s linear infinite;
    -o-animation:  efecto-load 1.5s linear infinite;
    animation:  efecto-load 1.5s linear infinite;
   }
  
   #Progress_Status {
    width: 20%;
    background-color: #ddd;
    position: absolute; left: 600px; bottom:240px;
  }
  
  :root{
    --fill-size:0%;
  }
    
  #barra-progreso{
    position: relative;
    width: 300px;
    height: 20px;
    background-color: #ddd;
    overflow: hidden;
  }
  
  #barra-progreso::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: yellow;
    transform: translate(-100%);
    animation: llenar-barra 4.8s ease forwards;
  }
  
  @keyframes llenar-barra {
      to{
          transform: translateX(var(--fill-size));
      }
  }
  
  
   @keyframes efecto-load{
      from{ transform: rotate(0deg);}
      to { transform: rotate(360deg) ;}
   }