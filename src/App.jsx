import { BossScoreView } from "./components/BossScoreView";
import { Counter } from "./components/Counter"
import React, { useEffect, useState } from 'react';
import { useBossScores } from "./hooks/UseBossScores";
import "./styles/App.css"


function saveBossScoresToLocalStorage(bossScores) {
  
  const currentDate = new Date().toLocaleDateString('de-DE');
  const currentTime = new Date().toLocaleTimeString('de-DE', {timeStyle: "short"});

  
  const dataToSave = {
    date: `${currentDate} ${currentTime}`,
    scores: bossScores
  };
  localStorage.setItem('bossScores', JSON.stringify(dataToSave));
  window.location.reload();
}


function getBossScoresFromLocalStorage() {
  const savedData = localStorage.getItem('bossScores');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    return parsedData;
  }
  return null;
}

function App() {
  const counterCount = [
    {id: 1, src: "https://oldschool.runescape.wiki/images/thumb/Marrentill_detail.png/1200px-Marrentill_detail.png?a6345"}, 
    {id: 2, src: "https://oldschool.runescape.wiki/images/thumb/Oak_bird_house_detail.png/1200px-Oak_bird_house_detail.png?5468f"}, 
    {id: 3, src: "https://oldschool.runescape.wiki/images/thumb/Seaweed_detail.png/640px-Seaweed_detail.png?caadc"}, 
    {id: 4, src: "https://runenation.org/media/com_easysocial/photos/1026/1370/b5db2f33148a1195906d055fd589fd3a_large.png"}
  ];
  
  const [username, setUsername] = useState("");
  const bossScores = useBossScores(username);
  const [localBossScores, setLocalBossScores] = useState({});

  useEffect(() => {
    const path = window.location.pathname;
    setUsername(path.substring(1));

    const savedBossScores = getBossScoresFromLocalStorage();
    if (savedBossScores) {
      setLocalBossScores(savedBossScores);
    }
  }, [])

  const handleSaveStats = () => {
    saveBossScoresToLocalStorage(bossScores);
  };

  return (
    <div className="App">
      <h1 id="app-title">Blueberry Challeges</h1>
      <div className="counters">
        {
          counterCount.map((c) => {
            return <Counter id={c.id} imgSrc={c.src}/>
          })
        }
      </div>
      <div className="bossScoreViews">
        <BossScoreView bossScores={bossScores} username={username} />
        <button onClick={handleSaveStats}>Save stats</button>
        <BossScoreView bossScores={localBossScores.scores} username={localBossScores.date} />
      </div>
      <div className="items">
        <img src="https://oldschool.runescape.wiki/images/thumb/Uncharged_trident_detail.png/1200px-Uncharged_trident_detail.png?c0ec2" />
        <img src="data:image/jpeg;base64,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" />
        <img src="https://oldschool.runescape.wiki/images/thumb/Infinity_boots_detail.png/1200px-Infinity_boots_detail.png?b68c7" />
        <img src="https://oldschool.runescape.wiki/images/thumb/Guthan%27s_platebody_detail.png/800px-Guthan%27s_platebody_detail.png?7ee78" />
      </div>
    </div>
  );
}

export default App;
