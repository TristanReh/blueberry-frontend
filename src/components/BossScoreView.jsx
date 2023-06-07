import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/BossScoreView.css"

export function BossScoreView({bossScores, username}) {
    return (

        <div className='bossScoreGrid'>
            <h3 id='displayName'>{username}</h3>
            {bossScores ? Object.keys(bossScores).map((key) => (
                <React.Fragment key={key}>
                    <span>{key}</span>
                    <span>{bossScores[key].score}</span>
                </React.Fragment>
            )) : <span>Empty! Save your current stats to compare!</span>}
        </div>
    );
}
