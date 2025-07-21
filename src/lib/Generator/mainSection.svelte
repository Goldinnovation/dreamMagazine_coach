<script lang="ts">
 import { handleshowRoomUpdate } from "$lib/showRoom/showRoomSection.svelte";
 import { handleTitle } from "../../routes/story/+page.svelte";
 import { handleChatBot } from "../../routes/story/+page.svelte";

 let enteredDreamTitle = $state("")
 let selectedDaate = $state("")
 let selectedMood =  $state("")
 let textAreaInputData  =  $state("")
 let botType  =  $state("ChatBot")
 let botState =  $state("")
//  let happyState =  $state("happy")
//  let middleState = $state("middle")
//  let sadState = $state("sad")

 const handdleGetDataFromGenerator = (data: string) => { 

  console.log('data', data);

  selectedMood = data

 }
 const handleChatBotTrigger = async() => {
  const res = await fetch('/api/videoGenerator', {
    method: "POST", 
    body: JSON.stringify({ data: textAreaInputData }),
				headers: {
					'content-type': 'application/json'
		}
  })

  
  const data= await res.json()

  console.log('response data', data.message);
  data.loading 

  if(data.message != ""){
    handleChatBot(data.message, data.loading)
  }

  


 }

 const handleSubmit = async() => { 

 
  console.log('botType', botType);
   botState = botType
  if(botState === "ChatBot"){
    console.log('trigger on chatbot', botType)
    handleChatBotTrigger()
  }else{
  
     console.log('trigger on animation', botType);
     handleTitle(enteredDreamTitle, true)
     handleshowRoomUpdate(botType, selectedMood, textAreaInputData)
  }



 }
  

</script>

