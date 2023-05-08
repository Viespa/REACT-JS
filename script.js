const tech = (params) => `
<div class="tech">
      <img src="https://logo.clearbit.com/${params.url}" />
      <span>${params.name}</span>
</div>`;

const techDom = (params) => {
  const div = document.createElement('div');
  div.className = 'tech';
  const img = document.createElement('img');
  img.src = `https://logo.clearbit.com/${params.url}`;
  const span = document.createElement('span');
  const text = document.createTextNode(params.name);

  div.appendChild(img);
  div.appendChild(span);
  span.appendChild(text);

  return div;
};




TECHNOLOGIES.forEach((techparams) =>
  document.body.appendChild(techDom(techparams))
);
