<script lang="ts" module>

    let selectedDate = $state("")
    let selectedMood = $state("")
    let textData = $state("")
    export function handleshowRoomUpdate( date:any, mood:any, text:any){

        selectedDate = date
        selectedMood = mood
        textData = text 

        // console.log('data from export', data );
    }

</script>

<div class="showRoomSection">
    <div class="mainContentSection">
        <div class="animationSection">
            <img src="72vG.gif" alt="animation" class="animation">
        </div>
        <div class="textSection">
            <div class="textHeader">
                <div>
                    {selectedDate}
                </div>
                <div>
                    {selectedMood}
                </div>
            </div>
            <div class="textContent">
                {textData}
            </div>
        </div>
    </div>
    <div class="changePageSection">
         <div class="changeBtn">
            back 
         </div>
         <div class="changeBtn">
            front
         </div>
    </div>
</div>

<style>

    .showRoomSection{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* background-color: #d0111189; */
    }

    .mainContentSection{
        width: 100%;
        height: 90%;
        /* background-color: #ffffff15; */
    }

    .animationSection{
        width: 100%;
        height: 50%;
        /* background-color: rgba(255, 192, 203, 0.263); */
        /* padding: 2%; */
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .animation{
        width: 90%;
        height: 80%;
        border-radius: 7px;
        opacity: 0.4;
        position: absolute;

    }
    .textSection{
        width: 100%;
        height: 50%;
        /* text-align: center; */
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* padding: 5%; */
        /* background-color: rgba(184, 204, 190, 0.263); */
    }

    .textHeader{
        width: 90%;
        height: 15%;
        /* background-color: rgb(124, 13, 221); */
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(255, 255, 255, 0.53);
        /* padding-left: 1%; */
    }
    .textContent{
        width: 90%;
        height: 85%;
        padding-top: 2%;
        /* background-color: skyblue; */
    }
    .changePageSection{
        width: 100%;
        height: 10%;
        /* background-color: #d3585815; */
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5%;
        /* border-top: 1px solid rgba(255, 255, 255, 0.405); */
    }

    .changeBtn{
        /* background-color: aqua; */
        width: 10%;
        height: 50%;
        border-radius: 7px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgba(255, 255, 255, 0.405);
        color: white;
        cursor: pointer;
        
    }


</style>