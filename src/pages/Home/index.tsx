import Content from 'components/molecules/Content';
import Feed from 'components/molecules/Feed';
import Header from 'components/molecules/Header';
import * as React from 'react';

const Home: React.FC = () => {
  return (
    <Content>
      <Header />
      <Feed />
    </Content>
  );
};

export default Home;