<div class="mainGeneratorSection">
  <div class="ImageUploader">
    <img src="ai.png" alt="aiAtomIcon" class="aiAtomIcon" />
  </div>
  <div class="imageTextSection">
    <div class="ImageTextTitle">
      <input
        type="text"
        class="imagetitleInput"
        bind:value={enteredDreamTitle}
        placeholder="Dream Title"
      />

      <!-- <input type="date"  class="imageDateInput"
              bind:value={selectedDaate}
              
              > -->
      <select name="" bind:value={botType} id="" class="imageDateInput">
      
        <option value="ChatBot">ChatBot</option>
        <option value="Animation">Animation</option>
      </select>
    </div>

    {#if botType == "Animation"}
    <div class="imageDateNdMode">
      <div class="rangeLine">
        <div class="rangeBox">
          <div
            class="sadIconArea"
            on:click={() => handdleGetDataFromGenerator("sad")}
            style={`background-color: ${selectedMood === "sad" && "rgba(12, 12, 12, 0.422)"};
              border: ${selectedMood === "sad" ? "1px solid rgba(255, 255, 255, 0.362)" : "none"};
              border-radius: ${selectedMood === "sad" && "7px"};
            `}
          >
            <img src="sad.png" alt="sadIcon" class="sadIcon" />
          </div>
          <div
            class="openIconArea"
            style={`background-color: ${selectedMood === "middle" && "rgba(12, 12, 12, 0.422)"};
                border: ${selectedMood === "middle" ? "1px solid rgba(255, 255, 255, 0.362)" : "none"};
                border-radius: ${selectedMood === "middle" && "7px"};
              `}
            on:click={() => handdleGetDataFromGenerator("middle")}
          >
            <img src="open.png" alt="openIcon" class="openIcon" />
          </div>
          <div
            class="happyIconArea"
            style={`background-color: ${selectedMood === "happy" && "rgba(12, 12, 12, 0.422)"};
                border: ${selectedMood === "happy" ? "1px solid rgba(255, 255, 255, 0.362)" : "none"};
                border-radius: ${selectedMood === "happy" && "7px"};
              `}
            on:click={() => handdleGetDataFromGenerator("happy")}
          >
            <img src="happy.png" alt="openIcon" class="openIcon" />
          </div>
        </div>
      </div>
    </div>

    {/if}
    <div class="ImageTextArea"
    style={`height: ${botType != "Animation" && "85%"};
   `}
    >
      <textarea type="text" class="aiInputText" bind:value={textAreaInputData}
      ></textarea>
    </div>
  </div>
  <div class="generatorBtnSection">
    <a class="generateBtn" on:click={handleSubmit}>Generate</a>
  </div>
</div>

<style>
  .mainGeneratorSection {
    height: 94%;
    width: 100%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.405);
    /* color: white; */
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    /* font-size: 17px; */
    /* font-family: system-ui; */
  }

  .ImageUploader {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #fff; */
  }

  .aiAtomIcon {
    height: 54%;
    width: 40%;
    opacity: 0.6;
  }

  .imageTextSection {
    width: 100%;
    height: 50%;
    /* background-color: #b00909; */
  }

  .ImageTextTitle {
    width: 100%;
    height: 15%;
    /* background-color: #838383; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
    /* border-top: 1px solid  rgba(255, 255, 255, 0.405); */
  }

  .imagetitleInput {
    height: 80%;
    width: 60%;
    border-radius: 7px;
    /* background-color: rgba(255, 255, 255, 0.864); */
    background-color: rgba(255, 242, 242, 0.871);
    background-color: rgba(14, 14, 14, 0.255);
    /* color: rgb(1, 105, 10); */
    /* text-align: center; */
    padding-left: 2%;
    font-family: sans-serif;
    color: rgba(255, 255, 255, 0.732);
    border: 1px solid rgba(255, 255, 255, 0.53);
    font-size: 13px;
  }

  .imagetitleInput::placeholder {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.732);
  }

  .imageDateInput {
    height: 80%;
    width: 30%;
    border-radius: 7px;
    /* background-color: rgba(83, 83, 83, 0.182); */
    background-color: rgba(14, 14, 14, 0.255);
    /* color: rgb(1, 105, 10); */
    color: rgba(255, 255, 255, 0.732);
    /* text-align: center; */
    padding-left: 2%;
    font-family: sans-serif;
    font-size: 13px;
    border: 1px solid rgba(255, 255, 255, 0.53);
    /* color: white; */
  }
  .imageDateNdMode {
    width: 100%;
    height: 15%;
    /* background-color: #1a739a; */
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2%;
  }

  .rangeLine {
    height: 10%;
    width: 100%;
    background-color: rgb(5, 5, 5);
    border-radius: 50px;
    display: flex;
    /* border: 1px solid rgb(33, 33, 33); */
    border: 1px solid rgba(255, 255, 255, 0.53);
    position: relative;
  }

  .rangeBox {
    /* background-color: #fff; */
    width: 100%;
    height: 1420%;
    position: absolute;
    bottom: -650%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;
  }

  .sadIconArea {
    width: 10%;
    height: 100%;
    /* background-color: chartreuse; */
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .sadIconArea:hover {
    background-color: rgba(12, 12, 12, 0.422);
    border: 1px solid rgba(255, 255, 255, 0.362);
    border-radius: 7px;
  }

  .openIconArea {
    width: 10%;
    height: 100%;
    /* background-color: chartreuse; */
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .openIconArea:hover {
    background-color: rgba(12, 12, 12, 0.422);
    border: 1px solid rgba(255, 255, 255, 0.362);
    border-radius: 7px;
  }

  .happyIconArea {
    width: 10%;
    height: 100%;
    /* background-color: rgba(12, 12, 12, 0.422); */
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid rgba(255, 255, 255, 0.362); */
    border-radius: 7px;
    cursor: pointer;
  }

  .happyIconArea:hover {
    background-color: rgba(12, 12, 12, 0.422);
    border: 1px solid rgba(255, 255, 255, 0.362);
    border-radius: 7px;
  }

  .happyIconArea:hover {
    background-color: rgba(6, 66, 90, 0.395);
  }

  .sadIcon {
  }

  .ImageTextArea {
    width: 100%;
    height: 70%;
    /* background-color: #9a1a96; */
    padding: 2%;
  }

  .aiInputText {
    height: 100%;
    width: 100%;
    border-radius: 7px;
    background-color: rgba(14, 14, 14, 0.255);
    /* color: rgba(255, 255, 255, 0); */
    color: rgba(255, 255, 255, 0.732);
    align-items: flex-start;
    padding: 2%;
    font-size: 13px;
    resize: none;
    border: 1px solid rgba(255, 255, 255, 0.53);
  }

  .generatorBtnSection {
    width: 100%;
    height: 10%;
    /* background-color: #09b00c; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .generateBtn {
    width: 50%;
    height: 50%;
    background-color: #522bef;
    text-decoration: none;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 2px solid rgb(173, 173, 248); */
    border: 1px solid rgba(255, 255, 255, 0.405);
    color: white;
    cursor: pointer;
  }

  .generateBtn:hover {
    background-color: rgb(6, 4, 82);
  }
</style>
