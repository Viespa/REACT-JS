const techReact = (params) => (
  <div className="tech">
    <img src={`https://logo.clearbit.com/${params.url}`} />
    <span>{params.name}</span>
  </div>
);

const TECHNOLOGIES = [
  {
    url: 'reactjs.org',
    name: 'React JS',
  },
  {
    url: 'nodejs.org',
    name: 'Node JS',
  },
  {
    url: 'graphql.org',
    name: 'GraphQL',
  },
];

const techRendered = TECHNOLOGIES.map((tetchProps) => techReact(tetchProps));

ReactDOM.render(techRendered, document.getElementById('root'));
