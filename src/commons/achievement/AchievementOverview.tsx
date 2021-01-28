import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AchievementContext } from 'src/features/achievement/AchievementConstants';

import AchievementLevel from './overview/AchievementLevel';

type AchievementOverviewProps = {
  name: string;
  studio: string;
};

function AchievementOverview(props: AchievementOverviewProps) {
  const { name, studio } = props;

  const inferencer = useContext(AchievementContext);
  const studentXp = inferencer.getTotalXp();

  const history = useHistory();

  return (
    <div className="achievement-overview">
      <AchievementLevel studentXp={studentXp} />
      <h3>{name}</h3>
      <h3>{studio}</h3>
      <button onClick={() => history.push('/achievement/control')}>Achievement Control</button>
    </div>
  );
}

export default AchievementOverview;
