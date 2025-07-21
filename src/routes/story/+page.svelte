<script>
  import MainSection from "$lib/Generator/mainSection.svelte";
  import ShowRoomSection from "$lib/showRoom/showRoomSection.svelte";
  import { Circle2 } from 'svelte-loading-spinners';

</script>

<script module>
  let titleData = $state("")
  let loading = $state(false)
  let chatBotText =  $state("")
  let loaddingBotState = $state(false)
  export function handleTitle(title, loadState){
    titleData = title
    loading = loadState

  }

  export function handleChatBot(text, loadingState){
    chatBotText = text
    loaddingBotState = loadingState
  }

  const handleBackClick = () => {
    loading = false
  }
</script>


<main>

    <div class="mainComponent">
        
  
    
    <div class="boxLeft">
      {#if loading}
       <div class="containerLeft">
        <div class="DreamPageHeader">
            <div class="pageTitleBox">
              {titleData}
            </div>

             <div class="pageBackBox">
              <a href="/" class="goBackBtn" on:click={handleBackClick}>
              <img src="leftA.png" alt="leftArrowIcon" class="leftArrowIcon"></a>
             </div>
        </div>
        
            <ShowRoomSection/>
        
       </div>
       {:else}
       {#if chatBotText != ""}
       <div class="dreamDefaultPage">
         {chatBotText}
       </div>

       {:else}
       <div class="dreamDefaultPage">
        Please enter your dream
      </div>

       {/if}
     {/if}
    </div>
    <div class="boxRight">
       <div class="containerRight">
         <div class="dreamGeneratorHeder">
           Dream Generator 
         </div>
         
            <MainSection/>
         
       </div>
    </div>
   
    </div>

  
    


</main>


<style>
    main{
  background: #050505;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;   
  justify-content: center; 
  /* padding: 0.4%; */
  box-sizing: border-box;  
}

.mainComponent {
  background-color: #07042173;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
}

.dreamDefaultPage{
  width: 100%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgba(21, 23, 21, 0.459);
  border: 1px solid rgba(255, 255, 255, 0.405);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  text-align: center;
}



.boxLeft{
  width: 70%;
  height: 100%;
  /* background-color: pink; */
  padding: 0.5%;
}

.boxRight{
  width: 30%;
  height: 100%;
  /* background-color: green; */
  padding: 0.5%;
}

.containerLeft{
  width: 100%;
  height: 100%;
  /* background-color: orange; */
  background-color: rgba(21, 23, 21, 0.459);
  border: 1px solid rgba(255, 255, 255, 0.405);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
}

.containerRight{
  width: 100%;
  height: 100%;
  background-color: rgba(21, 23, 21, 0.459);
  border: 1px solid rgba(255, 255, 255, 0.405);
  border-radius: 7px;
}

.dreamGeneratorHeder{
  height: 6%;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.405);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-family: system-ui;
}



.DreamPageHeader{
  height: 6%;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.405);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
  font-family: system-ui;
}

.pageTitleBox{
  width: 25%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  align-items: center;
  padding-left: 1%;
  font-size: 17px;
  font-family: system-ui;
  border-right: 1px solid rgba(255, 255, 255, 0.405);
  display: flex;
  align-items: center;
  justify-content: center;
}


.pageBackBox{
  width: 5%;
  height: 100%;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid rgba(255, 255, 255, 0.405);
  
  /* margin-right: 1%; */
}

.goBackBtn{
  text-decoration: none;
  /* background-color: #fff; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

}


.goBackBtn:hover{
  background-color: rgba(135, 207, 235, 0.227);
}

.leftArrowIcon{
  height: 50%;
  width: 40%;
}

</style>