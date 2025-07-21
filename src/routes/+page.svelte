

<script>


const handleVideoTrigger = async() => { 

  const res = await fetch('/api/videoGenerator', {
    method: "POST", 
    // body: JSON.stringify({ data: "Hallo From Frontend" }),
				headers: {
					'content-type': 'application/json'
		}
  })
}
  
  




</script>


<main>

    <div class="mainComponent">
     

        <div class="gifBackground">
          <img src="back.gif" alt="gifbackground" class="gifBackIcon">
        </div>

        <div class="AiDreamDiary">
          <div class="diaryTitle">
            Welcome to the AI Dream Diary
          </div>
          <div class="diaryBtn">
            <a   class="storyBtn" href="/story">Enter</a>
          </div>
         
          
        </div>
        
        <!-- <button class="storyBtn"  href="/story" on:click={handleVideoTrigger}> -->
     
          <!-- change to another Websites -->
            <!-- <a   class="storyBtn" href="/story">Enter</a> -->
        <!-- </button> -->
    </div>

</main>


<style>
main{
  background: #aba2a2;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;   
  justify-content: center; 
  /* padding: 0.4%; */
  box-sizing: border-box;  
}

.mainComponent {
  background-color: #1b1b1b;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  
}
.gifBackground{
  position: absolute;
}

.gifBackIcon{
  width: 1000vh;
  height: 100vh;
}

.AiDreamDiary{
  position: relative;
  /* background-color: pink; */
  width: 50%;
  height: 50%;
  text-align: center;
}

.diaryTitle{
  /* background-color: green; */
  height: 50%;
  width: 100%;
  font-size: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(0, 0, 0); 
  font-weight: bold;
  /* box-shadow: 0.2px 0.1px   white; */
}


.diaryBtn{
  /* background-color: rgb(85, 255, 0); */
  height: 50%;
  width: 100%;
  /* font-size: 70px; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.storyBtn{
    text-decoration: none;
    background-color: #1c1c1c84;
    color: rgb(255, 255, 255);
    width: 30%;
    height: 25%;
    border-radius: 7px;
    cursor: pointer;
    box-shadow: 0.2px 0.1px   white;
    font-family: system-ui;
    display: flex;
    justify-content: center;
    align-items: center;  
    position: relative;
    border: 1px solid rgba(68, 168, 255, 0.74) ;
    font-size: 20px;

  

    
}

.storyBtn:hover{
  background-color: rgba(68, 168, 255, 0.74) ;
  border: 1px solid rgba(0, 0, 0, 0.74) ;

}


    
</style>