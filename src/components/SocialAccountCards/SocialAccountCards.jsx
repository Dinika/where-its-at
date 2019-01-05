import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

const items = [
  {
    header: 'Google',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Dropbox',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Facebook',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'ROI: 27%',
  },
];

class SocialAccountCards extends Component {
    render() {
        return <Card.Group items={items} />
    } 
}

export default SocialAccountCards;