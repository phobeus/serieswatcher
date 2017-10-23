import * as React from 'react';
import * as ReactDOM from 'react-dom';

type TProps = {
  seriesUrl: string | undefined;
};

export class Card extends React.Component<TProps> {
  render() {
    const { seriesUrl } = this.props;

    return (
      <div style={{ margin: '1em' }}>
        <img width='75' src={seriesUrl} />
      </div>
    );
  }
};

ReactDOM.render(<Card seriesUrl={undefined} />, document.getElementById('app'));